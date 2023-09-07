import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
    Text,
    Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { login, 
    // eslint-disable-next-line ts
    onLogin,
    onRegister,

    } from "../context/AuthContext";

const logo = require("../assets/images/logo.png");

const SignInScreen = () => {


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.text}>Sign In</Text>
       <Pressable onPress={login}>
            <Text style={styles.text}>Sign In</Text>
        </Pressable>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
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
  },
});

export {
    Profile,
};
