import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';

const MainNavigator = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;