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
      barStyle={style.barStyle}>
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
        name="Feed"
        component={Post}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}) => (
            <AntDesign
              name="hearto"
              size={responsive(24)}
              color={AppColor.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={CreatePost}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color}) => (
            <AntDesign
              name="pluscircle"
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
    backgroundColor: AppColor.light_Blue,
    width: responsive(40),
    height: responsive(40),
    borderRadius: responsive(20),
  },
  barStyle: {
    height: responsive(70),
    width: '95%',
    borderRadius: responsive(20),
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: responsive(20),
    elevation: responsive(10),
    backgroundColor: AppColor.primary,
  },
});
