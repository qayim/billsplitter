import { Text, StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/colors";

function ExpensesCardDummy({ expenseName, cost }) {
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
    <Pressable >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.expenseContainer}>
            <Text style={styles.expenseText}>{expenseName}</Text>
          </View>
          <View style={styles.costContainer}>
            <Text style={[styles.costText, { fontSize: expenseFontSize }]}>
              RM{cost}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Pressable>
              <AntDesign name="delete" size={30} color={Colors.fontColorDark} />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpensesCardDummy;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: "5%",
    margin: "2%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.mainColor,
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
    color: Colors.fontColorDark,
  },
  costContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: "3%",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.mainColor,
  },
  costText: {
    fontWeight: "700",
    color: Colors.fontColorDark,
  },
  iconContainer: {
    flex: 1,
    padding: "2%",
    margin: "1%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.mainColor,
    alignItems: "center",
  },
});

