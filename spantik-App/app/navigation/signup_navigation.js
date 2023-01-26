import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/authentication/login_screen';
import SignupScreen from '../screens/authentication/signup_screen';
import ForegotOtpScreen from '../screens/authentication/foregot_otp_screen';
import ForegotPasswordScreen from '../screens/authentication/foregot_password_screen';
import ChangePassword from '../screens/authentication/change_password';
import DrawerNavigation from '../navigation/drawer_navigation';
import HelpCenter from '../screens/help_page';
import ComplaintsPage from '../screens/complaints_page';
import PromosPage from '../screens/promos';
import SearchScreen from '../screens/search_screen';
import CartScreen from '../screens/cart_screen';
import ProductPage from '../screens/product_page';
import OrderPage from '../screens/orders_page';
import CategoryScreen from '../screens/category_screen';
import SubCatProducts from '../screens/subCatProducts_screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AlertsContext } from '../contexts/alerts_context';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

const SignupNavigator = () => {

  const { alerts } = useContext(AlertsContext);

  const checkAlerts = () => {
    if (alerts === 0) {
      return " ";
    }
    else
      return alerts;
  }

  function CartIcon({ navigation }) {
    return (
      <TouchableOpacity>
        <Ionicons
          name={'cart-outline'}
          onPress={() => {
            navigation.navigate('CartScreen');
            checkAlerts();
          }}
          size={28}
          color='#af7082'
        />
        <View style={alerts === 0 ? "none" : {
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: '#8B2F49',
          borderRadius: 100,
          height: 17,
          width: 17,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ color: '#ffff' }}>{checkAlerts()}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="ForegotOtpScreen"
        component={ForegotOtpScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="ForegotPasswordScreen"
        component={ForegotPasswordScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
              HELP CENTER
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="ComplaintsPage"
        component={ComplaintsPage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
              COMPLAINTS
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
              CHANGE PASSWORD
            </Text>
          ),
        }}
      />
      {/* <Stack.Screen
        name="PromosPage"
        component={PromosPage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
              PROMOS
            </Text>
          ),
        }}
      /> */}
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
              CART
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductPage"
        component={ProductPage}
        options={({ navigation }) => ({
          headerRight: (props) => <CartIcon {...props} navigation={navigation} />,
          headerShown: true,
          title: 'Product'
        })}
      />
      {/* <Stack.Screen
        name="OrderPage"
        component={OrderPage}
        options={{
          headerShown: true,
        }}
      /> */}
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="SubCatProductsScreen"
        component={SubCatProducts}
        options={({ navigation }) => ({
          headerRight: (props) => <CartIcon {...props} navigation={navigation} />,
          headerShown: true,
          title: 'Products'
        })}
      />
    </Stack.Navigator>
  );
};

export default SignupNavigator;
