import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import ImagePath from '../../utils/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign'
const HomeHeader = () => {
  return (
    <View style={styles.main}>
      <View style={styles.nameHolder}>
        <AntDesign name='menufold' size={responsive(30)} color={AppColor.primary}/>
      </View>
      <View style={styles.appNameHolder}>
        <Text style={styles.nameText}>Aggrobuddy</Text>
        <Text style={styles.nameText}>Worker Application!</Text>
      </View>
      <TouchableOpacity style={styles.imageHolder}>
        <Image
          source={ImagePath.worker}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
    borderWidth: 2,
    marginVertical: responsive(10),
    width: '95%',
    alignSelf: 'center',
    borderRadius: responsive(5),
    elevation: responsive(5),
    borderColor: AppColor.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: responsive(10),
    paddingVertical: responsive(10),
  },
  nameHolder: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsive(10),
  },
  nameText: {
    fontSize: responsive(16),
    fontFamily: 'Roboto-Medium',
    color: AppColor.primary,
  },
  appNameHolder: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsive(10),
  },
  imageHolder: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: responsive(60),
    height: responsive(60),
    backgroundColor: AppColor.dim_Grey,
    borderRadius: responsive(40),
  },
});
