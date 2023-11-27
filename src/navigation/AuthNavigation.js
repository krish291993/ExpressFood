import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
import SigninScreen from '../screens/authScreens/SigninScreen';
import HomeScreen from '../screens/HomeScreen';


const Authstack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Authstack.Navigator>
        <Authstack.Screen 
        name="SigninWelcomeScreen"
        component={SigninWelcomeScreen}
        options={{headerShown:false}}
        />
        <Authstack.Screen 
        name="SigninScreen"
        component={SigninScreen}
        options={{headerShown:false}}
        />
         <Authstack.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown:false}}
        />
    </Authstack.Navigator>
  )
}

const styles = StyleSheet.create({})