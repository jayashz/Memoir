
import React from 'react'
import { Stack } from 'expo-router';
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, Text } from "react-native";
import { Colors } from "../../constants/Colors";
import { useNavigation } from 'expo-router';
const PubLayout = () => {
    const navigation= useNavigation();
  return (
    <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.secondaryWhite,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerRight: () => (
              <Pressable
                onPress={() => {
                  navigation.navigate("AddMemory");
                }}
              >
                <AntDesign
                  name="pluscircle"
                  size={28}
                  color={Colors.primaryOrange}
                />
              </Pressable>
            ),
            headerTitle: "Your memories",
          }}
        />
        <Stack.Screen name="AddMemory" />
        <Stack.Screen name="Map" options={{ headerShown: false }} />
        <Stack.Screen name="MemoryDetails" />

      </Stack>
  )
}

export default PubLayout