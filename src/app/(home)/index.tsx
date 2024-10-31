import React, { useEffect, useState } from "react";
import MemoryList from "../../components/MemoryList";
import { fetchMemories } from "@/services/database";
import { SafeAreaView } from "react-native";
import BackNav from '../../components/ui/BackNav'
const index = () => {
  const [memories, setMemories] = useState([]);
  useState(async () => {
    const data = await fetchMemories();
    if (data != undefined) {
      setMemories(data);
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
