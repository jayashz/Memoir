import { SafeAreaView,Platform } from 'react-native'
import React from 'react'
import PlaceForm from '../../components/PlaceForm'
import BackNav from '../../components/ui/BackNav'

const AddMemory = () => {
  return (

    <SafeAreaView className='flex-1 dark:bg-black' style={{paddingTop:Platform.OS=='android'?24:null}}>
        <BackNav/>
        <PlaceForm/>
    </SafeAreaView>

  )
}

export default AddMemory