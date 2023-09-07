import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Button, Provider as PaperProvider, TextInput } from 'react-native-paper'

const LoginScreen = () => {
  
    return (
    //   PaperProvider AND LoginScreenScreen username, phone and password fields
        <Provider>
            <View>
                <Text>LoginScreen</Text>
                <Button mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
            </View>
        </Provider>

        
    )
}

export default LoginScreen
