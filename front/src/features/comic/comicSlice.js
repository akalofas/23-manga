import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ComicService from './comicService';

export const fetchComics = createAsyncThunk('comics/fetchComics', async () => {
  const response = await ComicService.getComics();
  return response.data; // This now directly returns the comics array from dummyData
});

const comicSlice = createSlice({
  name: 'comics',
  initialState: {
    comics: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comics = action.payload; // Ensure this matches the structure of the comics data
      })
      .addCase(fetchComics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default comicSlice.reducer;
