import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './src/screen/authScreen/Welcome'
import AppColor from './src/utils/AppColor'
import Registration from './src/screen/authScreen/Registration'
import Login from './src/screen/authScreen/Login'
import OTP from './src/screen/authScreen/OTP'
import AuthNavigation from './src/navigation/stack/authStack/AuthNavigation'

const App = () => {
  return (
    <>
     <StatusBar backgroundColor={AppColor.primary} barStyle="light-content" />
     {/* <Welcome/> */}
     {/* <Registration/> */}
     {/* <Login/> */}
     {/* <OTP/> */}
     <AuthNavigation/>
    </>
   
  )
}

export default App

const styles = StyleSheet.create({})