import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Screens/Profile';
import Gallery from '../Screens/Gallery';

export default function index() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={Profile} /> 
    <Stavk.Screen name="Gallery" component={Gallery} />
  </Stack.Navigator>
  )
}