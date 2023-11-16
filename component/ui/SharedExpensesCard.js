import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function SharedExpensesCard({sharedExpensesTotal, sharedPercentageTotal}) {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.totalText}>
            {" "}
            Shared expenses: RM{sharedExpensesTotal.toFixed(2)}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.totalText}>
            {" "}
            Percentage: {sharedPercentageTotal*100}%
          </Text>
        </View>
      </>
    );
}

export default SharedExpensesCard;

const styles = StyleSheet.create({
  container: {
    margin: "2%",
    padding: "5%",
    borderWidth: 1,
    borderColor: Colors.boxBorderColor,
    borderRadius: 20,
    alignItems: "center",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.boxBorderColor,
  },
});

