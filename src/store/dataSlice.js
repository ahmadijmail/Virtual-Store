import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getalldata = createAsyncThunk("data/getdata", async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res.json()) );
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    list: [],
    status: null,
  },

  reducers: {},

  extraReducers: {
    [getalldata.pending]: (state) => {
      state.status = "pending";
    },

    [getalldata.fulfilled]: (state, action) => {
      (state.list = action.payload), (state.status = "sucsess");
    },
  },
});

export default dataSlice;
