import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const falconePersistSlice = createSlice({
  name: "falconePersistReducer",
  initialState: {
    details: null,
    isLoading: false,
    isTokenAvailable: false,
    token: "",
  },
  reducers: {
    // SAVE DETAILS
    saveDetailsFetch: (state, action) => {
      state.planetDetails = action.payload.values;
      state.isLoading = false;
    },

    // SET TOKEN AVAILABLE IF SUCCESSFUL
    setTokenAvailability: (state, action) => {
      state.isTokenAvailable = true;
      state.token = action.payload;
    },
  },
});

export const {
  // SAVE DETAILS
  saveDetailsFetch,
  setTokenAvailability,
} = falconePersistSlice.actions;
export default falconePersistSlice.reducer;
