import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { addToCart } from '../reducers/cartReducer';
import { useColorScheme } from 'nativewind';
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions

export default function ProductCard({ product }) {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  const dispatch = useDispatch(); // Get the dispatch function
  if (!product) {
    return null; // Render nothing if product is undefined
  }
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginVertical: 10,
      }}
    >
      <View style={{ backgroundColor: 'white', borderRadius: 20 }}>
        <Image
          source={{ uri: product.image }} 
          style={{ width: '100%', height: 200, resizeMode: 'contain' }}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 14, color: 'gray' }}>{product.category}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{product.title}</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          ${product.price}
        </Text>
        <Text
          numberOfLines={2}
          style={{ fontSize: 14, color: 'gray', marginTop: 5 }}
        >
          {product.description}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            borderRadius: 30,
            padding: 10,
            alignSelf: 'center',
            marginTop: 10,
          }}
          onPress={() => {
            dispatch(addToCart(product)); 
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
