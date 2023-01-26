import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  RefreshControl,
  Alert
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {GlobalContext} from '../contexts/global_context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {baseUrl} from '../utilities/api';
const {width, height} = Dimensions.get('screen');


const OrdersPage = () => {
  
  console.log(Dimensions);
  const {ordersData, fetchOrders} = useContext(GlobalContext);
  const [buttonDisable, setButtonDisable] = useState(false);
  // const [orderFetch, setOrderFetch] = useState(ordersData);
  useEffect(() => {
    async function foo (){
    let data = await fetchOrders();
    }
    foo();
  }, []);

  const setButtonstate = () =>{
     setButtonDisable(true);
  }

  const closeButtonHanddler = async (id, order) => {
    Alert.alert(
      "Warning!",
      "Are you sure to cancle the order?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: async(res) => {
           res = await axios.put(baseUrl + `/orders/${id}`, order);
           let data = await fetchOrders();
           console.log("data",data);
           
           setOrderFetch(data);
         }
        }
      ]
    );

  };
  const [refreshing,setRefreshing] = useState(false);

  const onRefresh = async() =>{
    setRefreshing(true);
    await fetchOrders();
    setRefreshing(false);
  }

  return (
    <ScrollView style={styles.scroll}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }
    >
      {/* Order Container */}
      {ordersData &&
        ordersData.map((order, index) => {
          return (
            <View style={styles.orderContainer} key={index}>
              {/* Container Header */}
              <View
                style={
                  order.status == 'Active'
                    ? styles.activeHeader
                    : order.status == 'Completed'
                    ? styles.completeHeader
                    : order.status == 'Cancel'
                    ? styles.canceledHeader
                    : styles.activeHeader
                }>
                <View style={styles.phl}>
                  <Text style={styles.orderId}>Order#</Text>
                  <Text style={styles.orderId}>{order.id}</Text>
                </View>
                <View style={styles.phc}>
                  <Text style={styles.status}>
                    Status: {order.status}
                  </Text>
                  <Text style={styles.totalAmount}>
                    Total Bill: Rs.{order.totalPrice}
                  </Text>
                </View>
                <View style={styles.phr}  >
                  <Ionicons
                    name="close-circle"
                    style={order.status === 'Completed'  ? styles.completedButton : styles.closeButton}
                    onPress={order.status === 'Completed' || order.status === 'Cancel'  ? () =>{} : async () => {
                      order.status = 'Cancel';
                      await closeButtonHanddler(order.id, order)
                      .then((checkButton)=>{
                      console.log('Close Button Pressed', checkButton)})
                      .catch((error)=>{
                        console.log(error);
                      })
                    }}
                    
                  />
                </View>
              </View>
              {order.orderdetails.map((item, index) => {
                return (
                  <View style={styles.orderCard} key={index}>
                    <View style={styles.rightCard}>
                      <View style={styles.imageContainer}>
                        <Image
                          source={{
                            uri: item.product.imageUrl, 
                          }}
                          style={styles.image}
                        />
                      </View>
                    </View>
                    <View style={styles.leftCard}>
                      <View style={styles.topLeftCard}>
                        <Text style={styles.title}>{item.product.name}</Text>
                        <Text style={styles.unit}>{item.unit}</Text>
                      </View>
                      <View style={styles.bottomLeftCard}>
                        <Text style={styles.total}>
                          Rs.{item.product.price * item.quantity}
                        </Text>
                        <Text style={styles.quantity}>
                          Rs.{item.product.price}-(*{item.quantity})
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#e9eaeae1',
  },
  orderContainer: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: height * (30 / 100),
    margin: 10,
    borderRadius: 20,
    elevation: 6,
  },
  activeHeader: {
    backgroundColor: '#52BE80',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    flexDirection: 'row',
  },
  completeHeader: {
    backgroundColor: '#99A3A4',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    flexDirection: 'row',
  },
  canceledHeader: {
    backgroundColor: '#F1948A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    flexDirection: 'row',
  },
  phl: {
    flex: 1.4,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 18,
    color: '#333',
  },
  phc: {
    flex: 3,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  status: {
    fontSize: 18,
    // fontWeight: 'initial'
  },
  totalAmount: {
    fontSize: 18,
    // fontWeight: 'bold',
    marginBottom: '10%'
  },
  phr: {
    flex: 1,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    fontSize: 28,
    color: '#E74C3C',
  },
  completedButton: {
    fontSize: 28,
    color: '#79867d',
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#e9eaea',
    height: width * (40 / 100),
    borderRadius: 20,
    margin: 6,
    elevation: 6,
  },
  rightCard: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    marginVertical: 16,
    marginHorizontal: 8,
    elevation: 2,
  },
  image: {
    flex: 1,
    borderRadius: 15,
  },
  leftCard: {
    flex: 1.5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  topLeftCard: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  unit: {
    color: '#333',
    marginVertical: 6,
  },
  bottomLeftCard: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    color: '#333',
  },
});

export default OrdersPage;
