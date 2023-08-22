import { SafeAreaView, Switch, Text, View } from 'react-native';

import ProductsList from './src/screens/ProductsList';
import { Provider } from 'react-redux'; // Import the Provider
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import store from './src/store'; // Import your Redux store
import { useColorScheme } from 'nativewind';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Provider store={store}>

      <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
        <View className="flex-row w-full gap-5">
          <Text className="dark:text-white text-2xl font-bold">
            New collection
          </Text>
          <Switch value={colorScheme === 'dark'} onValueChange={toggleColorScheme} />
        </View>
        <ProductsList />
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </SafeAreaView>
    </Provider>
  );
}

