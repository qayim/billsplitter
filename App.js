import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BillContextProvider from "./context/bill-context";
import MainScreen from "./screen/MainScreen";
import AddUserScreen from "./screen/AddUserScreen";
import EditUserScreen from "./screen/EditUserScreen";
import UserExpensesScreen from "./screen/UserExpensesScreen";
import AddExpenseScreen from "./screen/AddExpenseScreen";
import EditExpenseScreen from "./screen/EditExpenseScreen";
import SharedExpensesScreen from "./screen/SharedExpensesScreen";
import AddSharedExpenseScreen from "./screen/AddSharedExpensesScreen";
import EditSharedExpensesScreen from "./screen/EditSharedExpensesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BillContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#EDEEC0" },
          }}
        >
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ title: "Bill Splitter" }}
          />
          <Stack.Screen
            name="AddUser"
            component={AddUserScreen}
            options={{ title: "Add user" }}
          />
          <Stack.Screen
            name="EditUser"
            component={EditUserScreen}
            options={{ title: "Edit User" }}
          />
          <Stack.Screen
            name="UserExpenses"
            component={UserExpensesScreen}
            options={{ title: "User Expenses" }}
          />
          <Stack.Screen
            name="AddExpense"
            component={AddExpenseScreen}
            options={{ title: "Add expense" }}
          />
          <Stack.Screen
            name="EditExpense"
            component={EditExpenseScreen}
            options={{ title: "Edit expense" }}
          />
          <Stack.Screen
            name="SharedExpenses"
            component={SharedExpensesScreen}
            options={{ title: "Shared expense" }}
          />
          <Stack.Screen
            name="AddSharedExpenses"
            component={AddSharedExpenseScreen}
            options={{ title: "Add shared expense" }}
          />
          <Stack.Screen
            name="EditSharedExpenses"
            component={EditSharedExpensesScreen}
            options={{ title: "Edit shared expense" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BillContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
