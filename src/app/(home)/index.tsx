import React, { useEffect, useState } from "react";
import MemoryList from "../../components/MemoryList";
import { fetchMemories } from "@/services/database";


const index = () => {

  const [memories,setMemories]= useState([]);
  useState(async ()=>{
      const data = await fetchMemories();
      if(data != undefined){
        setMemories(data);
      }
  },[]);
  // const memories = useSelector(state=>state.memories.memories);
  
  return <MemoryList  places={memories} />
};

export default index;
