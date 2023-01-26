import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../assets/colors/logo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const Header = ({properties}) => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <Ionicons
            name="arrow-back-outline"
            size={28}
            color={Colors.primaryShade}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerCenter}>
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <Ionicons
              name="search-circle-outline"
              size={28}
              color={Colors.primaryShade}
              onPress={async () => {
                await properties.fetchQueryData(inputText);
              }}
            />
          </View>
          <TextInput
            returnKeyType="done"
            onKeyPress={async () => {
              await properties.fetchQueryData(inputText);
            }}
            style={styles.searchInput}
            placeholder="search item here"
            onPressIn={e => {
              console.log('Search bar pressed');
            }}
            onChangeText={e => {
              setInputText(e);
              console.log(inputText);
            }}
          />
        </View>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('CartScreen');
          }}>
          <Ionicons name="cart-outline" size={28} color={Colors.blur} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    height: height * (10 / 100),
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
    marginVertical: 10,
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
});

export default Header;
