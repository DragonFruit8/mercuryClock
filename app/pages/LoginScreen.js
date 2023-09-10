import React, { useState } from "react";
// import { Link, Stack } from "expo-router";
<<<<<<< HEAD
import { StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
=======
import { Image, Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Button, TextInput, Provider } from "react-native-paper";
>>>>>>> 91b85fc2a2f7ac697659f87ea3d449b2abd3aa62
import SigninProvider from "../components/SigninProvider";

const LoginScreen = () => {

  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  // });

  return (
    <Provider>
          <SigninProvider />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
