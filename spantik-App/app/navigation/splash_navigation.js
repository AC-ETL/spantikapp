import {View, Text, ActivityIndicator,} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignupNavigation from './signup_navigation';
import SplashScreen from '../screens/splash_screen';
import {storeData, getData} from '../utilities/asyn_storage';
import HomeNavigation from './home_navigation';
import LoginScreen from '../screens/authentication/login_screen';
import SignupScreen from '../screens/authentication/signup_screen';
import ForegotOtpScreen from '../screens/authentication/foregot_otp_screen';
import ForegotPasswordScreen from '../screens/authentication/foregot_password_screen';
import ChangePassword from '../screens/authentication/change_password';
import {GlobalContext} from '../contexts/global_context';
import axios from 'axios';
import TestScreen from '../screens/test_screen';
const Stack = createNativeStackNavigator();
import OrdersPage from '../screens/orders_page';
import {AuthContext} from '../contexts/auth_context';
import NetInfo from "@react-native-community/netinfo";

const Splash = () => {
  const [isSplash, setIsSplash] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(null);
  const {userToken, triggerAuthEffect} = useContext(AuthContext);

  
  const checkUserToken = async () => {
    if (userToken) {
      setIsSignedIn(userToken);
      triggerAuthEffect();
    } else {
    }
  };

  useEffect(() => {
    checkUserToken();
    setTimeout(() => {
      setIsSplash(false);
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSplash && (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        )}

        {/* <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{headerShown: false}}
        /> */}
        <>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="SignupNavigation"
                component={SignupNavigation}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="OrdersPage"
                component={OrdersPage}
                options={{headerShown: true}}
              />
               
            </>
          ) : (
            <>
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ForegotOtpScreen"
                component={ForegotOtpScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ForegotPasswordScreen"
                component={ForegotPasswordScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{headerShown: false}}
              />
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Splash;
