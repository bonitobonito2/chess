import { moveOnRightPlace } from "../etliCordinates/moveOnRightPlace";
import { moveOnRightPlaceForQueen } from "../cordinatesForQueen/moveOnRightPlaceForQueen";
export const cordinatesGeneratorForKing = (
  indexOfLine,
  indexOfFigure,
  arr,
  props,
  usedPlaces
) => {
  let left = [arr[indexOfLine][indexOfFigure - 1]];
  let right = [arr[indexOfLine][indexOfFigure + 1]];
  let up = [props.id + 8];
  let down = [props.id - 8];

  let downLeft = [arr?.[indexOfLine + 1]?.[indexOfFigure - 1]];
  let upRight = [arr?.[indexOfLine - 1]?.[indexOfFigure + 1]];
  let upLeft = [arr?.[indexOfLine - 1]?.[indexOfFigure - 1]];

  let downRight = [arr?.[indexOfLine + 1]?.[indexOfFigure + 1]];

  return moveOnRightPlaceForQueen(
    right,
    left,
    down,
    up,
    upRight,
    upLeft,
    downRight,
    downLeft,
    usedPlaces
  );
};
