import { createSlice } from "@reduxjs/toolkit";

export const falconeSlice = createSlice({
  name: "falconeReducer",
  initialState: {
    planetDetails: null,
    isLoading: false,
  },
  reducers: {
    // GET TOKEN
    getTokenFetch: (state) => {
      state.isLoading = true;
    },
    getTokenSuccess: (state) => {
      state.isLoading = false;
    },
    getTokenFailure: (state) => {
      state.isLoading = false;
    },

    // FIND PLANETS
    findPlanetsFetch: (state) => {
      state.isLoading = true;
    },
    findPlanetsSuccess: (state, action) => {
      state.planetDetails = action.payload.values;
      state.isLoading = false;
    },
    findPlanetsFailure: (state) => {
      state.isLoading = false;
    },

    // FIND QUEEN
    findQueenFetch: (state) => {
      state.isLoading = true;
    },
    findQueenSuccess: (state) => {
      state.isLoading = false;
    },
    findQueenFailure: (state) => {
      state.isLoading = false;
    },

    // GET VEHICLES
    getVehiclesFetch: (state) => {
      state.isLoading = true;
    },
    getVehiclesSuccess: (state) => {
      state.isLoading = false;
    },
    getVehiclesFailure: (state) => {
      state.isLoading = false;
    },

    // EXIT GAME
    exitGame: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  // GET TOKEN
  getTokenFetch,
  getTokenSuccess,
  getTokenFailure,

  // FIND PLANETS
  findPlanetsFetch,
  findPlanetsSuccess,
  findPlanetsFailure,

  // FIND QUEEN
  findQueenFetch,
  findQueenSuccess,
  findQueenFailure,

  // GET VEHICLES
  getVehiclesFetch,
  getVehiclesSuccess,
  getVehiclesFailure,

  //EXIT GAME
  exitGame,
} = falconeSlice.actions;
export default falconeSlice.reducer;
