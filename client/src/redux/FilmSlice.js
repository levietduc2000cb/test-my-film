import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { apiUrl, TOKEN_USER } from "../context/constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const myfilms = createSlice({
  name: "myfilms",
  initialState: {
    myfilms: [],
    error: false,
    loading: false,
    messenger: null,
    createSuccess: false,
  },
  reducers: {
    resetFilm: (state, action) => {
      state.createSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataMyFilm.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchDataMyFilm.fulfilled, (state, action) => {
        state.myfilms = action.payload.data.mylistfilm;
        state.messenger = action.payload.data.message;
        state.loading = false;
      })
      .addCase(addDataMyFilm.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addDataMyFilm.fulfilled, (state, action) => {
        state.myfilms.push(action.payload.data.film);
        state.messenger = action.payload.data.message;
        state.loading = false;
        state.createSuccess = true;
      })
      .addCase(deleteDataMyFilm.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteDataMyFilm.fulfilled, (state, action) => {
        let index = state.myfilms.findIndex(
          (film) => film._id === action.payload.data.deletefilm._id
        );
        state.myfilms.splice(index, 1);
        state.messenger = action.payload.data.message;
        state.loading = false;
      })
      .addCase(changeStateDataMyFilm.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(changeStateDataMyFilm.fulfilled, (state, action) => {
        let index = state.myfilms.findIndex(
          (film) => film._id === action.payload.data.updatedFilm._id
        );
        state.myfilms[index].status = action.payload.data.updatedFilm.status;
        state.messenger = action.payload.data.message;
        state.loading = false;
      });
  },
});
const { reducer, actions } = myfilms;
export default reducer;
export const { resetFilm, checkError, setError } = actions;

export const fetchDataMyFilm = createAsyncThunk(
  "myfilms/fetchDataMyFilm",
  async () => {
    if (localStorage[TOKEN_USER]) {
      setAuthToken(localStorage[TOKEN_USER]);
      try {
        const res = await axios.get(`${apiUrl}/mylistfilm`);
        return res;
      } catch (error) {
        setAuthToken(null);
      }
    }
  }
);
export const addDataMyFilm = createAsyncThunk(
  "myfilms/addDataMyFilm",
  async (data) => {
    try {
      const res = await axios.post(`${apiUrl}/mylistfilm`, data);
      return res;
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);
export const deleteDataMyFilm = createAsyncThunk(
  "myfilms/deleteDataMyFilm",
  async (filmId) => {
    if (localStorage[TOKEN_USER]) {
      setAuthToken(localStorage[TOKEN_USER]);
      try {
        const res = await axios.delete(`${apiUrl}/mylistfilm/${filmId}`);
        return res;
      } catch (error) {
        console.log("Error: ", error);
        setAuthToken(null);
      }
    }
  }
);
export const changeStateDataMyFilm = createAsyncThunk(
  "myfilms/changeStateDataMyFilm",
  async (newData) => {
    if (localStorage[TOKEN_USER]) {
      setAuthToken(localStorage[TOKEN_USER]);
      try {
        const res = await axios.put(
          `${apiUrl}/mylistfilm/${newData.idFilm}`,
          newData.data
        );
        return res;
      } catch (error) {
        console.log("Error: ", error);
        setAuthToken(null);
      }
    }
  }
);
