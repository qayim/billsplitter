import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Button from "./Button";
import Colors from "../../constants/colors";

function TitleCard({children}) {
    return (
        <Button>
          <View style={styles.titleContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{children}</Text>
            </View>
          </View>
        </Button>
    );
}
export default TitleCard;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 6,
    margin: "5%",
  },
  titleText: {
    fontSize: 20,
    color: Colors.fontColorLight,
    textAlign: "center",
  },
});
