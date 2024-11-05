import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  Platform,
  Pressable,
} from "react-native";

import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import CustBtn from "../../components/ui/CustBtn";
import { useNavigation } from "expo-router";
import BackNav from "../../components/ui/BackNav";
import { useDispatch, useSelector } from "react-redux";
import { favMemory, removeFav, removeMemory } from "../../store/memorySlice";
import { useColorScheme } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { deleteMemory } from "../../services/database";

const MemoryDetails = () => {
  const route = useRoute();
  const scheme = useColorScheme();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const favIds = useSelector((state) => state.memories.favMemories);

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
  function addToFavouriteHandler() {
    if (!favIds.includes(route.params.id)) {
      dispatch(favMemory(route.params.id));
    } else {
      dispatch(removeFav(route.params.id));
    }
  }
  function memoryDeleteHandler(){
    
    deleteMemory(route.params.id).then(()=>{
      dispatch(removeMemory(route.params.id));
    })
    navigation.navigate('index');
  }
  return (
    <SafeAreaView
      className="dark:bg-black"
      style={{ paddingTop: Platform.OS == "android" ? 24 : null }}
    >
      <BackNav />
      <ScrollView classNam="flex-1">
        <View className="flex-1 p-4 mb-[90px]">
          <Text className=" text-center font-bold text-3xl dark:text-white">
            {selectedMemory.title}
          </Text>
          <Image
            source={{ uri: selectedMemory.imageUri }}
            className="w-full h-[35vh] rounded-lg"
          />
          <Text className="text-center dark:text-white">
            {selectedMemory.address}
          </Text>
          <View className="flex-row justify-between m-4">
            <Pressable onPress={addToFavouriteHandler}>
              <Entypo
                name={
                  favIds.includes(route.params.id) ? "heart" : "heart-outlined"
                }
                size={30}
                color="red"
                className="text-center"
              />
            </Pressable>
            <Pressable onPress={memoryDeleteHandler}>
              <AntDesign
                name="delete"
                size={30}
                color={scheme == "dark" ? "white" : "black"}
              />
            </Pressable>
            <Pressable onPress={addToFavouriteHandler}>
              <FontAwesome6 name="edit" size={24} color={scheme == "dark" ? "white" : "black"} />
            </Pressable>
          </View>
          <Text className="dark:text-white font-semibold text-lg text-center mt-4">
            Here is the description of your memory:
          </Text>
          <Text className="text-center mt-5 font-semibold dark:text-white text-lg">
            {selectedMemory.description}
          </Text>
          <CustBtn onPress={viewMapHandler} icon="map">
            View on Map
          </CustBtn>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MemoryDetails;
