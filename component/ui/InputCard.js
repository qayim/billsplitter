import { Text, StyleSheet, View, TextInput, Dimensions } from 'react-native'

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
    backgroundColor: "#D0C88E",
    borderWidth: 2,
    borderColor: "#A7A284",
    color: "#433E0E",
    fontSize: 20,
    margin: "2%",
    padding: "5%",
    borderRadius: 20,
    width: deviceWidth * 0.95,
  },
});
