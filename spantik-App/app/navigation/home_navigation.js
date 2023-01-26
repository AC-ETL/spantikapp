import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/home_screen';
import BrandsScreen from '../screens/brands/brands_screen';
import ProfileScreen from '../screens/profile/profile_screen';
import CategoryScreen from '../screens/category_screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../assets/colors/logo';
const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons
              name="home-outline"
              size={24}
              style={{color: Colors.primaryShade}}
            />
          ),
          tabBarLabel: 'Home',
          tabBarActiveTintColor: Colors.primary,
          tabBarLabelStyle: {fontWeight: 'bold'},
          headerTitleAlign: 'center',
          headerTitle: 'Home',
          tabBarHideOnKeyboard: true,
        }}
      />
      {/* <Tab.Screen
        name="BrandsScreen"
        component={BrandsScreen}
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <Ionicons
              name="pricetags-outline"
              size={24}
              style={{color: Colors.primaryShade}}
            />
          ),
          tabBarLabel: 'Brand',
          tabBarActiveTintColor: Colors.primary,
          tabBarLabelStyle: {fontWeight: 'bold'},
          headerLeftContainerStyle: {marginLeft: 15},
          headerTitleAlign: 'center',
          headerTitle: 'Brands',
          tabBarHideOnKeyboard: true,
        }}
      /> */}
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <Ionicons
              name="body-outline"
              size={24}
              style={{color: Colors.primaryShade}}
            />
          ),
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: Colors.primary,
          tabBarLabelStyle: {fontWeight: 'bold'},
          headerTitleAlign: 'center',
          headerTitle: 'MY ACCOUNT',
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
