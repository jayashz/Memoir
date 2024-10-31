import { View, Text } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MemoryList from "../components/MemoryList";
const Favourites = () => {

  const memories = useSelector((state)=>state.memories.memories[0]);
  const favIds = useSelector((state) => state.memories.favMemories);

  const filteredMemories = memories.filter((item) => favIds.includes(item.id));
  console.log(favIds);
  return (
    <View className="flex-1">
      <MemoryList places={filteredMemories} />
    </View>
  );
};

export default Favourites;
