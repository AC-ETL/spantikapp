import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect, useContext} from 'react';
import Logo from '../../assets/images/logo/logo.png';
import {GlobalContext} from '../contexts/global_context';
const {width, height} = Dimensions.get('screen');
const SplashScreen = () => {
  const {cartData, setCartData} = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: height - 400,
    width: width - 100,
    borderRadius: 20,
  },
});

export default SplashScreen;
