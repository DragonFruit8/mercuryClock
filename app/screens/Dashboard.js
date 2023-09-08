import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
    Text,
    Pressable,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";





const Dashboard = () => {
  return (
    // Dashboard bottom navigation with export to app.js
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={styles.text}>Dashboard</Text>
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

  }
});

export default Dashboard;
