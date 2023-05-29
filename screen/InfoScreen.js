import { Text, StyleSheet, View, ScrollView } from "react-native";
import TitleCard from "../component/ui/TitleCard";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import UserCardDummy from "../component/ui/UserCardDummy";
import ExpensesCardDummy from "../component/ui/ExpensesCardDummy";
import SharedExpensesCard from "../component/ui/SharedExpensesCard";
import Colors from "../constants/colors";
import TitleCardIconDummy from "../component/ui/TitleCardIconDummy";

function InfoScreen() {
  return (
    <View style={styles.container}>
      <TitleCard>App Guide</TitleCard>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Welcome to FairSplit!</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>
              FairSplit is an app to split the bill with multiple people when
              spending out together. You can enter individualized expenses as
              well as shared expenses. Now you don't have to use a calculator to
              calculate complicated expenses.
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>User</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.iconContainer}>
              <AntDesign
                name="adduser"
                size={40}
                color={Colors.fontColorDark}
              />
            </View>
            <Text style={styles.iconText}>Add User</Text>
            <Text style={styles.subtitleText}>
              You can click on the add user icon which is shown above. You will
              be redirected to the add user page.
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.card}>
              <UserCardDummy name="Qayim" total={40} />
            </View>
            <Text style={styles.iconText}>Edit User</Text>
            <Text style={styles.subtitleText}>
              You can click long click on the user card you want to edit.
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.iconContainer}>
              <AntDesign name="delete" size={40} color={Colors.fontColorDark} />
            </View>
            <Text style={styles.iconText}>Delete User</Text>
            <Text style={styles.subtitleText}>
              You can click on the delete user icon which is shown above. You
              will be prompt with an alert to confirm your decision.
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Expenses</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.card}>
              <UserCardDummy name="Qayim" total={40} />
            </View>
            <Text style={styles.iconText}>User Expense Page</Text>
            <Text style={styles.subtitleText}>
              You can click the user card to be redirected to that particular
              user's individualized expenses.
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="cash-plus"
                size={40}
                color={Colors.fontColorDark}
              />
            </View>
            <Text style={styles.iconText}>Add Expense</Text>
            <Text style={styles.subtitleText}>
              You can click on the add expense icon which is shown above. You
              will be redirected to the add expense page.
            </Text>
            <Text style={styles.iconText}>Reminder</Text>
            <View style={styles.pointsContainer}>
              <Text style={[styles.subtitleText, { textAlign: "center" }]}>
                Expense and Cost form cannot be empty
              </Text>
              <Text style={[styles.subtitleText, { textAlign: "center" }]}>
                Cost cannot be a negative value
              </Text>
              <Text style={[styles.subtitleText, { textAlign: "center" }]}>
                Click the add button once you have completed the expense form
              </Text>
            </View>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.card}>
              <ExpensesCardDummy expenseName="Bread" cost={5.9} />
            </View>
            <Text style={styles.iconText}>Edit Expense</Text>
            <Text style={styles.subtitleText}>
              You can click long click on the expense card you want to edit.
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.iconContainer}>
              <AntDesign name="delete" size={40} color={Colors.fontColorDark} />
            </View>
            <Text style={styles.iconText}>Delete Expense</Text>
            <Text style={styles.subtitleText}>
              You can click on the delete expense icon which is shown above. You
              will be prompt with an alert to confirm your decision.
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Shared Expenses</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.card}>
              <SharedExpensesCard sharedExpensesTotal={350.59} />
            </View>
            <Text style={styles.iconText}>Shared Expense Page</Text>
            <Text style={styles.subtitleText}>
              You can click the shared expenses card to be redirected to the
              shared expenses page.
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="cash-plus"
                size={40}
                color={Colors.fontColorDark}
              />
            </View>
            <Text style={styles.iconText}>Add Shared Expense</Text>
            <Text style={styles.subtitleText}>
              You can click on the add expense icon which is shown above. You
              will be redirected to the add expense page
            </Text>
            <Text style={styles.iconText}>Reminder</Text>
            <View style={styles.pointsContainer}>
              <Text style={[styles.subtitleText, { textAlign: "center" }]}>
                Expense and Cost form cannot be empty
              </Text>
              <Text style={[styles.subtitleText, { textAlign: "center" }]}>
                Cost cannot be a negative value
              </Text>
              <Text style={[styles.subtitleText, { textAlign: "center" }]}>
                Click the add button once you have completed the expense form
              </Text>
            </View>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.card}>
              <ExpensesCardDummy expenseName="Tax" cost={3.98} />
            </View>
            <Text style={styles.iconText}>Edit Shared Expense</Text>
            <Text style={styles.subtitleText}>
              You can click long click on the expense card you want to edit.
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.iconContainer}>
              <AntDesign name="delete" size={40} color={Colors.fontColorDark} />
            </View>
            <Text style={styles.iconText}>Delete Shared Expense</Text>
            <Text style={styles.subtitleText}>
              You can click on the delete shared expense icon which is shown
              above. You will be prompt with an alert to confirm your decision.
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Reset All</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.card}>
              <TitleCardIconDummy title="FairSplit" icon="adduser"/>
            </View>
            <Text style={styles.iconText}>Reset and Delete All</Text>
            <Text style={styles.subtitleText}>
              You can click long click on the title card in the main page to reset and delete all inputs.
            </Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.backgroundColor,
    borderRadius: 20,
    margin: "2%",
    padding: "2%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    shadowColor: Colors.fontColorDark,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  titleContainer: {
    margin: "5%",
  },
  titleText: {
    fontSize: 20,
    color: Colors.fontColorDark,
  },
  card: {
    width: "100%",
  },
  subtitleContainer: {
    width: "100%",
    marginHorizontal: "1%",
    marginBottom: "2%",
    color: Colors.fontColorDark,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: "1%",
    padding: "5%",
    width: "25%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.fontColorDark,
  },
  iconText: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.fontColorDark,
  },
  subtitleText: {
    fontSize: 14,
    color: Colors.fontColorDark,
    margin: "2%",
  },
  pointsContainer: {
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: "2%",
    borderColor: Colors.fontColorDark,
  },
});

//colors #EDEEC0 #433E0E #7C9082 #A7A284 #D0C88E
