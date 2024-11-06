import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import MemoryList from "../components/MemoryList";

const Favourites = () => {
  const memories = useSelector((state) => state.memories.memories);
  const favIds = useSelector((state) => state.memories.favMemories);


    const filteredMemories = favIds && memories.filter((item) =>
      favIds.includes(item.id)
    );


  return (
    <View className="flex-1 dark:bg-black">
      <MemoryList places={filteredMemories} />
    </View>
  );
};

export default Favourites;
