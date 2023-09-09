import 'react-native-gesture-handler'
import Navigation from './app/Navigation'
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const Stack = createNativeStackNavigator();


export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "tomato",
      secondary: "yellow",
    },
  };

  return (
    <>
    <PaperProvider theme={theme}>
      <Navigation />
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f43f5e",
    alignItems: "center",
    justifyContent: "center",
  },
});
