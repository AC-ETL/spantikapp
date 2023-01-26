import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import {baseUrl} from '../utilities/api';
import Colors from '../../assets/colors/logo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
import axios from 'axios';
import ItemCard from './components/item_card';
import { AuthContext } from '../contexts/auth_context';

import { AlertsContext } from '../contexts/alerts_context';

const ProductPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState();
  const {triggerAlertEffect} = useContext(AlertsContext);
  const {userId} = useContext(AuthContext);
  const [isLoading,setIsLoading] = useState(false);
  
  // This function will be triggered when the button is pressed
  const toggleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const addToCart = async (item_to_add) => {
    const res = await axios.post(baseUrl+`/cart`, item_to_add);
    console.log(res,"add to cart")
    triggerAlertEffect();
  };

  useEffect(() => {
    async function fetchData() {
      const products = await axios.get(baseUrl + '/subCatProducts');
      setData(products.data);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {/* Main View */}
      <View style={styles.container}>
        <ScrollView
          styles={styles.scrollStyle}
          showsVerticalScrollIndicator={false}>
          {/* Title Container */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyles}>{route.params.name}</Text>
          </View>
          {/* Image Container */}
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: route.params.imageUrl,
              }}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.leftInfo}>
              <Text style={styles.price}>Rs.{route.params.price}</Text>
            </View>
            <View style={styles.rightInfo}>
              <Ionicons
                name="heart-outline"
                style={styles.favouriteIcon}
                size={26}
              />
              <Text style={styles.sku}>{route.params.unit}</Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.moreItemTitle}>More items</Text>
          </View>

          {/* More Item Card */}

          {data &&
            data.map((item, index) => {
              console.log(item);
              return (
                <ItemCard
                  item={item}
                  properties={{addToCart, nav_behaviour: 'replace'}}
                  index={index}
                  key={index}
                />
              );
            })}
        </ScrollView>
      </View>
      {/* Add to Card Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await addToCart({
              ...route.params,
              quantity: 1,
              item_total: route.params.price * 1,
              user_id: userId,
            });
            await toggleLoading();
          }}>
          <View
            style={[{
              flex: 1,
              justifyContent: "center"
          
            }]}
            >
              {isLoading && <ActivityIndicator size="small" color={'white'} />}

              {!isLoading && <Text style={styles.buttonTitle}>Add to Cart</Text>}
            </View>
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'purple',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollStyle: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: width * 0.13,
    justifyContent: 'center',
  },
  titleStyles: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    height: height * 0.24,
    backgroundColor: Colors.white,
    borderWidth: 0.2,
  },
  imageStyle: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: width * 0.16,
    borderBottomWidth: 0.2,
  },
  leftInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },

  rightInfo: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  favouriteIcon: {
    color: '#EC7063',
  },
  sku: {
    fontSize: 16,
  },
  moreItemTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: Colors.white,
  },
  buttonContainer: {
    flex: 0.1,
    backgroundColor: Colors.white,
    elevation: 2,
  },
  moreItemCard: {
    flex: 1,
    backgroundColor: Colors.white,
    height: width * 0.4,
    margin: 6,
    borderRadius: 8,
  },
  topItemsCard: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    height: width * 0.45,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 3,
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
  titleMiddleContainer: {
    flex: 1,
  },
  priceContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  bottomCenter: {
    flex: 1,
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
  button: {
    flex: 1,
    backgroundColor: '#8a2e48',
    marginHorizontal: width * 0.1,
    marginVertical: width * 0.01,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonTitle: {
    color: Colors.white,
    fontSize: 15,
    letterSpacing: 1,
  },
});

export default ProductPage;
