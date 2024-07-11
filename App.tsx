import {StatusBar, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import AppColor from './src/utils/AppColor';
import AuthNavigation from './src/navigation/stack/authStack/AuthNavigation';
import NoInternet from './src/utils/NoInternet';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(state.isConnected, 'Line 16');
      setIsConnected(state.isConnected);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={AppColor.primary} barStyle="light-content" />
      {/* <Welcome/> */}
      {/* <Registration/> */}
      {/* <Login/> */}
      {/* <OTP/> */}
      {isConnected ? <AuthNavigation /> : <NoInternet />}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
