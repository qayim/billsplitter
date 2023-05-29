import { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList, Alert } from "react-native";
import { BillsContext } from "../context/bill-context";
import ExpensesCard from "../component/ui/ExpensesCard";
import TitleCardIcon from "../component/ui/TitleCardIcon";
import SharedExpensesCard from "../component/ui/SharedExpensesCard";

function SharedExpensesScreen({ navigation }) {
    const [totalCost, setTotalCost] = useState(0);
    const sharedExpensesContext = useContext(BillsContext);
    const sharedExpenses = sharedExpensesContext.sharedExpenses;

    useEffect(() => {
      if (sharedExpenses === undefined) {
        console.log("Shared expenses is empty: ", sharedExpenses);
      } else {
        setTotalCost(sharedExpenses.reduce((acc, cur) => acc + +cur.cost, 0));
        console.log("Total shared cost: " + +totalCost);
      }
    }, [sharedExpenses]);

    function onDeleteSharedExpenseHandler(eid) {
      console.log("delete eid: " + eid);
      Alert.alert(
        "Delete shared expense with EID of " + eid,
        "Are you sure you want to delete this expense?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel delete shared expense: " + eid),
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              console.log("Delete expense: " + eid);
              sharedExpensesContext.deleteSharedExpense(eid);
            },
            style: "cancel",
          },
        ]
      );
    }

    function onEditSharedExpenseHandler(eid) {
      console.log("Edit eid: " + eid);
      navigation.navigate("EditSharedExpenses", {
        editExpenseId: eid,
      });
    }

    function resetAll() {
      sharedExpensesContext.reset();
    }

    useEffect(() => {
      if (sharedExpensesContext.users.length <= 0) {
        navigation.navigate("Main");
      }
    }, [resetAll]);

    function infoHandler() {
      navigation.navigate("Info");
    }

  return (
    <View style={styles.container}>
      <TitleCardIcon
        title={"Shared Expenses"}
        icon={"cash-plus"}
        page={() => navigation.navigate("AddSharedExpenses")}
        info={infoHandler}
        onLongPress={resetAll}
      />
      <SharedExpensesCard sharedExpensesTotal={totalCost} />
      <FlatList
        data={sharedExpenses}
        renderItem={(itemData) => {
          console.log("itemData: ", itemData.item);
          return itemData.item === undefined ? (
            ""
          ) : (
            <ExpensesCard
              expenseName={itemData.item.expenseName}
              cost={itemData.item.cost.toFixed(2)}
              eid={itemData.item.eid}
              onDelete={onDeleteSharedExpenseHandler}
              onLongPress={onEditSharedExpenseHandler}
            />
          );
        }}
      />
    </View>
  );
}

export default SharedExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
