import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";
<<<<<<< HEAD
import { Provider } from "react-native-paper";
import Clock from "react-live-clock";

=======
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, TextInput, Provider } from "react-native-paper";
import Clock from "react-live-clock";
// import MapView from "react-native-maps";
import StatusDashboard from "../components/StatusDashboard";
>>>>>>> 91b85fc2a2f7ac697659f87ea3d449b2abd3aa62

const Dashboard = () => {
  return (
    // Dashboard bottom navigation with export to app.js
    <Provider>
      <SafeAreaView style={styles.root}>
        <Clock
          element={Text}
          format={"HH:mm:A MM/DD/YYYY dddd"}
          ticking={true}
          timezone={"US/Eastern"}
          style={styles.clockText}
        />
        <Text style={styles.header}>Dashboard</Text>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  logo: {
    width: "70%",
    height: "auto",
    maxWidth: 300,
    maxHeight: 250,
    alignSelf: "flex-start",
    marginTop: 0,
    marginBottom: 0,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    padding: 10,
  },
  clock: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    gap: 20,
  },
  clockText: {
    display: "flex",
    flexDirection: "column",

    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    padding: 0,
  },
  clockButtons: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    gap: 20,
  },
});

export default Dashboard;
