import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
  DevSettings,
  ToastAndroid
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useContext, useEffect, useState } from 'react';
import Colors from '../../../assets/colors/logo';
import Logo from '../../../assets/images/logo/logo.png';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseUrl } from '../../utilities/api';
// import Toast from "react-native-toast-message";
import { storeData , getData, removeData} from '../../utilities/asyn_storage';
const { width, height } = Dimensions.get('screen');
import {AuthContext} from '../../contexts/auth_context';
import RNRestart from 'react-native-restart';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const {userToken, triggerAuthEffect } = useContext(AuthContext);

  const submitButtonHandler = async() => {

    if(phoneNumber.length === 0 || password.length === 0)
    {
      Alert.alert("Warning", "Phone number/ Password is missing!");
    }else
    {
      let user = {
        phoneNumber: phoneNumber,
        password: password
      }
        
        axios
        .post(baseUrl + `/auth/signin`, user)
        .then(async(res) => {
          const user = res.data.user;
           if (user.jwt) {
            await storeData("jwt",user.jwt);
            await storeData("userId", user.userId);
            await storeData("userName", user.userName);
            await storeData("phoneNumber", user.phoneNumber);
            // DevSettings.reload();
            RNRestart.Restart();
            ToastAndroid.showWithGravity(
              "Success!",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          }
          else{
            Alert.alert("Warning!","Please Enter Correct Phone number or password");
            navigation.navigate("LoginScreen");
          }
        })
        .catch((error)=>{
          Alert.alert("Error!","Please Enter Correct Phone number or password!");
          navigation.navigate("LoginScreen");
        });
    }
    
  };
  return (
    <ScrollView style={{ backgroundColor: Colors.primary }}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.formContainer}>
          <TextInput
            keyboardType="number-pad"
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Phone Number"
            style={styles.input}
            placeholder="Enter your number i.e 03056649826"
            onChangeText={value => setPhoneNumber(value)}
          />

          <TextInput
            secureTextEntry={true}
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Password"
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={value => setPassword(value)}
          />

          <Text
            style={styles.foregot}
            onPress={() => {
              navigation.navigate('ForegotPasswordScreen');
            }}>
            Forgot Password?
          </Text>

          <TouchableOpacity style={styles.button} onPress={submitButtonHandler}>
            <Text style={styles.buttonlabel}>Sign in</Text>
          </TouchableOpacity>

          <Text style={styles.textOne}>
            {"Not a User? "}
            <Text
              onPress={() => {
                navigation.navigate('SignupScreen');
              }}
              style={{ color: Colors.primary }}>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  logo: {
    width: width - 200,
    height: height - 500,
    marginTop: width - 300,
    marginBottom: 15,
    borderWidth: 3,
    borderRadius: 7,
  },
  formContainer: {
    margin: 20,
    flex: 1,
    backgroundColor: Colors.blur,
    borderRadius: 9,
  },
  input: {
    width: width - 35,
    backgroundColor: Colors.white,
    height: 60,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  lable: {
    marginHorizontal: 12,
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 17,
  },
  button: {
    backgroundColor: Colors.primary,
    margin: 10,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonlabel: {
    fontSize: 18,
    color: 'white',
  },
  textOne: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    margin: 5,
    textAlign: 'center',
  },
  foregot: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: '600',
    color: '#000000',
  },
});

export default LoginScreen;
