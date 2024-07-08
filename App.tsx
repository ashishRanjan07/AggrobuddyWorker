import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './src/screen/authScreen/Welcome'
import AppColor from './src/utils/AppColor'
import Registration from './src/screen/authScreen/Registration'

const App = () => {
  return (
    <>
     <StatusBar backgroundColor={AppColor.primary} barStyle="light-content" />
     {/* <Welcome/> */}
     <Registration/>
    </>
   
  )
}

export default App

const styles = StyleSheet.create({})