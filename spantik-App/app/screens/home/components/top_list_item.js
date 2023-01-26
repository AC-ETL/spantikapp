import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import Colors from '../../../assets/colors/logo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './components/header/header';
import Crausel from './components/carousel';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const categoryData = [
  {
    title: 'Title One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image:
      'https://pictures.grocerapps.com/lgthumb/grocerapp-grocery-61e9620ce82bd.jpeg',
  },
  {
    title: 'Title Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image:
      'https://pictures.grocerapps.com/lgthumb/grocerapp-frozen-chilled-61eab714bcb1c.jpeg',
  },
  {
    title: 'Title Three',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image:
      'https://pictures.grocerapps.com/lgthumb/grocerapp-dry-fruit-nuts-61e94d6bb7e4e.jpeg',
  },
  {
    title: 'Title Four',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image:
      'https://pictures.grocerapps.com/lgthumb/grocerapp-fruits-vegetables-61e92c79e6a95.jpeg',
  },
  {
    title: 'Title Five',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image:
      'https://pictures.grocerapps.com/lgthumb/grocerapp-beverages-61eab9642ec81.jpeg',
  },
  {
    title: 'Title Six',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image:
      'https://pictures.grocerapps.com/lgthumb/grocerapp-bakery-dairy-61eab95d92b7a.jpeg',
  },
  {
    title: 'Title Seven',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image:
      'https://pictures.grocerapps.com/lgthumb/grocerapp-dry-fruit-nuts-61e94d6bb7e4e.jpeg',
  },
  {
    title: 'Title Eight',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image:
      'https://pictures.grocerapps.com/lgthumb/grocerapp-pet-care-61eab776d8cd0.jpeg',
  },
];

const TopListItem = () => {
  return (
    <View>
      <Text>TopListItem</Text>
    </View>
  );
};

export default TopListItem;
