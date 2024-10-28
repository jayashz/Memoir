import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import PlaceList from "../components/PlaceList";
import { useIsFocused, useRoute } from "@react-navigation/native";

const index = () => {
  const isFocused = useIsFocused();
  const route = useRoute();

  const [memories, setMemories] = useState([
    
  ]);

  useEffect(() => {
    if (isFocused && route.params) {
      const memory = route.params;
      setMemories((currMemories) => [...currMemories, memory]);
    }
  }, [isFocused, route]);

  useEffect(() => {
    console.log(memories);
  }, [memories]);
  return <PlaceList places={memories} />;
};

export default index;
