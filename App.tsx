import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './src/screen/authScreen/Welcome'
import AppColor from './src/utils/AppColor'

const App = () => {
  return (
    <>
     <StatusBar backgroundColor={AppColor.primary} barStyle="light-content" />
     <Welcome/>
    </>
   
  )
}

export default App

const styles = StyleSheet.create({})