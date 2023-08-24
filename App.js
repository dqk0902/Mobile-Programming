import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import React from 'react';
import store from './src/stores';
export default function App() {
  return (
    <Provider store={store}>
        <MainNavigator />
    </Provider>
  );
}

