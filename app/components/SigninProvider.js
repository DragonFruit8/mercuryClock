import React, { useNavigation} from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';



function SigninProvider() {

    return (
        <SafeAreaView style={styles.formContainer}>
            <Text style={styles.header}>Login Here</Text>
                <TextInput
                    label="Email"
                    mode="outlined"
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={true}
                />  
                <TextInput
                    label="Password"
                    mode="outlined"
                    placeholder="Password"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />  
                <Button mode="contained" onPress={() => 
                        alert('Sign In Button Pressed')
                    }>
                    Sign In
        </Button>
        <Link
          onPress={() => Navigation.navigate('SignupScreen')}
        >
          <Text>Don't have an account? Sign Up</Text>
        </Link>

        </SafeAreaView>
);
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexGrow: 1,
    // flexShrink: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    padding: 15,
    gap: 15,
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
    fontSize: 24,
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
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%',
        height: '100%',
        padding: 20,
        gap: 25,
    },

});

export default SigninProvider;
