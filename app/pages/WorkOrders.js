import React from "react";
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper';


const WorkOrders = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View>
          <View style={styles.notification}>
            <IconButton
              icon="account"
              color="#fff"
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <Text> Customer Name </Text>
            <Text>
              Address
            </Text>
          </View>
          <View style={styles.notification}>
            <IconButton
              icon="account"
              color="#fff"
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <Text> Customer Name </Text>
            <Text>
              Address
            </Text>
          </View>
          <View style={styles.notification}>
            <IconButton
              icon="account"
              color="#fff"
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <Text> Customer Name </Text>
            <Text>
              Address
            </Text>
          </View>
          <View style={styles.notification}>
            <IconButton
              icon="account"
              color="#fff"
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <Text> Customer Name </Text>
            <Text>
              Address
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
          <Text> Customer Name </Text>
          <Text>
            Address
          </Text>
        </View>
        <View style={styles.notification}>
          <IconButton
            icon="account"
            color="#fff"
            size={30}
            onPress={() => console.log("Pressed")}
          />
          <Text> Customer Name </Text>
          <Text>
            Address
          </Text>
        </View>
        <View style={styles.notification}>
          <IconButton
            icon="account"
            color="#fff"
            size={30}
            onPress={() => console.log("Pressed")}
          />
          <Text> Customer Name </Text>
          <Text>
            Address
          </Text>
        </View>
        <View style={styles.notification}>
          <IconButton
            icon="account"
            color="#fff"
            size={30}
            onPress={() => console.log("Pressed")}
          />
          <Text> Customer Name </Text>
          <Text>
            Address
          </Text>
        </View>
        <View style={styles.notification}>
          <IconButton
            icon="account"
            color="#fff"
            size={30}
            onPress={() => console.log("Pressed")}
          />
          <Text> Customer Name </Text>
          <Text>
            Address
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 5,
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
  notification: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    width: "100%",
    minHeight: 100,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
});

export default WorkOrders;