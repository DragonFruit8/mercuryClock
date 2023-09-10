import React from "react";
// import { Link, Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
import SignupProvider from "../components/SignupProvider";

const SignupScreen = () => {
  return (
      <Provider>
        <SignupProvider />
      </Provider>
  );
};

const styles = StyleSheet.create({
});

export default SignupScreen;
