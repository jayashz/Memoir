
import React from 'react'
import { Stack } from 'expo-router';
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, Pressable, Text } from "react-native";
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
            headerTitle: ()=><Image source={require('../../assets/Memoir.png')} style={{height:55, objectFit:'contain'}} />,
            headerShadowVisible:false
          }}
        />
        <Stack.Screen name="AddMemory" options={{headerShown:false}} />
        <Stack.Screen name="Map" options={{ headerShown: false }} />
        <Stack.Screen name="MemoryDetails" options={{headerShown:false}} />

      </Stack>
  )
}

export default PubLayout