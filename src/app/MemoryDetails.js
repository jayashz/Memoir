import { View, Text, ScrollView, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import CustBtn from "../components/ui/CustBtn";
import { useNavigation } from "expo-router";
const MemoryDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [selectedMemory, setSelectedMemory] = useState([]);

  useEffect(() => {
    if (isFocused && route.params) {
      setSelectedMemory(route.params);
    }
  }, [isFocused, route]);
  function viewMapHandler() {
    navigation.navigate("Map", {
      initialLat: selectedMemory.lat,
      initialLng: selectedMemory.lng,
    });
  }
  return (
    <ScrollView classNam="flex-1">
      <View className="flex-1 p-4">
        <Text className=" text-center font-bold text-3xl">
          {selectedMemory.title}
        </Text>
        <Image
          source={{ uri: selectedMemory.imageUri }}
          className="w-full h-[35vh] rounded-lg"
        />
        <Text>{selectedMemory.address}</Text>
        <Text>{selectedMemory.description}</Text>
        <CustBtn onPress={viewMapHandler}>View on Map</CustBtn>
      </View>
    </ScrollView>
  );
};

export default MemoryDetails;
