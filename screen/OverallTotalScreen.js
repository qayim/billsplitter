import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import TitleCard from '../component/ui/TitleCard';
import MediumButton from '../component/ui/MediumButton';

function OverallTotalScreen({navigation, route}) {
    const total = route.params.total;
    const sharedExpense = route.params.sharedExpenses;
    const percentage = route.params.percentage;
    const totalExclPercentage = route.params.totalExclPercentage;

    return (
      <View style={styles.container}>
        <TitleCard>Total Breakdown</TitleCard>
        <MediumButton>Total incl percentage: RM{total}</MediumButton>
        <MediumButton>
          Total excl percentage: RM{totalExclPercentage}{" "}
        </MediumButton>
        <MediumButton>
          Total excl shared expense: RM{totalExclPercentage - sharedExpense}{" "}
        </MediumButton>
        <MediumButton>Shared Expense: RM{sharedExpense}</MediumButton>
        <MediumButton>Percentage: {percentage * 100}%</MediumButton>
        <MediumButton>
          Percentage Amount: RM{percentage * totalExclPercentage}
        </MediumButton>
      </View>
    );
  
}

export default OverallTotalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
});
