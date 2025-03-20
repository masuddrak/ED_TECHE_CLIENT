import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/api";

// const savedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
// const savedUser = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "null") : null;

// Async Thunk for login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post("auth/signin", userData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.existUser));
      return response.data; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.existUser; 
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
