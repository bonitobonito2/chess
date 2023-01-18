export const removePosition = (dispatch, figureActions) => {
  dispatch(figureActions.setAccesFigures([]));
  dispatch(figureActions.setSecondClick(false));
  dispatch(figureActions.setFirstClick(false));
  dispatch(figureActions.setId(-1));
};
