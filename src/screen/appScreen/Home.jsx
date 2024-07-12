import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import Earn from '../../components/home/Earn';
import HomeHeader from '../../components/home/HomeHeader';
import LastWorkHistory from '../../components/home/LastWorkHistory';

const Home = () => {
  return (
    <ScrollView style={styles.main}>
      {/* HeaderView */}
      <HomeHeader />
      {/* Earning Section */}
      <Earn />
      {/* Last Working History */}
      <LastWorkHistory/>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
});
