import { Text, StyleSheet, View } from 'react-native'

function OverallTotalCard({overallTotal}) {
    return (
      <View style={styles.container}>
        <Text style={styles.totalText}> Overall Total: RM{overallTotal}</Text>
      </View>
    )
}

export default OverallTotalCard;

const styles = StyleSheet.create({
  container: {
    margin: "2%",
    padding: '5%',
    backgroundColor: "#A7A284",
    borderRadius: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#EDEEC0",
  },
});

//colors #EDEEC0 #433E0E #7C9082 #A7A284 #D0C88E