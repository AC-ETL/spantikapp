import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import Colors from '../../../assets/colors/logo';
import Logo from '../../../assets/images/logo/logo.png';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import { baseUrl } from '../../utilities/api';

const {width, height} = Dimensions.get('screen');
const ForegotPasswordScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber , setPhoneNumber ] = useState('');

  const submitButtonHandler = () => {
    if(phoneNumber.length === 0)
    {
      Alert.alert("Warning","Please Enter your Phone Number.");
    }
    else{
      axios
      .patch(baseUrl + `/auth/generateotp`,{phoneNumber})
      .then((res)=>{
        console.log(res.data);
      })
      setTimeout(() => {
        navigation.navigate('ForegotOtpScreen',{
          phoneNumber : phoneNumber
        });
      }, 300);
      
    }
    
  };
  return (
    <ScrollView style={{backgroundColor: Colors.primary}}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.formContainer}>
          <TextInput
            keyboardType="phone-pad"
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Phone number"
            style={styles.input}
            placeholder="Enter your number i.e +923056649826"
            onChangeText={value => setPhoneNumber(value)}
            maxLength={13}
          />

          <TouchableOpacity style={styles.button} onPress={submitButtonHandler}>
            <Text style={styles.buttonlabel}>Send Code</Text>
          </TouchableOpacity>
          <Text style={styles.textOne}>
            {"Remember password? "}
            <Text
              onPress={() => {
                navigation.pop();
              }}
              style={{color: Colors.primary}}>
              Sign in
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
    height: height - 600,
    marginTop: width - 280,
    marginBottom: 15,
    borderWidth: 3,
    // borderColor: Colors.blue,
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
    color: '#3498DB',
  },
});

export default ForegotPasswordScreen;
