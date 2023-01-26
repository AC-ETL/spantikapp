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
import LottieView from 'lottie-react-native';
import Colors from '../../assets/colors/logo';
import {TextInput} from 'react-native-paper';
import React from 'react';


const {width, height} = Dimensions.get('screen');

const NoInternet = () => {
  
  return (

    <View style={styles.container}>
    <View style={{ flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    }}>
      <LottieView 
        source={require('../../assets/lottie/net.json')}
        autoPlay
        style={styles.gif}
      />
      
      <View >
         <Text style={styles.buttonlabel}>Check Your Internet Connection</Text>
         {/* <TouchableOpacity style={styles.button} onPress={()=>{{}}>
         <Text style={styles.buttonlabel}>Refresh</Text>
        </TouchableOpacity> */}
      </View>
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    
  
  },
  gif: {
    height: height * (30 / 100),
    width: width * (30 / 100),
    marginBottom: 20,
    alignSelf:"center"
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

export default NoInternet;
