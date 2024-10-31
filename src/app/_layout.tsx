import "../global.css";
import { Slot, Tabs } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useEffect } from "react";
import { dbInit } from "../services/database";
import * as SplashScreen from "expo-splash-screen";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import CustTabBar from "../components/ui/CustTabBar";
SplashScreen.preventAutoHideAsync();
const InitialLayout = () => {
  return (
    <Tabs
      tabBar={props => <CustTabBar {...props} />}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Favourites"
      />
      <Tabs.Screen
        name="Settings"
      />
    </Tabs>
  );
};

export default function Main() {
  useEffect(() => {
    dbInit()
      .then(() => {
        SplashScreen.hideAsync();
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
