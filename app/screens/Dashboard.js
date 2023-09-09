import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Pressable,
  Alert,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, TextInput, Provider } from "react-native-paper";
import Clock from 'react-live-clock';
import MapView from "react-native-maps";

const Dashboard = () => {



  return (
    // Dashboard bottom navigation with export to app.js
    <Provider>
          <MapView
            style={{
              flex: 1,
              flexGrow: 1,
              flexShrink: 0,
              width: "100%",
              height: "100%",
              flexDirection: "column",
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              gap: 20,
            }}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
      <SafeAreaView style={styles.root}>
        <Clock
          element={Text}
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"US/Eastern"}
        />
        <Text style={styles.header}>Dashboard</Text>

        {/* Time Clock Section centered AND two buttons to clock in/out */}
        <View style={styles.clock}>
          <Text style={styles.clockText}>Time Clock</Text>

          
          <View style={styles.clockButtons}>
            <Button
              mode="contained"
              onPress={() => alert(`Clocked in at ${
                new Date().toLocaleTimeString()
                }`)}
              
              style={{ marginTop: 20, backgroundColor: "green", color: "white" }}
            >
              Clock In
            </Button>
            <Button
              mode="contained"
              onPress={() => alert(`Clocked OUT at ${
                new Date().toLocaleTimeString()
              }`)}
              style={{ marginTop: 20, backgroundColor: "teal", color: "white" }} 
            >
              Clock Out
            </Button>
          </View>
        </View>
        {/* End Time Clock Section */}

        {/* Status Section */}

        {/* End Status Section */}
      </SafeAreaView>
    </Provider>
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  clock: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  clockText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  clockButtons: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
});

export default Dashboard;
