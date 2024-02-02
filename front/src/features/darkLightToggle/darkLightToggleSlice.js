import { createSlice } from '@reduxjs/toolkit';

// Attempt to retrieve the current theme from localStorage or default to 'light'
const currentDarkLightToggle = localStorage.getItem('darkLightToggle') ? localStorage.getItem('darkLightToggle') : 'light';

export const darkLightToggleSlice = createSlice({
  name: 'darkLightToggle',
  initialState: {
    value: currentDarkLightToggle,
  },
  reducers: {
    toggleDarkLight: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
      // Save the new theme to localStorage
      localStorage.setItem('darkLightToggle', state.value);
    },
  },
});

export const { toggleDarkLight } = darkLightToggleSlice.actions;

// Selector to get the current theme
export const selectDarkLightToggle = (state) => state.darkLightToggle.value;

export default darkLightToggleSlice.reducer;
