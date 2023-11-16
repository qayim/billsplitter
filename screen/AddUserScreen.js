import { useState, useContext, useEffect } from "react";
import {
  Alert,
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
import Colors from "../constants/colors";

function AddUserScreen({ navigation }) {
  const [name, setName] = useState("");
  const usersContext = useContext(BillsContext);
  const users = usersContext.users;
  let uidCheck = [];
  let uid = 0;
  let time = new Date();

  // uid = Math.trunc(
  //   users.length +
  //     time +
  //     (Math.floor(Math.random() * 100) +
  //       1 +
  //       (Math.floor(Math.random() * 100) + 1) *
  //         (Math.floor(Math.random() * 100) + 1)) /
  //       (Math.floor(Math.random() * 100) + 1)
  // );
  uid = users.length + Math.floor(Math.random() * 100);

  // useEffect(() => {
  //   uidCheck = users.map((user) => {
  //     if (users.uid === uid) {
  //       return user.uid;
  //     }
  //   });
  // }, []);

  function nameInputHandler(enteredName) {
    console.log("Name: " + enteredName);
    setName(enteredName);
  }

  function addUser() {
    if (uid.length <= 0 || isNaN(uid) || uid === null) {
      console.log("UID Empty: " + uid + " uid.length: " + uid.length + " isNan(uid): " + isNaN(uid));
      Alert.alert(
        "UID not found",
        "User ID is empty please go back to the main screen and start again.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel pressed"),
            style: "cancel",
          },
          {
            text: "Ok",
            onPress: () => navigation.navigate("Main"),
          },
        ]
      );
    } else if (name.length <= 0 || name === null) {
      console.log("Name empty: " + name);
      Alert.alert("Name is empty", "Name is empty please enter a name.", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel",
        },
        {
          text: "Ok",
          onPress: () => console.log("Ok pressed"),
        },
      ]);
    } else {
      usersContext.addUser(uid, name);
      console.log("ID: " + uid);
      console.log("Name: " + name);
      console.log("Users: ", usersContext.users);
      navigation.navigate("Main");
    }
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TitleCard>Add User</TitleCard>
        <View style={styles.inputContainer}>
          <InputCard
            placeholder={"Name"}
            handler={nameInputHandler}
            keyboardType="default"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={addUser}>
            <InputButton>
              <Ionicons
                name="add-circle-outline"
                size={50}
                color={Colors.fontColorDark}
              />
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
    alignContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 8,
    alignItems: "center",
    width: "90%",
  },
  buttonContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

