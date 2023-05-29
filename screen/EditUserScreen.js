import { useContext, useState } from "react";
import { Alert, StyleSheet, View, Pressable } from "react-native";
import TitleCard from "../component/ui/TitleCard";
import InputCard from "../component/ui/InputCard";
import InputButton from "../component/ui/InputButton";
import { AntDesign } from "@expo/vector-icons";
import { BillsContext } from "../context/bill-context";
import Colors from "../constants/colors";

function EditUserScreen({ navigation, route }) {
  const editUid = route.params.editUserId;
  const usersContext = useContext(BillsContext);
  const users = usersContext.users;
  const userObjectEdit = users.filter((user) => {
    return user.uid === editUid;
  });
  const userNameEdit = userObjectEdit.find((item) => item.uid === editUid).name;
  console.log("editUid: " + editUid);
  console.log("userNameEdit: ", userNameEdit);
  const [name, setName] = useState(userNameEdit);

  function nameEditInputHandler(enteredName) {
    console.log("Name: " + enteredName);
    setName(enteredName);
  }

  function editUser() {
    if (editUid.length <= 0 || isNaN(editUid) || editUid === null) {
      console.log("Edit UID Empty: " + editUid);
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
      usersContext.editUser(editUid, name);
      console.log("ID: " + editUid);
      console.log("Name: " + name);
      console.log("Users: ", usersContext.users);
      navigation.navigate("Main");
    }
  }

  return (
    <View style={styles.container}>
      <TitleCard>Edit User</TitleCard>
      <View style={styles.inputContainer}>
        <InputCard
          placeholder={userNameEdit}
          handler={nameEditInputHandler}
          keyboardType="default"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={editUser}>
          <InputButton>
            <AntDesign name="edit" size={50} color={Colors.fontColorDark} />
          </InputButton>
        </Pressable>
      </View>
    </View>
  );
}

export default EditUserScreen;

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
