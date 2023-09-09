import React from "react";
// import { Link, Stack } from "expo-router";
import { Image, Text, View, SafeAreaView, StyleSheet } from "react-native";
import MapView from "react-native-maps";


const Map = () => {
  return (
      <SafeAreaView style={styles.root}>
          <View>
              <Text style={styles.text}>Map Screen</Text>
              <MapView
                  style={{ flex: 1 }}
                  region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                  }}
              />  
          </View>
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({});

export default Map;
