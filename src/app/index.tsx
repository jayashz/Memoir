
import React, { useEffect, useState } from "react";
import PlaceList from "../components/PlaceList";
import { useSelector } from "react-redux";


const index = () => {

  const memories = useSelector(state=>state.memories.memories);
  
  return <PlaceList places={memories} />;
};

export default index;
