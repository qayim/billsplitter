import { Dimensions, StyleSheet, View, Text } from "react-native";

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
    borderColor: "#433E0E",
    backgroundColor: "#EDEEC0",
    margin: "1%",
    width: deviceWidth * 0.95,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#EDEEC0",
  },
});

//colors #EDEEC0 #433E0E #7C9082 #A7A284 #D0C88E
