import { View, Text, Button, Alert } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
} from "expo-image-picker";

const Picker = () => {
  const [image, setImage] = useState(null);
  const [cameraPermissionInformation, requestCameraPermission] = useCameraPermissions();
//   async function takeCameraPerm() {
//     if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
//         const permissionResponse = await requestCameraPermission();
  
//         return permissionResponse.granted;
//       }
//       if (cameraPermission.status === PermissionStatus.DENIED) {
//         Alert.alert(
//           "Insufficient permission",
//           "You need camera permission to click pictures"
//         );
//         return false;
//       }
//       return true;
//   }
async function takeCameraPerm() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCameraPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }

    return true;    
  }
  async function takePhoto() {
    
    const permission = await takeCameraPerm();
    if(!permission){
        return
    }
    let image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
    // try {
    //   let image = await launchCameraAsync({
    //     allowsEditing: true,
    //     aspect: [16, 9],
    //     quality: 1,
    //   });
    // } catch (error) {
    //   console.log("Error in camera");
    // }
  }
  return (
    <View className="flex-1 flex-row mt-4">
      <Button title="Select from the gallery" />
      <Button title="Take a photo" onPress={takePhoto} />
    </View>
  );
};

export default Picker;
