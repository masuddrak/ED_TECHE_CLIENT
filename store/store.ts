import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import authSlice from "../store/slices/auth/authSlice";
import modalSlice from "../store/slices/modal/modalSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authSlice: authSlice,
    modalSlice: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
