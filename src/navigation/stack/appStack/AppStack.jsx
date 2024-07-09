import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from '../../bottom/BottomNavigation';
import EditProfile from '../../../components/profile/EditProfile';
import Setting from '../../../components/profile/Setting';
import Kyc from '../../../components/profile/Kyc';
import Notification from '../../../components/profile/Notification';
import Transaction from '../../../components/profile/Transaction';
import WorkHistory from '../../../components/profile/WorkHistory';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen 
      name='Edit Profile'
      component={EditProfile}
      />
      <Stack.Screen 
      name='Setting'
      component={Setting}/>
      <Stack.Screen
      name='KYC'
      component={Kyc}
      />
      <Stack.Screen
      name='Notification'
      component={Notification}/>
      <Stack.Screen
      name='Transaction'
      component={Transaction}/>
      <Stack.Screen
      name='Work History'
      component={WorkHistory}/>
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
