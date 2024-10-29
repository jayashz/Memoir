import { FlatList,View, Text } from "react-native";
import React from "react";
import MemoryItem from "./MemoryItem";
import { Colors } from "@/constants/Colors";

const MemoryList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className={`text-3xl`}  style={{color:Colors.primaryRed}}>No places added yet..</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MemoryItem place={item} />}
      style={{flex:1, padding:10}}
    />
  );
};

export default MemoryList;
