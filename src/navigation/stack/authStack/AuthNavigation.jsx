import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../../../screen/authScreen/Welcome';
import Registration from '../../../screen/authScreen/Registration';
import Login from '../../../screen/authScreen/Login';
import OTP from '../../../screen/authScreen/OTP';
import AppStack from '../appStack/AppStack';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name='appNavigation'
        component={AppStack}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
