export const setFigureActions = (
  dispatchh,
  figureActions,
  name,
  id,
  isWhite
) => {
  dispatchh(figureActions.setFigure(name));
  dispatchh(figureActions.setFirstClick(true));
  dispatchh(figureActions.setId(id));
  dispatchh(figureActions.setIsClickedFigureWhite(isWhite));
};
