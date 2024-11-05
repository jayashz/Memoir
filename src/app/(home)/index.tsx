import React, { useEffect } from "react";
import MemoryList from "../../components/MemoryList";
import { SafeAreaView,Platform } from "react-native";
import BackNav from "../../components/ui/BackNav";
import { useSelector } from "react-redux";
import { fetchMemories } from "@/services/database";
import { useDispatch } from "react-redux";
import { saveMemory } from "@/store/memorySlice";

const index = () => {
  const dispatch = useDispatch();
  //fetching data from database and stored in redux

  useEffect(() => {
    async function get() {
      const data = await fetchMemories();
      if (data != undefined) {
        data.forEach((item)=>dispatch(saveMemory(item)));
      }
    }
    get();
  }, []);

  const memories = useSelector((state) => state.memories.memories);

  return (
    <SafeAreaView style={{ flex: 1, marginBottom: -34,paddingTop:Platform.OS=='android'?24:null }} className="dark:bg-black">
      <BackNav />
      <MemoryList places={memories} />
    </SafeAreaView>
  );
};

export default index;
