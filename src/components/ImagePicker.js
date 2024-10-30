import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
} from "expo-image-picker";
import { useState } from "react";
import CustBtn from "./ui/CustBtn";

function ImagePicker({ onSelectImage }) {
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

  async function takeImageHandler(task) {
    const hasPermission = await verifyPermissions();
    let image;
    if (!hasPermission) {
      return;
    }
    if (task == "camera") {
      image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
    } else {
      image = await launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
    }
    if (image.canceled) {
      return;
    }
    onSelectImage({ imgUri: image.assets[0].uri });
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
      <CustBtn onPress={() => takeImageHandler("camera")} icon="camera">
        Take a picture
      </CustBtn>
      <CustBtn
        onPress={() => takeImageHandler("gallery")}
        icon="image-inverted"
      >
        Select from gallery
      </CustBtn>
    </View>
  );
}

export default ImagePicker;
