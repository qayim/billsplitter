import { useContext, useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import TitleCard from "../component/ui/TitleCard";
import InputCard from "../component/ui/InputCard";
import InputButton from "../component/ui/InputButton";
import { AntDesign } from "@expo/vector-icons";
import { BillsContext } from "../context/bill-context";

function EditExpenseScreen({navigation, route}) {
    const editEid = route.params.editExpenseId;
    const editUid = route.params.editUserId;
    const editUsername = route.params.userName;
    const expensesContext = useContext(BillsContext);
    const expenses = expensesContext.expenses;
    const expenseObjectEdit = expenses.filter((expense) => {
      return expense.eid === editEid;
    });
    const expenseNameEdit = (expenseObjectEdit.find(
      (item) => item.eid === editEid
    )).expenseName;
    const costEdit = (expenseObjectEdit.find(
      (item) => item.eid === editEid
    )).cost;
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
      expensesContext.editExpense(editEid, expense, cost);
      console.log("ID: " + editEid);
      console.log("Expense: " + expense);
      console.log("Cost: " + cost);
      console.log("Expenses: ", expensesContext.expenses);
      navigation.navigate("UserExpenses", { userID: editUid, userName: editUsername});
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
          placeholder={costEdit+" "}
          handler={costEditInputHandler}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={editExpense}>
          <InputButton>
            <AntDesign name="edit" size={50} color="#433E0E" />
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
