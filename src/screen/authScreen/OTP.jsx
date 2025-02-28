import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import LottieView from 'lottie-react-native';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const OTP = () => {
  const navigation = useNavigation();
  const otpLength = 4;
  const [otpArray, setOtpArray] = useState(Array(otpLength).fill(''));
  const [remainingTime, setRemainingTime] = useState(30);
  const [showResendButton, setShowResendButton] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showErrorText, setShowErrorText] = useState('');

  useEffect(() => {
    if (otpArray.length === 4) {
      setShowError(false);
      setShowErrorText('');
    }
  }, [otpArray]);
  useEffect(() => {
    if (remainingTime <= 0) {
      setShowResendButton(true);
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  const resendOtp = async () => {
    // Alert.alert('Success', 'OTP resend Successfully');
    Alert.alert('Success', 'Otp resend Successfully');
    setRemainingTime(30);
    setShowResendButton(false);
    setShowError(false);
    setShowErrorText('');
    setOtpArray(Array(otpLength).fill(''));
    if (refArray.current[0] && refArray.current[0].current) {
      refArray.current[0].current.focus();
    }
  };
  const refArray = useRef(otpArray.map(() => React.createRef()));
  const handleOtpChange = (index, value) => {
    const otpCopy = [...otpArray];
    otpCopy[index] = value;
    setOtpArray(otpCopy);

    if (value && index < otpLength - 1) {
      refArray.current[index + 1].current.focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && !otpArray[index] && index > 0) {
      refArray.current[index - 1].current.focus();
    }
  };

  const renderInputs = () => {
    return otpArray.map((item, index) => (
      <TextInput
        key={index}
        style={[
          styles.otpBox,
          {borderColor: showError ? AppColor.warning : AppColor.light_Grey},
        ]}
        keyboardType="number-pad"
        maxLength={1}
        onChangeText={text => handleOtpChange(index, text)}
        onKeyPress={({nativeEvent}) => handleKeyPress(index, nativeEvent.key)}
        ref={refArray.current[index]}
        value={otpArray[index]}
      />
    ));
  };

  const handleOtpSubmit = async () => {
    const otp = otpArray.join('');
    if (otp.trim() === '') {
      setShowError(true);
      setShowErrorText('Please enter 4 digit code !');
      return;
    }
    if (otp.length < 4) {
      setShowError(true);
      setShowErrorText('Enter exact 4 digit code!');
      return;
    }
    {
      if (otp === '0510') {
        Alert.alert('Success', 'OTP verified Successfully');
        
        // await AsyncStorage.setItem('isOTPVerified', 'Yes');
        // dispatch(login('Yes'));
        // dispatch(saveData('Yes'));
        navigation.navigate('appNavigation');
      } else {
        setShowError(true);
        setShowErrorText('Enter valid OTP');
      }
    }
  };

  return (
    <ScrollView style={styles.main}>
      <SafeAreaView style={{backgroundColor: AppColor.primary}} />
      <View style={styles.contentHolder}>
        <LottieView
          source={require('../../assets/animation/lock.json')}
          resizeMode="cover"
          style={styles.icon}
          autoPlay
          loop
        />
        <Text style={styles.text}>Please Enter 4 Digit OTP</Text>
        <View style={styles.lowerViewForm}>
          <View style={styles.otpContainer}>
            {renderInputs()}
            {showResendButton ? (
              <TouchableOpacity
                onPress={resendOtp}
                style={styles.resendButtonHolder}>
                <Feather
                  name="refresh-ccw"
                  size={responsive(35)}
                  color={AppColor.light_Grey}
                />
              </TouchableOpacity>
            ) : (
              <Text style={styles.timerText}>{remainingTime} Sec</Text>
            )}
          </View>
          {showError && (
            <View style={styles.errorHolder}>
              <Text style={styles.errorText}>{showErrorText}</Text>
            </View>
          )}

          <View style={styles.buttonHolder}>
            <CustomButton
              title={'Submit'}
              handleAction={handleOtpSubmit}
              color={AppColor.white}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  icon: {
    marginTop: responsive(150),
    width: responsive(100),
    height: responsive(200),
  },
  contentHolder: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    gap: responsive(20),
  },
  text: {
    fontSize: responsive(22),
    color: AppColor.white,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  lowerViewForm: {
    width: '90%',
    alignSelf: 'center',
    gap: responsive(5),
  },
  otpContainer: {
    flexDirection: 'row',
    gap: responsive(25),
    marginTop: responsive(10),
    alignItems: 'center',
    alignSelf: 'center',
  },
  otpBox: {
    width: responsive(50),
    height: responsive(50),
    borderWidth: responsive(2),
    textAlign: 'center',
    fontSize: responsive(18),
    color: AppColor.black,
    borderRadius: responsive(5),
  },
  resendButtonHolder: {
    marginLeft: responsive(25),
  },
  timerText: {
    textAlign: 'center',
    color: AppColor.white,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-600',
  },
  errorHolder: {
    marginTop: responsive(10),
  },
  errorText: {
    fontSize: responsive(16),
    color: AppColor.warning,
    fontFamily: 'OpenSans-Regular',
  },
  buttonHolder: {
    marginTop: responsive(15),
    marginBottom: responsive(25),
  },
});
