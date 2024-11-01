import "../global.css";
import { Slot, Tabs } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { dbInit } from "../services/database";
import * as SplashScreen from "expo-splash-screen";
import {  useEffect } from "react";
import CustTabBar from "../components/ui/CustTabBar";

const InitialLayout = () => {
  

  return (
    <Tabs tabBar={(props) => <CustTabBar {...props} />}>
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
