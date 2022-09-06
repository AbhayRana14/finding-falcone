import { createSlice } from "@reduxjs/toolkit";

export const falconePersistSlice = createSlice({
  name: "falconePersistReducer",
  initialState: {
    details: null,
    isLoading: false,
    isTokenAvailable: false,
  },
  reducers: {
    // SAVE DETAILS
    saveDetailsFetch: (state, action) => {
      state.planetDetails = action.payload.values;
      state.isLoading = false;
    },

    // SET TOKEN AVAILABLE IF SUCCESSFUL
    setTokenAvailability: (state) => {
      state.isTokenAvailable = true;
    },
  },
});

export const {
  // SAVE DETAILS
  saveDetailsFetch,
} = falconePersistSlice.actions;
export default falconePersistSlice.reducer;
