import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  removeFromCart,
} from '../reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const incrementQuantity = (itemId) => {
    dispatch(incrementCartItemQuantity(itemId));
  };

  const decrementQuantity = (itemId) => {
    dispatch(decrementCartItemQuantity(itemId));
  };

  const removeItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <View>
          {cartItems.map((item) => (
            <View
              key={item.id}
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 20,
                marginVertical: 10,
                minWidth: 300, 
              }}
            >
              <View style={{ backgroundColor: 'white', borderRadius: 20 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: '100%', height: 200, resizeMode: 'contain' }}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 14, color: 'gray' }}>{item.category}</Text>
                <Text style={{ fontSize: 18, fontWeight: '400' }}>{item.title}</Text>
                <Text style={{ fontSize: 24, color: 'black' }}>${item.price}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => incrementQuantity(item.id)}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => decrementQuantity(item.id)}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'black',
                    borderRadius: 30,
                    padding: 10,
                    alignSelf: 'center',
                    marginTop: 10,
                  }}
                  onPress={() => removeItem(item.id)}
                >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Remove From Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <View style={styles.container}>
            <View style={styles.box}>
              <Text style={styles.title}>Summary</Text>
              <View style={styles.item}>
                <Text style={styles.label}>Discount</Text>
                <Text style={styles.value}>$8.00</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.label}>Shipping</Text>
                <Text style={styles.value}>$8.00</Text>
              </View>
              <View style={styles.total}>
                <Text style={styles.label}>Total</Text>
                <Text style={styles.totalValue}>${calculateTotal()}</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Pay now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: 'lightgray',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  box: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'gray',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: 'gray',
  },
  value: {
    fontSize: 16,
    color: 'black',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: '#639db1',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Cart;




