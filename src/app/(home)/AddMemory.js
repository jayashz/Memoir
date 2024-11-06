import { SafeAreaView, Platform } from "react-native";
import React, { useEffect, useId, useState } from "react";
import PlaceForm from "../../components/PlaceForm";
import BackNav from "../../components/ui/BackNav";
import { useRoute } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
const AddMemory = () => {
  const route = useRoute();
  const isFocused = useIsFocused();

  const [routedData, setRoutedData] = useState();
  useEffect(() => {
    if (isFocused && route?.params) {
      setRoutedData(route.params);
    }
  }, [route, isFocused]);

  return (
    <SafeAreaView
      className="flex-1 dark:bg-black"
      style={{ paddingTop: Platform.OS == "android" ? 24 : null }}
    >
      <BackNav />
      <PlaceForm savedMemory={routedData} />
    </SafeAreaView>
  );
};

export default AddMemory;
