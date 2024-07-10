import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Kyc = () => {
  const [idImage, setIdImage] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const cameraOpen = async identityImage => {
    console.log(`Open Camera for ${identityImage}`);
    try {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
        cameraType: 'front',
        saveToPhotos: true,
        quality: 0.7,
      };
      launchCamera(options, async response => {
        if (response.didCancel) {
          console.log('User cancel Camera');
        } else if (response.error) {
          console.log('Camera Error:', response.error);
        } else {
          let imageUri = response.uri || response.assets[0]?.uri;
          if (identityImage === 'identityImage') {
            console.log('Id Image', imageUri);
            setIdImage(imageUri);
          }
          if (identityImage === 'selfieImage') {
            console.log('Profile Image', imageUri);
            setProfileImage(imageUri);
          }
        }
      });
    } catch (error) {
      console.log('Error in Opening camera', error.message);
    }
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Let's Verify KYC</Text>
        <Text style={styles.subHeaderText}>
          Please submit the following documents to verify your identity
        </Text>

        {/* Two Button one for Identity Proof Upload and other for  Image Upload */}
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => cameraOpen('identityImage')}>
          <View style={styles.iconHolder}>
            <AntDesign
              name="idcard"
              size={responsive(40)}
              color={AppColor.primary}
            />
          </View>
          <View style={styles.contentHolder}>
            <Text style={styles.headerText1}>Take a picture of valid ID</Text>
            <Text style={styles.subHeaderText1}>
              To check your personal information was correct
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => cameraOpen('selfieImage')}>
          <View style={styles.iconHolder}>
            <FontAwesome
              name="photo"
              size={responsive(40)}
              color={AppColor.primary}
            />
          </View>
          <View style={styles.contentHolder}>
            <Text style={styles.headerText1}>Take Selfie of yourself</Text>
            <Text style={styles.subHeaderText1}>
              To match your face to ID card Photo
            </Text>
          </View>
        </TouchableOpacity>

        {/* Your upload status */}
        {idImage && <Text style={styles.successText}>Id Upload : - Success</Text>}
        {profileImage && <Text style={styles.successText}>Image Upload : - Success</Text>}
      </View>
    </ScrollView>
  );
};

export default Kyc;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  container: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    padding: responsive(10),
    alignItems: 'center',
    gap: responsive(10),
  },
  headerText: {
    fontSize: responsive(32),
    fontFamily: 'Roboto-Bold',
    color: AppColor.primary,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: responsive(16),
    fontFamily: 'Roboto-Regular',
    color: AppColor.black,
    textAlign: 'center',
    lineHeight: responsive(25),
  },
  contentHolder: {
    width: '75%',
    padding: responsive(10),
    gap: responsive(5),
  },
  itemHolder: {
    width: '100%',
    borderWidth: 1,
    borderColor: AppColor.primary,
    padding: responsive(10),
    alignSelf: 'center',
    borderRadius: responsive(5),
    marginVertical: responsive(5),
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
    borderColor: AppColor.primary,
  },
  headerText1: {
    fontSize: responsive(18),
    fontFamily: 'Roboto-Medium',
    color: AppColor.primary,
  },
  subHeaderText1: {
    fontSize: responsive(14),
    color: AppColor.black,
    fontFamily: 'Roboto-Regular',
    lineHeight: responsive(20),
  },
  successText:{
    fontSize:responsive(18),
    fontFamily:'Roboto-Medium',
    color:AppColor.success
  }
});
