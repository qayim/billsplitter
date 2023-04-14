import { Text, StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "./Button";

function TitleCardIcon({title, icon, page}, navigation) {
    return (
      <Button>
        <View style={styles.titleContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.iconButtonContainer}>
            <Pressable onPress={page}>
              <View style={styles.iconContainer}>
                {icon === "adduser" ? (
                  <AntDesign name={icon} size={40} color="#EDEEC0" />
                ) : (
                  <MaterialCommunityIcons name={icon} size={40} color="#EDEEC0" />
                )}
              </View>
            </Pressable>
          </View>
        </View>
      </Button>
    );

}

export default TitleCardIcon;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 6,
    margin: "5%",
  },
  titleText: {
    fontSize: 20,
    color: "#EDEEC0",
  },
  iconButtonContainer: {
    flex: 4,
    alignItems: "flex-end",
    margin: "1%",
  },
  iconContainer: {
    alignItems: "center",
    margin: "5%",
    padding: "5%",
    width: "50%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#EDEEC0",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "200",
    color: "#EDEEC0",
  },
});
