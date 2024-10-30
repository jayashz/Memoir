import { View, Text, Image, Pressable } from "react-native";
import React, { memo } from "react";
import { useNavigation } from "expo-router";
const MemoryItem = ({ memory }) => {
  const navigation = useNavigation();
  function selectMemoryHandler(){
    navigation.navigate('MemoryDetails',memory);
  }
  return (
    <Pressable onPress={selectMemoryHandler}>
      <View className="relative w-full my-4">
        <Image
          source={{ uri: memory.imageUri }}
          className="w-full h-[30vh] bg-red-200 rounded-lg"
        />
        <View className="absolute bottom-3 left-3">
          <Text className="text-white font-semibold text-xl">{memory.title}</Text>
          <Text className="text-white">{memory.Address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MemoryItem;
