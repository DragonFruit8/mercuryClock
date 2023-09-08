import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button, Settings } from "react-native";
import { MaterialCommunityIcons, MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import SettingsScreen from "./pages/SettingsScreen";
import Dashboard from "./screens/Dashboard";

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      label
      activeColor="#ffffff"
      focusedColor="#e91e63"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Clock"
        component={LoginScreen}
        options={{
          tabBarLabel: "Clock",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clock" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Status"
        component={Dashboard}
        options={{
          tabBarLabelPosition: "center",
          tabBarLabel: "Status",
          tabBarIcon: ({ color }) => (
            <Entypo name="signal" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabelPosition: "center",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabelPosition: "center",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-settings" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
