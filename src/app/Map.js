import { View, Text } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState();
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
  return (
    <MapView style={{ flex: 1 }} initialRegion={region} onPress={selectLocation}>
      {selectedLocation && <Marker
        title="Picked location"
        coordinate={{
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng,
        }}
      />}
    </MapView>
  );
};

export default Map;
