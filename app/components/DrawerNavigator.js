import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Drawer } from 'react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import SettingsScreen from '../pages/SettingsScreen';

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Dashboard} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>

    );
}

const styles = StyleSheet.create({})

export default DrawerNavigator;
