import React, { useState } from "react";
// import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
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
