import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import React from 'react';
import Colors from '../../assets/colors/logo';

const {width, height} = Dimensions.get('screen');

const data = [];

const renderItem = ({item, index}) => {
  return (
    <View key={index} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoHeader}>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{item.title}</Text>
          </View>

          <View style={{flex: 0.4}}>
            <Text style={styles.issuedAgo}>{item.issuedAgo}</Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.expiration}>{item.expiration}</Text>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonTitle}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Promos = () => {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: Colors.white,
    margin: '3.1%',
    borderRadius: 10,
    minHeight: height * (40 / 100),
    width: width * (94 / 100),
    elevation: 7,
  },
  imageContainer: {
    flex: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  infoContainer: {
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  infoHeader: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 18,
  },
  descriptionContainer: {
    flex: 1,
    padding: 6,
  },
  description: {
    fontSize: 15,
  },
  footer: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  expiration: {
    color: 'red',
    fontSize: 14,
  },
  button: {
    backgroundColor: Colors.primaryShade,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Promos;
