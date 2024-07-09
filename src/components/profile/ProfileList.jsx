import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {responsive} from '../../utils/Responsive';
import AppColor from '../../utils/AppColor';

const ProfileList = () => {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.itemHolder}>
        <View style={styles.contentHolder}>
          <Feather name="user" size={responsive(35)} color={AppColor.primary} />
          <Text style={styles.list}>My Profile</Text>
        </View>
        <View>
          <Feather
            name="arrow-right-circle"
            size={responsive(35)}
            color={AppColor.primary}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemHolder}>
        <View style={styles.contentHolder}>
          <MaterialCommunityIcons
            name="history"
            size={responsive(35)}
            color={AppColor.primary}
          />
          <Text style={styles.list}>Work History</Text>
        </View>
        <View>
          <Feather
            name="arrow-right-circle"
            size={responsive(35)}
            color={AppColor.primary}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemHolder}>
        <View style={styles.contentHolder}>
          <FontAwesome
            name="rupee"
            size={responsive(35)}
            color={AppColor.primary}
          />
          <Text style={styles.list}>Transaction</Text>
        </View>
        <View>
          <Feather
            name="arrow-right-circle"
            size={responsive(35)}
            color={AppColor.primary}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemHolder}>
        <View style={styles.contentHolder}>
          <AntDesign
            name="idcard"
            size={responsive(35)}
            color={AppColor.primary}
          />
          <Text style={styles.list}>KYC</Text>
        </View>
        <View>
          <Feather
            name="arrow-right-circle"
            size={responsive(35)}
            color={AppColor.primary}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemHolder}>
        <View style={styles.contentHolder}>
          <AntDesign
            name="setting"
            size={responsive(35)}
            color={AppColor.primary}
          />
          <Text style={styles.list}>Setting</Text>
        </View>
        <View>
          <Feather
            name="arrow-right-circle"
            size={responsive(35)}
            color={AppColor.primary}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemHolder}>
        <View style={styles.contentHolder}>
          <Ionicons
            name="notifications-outline"
            size={responsive(35)}
            color={AppColor.primary}
          />
          <Text style={styles.list}>Notification</Text>
        </View>
        <View>
          <Feather
            name="arrow-right-circle"
            size={responsive(35)}
            color={AppColor.primary}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemHolder}>
        <View style={styles.contentHolder}>
          <AntDesign
            name="logout"
            size={responsive(35)}
            color={AppColor.primary}
          />
          <Text style={styles.list}>Logout</Text>
        </View>
        <View>
          <Feather
            name="arrow-right-circle"
            size={responsive(35)}
            color={AppColor.primary}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileList;

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: AppColor.white,
    borderRadius: responsive(5),
    elevation: responsive(10),
    paddingHorizontal: responsive(10),
    alignItems: 'center',
    paddingBottom: 10,
  },
  itemHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: AppColor.dark_Green,
    alignItems: 'center',
  },
  contentHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
  list: {
    fontSize: responsive(18),
    color: AppColor.primary,
    fontFamily: 'Roboto-Medium',
  },
});
