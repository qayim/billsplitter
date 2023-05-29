import { useContext, useState } from "react";
import { Alert, StyleSheet, View, Pressable } from "react-native";
import TitleCard from "../component/ui/TitleCard";
import InputCard from "../component/ui/InputCard";
import InputButton from "../component/ui/InputButton";
import { AntDesign } from "@expo/vector-icons";
import { BillsContext } from "../context/bill-context";
import Colors from "../constants/colors";

function EditSharedExpensesScreen({ navigation, route }) {
  const editEid = route.params.editExpenseId;
  const sharedExpensesContext = useContext(BillsContext);
  const sharedExpenses = sharedExpensesContext.sharedExpenses;
  const sharedExpenseObjectEdit = sharedExpenses.filter((expense) => {
    return expense.eid === editEid;
  });
  const sharedExpenseNameEdit = sharedExpenseObjectEdit.find(
    (item) => item.eid === editEid
  ).expenseName;
  const costEdit = sharedExpenseObjectEdit.find(
    (item) => item.eid === editEid
  ).cost;
  console.log("editEid: " + editEid);
  console.log("sharedExpenseNameEdit: ", sharedExpenseNameEdit);
  const [expense, setExpense] = useState(sharedExpenseNameEdit);
  const [cost, setCost] = useState(costEdit);

  function expenseEditInputHandler(enteredExpense) {
    console.log("Expense: " + enteredExpense);
    setExpense(enteredExpense);
  }

  function costEditInputHandler(enteredCost) {
    console.log("Cost: " + enteredCost);
    setCost(enteredCost);
  }

  function editSharedExpense() {
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
      console.log("ID: " + editEid);
      console.log("Expense: " + expense);
      console.log("Cost: " + cost);
      sharedExpensesContext.editSharedExpense(editEid, expense, +cost);
      console.log("Shared Expenses: ", sharedExpensesContext.sharedExpenses);
      navigation.navigate("SharedExpenses");
    }
  }
  return (
    <View style={styles.container}>
      <TitleCard>Edit Shared Expense</TitleCard>
      <View style={styles.inputContainer}>
        <InputCard
          placeholder={sharedExpenseNameEdit}
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
        <Pressable onPress={editSharedExpense}>
          <InputButton>
            <AntDesign name="edit" size={50} color={Colors.fontColorDark} />
          </InputButton>
        </Pressable>
      </View>
    </View>
  );
}

export default EditSharedExpensesScreen;

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
