import "../global.css";
import { Stack, Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { Colors } from "../constants/Colors";

export default function Layout() {
  const navigation = useNavigation();

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
                navigation.navigate("AddPlace");
              }}
            >
              <AntDesign name="pluscircle" size={28} color={Colors.primaryOrange} />
            </Pressable>
          ),
          headerTitle: "Places you visited",
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen name="AddPlace" />
    </Stack>
  );
}
