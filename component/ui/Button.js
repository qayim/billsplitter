import { Dimensions, StyleSheet, View, Pressable } from "react-native";
import Colors from "../../constants/colors";

function Button({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Button;

const deviceHeight = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.mainColor,
    borderRadius: 20,
    margin: "1%",
    height: deviceHeight * 0.2,
  },
});

//colors #EDEEC0 #433E0E #7C9082 #A7A284 #D0C88E
