import { createContext, useState } from "react";
import {Alert} from 'react-native';

export const BillsContext = createContext({
  users: [],
  expenses: [],
  sharedExpenses: [],
  addUser: (uid, name, check) => {},
  deleteUser: (uid) => {},
  editUser: (uid, newName) => {},
  checkUser: (uid) => {},
  addExpense: (uid, eid, expenseName, cost) => {},
  deleteExpense: (eid) => {},
  editExpense: (eid, newExpenseName, newCost) => {},
  addSharedExpenses: (eid, expenseName, cost) => {},
  deleteSharedExpense: (eid) => {},
  editSharedExpense: (eid, newExpenseName, newCost) => {},
  reset: () => {},
});

function BillContextProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [sharedExpenses, setSharedExpenses] = useState([]);

    function addUser(uid, name, expense){
        setUsers((currentUsers)=> [
            ...currentUsers,
            {uid: uid, name: name, check: false}
        ]);
    }
    function deleteUser(uid){
        setUsers((currentUsers)=>currentUsers.filter((user)=> user.uid !== uid));
        setExpenses((currentExpense) =>
          currentExpense.filter((expenses) => expenses.uid !== uid)
        );
        console.log("Delete user context id:" + uid);
    }

    function editUser(uid, newName){
        const newUser = users.map((user)=> {
            if(user.uid === uid){
                return{
                    ...user,
                    name: newName,
                };
            }
            return user;
        });
        setUsers(newUser);
    }

    function checkUser(uid){
      const newUser = users.map((user)=> {
            if(user.uid === uid){
                return{
                    ...user,
                    check: !user.check,
                };
            }
            return user;
        });
        setUsers(newUser);
    }

    function addExpense(uid, eid, expenseName, cost) {
      setExpenses((currentExpense) => [
        ...currentExpense,
        { uid: uid, eid: eid, expenseName: expenseName, cost: cost },
      ]);
    }
    function deleteExpense(eid) {
      setExpenses((currentExpense) =>
        currentExpense.filter((expenses) => expenses.eid !== eid)
      );
      console.log("Delete expense context id:" + eid);
    }

    function editExpense(eid, newExpenseName, newCost) {
      const newExpense = expenses.map((expense) => {
        if (expense.eid === eid) {
          return {
            ...expense,
            expenseName: newExpenseName,
            cost: newCost,
          };
        }
        return expense;
      });
      setExpenses(newExpense);
    }

    function addSharedExpense(eid, expenseName, cost) {
      setSharedExpenses((currentSharedExpense) => [
        ...currentSharedExpense,
        { eid: eid, expenseName: expenseName, cost: cost },
      ]);
    }
    function deleteSharedExpense(eid) {
      setSharedExpenses((currentSharedExpense) =>
        currentSharedExpense.filter((sharedExpenses) => sharedExpenses.eid !== eid)
      );
      console.log("Delete shared expense context id:" + eid);
    }

    function editSharedExpense(eid, newExpenseName, newCost) {
      const newSharedExpense = sharedExpenses.map((sharedExpense) => {
        if (sharedExpense.eid === eid) {
          return {
            ...sharedExpense,
            expenseName: newExpenseName,
            cost: newCost,
          };
        }
        return sharedExpense;
      });
      setSharedExpenses(newSharedExpense);
    }
    
    function reset(){
      Alert.alert(
        "Reset",
        "Are you sure you want to reset and delete everything?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel reset"),
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              setSharedExpenses([]);
              setExpenses([]);
              setUsers([]);
            },
            style: "cancel",
          },
        ]
      );
      
    }

    const value = {
      users: users,
      expenses: expenses,
      sharedExpenses: sharedExpenses,
      addUser: addUser,
      deleteUser: deleteUser,
      editUser: editUser,
      checkUser: checkUser,
      addExpense: addExpense,
      deleteExpense: deleteExpense,
      editExpense: editExpense,
      addSharedExpense: addSharedExpense,
      deleteSharedExpense: deleteSharedExpense,
      editSharedExpense: editSharedExpense,
      reset: reset,
    };

    return(
        <BillsContext.Provider value={value}>
            {children}
        </BillsContext.Provider>
    );
}

export default BillContextProvider;
