import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import MapView from "react-native-maps";
import { IconButton } from "react-native-paper";

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusDash: {
    position: "relative",
    flex: 1,
    backgroundColor: "#f43f5e",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch",
    margin: 0,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f43f5e",
    alignItems: "center",
    justifyContent: "center",
  },
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
});

export default StatusDashboard;
