import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/harveyspectersuit.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Suits Store</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;


