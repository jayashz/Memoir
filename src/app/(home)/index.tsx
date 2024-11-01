import React, { useEffect } from "react";
import MemoryList from "../../components/MemoryList";
import { SafeAreaView, View } from "react-native";
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
        dispatch(saveMemory(data));
      }
    }
    get();
  }, []);

  const memories = useSelector((state) => state.memories.memories[0]);

  return (
    <SafeAreaView style={{ flex: 1, marginBottom: -34 }}>
      <BackNav />
      <MemoryList places={memories} />
    </SafeAreaView>
  );
};

export default index;
