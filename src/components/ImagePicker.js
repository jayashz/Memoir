import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../constants/Colors";
import CustBtn from "./ui/CustBtn";

function ImagePicker({onSelectImage}) {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing:true,
      aspect: [16, 9],
      quality: 0.5,
    });
    onSelectImage({imgUri:image.assets[0].uri});
    setPickedImage(image.assets[0].uri);
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = (
      <Image className="w-full h-[40vh]" source={{ uri: pickedImage }} />
    );
  }

  return (
    <View className="w-full mt-4">
      <View className="w-full h-[40vh] items-center justify-center bg-gray-300 rounded-md">
        {imagePreview}
      </View>
      <CustBtn onPress={takeImageHandler} icon='camera'>Take a picture</CustBtn>
    </View>
  );
}

export default ImagePicker;
