import { View, Text } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
  )
}