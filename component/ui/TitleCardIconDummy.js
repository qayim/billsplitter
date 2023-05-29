import { Text, StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "./Button";
import Colors from "../../constants/colors";

function TitleCardIconDummy({ title, icon }, navigation) {
  return (
    <Button>
      <Pressable>
        <View style={styles.titleContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.iconButtonContainer}>
            <Pressable>
              <View style={styles.iconContainer}>
                <AntDesign
                  name="info"
                  size={40}
                  color={Colors.fontColorLight}
                />
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.iconContainer}>
                {icon === "adduser" ? (
                  <AntDesign
                    name={icon}
                    size={40}
                    color={Colors.fontColorLight}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name={icon}
                    size={40}
                    color={Colors.fontColorLight}
                  />
                )}
              </View>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Button>
  );
}

export default TitleCardIconDummy;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  textContainer: {
    flex: 6,
    margin: "5%",
  },
  titleText: {
    fontSize: 20,
    color: Colors.fontColorLight,
  },
  iconButtonContainer: {
    flex: 4,
    flexDirection: "row",
    alignItems: "flex-end",
    margin: "1%",
  },
  iconContainer: {
    alignItems: "center",
    margin: "5%",
    padding: "5%",
    width: "80%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.fontColorLight,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "200",
    color: Colors.fontColorLight,
  },
});
