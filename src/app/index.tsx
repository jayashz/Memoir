import React, { useEffect, useState } from "react";
import MemoryList from "../components/MemoryList";
import { useSelector } from "react-redux";


const index = () => {

  const memories = useSelector(state=>state.memories.memories);
  
  return <MemoryList places={memories} />;
};

export default index;
