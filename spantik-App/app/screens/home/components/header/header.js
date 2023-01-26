import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React,{useContext} from 'react';
import Colors from '../../../../../assets/colors/logo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
import { AlertsContext} from '../../../../contexts/alerts_context';


const Header = () => {
  const {alerts} = useContext(AlertsContext);
  const navigation = useNavigation();

  const checkAlerts = () =>{
    if(alerts === 0){
      return " ";
    }
    else
  
    // console.log(alerts,"asasasas/>>>>>>>>>><<<<<<<<<>")
     return alerts;
  }

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
            // navigation.navigate('ProductPage');
          }}>
          <Ionicons name="menu-outline" size={28} color={Colors.primaryShade} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerCenter}>
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <Ionicons
              name="search-circle-outline"
              size={28}
              color={Colors.primaryShade}
            />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products here"
            onPressIn={() => {
              navigation.navigate('SearchScreen');
              console.log('Search bar Pressed');
            }}
          />
        </View>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CartScreen');
          }}>
          <Ionicons name="cart-outline" size={28} color={Colors.blur} />
          <View style={alerts === 0 ? "none" : styles.counterText}>
          <Text style={{color: '#ffff' }}>{checkAlerts()}</Text>
          </View>
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    height: height * (8 / 100),
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.blur,
  },
  headerLeft: {
    flex: 1.2,
    backgroundColor: Colors.white,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 5,
    backgroundColor: Colors.white,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flex: 1,
    backgroundColor: Colors.white,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.blur,
  },
  searchIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    flex: 5,
  },
  counterText:{
    position:'absolute',
    top: 0,
    right:0,
    backgroundColor: '#8B2F49',
    borderRadius: 100,
    height:17,
    width:17,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default Header;
