import { configureStore } from '@reduxjs/toolkit';
import comicReducer from '../features/comic/comicSlice'; // Ensure file renamed to comicSlice.js
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice'; // Ensure file renamed to userSlice.js
import darkLightToggleReducer from '../features/darkLightToggle/darkLightToggleSlice';
import { localStorageMiddleware } from '../middleware/localStorageMiddleware';

const store = configureStore({
  reducer: {
    comics: comicReducer,
    auth: authReducer,
    user: userReducer,
    darkLightToggle: darkLightToggleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

// These selectors are okay to be here if they're used app-wide.
export const selectIsAuthenticated = (state) => !!state.auth.user;
export const selectUser = (state) => state.auth.user;

export default store;
