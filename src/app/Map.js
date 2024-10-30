import { View, Text, Alert, Pressable } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const Map = () => {
  const route = useRoute();
  const selectedRegion = route.params && route.params;

  const [selectedLocation, setSelectedLocation] = useState(selectedRegion);
  const navigation = useNavigation();

  const region = {
    latitude: selectedRegion ? selectedRegion.initialLat : 27.612390995083636,
    longitude: selectedRegion ? selectedRegion.intialLng : 84.57322361140824,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  console.log(region);
  function selectLocation(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  }

  function confirmLocation() {
    
    if (!selectedRegion && selectedLocation) {
      navigation.navigate("AddMemory", {
        pickedLat: selectedLocation.lat,
        pickedLng: selectedLocation.lng,
      });
      return;
    }
    navigation.goBack();
    return;
  }
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={region}
      onPress={selectLocation}
    >
      {selectedLocation && (
        <Marker
          title="Picked location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}

      <Pressable
        onPress={confirmLocation}
        className="p-2 w-14 h-14 rounded-full justify-center items-center absolute bottom-12 right-8"
        style={{ backgroundColor: Colors.primaryOrange }}
      >
        {selectedLocation && !selectedRegion ? (
          <MaterialIcons name="done" size={26} color="black" />
        ) : (
          <AntDesign name="close" size={24} color="black" />
        )}
      </Pressable>
    </MapView>
  );
};

export default Map;
