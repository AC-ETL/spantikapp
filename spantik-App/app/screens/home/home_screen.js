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
import React, {useState, useEffect} from 'react';
import Colors from '../../../assets/colors/logo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './components/header/header';
import Crausel from './components/carousel';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {baseUrl} from '../../utilities/api';
const {width, height} = Dimensions.get('screen');
import ItemCard from '../components/item_card';

const cateListItems = (item, index, navigation) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CategoryScreen');
      }}>
      <View style={styles.listItem} key={index}>
        <View>
          <Image style={styles.itemImage} source={{uri: item.imageUrl}} />
          <Text style={styles.itemTitle}>{item.name}</Text>
          {/* {console.log(item.description,"item dic")} */}
          <Text numberOfLines={3} style={styles.itemDescription}>
            {item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [categoryData, setCategoryData] = useState();
  const [SubcatData, setSubcatData] = useState();


  const addToCart = async item_to_add => {
    console.log(
      'add to cart pressed/////////////////////////////////////////////////////////////////////',
    );
    const res = await axios.post(baseUrl + `/cart`, item_to_add);
  };

  const fetchCategories = async () => {
    const category = await axios.get(baseUrl + `/category`);
    setCategoryData(category.data);
  };
  const subCatProducts = async () => {
    const subCatProducts = await axios.get(baseUrl + '/subCatProducts');
    setSubcatData(subCatProducts.data);
  };

  useEffect(() => {
    async function fetchData() {
      const subCategory = await axios.get(baseUrl + '/subCategory');
      setData(subCategory.data);
      await fetchCategories();
      await subCatProducts();
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={styles.carouselContainer}>
            <Crausel />
          </View>
        </TouchableOpacity>
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesItemContainer}>
            <FlatList
              horizontal={true}
              data={categoryData}
              renderItem={({item, index}) =>
                cateListItems(item, index, navigation)
              }
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/* Top Products Container */}
        <View style={styles.topProductsContainer}>
          <Text style={styles.topProductsTitle}>Top Products</Text>
          <View style={styles.topProductsItemContainer}>
            {SubcatData &&
              SubcatData.map((item, index) => {
                return (
                  <ItemCard
                    item={item}
                    properties={{addToCart, nav_behaviour: 'navigate'}}
                    index={index}
                    key={index}
                  />
                );
              })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  carouselContainer: {
    height: height * (18 / 100),
    flex: 1,
    backgroundColor: Colors.white,
  },

  categoriesContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    borderBottomColor: '#333',
    borderWidth: 0.2,
  },

  categoriesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: 'black',
    paddingVertical: 4,
  },

  categoriesItemContainer: {
    height: height * (35 / 100),
  },

  listItem: {
    backgroundColor: Colors.white,
    margin: 4,
    borderRadius: 8,
    width: width * (40 / 100),
    padding: 10,
    flex: 1,
  },

  itemImage: {
    height: height * (16 / 100),
    width: width * (35 / 100),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 8,
    resizeMode: 'contain' 
  },

  itemTitle: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },

  itemDescription: {
    color: 'black',
    fontFamily: 'Poppins-ExtraLight',
  },

  topProductsContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    borderBottomColor: '#333',
    borderWidth: 0.2,
  },

  topProductsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: 'black',
    paddingVertical: 4,
  },

  topProductsItemContainer: {
    flex: 1,
    borderWidth: 0.6,
  },

  topItemsCard: {
    flex: 1,
    flexDirection: 'row',
    margin: 6,
    height: height * (23 / 100),
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  rightCardSection: {
    flex: 1,
  },
  topItemThumbnail: {
    flex: 1,
    margin: 15,
    borderRadius: 16,
    elevation: 1,
  },
  thumbnailStyle: {
    flex: 1,
    borderRadius: 16,
  },
  centerCardSection: {
    flex: 1.2,
  },
  topCenter: {
    flex: 0.8,
  },
  middleCenter: {
    flex: 2,
  },
  titleContainer: {
    flex: 1,
  },
  priceContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  bottomCenter: {
    flex: 0.8,
    alignItems: 'flex-end',
  },
  leftCardSetion: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCart: {
    flex: 1,
    backgroundColor: '#28b463',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: 100,
    borderRadius: 5,
  },
});

export default HomeScreen;
