import React from "react";
// import { Link, Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

const Map = () => {
  return (
    <SafeAreaView style={styles.root}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
            Marker: {
                latitude: 37.78825,
                longitude: -122.4324,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
                }
        }}
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }}>
          <MyCustomMarkerView {...Marker} />
        </Marker>
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Map;
