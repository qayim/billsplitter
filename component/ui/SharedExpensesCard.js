import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function SharedExpensesCard({sharedExpensesTotal, sharedPercentageTotal}) {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContents: "center",
          alignSelf: 'center',
        }}
      >
        <View style={styles.container}>
          <Text style={styles.totalText}> Shared expenses</Text>
          <Text style={styles.totalText}>
            RM{sharedExpensesTotal.toFixed(2)}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.totalText}> Percentage</Text>
          <Text style={styles.totalText}>{sharedPercentageTotal * 100}%</Text>
        </View>
      </View>
    );
}

export default SharedExpensesCard;

const styles = StyleSheet.create({
  container: {
    margin: "2%",
    padding: "5%",
    width: "45%",
    height: "80%",
    borderWidth: 1,
    borderColor: Colors.boxBorderColor,
    borderRadius: 20,
    alignItems: "center",
  },
  totalText: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.boxBorderColor,
  },
});

