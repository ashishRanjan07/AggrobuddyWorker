import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import LottieView from 'lottie-react-native';
import {responsive} from '../../utils/Responsive';
import CustomButton from '../../components/CustomButton';
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <View style={styles.animationHolder}>
        <LottieView
          source={require('../../assets/animation/worker.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.text}>
          Welcome Worker to the Worker app of the Aggobuddy
        </Text>
        <Text style={styles.subText}>
          Discover the seamless bridge between farmers, farm workers, and
          merchants with Farm & Market Connect! Aggrobuddy simplifies the
          process of connecting these crucial players in the agricultural
          ecosystem, ensuring fresh produce reaches consumers efficiently.
        </Text>
      </View>
      {/* Button for Login and sign up */}
      <View style={styles.buttonHolder}>
        <CustomButton
          title={'Registration'}
          color={AppColor.dark_Yellow}
          handleAction={() => navigation.navigate('Registration')}
        />
        <CustomButton
          title={'Worker Login'}
          color={AppColor.dark_Yellow}
          handleAction={() => navigation.navigate('Login')}
        />
      </View>
      <Text style={styles.versionText}>
        App Version :- {DeviceInfo.getVersion()}
      </Text>
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  animationHolder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    height: responsive(400),
    width: '100%',
  },
  textHolder: {
    marginVertical: responsive(20),
    padding: responsive(10),
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    gap: 10,
  },
  text: {
    fontSize: responsive(20),
    color: AppColor.white,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    lineHeight: 30,
    letterSpacing: 1,
  },
  subText: {
    fontSize: responsive(18),
    textAlign: 'center',
    color: AppColor.success,
    lineHeight: 30,
    letterSpacing: 1,
    fontFamily: 'Roboto-Medium',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  versionText: {
    fontSize: responsive(16),
    color: AppColor.white,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginVertical:responsive(10),
    width:'100%',
  },
});
