import { Stack } from "expo-router";
import React from "react";
import { AppRegistry } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignupScreen from "./app/pages/SignupScreen";
import LoginScreen from "./app/pages/LoginScreen";
import HomeScreen from "./app/pages/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

const AuthStack = createStackNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="login" component={LoginScreen} />
        <AuthStack.Screen name="signup" component={SignupScreen} />
    </AuthStack.Navigator>
);

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}

