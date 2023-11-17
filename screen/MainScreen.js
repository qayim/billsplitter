import { useContext, useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import { BillsContext } from "../context/bill-context";
import OverallTotalCard from "../component/ui/OverallTotalCard";
import TitleCardIcon from "../component/ui/TitleCardIcon";
import UserCard from "../component/ui/UserCard";
import SharedExpensesCard from "../component/ui/SharedExpensesCard";

function MainScreen({ navigation }) {
  const [totalCost, setTotalCost] = useState(0);
  const [totalSharedExpense, setTotalSharedExpense] = useState(0);
  const [percentageTotal, setPercentageTotal] = useState(0);
  const userContext = useContext(BillsContext);
  const users = userContext.users;
  const usersExpenses = userContext.expenses;
  const sharedExpenses = userContext.sharedExpenses;
  let percentage = [];

  useEffect(() => {
    setTotalCost(
      ((usersExpenses.reduce((acc, cur) => acc + +cur.cost, 0) +
        totalSharedExpense) *
        (percentageTotal)) +
        usersExpenses.reduce((acc, cur) => acc + +cur.cost, 0) +
        totalSharedExpense
    );
    console.log("Total cost: " + +totalCost);
    console.log("percentageTotal: " + +percentageTotal);
    setTotalSharedExpense(
      sharedExpenses.reduce((acc, cur) => acc + +cur.cost, 0)
    );
    console.log(
      "sharedExpenses map: ",
      sharedExpenses.map((sharedExpense) => {
        return sharedExpense.percentage;
      })
    );
    percentage = sharedExpenses.map((sharedExpense) => {
      return sharedExpense.percentage;
    });
    console.log("percentage: " + percentage);
    console.log(
      "percentage array total: " +
        percentage.reduce((acc, curr) => {
          return acc + curr;
        }, 0) /
          100
    );
    setPercentageTotal(
      percentage.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / 100
    );
  }, [addUser, onSharedExpenses]);

  function addUser() {
    navigation.navigate("AddUser");
  }

  function userTotal(uid) {
    let userTotalExpense = 0;
    const userExpenses = usersExpenses.filter((expense) => {
      return expense.uid === uid;
    });
    if (userExpenses === undefined) {
      console.log("User expenses is empty: ", userExpenses);
      return userTotalExpense;
    } else {
      console.log("userExpenses: ", userExpenses);
      userTotalExpense = userExpenses.reduce((acc, cur) => {
        console.log(
          "acc: " +
            acc +
            " cur.cost: " +
            cur.cost +
            " users.length: " +
            users.length
        );
        return acc + +cur.cost;
      }, 0);
      console.log("UID: " + uid + "; Total Expense: " + userTotalExpense);
      return userTotalExpense;
    }
  }

  function onDeleteUserHandler(uid) {
    console.log("delete uid: " + uid);
    Alert.alert(
      "Delete user with UID of " + uid,
      "Are you sure you want to delete this user?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel delete user: " + uid),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            console.log("Delete user: " + uid);
            userContext.deleteUser(uid);
          },
          style: "cancel",
        },
      ]
    );
  }

  function onCheckUserHandler(uid) {
    console.log("Check uid: " + uid);
    userContext.checkUser(uid);
  }

  function onEditUserHandler(uid) {
    console.log("Edit uid: " + uid);
    navigation.navigate("EditUser", { editUserId: uid });
  }

  function onSharedExpenses() {
    console.log("shared expense page");
    navigation.navigate("SharedExpenses");
  }

  function resetAll() {
    userContext.reset();
    if (users.length <= 0) {
      navigation.navigate("Main");
    }
  }

  useEffect(() => {
    if (users.length <= 0) {
      navigation.navigate("Main");
    }
  }, [resetAll]);

  function infoHandler() {
    navigation.navigate("Info");
  }

  return (
    <View style={styles.container}>
      <TitleCardIcon
        title={"FairSplit"}
        icon={"adduser"}
        page={addUser}
        info={infoHandler}
        onLongPress={resetAll}
      />
      <OverallTotalCard overallTotal={totalCost.toFixed(2)} />
      <Pressable onPress={onSharedExpenses}>
        <SharedExpensesCard
          sharedExpensesTotal={totalSharedExpense}
          sharedPercentageTotal={percentageTotal}
        />
      </Pressable>
      <FlatList
        data={users}
        renderItem={(itemData) => {
          return (
            <UserCard
              id={itemData.item.uid}
              name={itemData.item.name}
              total={(
                (userTotal(itemData.item.uid) +
                  totalSharedExpense / users.length) *
                  percentageTotal +
                userTotal(itemData.item.uid) +
                totalSharedExpense / users.length
              ).toFixed(2)}
              check={itemData.item.check}
              onDelete={onDeleteUserHandler}
              onCheck={onCheckUserHandler}
              page={() =>
                navigation.navigate("UserExpenses", {
                  userID: itemData.item.uid,
                  userName: itemData.item.name,
                })
              }
              onLongPress={onEditUserHandler}
            />
          );
        }}
      />
    </View>
  );
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
