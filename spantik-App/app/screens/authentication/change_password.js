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
import React,{useState,useContext} from 'react';
import LottieView from 'lottie-react-native';
import Colors from '../../../assets/colors/logo';
import {TextInput} from 'react-native-paper';
import axios from 'axios';
import { baseUrl } from '../../utilities/api';
import {AuthContext} from '../../contexts/auth_context';
import { useNavigation } from '@react-navigation/native';


const {width, height} = Dimensions.get('screen');

const ChangePassword = () => {
  const {userId} = useContext(AuthContext);
  const navigation = useNavigation();
  const [oldpassword, setOldpassword] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const submitButtonHandler = () => {
    if(oldpassword.length === 0 || password.length === 0 || verifyPassword.length === 0 )
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
      id:userId,
      oldpassword : oldpassword,
      newpassword : password,
      }

    axios
    .patch(baseUrl+`/auth/changepassword`,user)
    .then((res) => {
      console.log("i am at then", res.data);
      // console.log(res);
      if(res.data=== 'Record updated'){
        ToastAndroid.showWithGravity(
          "All Your Base Are Belong To Then",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        navigation.navigate('DrawerNavigation');
      }
     else{
        ToastAndroid.showWithGravity(
          "All Your Base Are Belong To Error",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
    //     navigation.navigate('ForegotPasswordScreen');
     }
    }
    )
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

    <ScrollView style={styles.container}>
    <View style={{ flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',}}>
      <LottieView
        source={require('../../../assets/lottie/change_passwords.json')}
        autoPlay
        style={styles.gif}
      />
      <View style={styles.formContainer}>
        <TextInput
          activeUnderlineColor={Colors.primary}
          underlineColor={Colors.primary}
          label="Old password"
          style={styles.input}
          placeholder="Old password "
          onChangeText={value => setOldpassword(value)}
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
          <Text style={styles.buttonlabel}>Change Password</Text>
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
    // alignItems: 'center',
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

export default ChangePassword;
