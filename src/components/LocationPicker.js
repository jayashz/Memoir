import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import CustBtn from "./ui/CustBtn";
import * as Location from "expo-location";
import axios from "axios";
import { API_key } from "../../API_key";
import { useNavigation } from "expo-router";
const LocationPicker = () => {
  const [location, setLocation] = useState();
  const navigation = useNavigation();
  const pickLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      //   const image= await axios.get('https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=400&height=300&center=lonlat%3A84.57322361140824%2C27.612390995083636&zoom=14.3497&marker=lonlat%3A84.57322361140824%2C27.612390995083636&apiKey=5d2ebf29a4284b56996ce858fcf181e9');
      console.log(location);
    })();
  }
  let image;
  if(!!location){
    image=<Image
    source={{
      uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=400&height=300&center=lonlat%3A${location.coords.longitude}%2C${location.coords.latitude}&zoom=14.3497&marker=lonlat%3A${location.coords.longitude}%2C${location.coords.latitude}&apiKey=5d2ebf29a4284b56996ce858fcf181e9`,
    }}
    className="flex-1 w-full h-[300px] object-contain rounded-md"
  />
  }else{
    image=<Text>No Location picked yet.</Text>
  }

  return (
    <View className="w-full mt-4">
      <View className="h-[40vh] p-2 justify-center items-center">
        {image}
      </View>
      <View className="">
        <CustBtn icon="map" onPress={pickLocation}>Locate me</CustBtn>
        <CustBtn icon="map" onPress={()=>navigation.navigate('Map')}>Pick a location</CustBtn>
      </View>
    </View>
  );
};

export default LocationPicker;
