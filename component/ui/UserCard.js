import { Text, StyleSheet, View, Pressable, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/colors";

function UserCard({ name, total, page, id, check, onDelete, onCheck, onLongPress }, navigation) {
    let totalFontSize = 20;
    let iconSize = deviceWidth*0.06;
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
        <View style={styles.checkIconContainer}>
          <Pressable onPress={onCheck.bind(this, id)}>
            <AntDesign name={check ? "checkcircle":"checkcircleo"} size={iconSize} color={Colors.fontColorDark} />
          </Pressable>
        </View>
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
          <Pressable onPress={onDelete.bind(this, id)}>
            <AntDesign name="delete" size={iconSize} color={Colors.fontColorDark} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

export default UserCard;

const deviceWidth= Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: "5%",
    paddingHorizontal: "2%",
    margin: "2%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.fontColorDark,
    alignItems: "center",
  },
  checkIconContainer: {
    flex: 1,
    height: deviceWidth * 0.12,
    width: deviceWidth * 0.2,
    justifyContent: "center",
    padding: "2%",
    margin: "1%",
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    height: deviceWidth * 0.12,
    width: deviceWidth * 0.2,
    justifyContent: "center",
    padding: "2%",
    margin: "1%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.fontColorDark,
    alignItems: "center",
  },
  nameContainer: {
    flex: 6,
  },
  nameText: {
    fontSize: 20,
    color: Colors.fontColorDark,
  },
  totalContainer: {
    flex: 4,
    padding: "2%",
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
