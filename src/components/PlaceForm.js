import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import { Colors } from "../constants/Colors";
import ImagePicker from "./ImagePicker";


const PlaceForm = () => {
  const [title, setTitle] = useState("");

  return (
    <ScrollView className="flex-1 p-4">
      <View className='flex-1 justify-center items-center'>
        <Text className='text-2xl font-bold'>Title</Text>
        <TextInput
          onChangeText={(e) => setTitle(e)}
          value={title}
          className={`p-4 border-b-2 w-full border-[${Colors.primaryOrange}]`}
        />
      <ImagePicker/>
      </View>
    </ScrollView>
  );
};

export default PlaceForm;
