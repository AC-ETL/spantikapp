import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

const renderList = ({item, index}) => {
  return (
    <View style={styles.listItem} key={index}>
      <TouchableOpacity>
        <Text style={styles.questions}>{item}</Text>
      </TouchableOpacity>
    </View>
  );
};

const data = [];

const HelpPage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderList}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  flatList: {
    flex: 1,
    width: width,
  },
  listItem: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#333',
  },
  questions: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HelpPage;
