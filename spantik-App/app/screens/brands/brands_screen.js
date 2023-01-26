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
  Span,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../../assets/colors/logo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {baseUrl} from '../../utilities/api';



const {width, height} = Dimensions.get('screen');

const BrandsScreen = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const brands = await axios.get(baseUrl + `/vendors`);
      setData(brands.data);
      console.log('Fetched Data');
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleHeader}>
        <Text style={styles.headingText}>Top Brands</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {/* Brand Card */}
        {data &&
          data.map((brand, index) => {
            return (
              <View style={styles.brandCard} key={index}>
                <View style={styles.leftCard}>
                  <Image
                    source={{
                      uri: `https://pictures.grocerapps.com/original/${brand.brand_slider_image}`,
                    }}
                    style={styles.Image}
                    resizeMode="center"
                  />
                </View>
                <View style={styles.rightCard}>
                  <View style={styles.topRight}>
                    <Text style={styles.brandName}>{brand.name}</Text>
                  </View>
                  <View style={styles.midRight}>
                    <Ionicons name="flash" style={styles.rankIcon} />
                    <Text style={styles.rankText}>
                      rank-
                      <Text style={{fontSize: 12}}> {brand.rank}</Text>
                    </Text>
                  </View>
                  <View style={styles.bottomRight}>
                    <View style={styles.rightBottom}>
                      <Ionicons name="server" style={styles.productIcon} />
                      <Text style={styles.productText}>
                        Total products
                        <Text style={{fontSize: 9}}> :{brand.products}</Text>
                      </Text>
                    </View>
                    <View style={styles.leftBottom}>
                      <Ionicons name="add-circle" style={styles.joinIcon} />
                      <Text style={styles.joinText}>
                        On
                        <Text style={{fontSize: 9}}>
                          : {brand.created_at.split(' ')[0]}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e6e6',
  },
  titleHeader: {
    backgroundColor: Colors.white,
    height: width * (14 / 100),
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
  },
  headingText: {
    fontSize: 20,
    color: '#333',
  },
  scroll: {
    flex: 1,
  },
  brandCard: {
    backgroundColor: Colors.white,
    height: 120,
    margin: 8,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 4,
  },
  leftCard: {
    flex: 1,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: Colors.primaryShade,
  },
  Image: {
    flex: 1,
    margin: 6,
    borderRadius: 6,
  },
  rightCard: {
    flex: 1.5,
  },
  topRight: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  brandName: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },

  midRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  rankIcon: {
    fontSize: 14,
    color: '#D4AC0D',
  },
  rankText: {
    marginHorizontal: 4,
  },

  bottomRight: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  rightBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  productIcon: {
    fontSize: 12,
    color: '#7D3C98',
  },
  productText: {
    fontSize: 10,
    marginLeft: 4,
  },
  leftBottom: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  joinIcon: {
    fontSize: 14,
    color: '#138D75',
  },
  joinText: {
    fontSize: 10,
    marginLeft: 4,
  },
});

export default BrandsScreen;
