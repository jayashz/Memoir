import { View, Text } from "react-native";
import React from "react";
import { PressableOpacity } from "react-native-pressable-opacity";
import { Colors } from "../../constants/Colors";
import Entypo from '@expo/vector-icons/Entypo';

const CustBtn = ({ onPress, children, icon }) => {
  return (
    <PressableOpacity onPress={onPress}>
      <View
        className="p-4 mt-4 items-center rounded-md flex-row justify-center gap-2"
        style={{ backgroundColor: Colors.primaryOrange }}
      >
        <Entypo name={icon} size={24} color="black" />
        <Text className="text-xl">{children}</Text>
      </View>
    </PressableOpacity>
  );
};

export default CustBtn;
