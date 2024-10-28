import { View, Text } from 'react-native'
import React from 'react'
import PlaceForm from '../components/PlaceForm'
import { useNavigation } from 'expo-router'


const AddMemory = () => {

  
  return (
    <View className='flex-1'>
        <PlaceForm/>
    </View>
  )
}

export default AddMemory