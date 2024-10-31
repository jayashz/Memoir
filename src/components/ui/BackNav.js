import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
const BackNav = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View className="p-4 justify-between flex-row items-center">
      <Pressable onPress={() => navigation.goBack()}>
        <Entypo name="chevron-with-circle-left" size={30} color={Colors.primaryOrange} />
      </Pressable>

      <View>
        <Image
          source={require("../../assets/Memoir.png")}
          className="w-[120px] h-[40px] object-contain justify-center items-center"
        />
      </View>

      <View className='w-[30px]'>
        {route.key.includes("MemoryDetails") ? (
          <Entypo name="heart" size={30} color="red" />
        ) : (
          ""
        )}
      </View>
    </View>
  );
};

export default BackNav;
