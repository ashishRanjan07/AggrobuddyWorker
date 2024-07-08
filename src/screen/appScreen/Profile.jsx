import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColor from '../../utils/AppColor'

const Profile = () => {
  return (
    <ScrollView style={styles.main}>
      <Text>Profile</Text>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:AppColor.white
    }
})