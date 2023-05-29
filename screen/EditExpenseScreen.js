import { useContext, useState } from "react";
import { Alert, StyleSheet, View, Pressable } from "react-native";
import TitleCard from "../component/ui/TitleCard";
import InputCard from "../component/ui/InputCard";
import InputButton from "../component/ui/InputButton";
import { AntDesign } from "@expo/vector-icons";
import { BillsContext } from "../context/bill-context";
import Colors from "../constants/colors";

function EditExpenseScreen({ navigation, route }) {
  const editEid = route.params.editExpenseId;
  const editUid = route.params.editUserId;
  const editUsername = route.params.userName;
  const expensesContext = useContext(BillsContext);
  const expenses = expensesContext.expenses;
  const expenseObjectEdit = expenses.filter((expense) => {
    return expense.eid === editEid;
  });
  const expenseNameEdit = expenseObjectEdit.find(
    (item) => item.eid === editEid
  ).expenseName;
  const costEdit = expenseObjectEdit.find((item) => item.eid === editEid).cost;
  console.log("editEid: " + editEid);
  console.log("editUid: " + editUid);
  console.log("editUsername: " + editUsername);
  console.log("expenseNameEdit: ", expenseNameEdit);
  const [expense, setExpense] = useState(expenseNameEdit);
  const [cost, setCost] = useState(costEdit);

  function expenseEditInputHandler(enteredExpense) {
    console.log("Expense: " + enteredExpense);
    setExpense(enteredExpense);
  }

  function costEditInputHandler(enteredCost) {
    console.log("Cost: " + enteredCost);
    setCost(enteredCost);
  }

  function editExpense() {
    if (editEid.length <= 0 || isNaN(editEid) || editEid === null) {
      console.log("Edit Eid empty: " + editEid);
      Alert.alert(
        "Edit EID not found",
        "Edit Expense ID is empty please go back to the main screen and start again.",
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
    } else if (expense.length <= 0) {
      console.log("Expense name empty: " + expense);
      Alert.alert(
        "Expense name empty",
        "Expense name is empty please fill up the expense name.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel pressed"),
            style: "cancel",
          },
          {
            text: "Ok",
            onPress: () => console.log("Ok pressed"),
          },
        ]
      );
    } else {
      expensesContext.editExpense(editEid, expense, +cost);
      console.log("ID: " + editEid);
      console.log("Expense: " + expense);
      console.log("Cost: " + cost);
      console.log("Expenses: ", expensesContext.expenses);
      navigation.navigate("UserExpenses", {
        userID: editUid,
        userName: editUsername,
      });
    }
  }
  return (
    <View style={styles.container}>
      <TitleCard>Edit Expense</TitleCard>
      <View style={styles.inputContainer}>
        <InputCard
          placeholder={expenseNameEdit}
          handler={expenseEditInputHandler}
          keyboardType="default"
        />
        <InputCard
          placeholder={costEdit + " "}
          handler={costEditInputHandler}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={editExpense}>
          <InputButton>
            <AntDesign name="edit" size={50} color={Colors.fontColorDark} />
          </InputButton>
        </Pressable>
      </View>
    </View>
  );
}

export default EditExpenseScreen;

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
