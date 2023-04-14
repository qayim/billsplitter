import { Text, StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function UserCard({ name, total, page, id, onDelete, onLongPress }, navigation) {
    let totalFontSize = 20;
    if(total>99 && total<1000){
        totalFontSize = 16;
    } else if(total>999 && total<10000){
        totalFontSize = 14;
    } else if(total>99999){
        totalFontSize = 12;
    }

  return (
    <Pressable onPress={page} onLongPress={onLongPress.bind(this, id)} key={id}>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}> {name}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={[styles.totalText, {fontSize: totalFontSize}]}>
            {" "}
            RM{total}{" "}
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Pressable onPress={onDelete.bind(this, id)}>
            <AntDesign name="delete" size={30} color="#433E0E" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

export default UserCard;

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
  iconContainer: {
    flex: 1,
    padding: "2%",
    margin: "1%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#433e0e",
    alignItems: "center",
  },
  nameContainer: {
    flex: 5,
  },
  nameText: {
    fontSize: 20,
  },
  totalContainer: {
    flex: 3,
    padding: "3%",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#433e0e",
  },
  totalText: {
    textAlign: "center",
    fontWeight: "700",
  },
});
