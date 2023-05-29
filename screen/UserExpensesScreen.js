import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import { BillsContext } from "../context/bill-context";
import ExpensesCard from "../component/ui/ExpensesCard";
import OverallTotalCard from "../component/ui/OverallTotalCard";
import TitleCard from "../component/ui/TitleCard";
import TitleCardIcon from "../component/ui/TitleCardIcon";

function UserExpensesScreen({ navigation, route }) {
  const [totalCost, setTotalCost] = useState(0);
  const expensesContext = useContext(BillsContext);
  const expenses = expensesContext.expenses;
  const uid = route.params.userID;
  const name = route.params.userName;
  const userExpenses = expenses.filter((expense) => {
    return expense.uid === uid;
  });

  useEffect(() => {
    console.log("User expenses contents: ", userExpenses);
  });

  useEffect(() => {
    if (userExpenses === undefined) {
      console.log("User expenses is empty: ", userExpenses);
    } else {
      setTotalCost(userExpenses.reduce((acc, cur) => acc + +cur.cost, 0));
      console.log("Total cost: " + +totalCost);
    }
  }, [userExpenses]);

  function addExpense() {
    navigation.navigate("AddExpense", { userID: uid, userName: name });
  }

  function onDeleteExpenseHandler(eid) {
    console.log("delete eid: " + eid);
    Alert.alert(
      "Delete expense with EID of " + eid,
      "Are you sure you want to delete this expense?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel delete expense: " + eid),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            console.log("Delete expense: " + eid);
            expensesContext.deleteExpense(eid);
          },
          style: "cancel",
        },
      ]
    );
  }

  function onEditExpenseHandler(eid) {
    console.log("Edit eid: " + eid);
    navigation.navigate("EditExpense", {
      editExpenseId: eid,
      editUserId: uid,
      userName: route.params.userName,
    });
  }

  function resetAll() {
    expensesContext.reset();
  }

  useEffect(()=>{
    if (expensesContext.users.length <= 0) {
      navigation.navigate("Main");
    }
  }, [resetAll]);

  function infoHandler() {
    navigation.navigate("Info");
  }

  return (
    <View style={styles.container}>
      <TitleCardIcon
        title={"User Expenses"}
        icon={"cash-plus"}
        page={addExpense}
        info={infoHandler}
        onLongPress={resetAll}
      />
      <TitleCard>{name}</TitleCard>
      <OverallTotalCard overallTotal={totalCost.toFixed(2)} />
      <FlatList
        data={userExpenses}
        renderItem={(itemData) => {
          console.log("itemData: ", itemData.item);
          return itemData.item === undefined ? (
            ""
          ) : (
            <ExpensesCard
              expenseName={itemData.item.expenseName}
              cost={itemData.item.cost.toFixed(2)}
              eid={itemData.item.eid}
              onDelete={onDeleteExpenseHandler}
              onLongPress={onEditExpenseHandler}
            />
          );
        }}
      />
    </View>
  );
}

export default UserExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
