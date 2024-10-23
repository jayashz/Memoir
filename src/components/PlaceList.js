import { FlatList,View, Text } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { Colors } from "@/constants/Colors";

const PlaceList = ({ places }) => {
  if (!places || places.length === 0) {

    return (
      <View className="flex-1 justify-center items-center">
        <Text className={`text-3xl text-[${Colors.primaryRed}]`} >No places added yet..</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
};

export default PlaceList;
