import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const PlaceItem = ({ place,onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{uri:place.imageUri}}/>
      <View>
        <Text>{place.title}</Text>
        <Text>{place.Address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
