import { useContext, useState } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import TitleCard from "../component/ui/TitleCard";
import InputCard from '../component/ui/InputCard';
import InputButton from '../component/ui/InputButton';
import { AntDesign } from "@expo/vector-icons";
import { BillsContext } from "../context/bill-context";

function EditUserScreen({navigation, route}){
    const editUid = route.params.editUserId;
    const usersContext = useContext(BillsContext);
    const users = usersContext.users;
    const userObjectEdit = users.filter((user) => {
      return user.uid === editUid;
    });
    const userNameEdit = (userObjectEdit.find((item) => item.uid === editUid)).name;
    console.log("editUid: "+ editUid);
    console.log("userNameEdit: ", userNameEdit );
    const [name, setName] = useState(userNameEdit);
    

    function nameEditInputHandler(enteredName) {
      console.log("Name: " + enteredName);
      setName(enteredName);
    }

    function editUser() {
      usersContext.editUser(editUid, name);
      console.log("ID: " + editUid);
      console.log("Name: " + name);
      console.log("Users: ", usersContext.users);
      navigation.navigate("Main");
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
              <AntDesign name="edit" size={50} color="#433E0E" />
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
