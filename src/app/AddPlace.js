import { View, Text } from 'react-native'
import React from 'react'
import PlaceForm from '../components/PlaceForm'
import { useNavigation } from 'expo-router'


const AddPlace = () => {
  const navigation = useNavigation();
  function saveMemory(data){
    navigation.navigate('index',data);
  }
  return (
    <View className='flex-1'>
        <PlaceForm onSave={saveMemory}/>
    </View>
  )
}

export default AddPlace