import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import CustBtn from "../../components/ui/CustBtn";
import { useNavigation } from "expo-router";
import BackNav from "../../components/ui/BackNav";
import { useDispatch } from "react-redux";
import { favMemory } from "../../store/memorySlice";

const MemoryDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
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
  function addToFavouriteHandler(){
    dispatch(favMemory(route.params.id));
  }
  return (
    <SafeAreaView className='dark:bg-black'>
      <BackNav addtoFavourite={addToFavouriteHandler} />
      <ScrollView classNam="flex-1">
        <View className="flex-1 p-4 mb-[90px]">
          <Text className=" text-center font-bold text-3xl dark:text-white">
            {selectedMemory.title}
          </Text>
          <Image
            source={{ uri: selectedMemory.imageUri }}
            className="w-full h-[35vh] rounded-lg"
          />
          <Text className="text-center dark:text-white">{selectedMemory.address}</Text>
          <Text className="text-center mt-5 font-semibold dark:text-white text-lg">{selectedMemory.description}</Text>
          <CustBtn onPress={viewMapHandler}>View on Map</CustBtn>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MemoryDetails;
