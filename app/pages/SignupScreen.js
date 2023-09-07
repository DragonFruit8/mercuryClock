import { Text, View } from "react-native";
import React, { Component } from "react";
import {
  Button,
  Provider as PaperProvider,
  Provider,
  TextInput,
} from "react-native-paper";

const SignupScreen = () => {
  return (
    //   PaperProvider AND SignupScreenScreen username, phone and password fields
    <Provider>
      <View>
        <Text>SignupScreen</Text>
      </View>
    </Provider>
  );
};

export default SignupScreen;
