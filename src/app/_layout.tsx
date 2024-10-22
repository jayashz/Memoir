import "../global.css";
import { Stack, Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";
import { useNavigation } from "expo-router";
export default function Layout() {
  const navigation = useNavigation();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerRight: () => (
            <Pressable onPress={()=>{navigation.navigate('AddPlace')}}>
              <AntDesign name="pluscircle" size={24} color="black" />
            </Pressable>
          ),
          headerTitle:'Places you visited'
        }}
      />
      <Stack.Screen name="AddPlace" />
    </Stack>
  );
}
