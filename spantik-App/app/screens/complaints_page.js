import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('screen');
import Colors from '../../assets/colors/logo';


const renderList = ({item, index}) => {
  return (
    <View style={styles.listItem} key={index}>
    
      <View style={styles.leadingIcon}>
        <Ionicons name="bug" size={20} color="#333" />
      </View>
      <TouchableOpacity style={styles.questionsContainer}>
        <Text style={styles.questions}>{item}</Text>
      </TouchableOpacity>
      <View style={styles.postIcon}>
        <Ionicons name="arrow-forward-circle" size={18} color="#333" />
      </View>
    </View>
  );
};

const data = ["Please Contact Us:03114900152"];

const ComplaintPage = () => {
  return (
    <View style={styles.container}>
    {/* <Text>test</Text> */}
      {/* <FlatList
        data={data}
        renderItem={renderList}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      /> */}
         {/* Terms & Condition Component */}
         <View style={styles.termsContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.languageTitle}>
            <Text style={styles.l1}>Complaints</Text>
         
          </View>

        </View>

        <View style={styles.divider}></View>

        <View style={styles.termContainer}>
          <Text style={styles.termsConditions}>If you need help filing a complaint, call 03246160105, from 8 a.m. to 5 p.m., Central Time, Monday to Friday.</Text>
        </View>
      </View>
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
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#333',
  },
  questionsContainer: {
    flex: 6,
    marginLeft: 3,
  },
  questions: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  leadingIcon: {
    flex: 0.5,
    justifyContent: 'center',
  },
  postIcon: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  termsContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    width: width * (90 / 100),
    height: height * (15 / 100),
    alignSelf: 'center',
    marginVertical: 40,
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 15,
  },
  languageTitle: {
    flexDirection: 'row',
  },
  switchStyle: {
    color: Colors.primaryShade,
  },
  titleContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    borderColor: '#333',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    flex: 0.1,
  },
  termContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  termsConditions: {
    fontSize: 16,
    fontWeight: 'bold',
  },  l1: {
    fontWeight: 'bold',
    color: Colors.blur,
  },
});

export default ComplaintPage;
