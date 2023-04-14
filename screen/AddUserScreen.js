import { useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BillsContext } from "../context/bill-context";
import InputButton from "../component/ui/InputButton";
import TitleCard from "../component/ui/TitleCard";
import InputCard from "../component/ui/InputCard";

function AddUserScreen({ navigation }) {
  const [name, setName] = useState("");
  const usersContext = useContext(BillsContext);
  const users = usersContext.users;

  const uid = Math.trunc(
    users.length +
      ((Math.floor(Math.random() * 100) +
        1) +
        (Math.floor(Math.random() * 100) + 1) *
          (Math.floor(Math.random() * 100) + 1)) /
        (Math.floor(Math.random() * 100) + 1)
  );

  function nameInputHandler(enteredName){
    console.log("Name: "+ enteredName);
    setName(enteredName);
  }

  function addUser() {
    usersContext.addUser(uid, name);
    console.log("ID: "+ uid);
    console.log("Name: " + name);
    console.log("Users: ", usersContext.users);
    navigation.navigate("Main");
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TitleCard>Add User</TitleCard>
        <View style={styles.inputContainer}>
          <InputCard placeholder={"Name"} handler={nameInputHandler} keyboardType="default"/>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={addUser}>
            <InputButton>
              <Ionicons name="add-circle-outline" size={50} color="#433E0E" />
            </InputButton>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default AddUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
    alignContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 8,
    alignItems: "center",
    width: "90%",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
});

//colors #EDEEC0 #433E0E #7C9082 #A7A284 #D0C88E
