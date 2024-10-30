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
      
      screenOptions={{
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: Colors.primaryOrange,
        tabBarLabelStyle: {
          fontSize: 13,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favourites"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
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
