import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
  ToastAndroid
} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import Colors from '../../../assets/colors/logo';
import {TextInput} from 'react-native-paper';
const {width, height} = Dimensions.get('screen');
import axios from 'axios';
import { baseUrl } from '../../utilities/api';
import { useNavigation } from '@react-navigation/native';

const ForegotOtpScreen = ({route}) => {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(route.params?.phoneNumber);
  console.log(phoneNumber);
  const navigation = useNavigation();
  const submitButtonHandler = () => {
    if(otp.length === 0 || password.length === 0 || verifyPassword.length === 0 )
  {
    Alert.alert("Error","Please fill in all the fileds ");
  }
  else if(password !== verifyPassword) 
  {
    Alert.alert("Warning", "Password and verify Password doesn't match!");
  }
  else 
  {
    let user = {
      phoneNumber : phoneNumber,
      password : password,
      otp : otp
    }

    axios
    .patch(baseUrl+`/auth/newpassword`,user)
    .then((res) => {
      console.log("i am at then", res.data);
      // console.log(res);
      if(res.data=== 'Record updated'){
        ToastAndroid.showWithGravity(
          "All Your Base Are Belong To Then",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        navigation.navigate('LoginScreen');
      }
     else{
        ToastAndroid.showWithGravity(
          "All Your Base Are Belong To Error",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        navigation.navigate('ForegotPasswordScreen');
     }
    })
    .catch((error) => {
      console.log("I am at error", error);
      // console.log(error);
      ToastAndroid.showWithGravity(
        "All Your Base Are Belong To Error",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      // navigation.navigate('ForegotPasswordScreen');
    })
  }
  
  }

  return (
    <ScrollView style={{backgroundColor: Colors.primary}}>
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/lottie/otp.json')}
        autoPlay
        style={styles.gif}
      />
      <View style={styles.formContainer}>
        <TextInput
          activeUnderlineColor={Colors.primary}
          underlineColor={Colors.primary}
          label="OTP"
          style={styles.input}
          placeholder="Enter OTP you received"
          onChangeText={value => setOtp(value)}
        />
        <TextInput
          activeUnderlineColor={Colors.primary}
          underlineColor={Colors.primary}
          label="New password"
          style={styles.input}
          placeholder="Enter new password"
          onChangeText={value => setPassword(value)}
        />
        <TextInput
          activeUnderlineColor={Colors.primary}
          underlineColor={Colors.primary}
          label="Confirm new password"
          style={styles.input}
          placeholder="Confirm new password"
          onChangeText={value => setVerifyPassword(value)}
        />
        <TouchableOpacity style={styles.button} onPress={submitButtonHandler}>
          <Text style={styles.buttonlabel}>Proceed Next</Text>
        </TouchableOpacity>
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
  gif: {
    height: height * (30 / 100),
    width: width * (30 / 100),
    marginBottom: 20,
  },
  input: {
    width: width - 35,
    backgroundColor: Colors.white,
    height: 60,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: Colors.primaryShade,
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
});

export default ForegotOtpScreen;
