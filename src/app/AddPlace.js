import { View, Text } from 'react-native'
import React from 'react'
import PlaceForm from '../components/PlaceForm'
import { Camera, useCameraPermissions } from 'expo-camera'


const AddPlace = () => {
  
  return (
    <View className='flex-1'>
        <PlaceForm/>
    </View>
  )
}

export default AddPlace