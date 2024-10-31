import React, { useEffect, useState } from "react";
import MemoryList from "../../components/MemoryList";
import { fetchMemories } from "@/services/database";
import { SafeAreaView } from "react-native";
import BackNav from '../../components/ui/BackNav';

import { useDispatch, UseDispatch } from "react-redux";
import { saveMemory } from "@/store/memorySlice";

const index = () => {
  const dispatch = useDispatch();
  const [memories, setMemories] = useState([]);
  useState(async () => {
    const data = await fetchMemories();
    if (data != undefined) {
      setMemories(data);
      dispatch(saveMemory(data));
    }
  }, []);
  // const memories = useSelector(state=>state.memories.memories);

  return (
    <SafeAreaView style={{flex:1}}>
      <BackNav/>
      <MemoryList places={memories} />
    </SafeAreaView>
  );
};

export default index;
