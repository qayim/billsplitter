import { Text, StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/colors";

function UserCardDummy({name, total}) {
  let totalFontSize = 20;
  if (total > 99 && total < 1000) {
    totalFontSize = 16;
  } else if (total > 999 && total < 10000) {
    totalFontSize = 14;
  } else if (total > 99999) {
    totalFontSize = 12;
  }

  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={[styles.totalText, { fontSize: totalFontSize }]}>
            {" "}
            RM{total}{" "}
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Pressable>
            <AntDesign name="delete" size={30} color={Colors.fontColorDark} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

export default UserCardDummy;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: "5%",
    margin: "2%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.fontColorDark,
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    padding: "2%",
    margin: "1%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.fontColorDark,
    alignItems: "center",
  },
  nameContainer: {
    flex: 5,
  },
  nameText: {
    fontSize: 20,
    color: Colors.fontColorDark,
  },
  totalContainer: {
    flex: 3,
    padding: "3%",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.fontColorDark,
  },
  totalText: {
    textAlign: "center",
    fontWeight: "700",
    color: Colors.fontColorDark,
  },
});
