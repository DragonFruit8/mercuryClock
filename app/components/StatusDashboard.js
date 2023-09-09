import React from "react";
import { View, StyleSheet, SafeAreaView, PressableOpacity } from "react-native";
import { Button } from "react-native-paper";
import MapView from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StatusDashboard = () => {
  return (
    <SafeAreaView style={styles.statusDash}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusDash: {
    position: "relative",
    flex: 1,
    backgroundColor: "#f43f5e",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "stretch",
    margin: 0,
  },

  container: {
    flex: 1,
    backgroundColor: "#f43f5e",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StatusDashboard;
