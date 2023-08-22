import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { fetchProducts } from '../actions/productActions';

export default function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
    <ProductCard product={item} />
    )}
    contentContainerStyle={{
    paddingHorizontal: 15,
    }}
  />
  );
}