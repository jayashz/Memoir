import { View, Text, Alert, Pressable } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import { Colors } from "../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const navigation = useNavigation();

  // navigation.setOptions({
  //   headerRight: () => (
  //
  //   ),
  // });

  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  function selectLocation(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  }

  function confirmLocation() {
    if (selectedLocation.length == 0) {
      //No location picked
      navigation.goBack();
      return;
    }

    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }
  return (
    <View style={{flex:1, position: "relative"}}>
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
        <View style={{flex:1}}>
        <Pressable
          onPress={confirmLocation}
          className="p-2 w-14 h-14 rounded-full justify-center items-center absolute bottom-12 right-8"
          style={{ backgroundColor: Colors.primaryOrange }}
        >
          {selectedLocation.length == 0 ? (
            <AntDesign name="close" size={24} color="black" />
          ) : (
            <MaterialIcons name="done" size={26} color="black" />
          )}
        </Pressable>
        </View>
      </MapView>
    </View>
  );
};

export default Map;
