import "../global.css";
import { Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, Text } from "react-native";
import { useNavigation } from "expo-router";
import { Colors } from "../constants/Colors";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useEffect, useState } from "react";
import  {dbInit}  from "../services/database";
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

export default function Main() {
  useEffect(() => {
    dbInit().then(() => {
        SplashScreen.hideAsync();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigation = useNavigation();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}
