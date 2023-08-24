import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserWithToken } from "../reducers/userReducer";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onChange = (key, value) => {
    setLogin({
      ...login,
      [key]: value,
    });
  };

  const onSubmit = async () => {
    try {
      const response = await fetch(
        "https://backend-fs13-dqk.azurewebsites.net/users/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: login.email,
            password: login.password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        AsyncStorage.setItem("access_token", data.token);
        dispatch(getUserWithToken(data.token));
        Alert.alert("Success", "Login successful", [
          {
            text: "OK",
          },
        ]);
      } else {
        Alert.alert("Error", "Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
    <Image source={require('../assets/Logo.jpg')} style={styles.image} />
      <Text style={styles.title}>Welcome to my store</Text>
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
      <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
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
  signUpText: {
    height: 30,
    marginTop: 20,
    color: "black",
    fontSize: 14,
  },
  loginButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#dcdcdc",
  },
  loginText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;

