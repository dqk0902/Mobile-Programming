import BottomNavigator from './src/navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'; // Import the Provider
import React from 'react';
import store from './src/stores'; // Import your Redux store

export default function App() {
  return (
    <Provider store={store}>
        <BottomNavigator />
    </Provider>
  );
}

