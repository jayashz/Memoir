import { View, Text, ScrollView, Switch, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'nativewind';

const Settings = () => {
  const {colorScheme,toggleColorScheme}= useColorScheme();

  return (
    <View className='flex-1 dark:bg-black'>
      <StatusBar style={colorScheme=='dark'?'light':'dark'} />
      <ScrollView className='flex-1'>
        <View className='flex-row p-3 items-center justify-between bg-slate-50 my-4 dark:bg-slate-800'>
          <Text className='text-xl dark:text-white'>Switch theme</Text>
          <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
        </View> 
      </ScrollView>
    </View>
  )
}

export default Settings