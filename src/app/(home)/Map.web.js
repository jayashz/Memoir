import MapView,{Marker} from "@teovilla/react-native-web-maps";
import { Pressable } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const Map = () => {
  const route = useRoute();
  const selectedRegion = route.params && route.params;

  const [selectedLocation, setSelectedLocation] = useState(selectedRegion);
  
  const navigation = useNavigation();
    navigation.setOptions({tabBarVisible:false});
  const region = {
    latitude: selectedRegion ? selectedRegion.initialLat : 27.612390995083636,
    longitude: selectedRegion ? selectedRegion.initialLng : 84.57322361140824,
    latitudeDelta: 0.0822,
    longitudeDelta: 0.0421,
  };

  function selectLocation(event) {
    if(selectedRegion){
      return;
    }
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ initialLat: lat, initialLng: lng });
  }

  function confirmLocation() {
    
    if (!selectedRegion && selectedLocation) {
      navigation.navigate("AddMemory", {
        pickedLat: selectedLocation.initialLat,
        pickedLng: selectedLocation.initialLng,
      });
      return;
    }
    navigation.goBack();
    return;
  }
  return (
    <>
    <MapView
      style={{ flex: 1 }}
      initialRegion={region}
      onPress={selectLocation}
    >
      {selectedLocation && (
        <Marker
          title="Picked location"
          style={{zIndex:0}}
          coordinate={{
            latitude: selectedLocation.initialLat,
            longitude: selectedLocation.initialLng,
          }}
        />
      )}
    </MapView>
    

      <Pressable
        onPress={confirmLocation}
        className="p-2 w-14 h-14 rounded-full justify-center items-center z-0"
        style={{ backgroundColor: Colors.primaryOrange,position:'absolute',bottom:100,right:20 }}
      >
        {selectedLocation && !selectedRegion ? (
          <MaterialIcons name="done" size={26} color="black" />
        ) : (
          <AntDesign name="close" size={24} color="black" />
        )}
      </Pressable>
    </>
  );
};

export default Map;
