import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../../screen/appScreen/Home';
import Post from '../../screen/appScreen/Post';
import CreatePost from '../../screen/appScreen/CreatePost';
import Search from '../../screen/appScreen/Search';
import Profile from '../../screen/appScreen/Profile';
import AppColor from '../../utils/AppColor';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {responsive} from '../../utils/Responsive';
import {Alert, StyleSheet} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      activeColor={AppColor.white}
      inactiveColor={AppColor.black}
      activeIndicatorStyle={style.main}
      onTabLongPress={() => Alert.alert('Show ')}
      barStyle={style.barStyle}
      keyboardHidesNavigationBar={true} 
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign
              name="home"
              size={responsive(24)}
              color={AppColor.black}
            />
          ),
        }}
      />
     
    
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <AntDesign
              name="search1"
              size={responsive(24)}
              color={AppColor.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <AntDesign
              name="user"
              size={responsive(24)}
              color={AppColor.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const style = StyleSheet.create({
  main: {
    backgroundColor: AppColor.white,
    width: responsive(40),
    height: responsive(40),
    borderRadius: responsive(20),
  },
  barStyle: {
    justifyContent:'center',
    overflow: 'hidden',
    backgroundColor: AppColor.primary,
  },
});
