export const remove = (dispatch, figureActions, setState, setImg) => {
  setState("error");
  dispatch(figureActions.setSecondClick(false));
  dispatch(figureActions.setFirstClick(false));
  dispatch(figureActions.setId(-1));
  setImg(undefined);
};
