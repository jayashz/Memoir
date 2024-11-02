import "../global.css";
import { Tabs } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { dbInit } from "../services/database";
import {  useEffect } from "react";
import CustTabBar from "../components/ui/CustTabBar";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
const InitialLayout = () => {
  const scheme = useColorScheme();

  return (
    <Tabs tabBar={(props) => <CustTabBar {...props} />} screenOptions={{
      headerStyle:{
        backgroundColor:scheme=='dark'?'black':Colors.secondaryWhite,
      },
      headerTitleStyle:{
        color:scheme=='dark'? 'white': 'black'
      }
    }}>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen name="Favourites" />
      <Tabs.Screen name="Settings" />
    </Tabs>
  );
};

export default function Main() {
  //Database initialization
  useEffect(() => {
    dbInit()
      .then(() => {
        console.log("initiated");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Provider store={store}>
      <InitialLayout />
    </Provider>
  );
}
