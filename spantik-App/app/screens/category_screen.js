import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  Pressable
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {baseUrl} from '../utilities/api';
import Loading from './loading';
const {width, height} = Dimensions.get('screen');


const CateListItems = ({item, index}) => {
  return (
    <Pressable
      onPress={() => {
        console.log(">>> touchable ");
        // navigation.navigate('subCatProducts');
      }}>
      <View style={styles.listItem} key={index}>
        <View>
          <Image style={styles.itemImage} source={{uri: item.imageUrl}} />
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text numberOfLines={3} style={styles.itemDescription}>
            {item.desc}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const CategoryScreen = () => {
  const [data, setData] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(baseUrl + `/category`);
      setData(res.data);
    }
    fetchData();
  }, []);
  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}> 
      {data ?
        data.map((category, index) => {
          console.log(category);
          return (
            <View style={styles.mainCatContainer} key={index}>
              {/* Title etc Container */}
              <View style={styles.infoContainer}>
                <Text style={styles.mainTitle}>{category.name}</Text>
                <Text style={styles.subTitle}>{category.description}</Text>
              </View>
              {/* Subcategory Cards Container */}
              <View style={styles.subCatContainer}>
                {/* SubCards */}
                {category.subcategories.map((item, index) => {
                  console.log("?????????????????",item);
                  <CateListItems item={item} index={index}/>    
                  // console.log(item);
                  return (
                    
                    <Pressable onPress={
                      () =>{
                        console.log("item pressed",item.products);
                         navigation.navigate('SubCatProductsScreen',{
                          products : item.products
                         });
                      }
                    } style={styles.subCatCard} key={index}>
                      <View style={styles.thumbnailContainer}>
                        <Image
                          source={{
                            uri: item.imageUrl,
                          }}
                          style={styles.image}
                        />
                      </View>
                      <View style={styles.subCarInfoContainer}>
                        <Text style={styles.subName}>{item.name}</Text>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          );
        }):<Loading/>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  mainCatContainer: {
    backgroundColor: '#D7DBDD',
    minHeight: height * (35 / 100),
    margin: 8,
    borderRadius: 6,
    elevation: 4,
  },
  infoContainer: {
    backgroundColor: '#8a2e48',
    // backgroundColor: '#e1c556',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    minHeight: 80,
    padding: 4,
  },
  mainTitle: {
    fontSize: 18,
    // color: '#333',
    color: '#fefefe',
  },
  subTitle: {
    // color: '#2C3E50',
    color: '#e3dddc',
  },
  subCatContainer: {
    flex: 1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subCatCard: {
    backgroundColor: '#f1f1f1',
    height: height * (20 / 100),
    width: width * (29 / 100),
    borderRadius: 6,
    margin: 4,
  },
  thumbnailContainer: {
    flex: 2,
    // backgroundColor: 'yellow',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    margin: 14,
    elevation: 1,
  },
  image: {
    flex: 1,
    borderRadius: 6,
    // width: null,
    // height: null,
    // resizeMode: 'contain'
  },
  subCarInfoContainer: {
    flex: 1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    alignItems: 'center',
  },
  subName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
});

export default CategoryScreen;
