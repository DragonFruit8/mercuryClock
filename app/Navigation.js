import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import SettingsScreen from "./pages/SettingsScreen";
import Dashboard from "./screens/Dashboard";
import Profile from "./pages/Profile";
import StatusDashboard from "./components/StatusDashboard";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "teal",
    secondary: "green",
  },
};

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="Settings" component={Profile} />
    </Drawer.Navigator>
  );
}




function TabGroup({
  navigation
}) {
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
        name="Drawer"
        component={MyDrawer}
        options={{
          tabBarLabel: "Drawer",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Status"
        component={StatusDashboard}
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
        component={Profile}
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
    <>
    <NavigationContainer>
      <TabGroup />
      </NavigationContainer>    
    </>
  );
}
