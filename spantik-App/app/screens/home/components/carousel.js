import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React from 'react';
const {width, height} = Dimensions.get('screen');
const data = [
  {
    imgUrl: 'https://i.ibb.co/6mdKsGZ/c3.jpg',
  },
  {
    imgUrl: 'https://i.ibb.co/74KLY8T/c2.jpg',
  },
  {
    imgUrl: 'https://i.ibb.co/r6Xp5Dv/c1.jpg',
  },
];
const CarouselCardItem = ({item, index}) => {
  return (
    <Image
      resizeMode="contain"
      source={{uri: item.imgUrl}}
      style={styles.image}
      key={index}
    />
  );
};

const Crausel = () => {
  return (
    <Carousel
      layout="default"
      data={data}
      renderItem={CarouselCardItem}
      sliderWidth={width}
      itemWidth={width}
      autoplay={true}
      autoplayDelay={500}
      autoplayInterval={4000}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: height * (15 / 100),
    width: width,
  },
});

export default Crausel;
