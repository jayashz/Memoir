import {
  View,
  ScrollView,
  TextInput,
  Keyboard,
  Alert,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../constants/Colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import CustBtn from "./ui/CustBtn";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";
import { saveMemory } from "../store/memorySlice";
import { insertMemory } from "../services/database";

const PlaceForm = ({savedMemory}) => {
  const scheme = useColorScheme();
  const dispatch = useDispatch();

  
  
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setpickedLocation] = useState();
  const [userLatLng, setUserLatLng] = useState();

  useEffect(()=>{
    if(savedMemory){
      setTitle(savedMemory.title);
      setDescription(savedMemory.description);
      setSelectedImage(savedMemory.imageUri);

    }
  },[savedMemory]);
  

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
      .catch((error) => console.log("error fetching the geoapify: ", error));
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
      description: description ?? "No description was added!!",
      imageUri: selectedImage,
      address: pickedLocation,
      location: userLatLng,
    });
    dispatch(
      saveMemory(
        (memory = {
          title: title,
          description: description ?? "No description was added!!",
          imageUri: selectedImage,
          address: pickedLocation,
          location: userLatLng,
          id: userLatLng.lat + "id" + Math.floor(Math.random() * 100),
        })
      )
    );
    navigation.navigate("index");
  }
  return (
    <ScrollView className="flex-1 p-4 " onScrollBeginDrag={Keyboard.dismiss}>
      <View className="flex-1 justify-center items-center mb-[90px]">
        <TextInput
          onChangeText={(e) => setTitle(e)}
          value={title}
          className={`p-4 border-b-2 w-full`}
          style={{
            borderColor: Colors.primaryOrange,
            color: scheme == "dark" ? "white" : "black",
          }}
          placeholder="Title: Eg. A day in mustang"
          placeholderTextColor="#C0C0C0"
        />
        <ImagePicker onSelectImage={({ imgUri }) => setSelectedImage(imgUri)} editImage={selectedImage} />
        <LocationPicker
          onSelectLocation={(currLocation) => onPickLocation(currLocation)}
        />

        <TextInput
          multiline
          className="h-[30vh] w-full border-2 mt-4 rounded-lg p-2"
          placeholder="Description of the event (optional)"
          placeholderTextColor="#C0C0C0"
          style={{
            borderColor: Colors.primaryOrange,
            color: scheme == "dark" ? "white" : "black",
          }}
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
