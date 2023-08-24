import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://backend-fs13-dqk.azurewebsites.net/users/profile";

export const getUserWithToken = createAsyncThunk(
  "getUserWithToken",
  async (token) => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
);

const initialState = {
  user: null,
  isAuthenticated: false, 
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logout(state) {
      AsyncStorage.removeItem("access_token");
      AsyncStorage.removeItem("user");
      return {
        ...state,
        user: null,
        isAuthenticated: false, 
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserWithToken.fulfilled, (state, action) => {
      AsyncStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;

export const { logout } = userSlice.actions;

