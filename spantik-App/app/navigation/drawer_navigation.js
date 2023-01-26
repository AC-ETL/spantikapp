import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './home_navigation';
import Colors from '../../assets/colors/logo';
import CartPage from '../screens/cart_screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PromoScreen from '../screens/promos';
import ComplaintsScreen from '../screens/complaints_page';
import HelpScreen from '../screens/help_page';
import OrdersScreen from '../screens/orders_page';
import CategoryScreen from '../screens/category_screen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: false,
          drawerLabel: 'Home',
          drawerActiveBackgroundColor: Colors.blur,
          drawerActiveTintColor: Colors.primary,
          drawerLabelStyle: {letterSpacing: 1},
          drawerIcon: ({focused}) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? Colors.primary : Colors.blur}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerShown: true,
          drawerLabel: 'Categories',
          headerTitle: 'Categories',
          drawerActiveBackgroundColor: Colors.blur,
          drawerActiveTintColor: Colors.primary,
          drawerLabelStyle: {letterSpacing: 1},
          drawerIcon: ({focused}) => (
            <Ionicons
              name="shapes"
              size={24}
              color={focused ? Colors.primary : Colors.blur}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CartPage"
        component={CartPage}
        options={{
          headerShown: true,
          drawerLabel: 'Cart',
          headerTitle: 'Cart',
          drawerActiveBackgroundColor: Colors.blur,
          drawerActiveTintColor: Colors.primary,
          drawerLabelStyle: {letterSpacing: 1},
          drawerIcon: ({focused}) => (
            <Ionicons
              name="cart"
              size={24}
              color={focused ? Colors.primary : Colors.blur}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          headerShown: true,
          drawerLabel: 'Orders',
          headerTitle: 'Orders',
          drawerActiveBackgroundColor: Colors.blur,
          drawerActiveTintColor: Colors.primary,
          drawerLabelStyle: {letterSpacing: 1},
          drawerIcon: ({focused}) => (
            <Ionicons
              name="albums"
              size={24}
              color={focused ? Colors.primary : Colors.blur}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="PromoScreen"
        component={PromoScreen}
        options={{
          headerShown: true,
          drawerLabel: 'Promos',
          headerTitle: 'Promos',
          drawerActiveBackgroundColor: Colors.blur,
          drawerActiveTintColor: Colors.primary,
          drawerLabelStyle: {letterSpacing: 1},
          drawerIcon: ({focused}) => (
            <Ionicons
              name="cash"
              size={24}
              color={focused ? Colors.primary : Colors.blur}
            />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="ComplaintsScreen"
        component={ComplaintsScreen}
        options={{
          headerShown: true,
          drawerLabel: 'Complaints',
          headerTitle: 'Complaints',
          drawerActiveBackgroundColor: Colors.blur,
          drawerActiveTintColor: Colors.primary,
          drawerLabelStyle: {letterSpacing: 1},
          drawerIcon: ({focused}) => (
            <Ionicons
              name="chatbubbles"
              size={24}
              color={focused ? Colors.primary : Colors.blur}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          headerShown: true,
          drawerLabel: 'Help',
          headerTitle: 'Help',
          drawerActiveBackgroundColor: Colors.blur,
          drawerActiveTintColor: Colors.primary,
          drawerLabelStyle: {letterSpacing: 1},
          drawerIcon: ({focused}) => (
            <Ionicons
              name="help-circle"
              size={24}
              color={focused ? Colors.primary : Colors.blur}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
