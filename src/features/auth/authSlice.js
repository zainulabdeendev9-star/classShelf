import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";



export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const user = await authService.getSession();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
    isLoading: true,
    authStatus: false, // whether the user is authenticated or not
    userData: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.authStatus = true;
            state.userData = action.payload; // assuming payload contains user data
        },
        logout: (state) => {
            state.authStatus = false;
            state.userData = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentUser.pending, (state) => {
            state.isLoading = true;
        })

            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload;
                state.authStatus = true;
            })

            .addCase(getCurrentUser.rejected, (state) => {
                state.isLoading = false;
                state.userData = null;
                state.authStatus = false;
            })
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;