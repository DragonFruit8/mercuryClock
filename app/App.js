import React from "react";
import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.code}>Hello World !! Using AppRegistry</Text>
      </View>
    </View>
  );
}

// Styles for Text and View components
const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  header: {
    padding: 20,
  },
  code: {
    fontFamily: "monospace, monospace",
    fontSize: 30,
  },
});

export default App;
