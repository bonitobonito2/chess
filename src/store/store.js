import { configureStore } from "@reduxjs/toolkit";

import clickedFigureSlice from "./clickedFigureSlice";

const store = configureStore({
  reducer: {
    clickedFigureSlice: clickedFigureSlice.reducer,
  },
});

export default store;
