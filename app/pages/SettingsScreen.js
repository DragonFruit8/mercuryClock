import React from "react";
// import { Link, Stack } from "expo-router";
import { Image, Text, View, SafeAreaView, StyleSheet } from "react-native";



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={styles.text}>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    marginBottom: 20,
  },
});

export default HomeScreen;