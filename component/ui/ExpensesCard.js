import { Text, StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function ExpensesCard({ expenseName, cost, eid, onDelete, onLongPress }) {
  let expenseFontSize = 18;
  if (cost > 99 && cost < 1000) {
    expenseFontSize = 18;
  } else if (cost > 999 && cost < 10000) {
    expenseFontSize = 16;
  } else if (cost > 10000 && cost < 99999) {
    expenseFontSize = 14;
  } else if (cost > 99999) {
    expenseFontSize = 12;
  }
  return (
    <Pressable onLongPress={onLongPress.bind(this, eid)}>
      <View style={styles.container} key={eid}>
        <View style={styles.contentContainer}>
          <View style={styles.expenseContainer}>
            <Text style={styles.expenseText}> {expenseName} </Text>
          </View>
          <View style={styles.costContainer}>
            <Text style={[styles.costText, { fontSize: expenseFontSize }]}>
              RM{cost}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Pressable onPress={onDelete.bind(this, eid)}>
              <AntDesign name="delete" size={30} color="#433E0E" />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpensesCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: "5%",
    margin: "2%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#433E0E",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
  },
  expenseContainer: {
    flex: 5,
    justifyContent: "center",
  },
  expenseText: {
    fontSize: 18,
  },
  costContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: "3%",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#433e0e",
  },
  costText: {
    fontWeight: "700",
  },
  iconContainer: {
    flex: 1,
    padding: "2%",
    margin: "1%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#433e0e",
    alignItems: "center",
  },
});

//colors #EDEEC0 #433E0E #7C9082 #A7A284 #D0C88E
