
import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';
import AppColor from './AppColor';

const RailSelected = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 4,
    backgroundColor: AppColor.light_Green,
    borderRadius: 2,
  },
});
