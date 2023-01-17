export const setFigureActions = (dispatchh, figureActions, name, id) => {
  dispatchh(figureActions.setFigure(name));
  dispatchh(figureActions.setFirstClick(true));
  dispatchh(figureActions.setId(id));
};
