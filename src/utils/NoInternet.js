import {Image, ScrollView, StyleSheet, Text, View,Linking} from 'react-native';
import React from 'react';
import AppColor from './AppColor';
import ImagePath from './ImagePath';
import {responsive} from './Responsive';
import CustomButton from '../components/CustomButton';

const NoInternet = () => {
  const handleOpenSetting = async() => {
    console.log('Open Settings');
   await Linking.openSettings()
  };
  return (
    <ScrollView style={styles.main}>
      <View style={styles.contentHolder}>
        <Image
          source={ImagePath.noInternet}
          resizeMode="cover"
          style={styles.imageStyle}
        />
        <Text style={styles.text}>
          Please check your internet connection again or connect to wifi
        </Text>
        <View style={styles.buttonHolder}>
          <CustomButton
            title={'Open Setting'}
            color={AppColor.dim_Grey}
            handleAction={handleOpenSetting}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  contentHolder: {
    flex: 1,
    alignItems: 'center',
    marginTop: responsive(50),
  },
  imageStyle: {
    height: responsive(350),
    width: responsive(350),
  },
  text: {
    width: '85%',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: responsive(18),
    color: AppColor.primary,
  },
  buttonHolder: {
    marginVertical: responsive(20),
    width: '90%',
  },
});
