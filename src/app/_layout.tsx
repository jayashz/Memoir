import "../global.css";
import { Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Button, Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { Colors } from "../constants/Colors";
import { Provider } from "react-redux";
import {store} from "../store/store";

export default function Layout() {
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
                  navigation.navigate("AddPlace");
                }}
              >
                <AntDesign
                  name="pluscircle"
                  size={28}
                  color={Colors.primaryOrange}
                />
              </Pressable>
            ),
            headerTitle: "Places you visited",
          }}
        />
        <Stack.Screen name="AddPlace" />
        <Stack.Screen name="Map" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
