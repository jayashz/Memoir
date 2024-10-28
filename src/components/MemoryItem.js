import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const MemoryItem = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <View className="relative w-full">
        <Image
          source={{ uri: place.imageUri }}
          className="w-full h-[30vh] bg-red-200 rounded-lg"
        />
        <View className="absolute bottom-3 left-3">
          <Text className="text-white font-semibold text-xl">{place.title}</Text>
          <Text className="text-white">{place.Address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MemoryItem;
