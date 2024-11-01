import { SafeAreaView } from 'react-native'
import React from 'react'
import PlaceForm from '../../components/PlaceForm'
import BackNav from '../../components/ui/BackNav'



const AddMemory = () => {

  
  return (

    <SafeAreaView className='flex-1'>
        <BackNav/>
        <PlaceForm/>
    </SafeAreaView>

  )
}

export default AddMemory