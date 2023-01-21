export const remove = (dispatch, figureActions, setState, setImg, setName) => {
  setState("error");
  dispatch(figureActions.setSecondClick(false));
  dispatch(figureActions.setFirstClick(false));
  dispatch(figureActions.setId(-1));
  setImg(undefined);
  setName(null);
};
