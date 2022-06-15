import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a Service using a base URL  and expected endpoints
export const userQuery = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
  }),
  endpoints: (builder) => ({
    getUserByName: builder.query({
      query: (name) => `user/${name}`,
    }),
  }),
});
export const userInfo = createAsyncThunk("GetUserInfo", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  return { data: res };
});

type User = {
  loading: boolean;
  error: any;
  data: string;
};

const getUserSlice = createSlice({
  name: "GetUserInfo",
  initialState: {
    data: null,
    loading: false,
    error: null,
  } as User,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(userInfo.pending, (state) => {
      state.loading = true;
    })
      .addCase(userInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(userInfo.rejected, (state, action) => {
        state.data = null;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getUserSlice.reducer;
