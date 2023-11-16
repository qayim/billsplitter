import { Alert, StyleSheet, View, Pressable, Text } from "react-native";
import { useState, useContext, useEffect } from "react";
import { BillsContext } from "../context/bill-context";
import InputCard from "../component/ui/InputCard";
import InputButton from "../component/ui/InputButton";
import { Ionicons } from "@expo/vector-icons";
import TitleCard from "../component/ui/TitleCard";
import OverallTotalCard from "../component/ui/OverallTotalCard";
import ExpensesCardDummy from "../component/ui/ExpensesCardDummy";

function AddSharedExpenseScreen({ navigation, route }) {
  const [expenseName, setExpenseName] = useState("");
  const [cost, setCost] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [percentageOption, setPercentageOption] = useState(false);
  const sharedExpensesContext = useContext(BillsContext);
  const sharedExpenses = sharedExpensesContext.sharedExpenses;
  let eidCheck = [];
  let eid = 0;
  let time = new Date();

  eid = sharedExpenses.length + Math.floor(Math.random() * 100);

  useEffect(() => {
    eidCheck = sharedExpenses.map((sharedExpense) => {
      if (sharedExpense.eid === eid) {
        return sharedExpense.eid;
      }
    });
  }, []);

  function expenseNameInputHandler(enteredExpenseName) {
    console.log("Expense name: " + enteredExpenseName);
    let lowerCaseExpenseName = enteredExpenseName.toLowerCase();
    if (
      lowerCaseExpenseName.includes("tax") ||
      lowerCaseExpenseName.includes("charge") ||
      lowerCaseExpenseName.includes("%") ||
      lowerCaseExpenseName.includes("percentage") ||
      lowerCaseExpenseName.includes("percent")
    ) {
      setPercentageOption(true);
      setExpenseName(enteredExpenseName);
      console.log("have tax " + percentageOption);
    } else {
      setPercentageOption(false);
      setExpenseName(enteredExpenseName);
      console.log("no tax " + percentageOption);
    }
  }

  function costInputHandler(enteredCost) {
    console.log("Cost: " + enteredCost);
    setCost(enteredCost);
  }

  function percentageInputHandler(enteredPercentage) {
    console.log("Percentage: " + enteredPercentage);
    setPercentage(enteredPercentage);
  }

  function addSharedExpense() {
    if (eid.length <= 0 || isNaN(eid) || eid === null) {
      console.log("Eid empty: " + eid);
      Alert.alert(
        "EID not found",
        "Expense ID is empty please go back to the main screen and start again.",
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
    } else if (expenseName.length <= 0) {
      console.log("Expense name empty: " + expenseName);
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
      sharedExpensesContext.addSharedExpense(eid, expenseName, +cost, +percentage);
      console.log("EID: " + eid);
      console.log("Expense name: " + expenseName);
      console.log("Cost: " + cost);
      console.log("Percentage: " + percentage);
      console.log("Shared Expenses: ", sharedExpenses);
      navigation.navigate("SharedExpenses");
    }
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
          placeholder={percentageOption ? "%" : "Cost"}
          handler={percentageOption ? percentageInputHandler : costInputHandler}
          keyboardType="number-pad"
        />
      </View>
      {!percentageOption && 
        <View>
          <Text>You can make it into percentage by adding "%" to the shared expense name</Text>
        </View>
      }
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
