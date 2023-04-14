import { Text, StyleSheet, View, Pressable } from "react-native";
import { useState, useContext } from "react";
import { BillsContext } from "../context/bill-context";
import InputCard from "../component/ui/InputCard";
import InputButton from "../component/ui/InputButton";
import { Ionicons } from "@expo/vector-icons";
import TitleCard from "../component/ui/TitleCard";

function AddSharedExpenseScreen({ navigation, route }) {
  const [expenseName, setExpenseName] = useState("");
  const [cost, setCost] = useState(0);
  const sharedExpensesContext = useContext(BillsContext);
  const sharedExpenses = sharedExpensesContext.sharedExpenses;

  const eid = Math.trunc(
    sharedExpenses.length +
      (Math.floor(Math.random() * 100) +
        1 +
        (Math.floor(Math.random() * 100) + 1) *
          (Math.floor(Math.random() * 100) + 1)) /
        (Math.floor(Math.random() * 100) + 1)
  );

  function expenseNameInputHandler(enteredExpenseName) {
    console.log("Expense name: " + enteredExpenseName);
    setExpenseName(enteredExpenseName);
  }

  function costInputHandler(enteredCost) {
    console.log("Cost: " + enteredCost);
    setCost(enteredCost);
  }

  function addSharedExpense() {
    sharedExpensesContext.addSharedExpense(eid, expenseName, cost);
    console.log("EID: " + eid);
    console.log("Expense name: " + expenseName);
    console.log("Cost: " + cost);
    console.log("Shared Expenses: ", sharedExpenses);
    navigation.navigate("SharedExpenses");
  }

  return (
    <View style={styles.container}>
      <TitleCard>Add Expense</TitleCard>
      <View style={styles.inputContainer}>
        <InputCard
          placeholder="Expense"
          handler={expenseNameInputHandler}
          keyboardType="default"
        />
        <InputCard
          placeholder="Cost"
          handler={costInputHandler}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={addSharedExpense}>
          <InputButton>
            <Ionicons name="add-circle-outline" size={50} color="#433E0E" />
          </InputButton>
        </Pressable>
      </View>
    </View>
  );
}

export default AddSharedExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
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
