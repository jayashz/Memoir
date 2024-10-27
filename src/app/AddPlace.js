import { View, Text } from 'react-native'
import React from 'react'
import PlaceForm from '../components/PlaceForm'



const AddPlace = () => {
  function savedMemory(data){
    console.log(data);
  }
  return (
    <View className='flex-1'>
        <PlaceForm onSave={savedMemory}/>
    </View>
  )
}

export default AddPlace