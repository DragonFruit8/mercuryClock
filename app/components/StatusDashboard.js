import React from "react";
<<<<<<< HEAD
import {
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import MapView from "react-native-maps";
import { IconButton } from "react-native-paper";
=======
import { View, StyleSheet, SafeAreaView, PressableOpacity } from "react-native";
import { Button } from "react-native-paper";
import MapView from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
>>>>>>> 91b85fc2a2f7ac697659f87ea3d449b2abd3aa62

const StatusDashboard = () => {
  return (
    <SafeAreaView style={styles.statusDash}>
      <MapView
<<<<<<< HEAD
        style={{ flex: 2 }}
=======
        style={{ flex: 1 }}
>>>>>>> 91b85fc2a2f7ac697659f87ea3d449b2abd3aa62
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
<<<<<<< HEAD
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderWidth: 2,
          borderColor: "#000",
        }}
      >
        {/* User Notifications for work help */}

        {/* User Notification */}
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          {/* User icon, title, description status */}

          <View style={styles.notification}>
            <IconButton
              icon="account"
              color="#000"
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <Text> User Name </Text>
            {/* Badge */}
            <View
              style={{
                position: "absolute",
                left: 10,
                top: 8,
                backgroundColor: "orange",
                borderRadius: 50,
                width: 15,
                height: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: "bold",
                }}
              >
                2
              </Text>
            </View>
          </View>
          <View style={styles.notification}>
            <IconButton
              icon="account"
              color="#fff"
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <Text> User Name </Text>
          </View>
          <View style={styles.notification}>
            <IconButton
              icon="account"
              color="#000"
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <Text> User Name </Text>
            <View
              style={{
                position: "absolute",
                left: 10,
                top: 8,
                backgroundColor: "red",
                borderRadius: 50,
                width: 15,
                height: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: "bold",
                }}
              >
                3
              </Text>
            </View>
          </View>
          <View style={styles.notification}>
            <IconButton
              icon="account"
              color="#000"
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <Text> User Name </Text>
          </View>
          <View style={styles.notification}>
            <IconButton
              icon="account"
              color="#000"
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <Text> User Name </Text>
          </View>
          {/* User Notification END */}
        </View>
      </ScrollView>
=======
      <View
        style={{
          flex: 1,
          flexShrink: 0,
          height: 200,
          margin: 0,
          width: "100%",
          backgroundColor: "limedarkgreen",
          zIndex: 1000,
          position: "absolute",
          borderRadius: 5,
          bottom: 0,
          backgroundColor: "white",
          borderColor: "black",
          borderWidth: 4,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderColor: "black",
            borderWidth: 2,
            borderTopStartRadius: 10,
            borderTopEndRadius: 10,
            width: "100%",
            height: "80%",
            position: "absolute",
            bottom: 0,
            flexShrink: 0,
            flexGrow: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: 20,
          }}
        >
            <Button
              mode="contained"
              onPress={() =>
                alert(`Checked notifications for broadcasted messages`)
              }
              style={{
                backgroundColor: "green",
                color: "white",
              }}
            >
              Scan
            </Button>
            <Button
              mode="contained"
              onPress={() =>
                alert(`Checked out of work order`)
              }
              style={{ backgroundColor: "teal", color: "white" }}
            >
              CheckOut
            </Button>
          
          </View>
          </View>
>>>>>>> 91b85fc2a2f7ac697659f87ea3d449b2abd3aa62
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusDash: {
    position: "relative",
    flex: 1,
    backgroundColor: "#f43f5e",
<<<<<<< HEAD
    flexDirection: "column",
=======
    flexDirection: "row",
>>>>>>> 91b85fc2a2f7ac697659f87ea3d449b2abd3aa62
    alignItems: "stretch",
    justifyContent: "stretch",
    margin: 0,
  },

  container: {
    flex: 1,
<<<<<<< HEAD
    flexDirection: "column",
=======
>>>>>>> 91b85fc2a2f7ac697659f87ea3d449b2abd3aa62
    backgroundColor: "#f43f5e",
    alignItems: "center",
    justifyContent: "center",
  },
<<<<<<< HEAD
  notification: {
    flexDirection: "row",

    justifyContent: "flex-start",
    alignItems: "center",

    padding: 5,
    width: "100%",
    minHeight: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    borderColor: "#000",
    borderWidth: 1,

  },
=======
>>>>>>> 91b85fc2a2f7ac697659f87ea3d449b2abd3aa62
});

export default StatusDashboard;
