import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import ImagePath from '../../utils/ImagePath';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [waringText, setWaringText] = useState('');
  useEffect(() => {
    if (userId.length > 0) {
      setWaringText('');
    }
  }, [userId]);

  const handleLogin = () => {
    if (userId.trim() === '') {
      setWaringText('Please enter the valid User Id');
      return;
    }
    try {
      if (userId === 'aviashishranjan@gmail.com') {
        console.log(userId,"Line 35")
        // dispatch(login('Yes'));
        // await AsyncStorage.setItem('isUserId', 'Yes');
        //   navigation.navigate('OTP');
      } else {
        setWaringText('Invalid Credentials');
      }
    } catch (error) {}
  };
  const handleCreateAccount = () => {
    console.log("clicked on the create account")
  }
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{backgroundColor: AppColor.primary}} />
      <View style={styles.imageHolder}>
        <Image
          source={ImagePath.splash}
          resizeMode="cover"
          style={styles.imageStyle}
        />
        <Text style={styles.text}>Welcome Worker</Text>
        <Text style={styles.text}>Login</Text>
        <View style={styles.inputHolder}>
          <Text style={styles.label}>Enter User Id</Text>
          <View style={styles.inputBox}>
            <Feather
              name="user"
              size={responsive(30)}
              color={AppColor.primary}
            />
            <TextInput
              style={styles.textInputBox}
              placeholder="Enter User Id"
              value={userId}
              placeholderTextColor={AppColor.primary}
              onChangeText={text => setUserId(text)}
            />
            {userId.length > 0 && (
              <TouchableOpacity onPress={() => setUserId('')}>
                <Ionicons
                  name="close-circle-outline"
                  size={responsive(30)}
                  color={AppColor.primary}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {waringText && <Text style={styles.waringText}>{waringText}</Text>}

        <View style={{width: '90%', alignSelf: 'center'}}>
          <CustomButton
            title={'Login'}
            handleAction={handleLogin}
            color={AppColor.white}
          />
        </View>

        <View style={{width: '90%', alignSelf: 'center'}}>
          <CustomButton
            title={'Create Account'}
            handleAction={handleCreateAccount}
            color={AppColor.dark_Green}
          />
        </View>

      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  imageHolder: {
    width: '95%',
    marginTop: responsive(150),
    alignSelf: 'center',
    gap: responsive(15),
    justifyContent: 'center',
    zIndex: 1,
  },
  imageStyle: {
    height: responsive(200),
    width: responsive(275),
    alignSelf: 'center',
  },
  text: {
    fontSize: responsive(22),
    color: AppColor.white,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  inputHolder: {
    width: '90%',
    padding: responsive(10),
    borderRadius: responsive(10),
    alignSelf: 'center',
    gap: responsive(10),
    backgroundColor: AppColor.white,
  },
  label: {
    fontSize: responsive(18),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
  },
  textInputBox: {
    width: '75%',
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.primary,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(10),
  },
  waringText: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.warning,
    textAlign: 'center',
  },
  createAccount: {
    padding: responsive(10),
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: responsive(20),
    color: AppColor.light_Yellow,
    fontFamily: 'OpenSans-Medium',
  },
});
