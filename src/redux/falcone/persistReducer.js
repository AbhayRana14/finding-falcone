import { createSlice } from "@reduxjs/toolkit";

export const falconePersistSlice = createSlice({
  name: "falconePersistReducer",
  initialState: {
    planetDetails: null,
    vehicleDetails: null,
    isLoading: false,
    isTokenAvailable: false,
    token: "",
  },
  reducers: {
    // SAVE PLANET DETAILS
    savePlanetDetails: (state, action) => {
      state.planetDetails = action.payload;
      state.isLoading = false;
    },

    // SAVE VEHICLE DETAILS
    saveVehicleDetails: (state, action) => {
      state.vehicleDetails = action.payload;
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
  savePlanetDetails,
  saveVehicleDetails,
  setTokenAvailability,
} = falconePersistSlice.actions;
export default falconePersistSlice.reducer;
