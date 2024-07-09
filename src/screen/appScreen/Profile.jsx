import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import UserBasicDetails from '../../components/profile/UserBasicDetails';
import ProfileList from '../../components/profile/ProfileList';
import DeviceInfo from 'react-native-device-info';

const Profile = () => {
  return (
    <ScrollView style={styles.main}>
      <UserBasicDetails />
      <ProfileList/>
      <Text style={styles.versionText}>
        App Version :- {DeviceInfo.getVersion()}
      </Text>
      <Text style={styles.madeInIndiaText}>
        Proudly made in India
      </Text>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  versionText: {
    fontSize: responsive(16),
    color: AppColor.primary,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginTop:responsive(10),
    width:'100%',
  },
  madeInIndiaText:{
    fontSize:responsive(16),
    color:AppColor.dark_Green,
    fontFamily:'Roboto-Medium',
    textAlign:'center'
  }
});
