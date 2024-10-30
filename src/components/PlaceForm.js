import {
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../constants/Colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import CustBtn from "./ui/CustBtn";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";
import { saveMemory } from "../store/memorySlice";
import {insertMemory} from '../services/database';

const PlaceForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setpickedLocation] = useState();
  const [userLatLng, setUserLatLng] = useState();

  const navigation = useNavigation();

  function onPickLocation(currLocation) {
    setUserLatLng(currLocation);
    if (!currLocation) {
      return;
    }
    var requestOptions = {
      method: "GET",
    };
    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${currLocation.lat}&lon=${currLocation.lng}&apiKey=5d2ebf29a4284b56996ce858fcf181e9`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        setpickedLocation(result.features[0].properties.formatted)
      )
      .catch((error) => console.log("error", error));
  }

  async function saveHandler() {
    if (
      userLatLng === undefined ||
      title.length == 0 ||
      selectedImage === undefined
    ) {
      Alert.alert("Invalid input!", "Please check your form and try again");
      return;
    }
    await insertMemory({
      title: title,
      description:
        description.length == 0 ? "No description was added!" : description,
      imageUri: selectedImage,
      address: pickedLocation,
      location: userLatLng,
      
    });
    dispatch(
      saveMemory({
        title: title,
        description:
          description.length == 0 ? "No description was added!" : description,
        imageUri: selectedImage,
        address: pickedLocation,
        location: userLatLng,
        id: userLatLng.lat + "id" + Math.floor(Math.random() * 100),
      })
    );
    navigation.navigate("index");
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
          <ImagePicker
            onSelectImage={({ imgUri }) => setSelectedImage(imgUri)}
          />
          <LocationPicker
            onSelectLocation={(currLocation) => onPickLocation(currLocation)}
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
