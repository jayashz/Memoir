import { View, Text, ScrollView, TextInput, Keyboard } from "react-native";
import React, { useState } from "react";
import { Colors } from "../constants/Colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import CustBtn from "./ui/CustBtn";
import axios from "axios";
import { geocodeAsync } from "expo-location";

const PlaceForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setpickedLocation] = useState();

  
  async function saveHandler() {
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=5d2ebf29a4284b56996ce858fcf181e9", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
    <ScrollView className="flex-1 p-4 " onScrollBeginDrag={Keyboard.dismiss}>
      <View className="flex-1 justify-center items-center mb-14">
        <Text className="text-2xl font-bold">Title</Text>
        <TextInput
          onChangeText={(e) => setTitle(e)}
          value={title}
          className={`p-4 border-b-2 w-full`}
          style={{ borderColor: Colors.primaryOrange }}
          placeholder="Eg. A day in mustang"
        />
        <ImagePicker onSelectImage={({ imgUri }) => setSelectedImage(imgUri)} />
        <LocationPicker
          onSelectLocation={(currLocation) => setpickedLocation(currLocation)}
        />
        <TextInput
          multiline
          className="h-[30vh] w-full border-2 mt-4"
          placeholder="Description of the event (optional)"
          style={{ borderColor: Colors.primaryOrange }}
          onChangeText={(e) => setDescription(e)}
          value={description}
        />
        <View className="w-full">
          <CustBtn icon="save" onPress={saveHandler}>
            Save
          </CustBtn>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceForm;
