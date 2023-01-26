import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../screens/components/search_bar';
import Colors from '../../assets/colors/logo';
import {baseUrl} from '../utilities/api';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import ItemCard from './components/item_card';
const SearchScreen = () => {
  const [data, setData] = useState(false);

  const fetchQueryData = async (query) => {
    const res = await axios.get(baseUrl + `/subCatProducts?name=${query}`);
    setData(res.data);
  };

  const addToCart = async item_to_add => {
    const res = await axios.post(baseUrl + `/cart`, item_to_add);
    console.log('From Search Screen : Item added to cart.');
  };

  return (
    <View style={styles.container}>
      <SearchBar properties={{fetchQueryData}} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {data &&
          data.map((item, index) => {
            return (
              <ItemCard
                item={item}
                properties={{addToCart, nav_behaviour: 'navigate'}}
                index={index}
                key={index}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scroll: {
    backgroundColor: '#e4e5e5',
  },
});

export default SearchScreen;
