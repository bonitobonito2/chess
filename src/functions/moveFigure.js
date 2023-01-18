import horse from "../figures/whites/horse.png";
import queen from "../figures/whites/queen.png";
import king from "../figures/whites/king.png";
import etli from "../figures/whites/etli.png";
import pyke from "../figures/whites/pyke.png";
import gamblier from "../figures/whites/gamblier.png";

//blacks
import pykeBlack from "../figures/blacks/pyke_b.png";
import gamblierBlack from "../figures/blacks/gamblier_b.png";
import horseBlack from "../figures/blacks/horse_b.png";
import etliBlack from "../figures/blacks/etli_b.png";
import queenBlack from "../figures/blacks/queen_b.png";
import kingBlack from "../figures/blacks/king_b.png";
export const moveFigure = (
  figure,
  isClickedFigureWhite,
  setImg,
  dispatch,
  figureActions,
  setState,
  setIsWhite,
  setName
) => {
  switch (figure) {
    case "pyke":
      if (isClickedFigureWhite == true) setImg(pyke);
      else if (isClickedFigureWhite == false) setImg(pykeBlack);
      break;
    case "gamblier":
      setImg(gamblier);
      break;
    case "queen":
      setImg(queen);
      break;
    case "king":
      setImg(king);
      break;
    case "horse":
      setImg(isClickedFigureWhite ? horse : horseBlack);
      break;
    case "etli":
      setImg(isClickedFigureWhite ? etli : etliBlack);
      break;
    default:
      setImg(queen);
  }
  setState(figure);
  dispatch(figureActions.setSecondClick(true));
  setName(figure);
  dispatch(figureActions.setAccesFigures([]));
  dispatch(figureActions.setPykeFirstClick());
  setIsWhite(isClickedFigureWhite);
  dispatch(figureActions.setIsClickedFigureWhite(undefined));
};
