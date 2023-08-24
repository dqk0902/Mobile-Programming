import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "../reducers/userReducer";
import { useDispatch } from "react-redux";

const ProfileScreen = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    role: "Software Engineer",
    email: "johndoe@example.com",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  });

  const dispatch = useDispatch(); // Get the dispatch function from Redux

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Error fetching user data from AsyncStorage:", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    // Dispatch the logout action to clear user data
    dispatch(logout());
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png"}} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.role}>{user.role}</Text>
      <Text style={styles.email}>Email: {user.email}</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Set a status</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 16,
  },
  email: {
    fontSize: 16,
    color: "#333",
    marginBottom: 32,
  },
  editButton: {
    backgroundColor: "#dcdcdc",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  editButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#dcdcdc",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
