import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import Earn from '../../components/home/Earn';
import HomeHeader from '../../components/home/HomeHeader';
import LastWorkHistory from '../../components/home/LastWorkHistory';
import JobAppliedList from '../../components/home/JobAppliedList';
import FarmerVsMerchantGraph from '../../components/home/FarmerVsMerchantGraph';

const Home = () => {
  return (
    <ScrollView style={styles.main}>
      {/* HeaderView */}
      <SafeAreaView style={{backgroundColor: AppColor.primary}} />
      <HomeHeader />
      {/* Earning Section */}
      <Earn />
      {/* Last Working History */}
      <LastWorkHistory/>
      {/* Job Applied list */}
      <JobAppliedList/>
      {/* Graph of Earning by merchant vs farmer */}
<FarmerVsMerchantGraph/>
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
