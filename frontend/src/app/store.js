import { configureStore } from '@reduxjs/toolkit';
import packageReducer from '../features/npmpackages/npmpackageSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    npmpackages: packageReducer
  },
});
