import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

function SharedExpensesCard({sharedExpensesTotal}) {
    return (
      <View style={styles.container}>
        <Text style={styles.totalText}> Shared expenses: RM{sharedExpensesTotal.toFixed(2)}</Text>
      </View>
    );
}

export default SharedExpensesCard;

const styles = StyleSheet.create({
  container: {
    margin: "2%",
    padding: "5%",
    borderWidth: 1,
    borderColor: "#A7A284",
    borderRadius: 20,
    alignItems: "center",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#A7A284",
  },
});

//colors #EDEEC0 #433E0E #7C9082 #A7A284 #D0C88E
