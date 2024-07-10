import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Contact = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.itemHolder}>
        <View style={styles.iconHolder}>
          <MaterialCommunityIcons
            name="email-check-outline"
            size={responsive(40)}
            color={AppColor.warning}
          />
        </View>
        <View style={styles.contentHolder}>
          <Text style={styles.headerText}>Write to us</Text>
          <Text style={styles.subHeaderText}>
            Drop us a line and we'll get back to you as fast as we can. Email us
            at help@aggrobuddy.in
          </Text>
        </View>
      </View>

      <View style={styles.itemHolder}>
        <View style={[styles.iconHolder, {borderColor: AppColor.blue}]}>
          <MaterialCommunityIcons
            name="facebook"
            size={responsive(40)}
            color={AppColor.blue}
          />
        </View>
        <View style={styles.contentHolder}>
          <Text style={styles.headerText}>facebook us</Text>
          <Text style={styles.subHeaderText}>
            Connect with us on your favorites social network
          </Text>
        </View>
      </View>

      <View style={styles.itemHolder}>
        <View style={[styles.iconHolder, {borderColor: AppColor.light_Blue}]}>
          <MaterialCommunityIcons
            name="twitter"
            size={responsive(40)}
            color={AppColor.light_Blue}
          />
        </View>
        <View style={styles.contentHolder}>
          <Text style={styles.headerText}>Tweet us on X</Text>
          <Text style={styles.subHeaderText}>
            Reach out in 140 characters! we're @aggrobuddyIndia
          </Text>
        </View>
      </View>
      <View style={styles.itemHolder}>
        <View style={[styles.iconHolder, {borderColor: AppColor.dark_Green}]}>
          <MaterialCommunityIcons
            name="phone"
            size={responsive(40)}
            color={AppColor.dark_Green}
          />
        </View>
        <View style={styles.contentHolder}>
          <Text style={styles.headerText}>Talk to us</Text>
          <Text style={styles.subHeaderText}>
            Monday to Sunday, 10:00 AM to 10:00PM call us on 1800-000-0000
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  itemHolder: {
    width: '90%',
    borderWidth: 1,
    borderColor: AppColor.dim_Grey,
    padding: responsive(10),
    alignSelf: 'center',
    borderRadius: responsive(5),
    marginVertical: responsive(10),
    // elevation: responsive(10),
    backgroundColor: AppColor.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconHolder: {
    borderWidth: 2,
    width: '20%',
    alignItems: 'center',
    padding: responsive(10),
    borderRadius: responsive(20),
    borderColor: AppColor.warning,
  },
  headerText: {
    fontSize: responsive(18),
    fontFamily: 'Roboto-Medium',
    color: AppColor.primary,
  },
  subHeaderText: {
    fontSize: responsive(14),
    color: AppColor.black,
    fontFamily: 'Roboto-Regular',
    lineHeight: responsive(20),
  },
  contentHolder: {
    width: '75%',
    padding: responsive(10),
    gap: responsive(5),
  },
});
