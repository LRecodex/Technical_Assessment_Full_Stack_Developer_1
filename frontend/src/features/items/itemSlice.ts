import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./types";
import { getAllItems } from "../../api/itemApi";

// Async thunk for fetching items
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await getAllItems();
  return response.data;
});

// Define the initial state explicitly
interface ItemsState {
  items: Item[]; // Explicitly define the type of 'items'
  status: "idle" | "loading" | "succeeded" | "failed"; // Possible states
}

const initialState: ItemsState = {
  items: [], // Initialize as an empty array of Item
  status: "idle",
};

// Create the slice
const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.status = "succeeded";
        state.items = action.payload; // Assign the fetched items
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default itemSlice.reducer;
