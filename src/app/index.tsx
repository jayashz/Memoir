import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PlaceList from '../components/PlaceList'
import { useIsFocused, useRoute} from '@react-navigation/native';

const index = () => {
  const isFocused = useIsFocused();
  const route = useRoute();
  useState(()=>{
    if(isFocused && route.params){
      console.log('asdasd');
    }
  },[isFocused,route]);

  return (
    <PlaceList />
  )
}

export default index