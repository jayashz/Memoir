
import React from 'react'
import { Stack } from 'expo-router';
import { Colors } from "../../constants/Colors";
import { useColorScheme } from 'react-native';
const PubLayout = () => {
  const scheme = useColorScheme();
  return (
    <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="AddMemory" options={{headerShown:false}} />
        <Stack.Screen name="Map" options={{ headerShown: false }} />
        <Stack.Screen name="MemoryDetails" options={{headerShown:false}} />

      </Stack>
  )
}

export default PubLayout