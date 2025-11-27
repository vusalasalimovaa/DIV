import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchMenu = createAsyncThunk("menu", async () => {
  const res = await fetch("https://starbucks-data.vercel.app/data/Starbucks.json");
  return await res.json();
});

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMenu.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch menu.";
      });
  },
});

export default menuSlice.reducer;
