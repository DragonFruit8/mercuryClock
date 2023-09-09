import React, { useState } from "react";
// import { Link, Stack } from "expo-router";
import { Image, Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Button, TextInput, Provider } from "react-native-paper";

const LoginScreen = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  return (
    <Provider>
      <SafeAreaView style={styles.root}>
        <Text style={styles.header}>Login Here</Text>
          <TextInput
            label="Email"
            type="email"
            style={styles.TextInput}
            value={data.email}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Password"
            type="password"
            style={styles.TextInput}
            value={data.password}
            onChangeText={(text) => setText(text)}
          />
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={{ marginTop: 20 }}
        >
          Login
        </Button>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
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
  TextInput: {
    width: "100%",
  },
});

export default LoginScreen;
