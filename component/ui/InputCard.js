import { Text, StyleSheet, View, TextInput, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function InputCard({placeholder, handler, keyboardType}) {
    return (
      <TextInput
        placeholder={placeholder}
        alignItems="center"
        keyboardType={keyboardType}
        style={styles.input}
        onChangeText={handler}
      />
    );
  
}

export default InputCard;

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    backgroundColor: Colors.boxColor,
    borderWidth: 2,
    borderColor: Colors.boxBorderColor,
    color: Colors.fontColorDark,
    fontSize: 20,
    margin: "2%",
    padding: "5%",
    borderRadius: 20,
    width: deviceWidth * 0.95,
  },
});
