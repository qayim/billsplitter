import { Dimensions, StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

function MediumButton({ children, active}) {
  return (
    <View style={active ? styles.containerActive : styles.container}>
      <Text style={active ? styles.buttonTextActive : styles.buttonText}>{children}</Text>
    </View>
  );
}

export default MediumButton;

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: Colors.boxBorderColor,
    backgroundColor: Colors.backgroundColor,
    margin: "1%",
    width: deviceWidth * 0.95,
    height: deviceWidth * 0.15,
  },
  containerActive: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: Colors.boxBorderColor,
    backgroundColor: Colors.boxBorderColor,
    margin: "1%",
    width: deviceWidth * 0.95,
    height: deviceWidth * 0.15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.boxBorderColor,
  },
  buttonTextActive: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.fontColorLight,
  },
});
