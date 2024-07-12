import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import Entypo from 'react-native-vector-icons/Entypo';
const Earn = () => {
  return (
    <View style={styles.main}>
      <View style={styles.headerHolder}>
        <View style={styles.textHolder}>
          <Text style={styles.text}>Total Earning</Text>
        </View>
        <TouchableOpacity style={styles.iconHolder}>
          <Entypo
            name="calendar"
            size={responsive(40)}
            color={AppColor.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.amountHolder}>
        <Text style={styles.amountText}>Total Amount</Text>
        <Text style={styles.amount}>Rs.25000/-</Text>
      </View>
      <TouchableOpacity style={styles.viewMore}>
        <Text style={styles.text}>{`Tap for more info - >`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Earn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    borderRadius: responsive(5),
    elevation: responsive(10),
  },
  headerHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHolder: {
    width: '70%',
    // alignItems: 'center',
    padding: responsive(10),
  },
  iconHolder: {
    width: '30%',
    alignItems: 'center',
    padding: responsive(10),
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: responsive(20),
    color: AppColor.primary,
  },
  amountHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsive(10),
    width: '95%',
    alignSelf: 'center',
  },
  amountText: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
  amount: {
    fontSize: responsive(20),
    fontFamily: 'Roboto-Bold',
    color: AppColor.success,
  },
  viewMore: {
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: responsive(10),
    padding: responsive(5),
  },
});
