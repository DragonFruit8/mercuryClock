import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import App from "./App";

// import Constants from 'expo-constants';
// code for myComponent which is showing Hello World
function myComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>
        Hello World! Learning AppRegistry!!!!
      </Text>
    </View>
  );
}

// Styles for Text and view
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  fontStyle: {
    margin: 24,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

// "project" is the name of the main react-native Folder
// the second argument is an arrow function
// returning myComponent defined above
AppRegistry.registerComponent("MercuryTimeClock", () => App);

// runApplication() loads the javascript bundle and runs the app.
AppRegistry.runApplication("MercuryTimeClock", {
  rootTag: document.getElementById("root"),
});
