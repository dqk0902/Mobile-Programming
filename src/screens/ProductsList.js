import { FlatList, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from './ProductCard';
import { fetchProducts } from '../reducers/productReducer';

export default function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products based on searchQuery
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 22 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
          New collection
        </Text>
        <TextInput
          placeholder="Search products"
          value={searchQuery}
          autoCapitalize="none"
          onChangeText={setSearchQuery}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
          }}
        />
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      />
    </View>
  );
}
