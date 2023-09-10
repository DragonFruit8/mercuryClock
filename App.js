import "react-native-gesture-handler";
import Navigation from "./app/Navigation";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StatusDashboard from "./app/components/StatusDashboard";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./app/pages/LoginScreen";
import SignupScreen from "./app/pages/SignupScreen";
import WorkOrders from "./app/pages/WorkOrders";
import SettingsScreen from "./app/pages/SettingsScreen";
import Dashboard from "./app/screens/Dashboard";
import Profile from "./app/pages/Profile";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

function Signup() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function Login() {
  return (
    <View style={styles.container}>
      <Text>You are logged out</Text>
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    </View>
  );
}

function Home() {
  return (
    <Stack.Navigator>
      <Text>Home</Text>
      {/* <Stack.Screen name="Home" component={Dashboard} /> */}
    </Stack.Navigator>
  );
}

function Drawer() {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name="Home" component={Dashboard} />
      <DrawerNav.Screen name="Settings" component={Profile} />
      <DrawerNav.Screen name="Logout" component={Login} />
    </DrawerNav.Navigator>
  );
}
function Tab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Dashboard"
        component={Drawer}
        options={{
          headerShown: false,
          tabBarLabel: "Dashboard",
          tabBarStyle: styles.tabStyle,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="tablet-dashboard"
              color={color}
              size={32}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Status"
        component={StatusDashboard}
        options={{
          tabBarLabel: "Status Map",
          tabBarStyle: styles.tabStyle,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-map-marker"
              color={color}
              size={32}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Work Orders"
        component={WorkOrders}
        options={{
          tabBarLabel: "Work Orders",
          tabBarStyle: styles.tabStyle,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="file-document"
              color={color}
              size={32}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarStyle: styles.tabStyle,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="dots-vertical"
              color={color}
              size={32}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer>
          {/* <Navigation /> */}
          <Stack.Navigator options={{ headerShown: false }}>
            <Stack.Screen
              name="Tab"
              component={Tab}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
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
  tabBarStyle: {
    backgroundColor: "#f43f5e",
    padding: 10,
    borderTopWidth: 0,
    borderTopColor: "#f43f5e",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

});
