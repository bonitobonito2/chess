import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  figure: "",
  clickedOnce: false,
  clickedTwice: false,
  id: -1,
  accessFigureIds: [],
  pykeFirstClick: true,
  isClickedFigureWhite: undefined,
  placedSpaces: [],
  unclickedPykeCordinates: [
    8, 9, 10, 11, 12, 13, 14, 15, 48, 49, 50, 51, 52, 53, 54, 55,
  ],
};

const clickedFigureSlice = createSlice({
  name: "figure",
  initialState,
  reducers: {
    setFigure(state, action) {
      state.figure = action.payload;
    },
    setFirstClick(state, action) {
      state.clickedOnce = action.payload;
    },
    setSecondClick(state, action) {
      state.clickedTwice = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    },
    setAccesFigures(state, action) {
      state.accessFigureIds = [];
      state.accessFigureIds = action.payload;
    },
    setPykeFirstClick(state) {
      state.pykeFirstClick = false;
    },
    setIsClickedFigureWhite(state, action) {
      state.isClickedFigureWhite = action.payload;
    },

    addPlacesSpaces(state, action) {
      const data = [...state.placedSpaces, action.payload];
      state.placedSpaces = [...data];
    },
    removeFromPlacedSpaces(state, action) {
      const indexOfItem = state.placedSpaces.indexOf(action.payload);
      state.placedSpaces.splice(indexOfItem, 1);
    },
    removePykeUnclickedCordinates(state, action) {
      const indexOfItem = state.unclickedPykeCordinates.indexOf(action.payload);
      state.unclickedPykeCordinates.splice(indexOfItem, 1);
    },
  },
});

export const figureActions = clickedFigureSlice.actions;

export default clickedFigureSlice;
