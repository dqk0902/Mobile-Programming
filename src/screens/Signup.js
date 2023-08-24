import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserWithToken } from "../reducers/userReducer";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChange = (key, value) => {
    setSignup({
      ...signup,
      [key]: value,
    });
  };

  const onSignup = async () => {
    try {
      const response = await fetch(
        "https://backend-fs13-dqk.azurewebsites.net/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: signup.email,
            password: signup.password,
            name: signup.name,
            avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }),
        }
      );

      if (response.ok) {
        Alert.alert("Success", "Sign-up successful", [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate('Login');
              },
            },
          ]);
      } else {
        Alert.alert("Error", "Sign-up failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.jpg')} style={styles.image} />
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          autoCapitalize="none"
          onChangeText={(text) => onChange("email", text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => onChange("password", text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Enter your name"
          onChangeText={(text) => onChange("name", text)}
        />
      </View>
      <TouchableOpacity style={styles.signupButton} onPress={onSignup}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: "#dcdcdc",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 16,
    color: "#000", // Text color
  },
  signupText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#dcdcdc",
  },
  loginText: {
    height: 30,
    marginTop: 10,
    color: "black",
    fontSize: 14,
  },
});

export default Signup;

