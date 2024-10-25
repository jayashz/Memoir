import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import CustBtn from "./ui/CustBtn";
import * as Location from "expo-location";
import { useNavigation } from "expo-router";
import { useRoute, useIsFocused } from "@react-navigation/native";


const LocationPicker = ({onSelectLocation}) => {
  const [currLocation, setLocation] = useState();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute();

  

  useEffect(() => {
    if(isFocused&& route.params){
      const pickedLocation = {
        lng: route.params.pickedLng,
        lat: route.params.pickedLat,
      };
      setLocation(pickedLocation);
      onSelectLocation(currLocation);
    }
  }, [route,isFocused]);

  const getLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        lng: location.coords.longitude,
        lat: location.coords.latitude,
      });
      onSelectLocation(currLocation);
      //   const image= await axios.get('https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=400&height=300&center=lonlat%3A84.57322361140824%2C27.612390995083636&zoom=14.3497&marker=lonlat%3A84.57322361140824%2C27.612390995083636&apiKey=5d2ebf29a4284b56996ce858fcf181e9');
    })();
  };
  let image;
  if (!!currLocation) {
    image = (
      <Image
        source={{
          uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=400&height=300&center=lonlat%3A${currLocation.lng}%2C${currLocation.lat}&zoom=14.3497&marker=lonlat%3A${currLocation.lng}%2C${currLocation.lat}&apiKey=5d2ebf29a4284b56996ce858fcf181e9`,
        }}
        className="flex-1 w-full h-[300px] object-contain rounded-md"
      />
    );
  } else {
    image = <Text>No Location picked yet.</Text>;
  }

  return (
    <View className="w-full mt-4 mb-4">
      <View className="h-[40vh] p-2 justify-center items-center">{image}</View>
      <View className="">
        <CustBtn icon="map" onPress={getLocation}>
          Locate me
        </CustBtn>
        <CustBtn icon="map" onPress={() => navigation.navigate("Map")}>
          Pick a location
        </CustBtn>
      </View>
    </View>
  );
};

export default LocationPicker;
