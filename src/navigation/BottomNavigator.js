import Cart from '../screens/Cart';
import HomeScreen from '../screens/HomeScreen';
import { Icon } from '@rneui/themed';
import ProductsList from '../screens/ProductsList';
import Profile from '../screens/Profile';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            return route.name === 'Home' ? (
              <Icon name='home' type='font-awesome-5' color={focused ? '#639db1' : 'gray'} />
            ) : route.name === 'Products' ? (
              <Icon name='list' type='font-awesome-5' color={focused ? '#639db1' : 'gray'} />
            ) : route.name === 'Cart' ? ( 
              <Icon name='shopping-cart' type='font-awesome-5' color={focused ? '#639db1' : 'gray'} />
            ): route.name === 'Profile' ? ( 
              <Icon name='user' type='font-awesome-5' color={focused ? '#639db1' : 'gray'} />
            ) : null;
          },
        })}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Products' component={ProductsList} />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
  );
};


export default BottomTabNavigator;
