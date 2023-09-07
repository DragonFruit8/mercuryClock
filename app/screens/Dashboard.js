import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
    Text,
    Pressable,
} from "react-native";
import { Button, TextInput } from "react-native-paper";


const Dashboard = () => {


  return (
    <View style={styles.root}>
      
      <Text style={styles.text}>Welcome to Expo Router</Text> 
      <Text style={styles.text}>This is a simple example of how to use Expo Router</Text>   
      <Button 
        mode="contained"
        onPress={() => {
          console.log("Pressed"); 
        }}
      >
        Press me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
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
  },
});

export default Dashboard;
