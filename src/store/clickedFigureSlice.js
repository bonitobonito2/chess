import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  figure: "",
  clickedOnce: false,
  clickedTwice: false,
  id: -1,
  accessFigureIds: [],
  pykeFirstClick: true,
  isClickedFigureWhite: undefined,
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
  },
});

export const figureActions = clickedFigureSlice.actions;

export default clickedFigureSlice;
