import { View, Text, Alert, Pressable } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={confirmLocation}>
          <MaterialIcons name="done" size={24} color="black" />
        </Pressable>
      ),
    });
  }, []);
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

    if (!!selectedLocation==false) {
      Alert.alert(
        "No location picked!",
        "You need to select a location to continue"
      );
      return;
    }

    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
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
    </MapView>
  );
};

export default Map;
