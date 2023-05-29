import { Dimensions, StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

function InputButton({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  );
}

export default InputButton;

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: Colors.mainColor,
    backgroundColor: Colors.fontColorLight,
    margin: "1%",
    width: deviceWidth * 0.95,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.fontColorLight,
  },
});


