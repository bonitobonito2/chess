import { moveOnRightPlaceForGamblier } from "./moveOnRightPlaceForGamblier";
export const cordinatesGeneratorForGamblier = (
  indexOfLine,
  indexOfFigure,
  arr,
  props,
  usedPlaces
) => {
  let downLeft = [
    arr?.[indexOfLine + 1]?.[indexOfFigure - 1],
    arr?.[indexOfLine + 2]?.[indexOfFigure - 2],
    arr?.[indexOfLine + 3]?.[indexOfFigure - 3],
    arr?.[indexOfLine + 4]?.[indexOfFigure - 4],
    arr?.[indexOfLine + 5]?.[indexOfFigure - 5],
    arr?.[indexOfLine + 6]?.[indexOfFigure - 6],
    arr?.[indexOfLine + 7]?.[indexOfFigure - 7],
  ];
  let upRight = [
    arr?.[indexOfLine - 1]?.[indexOfFigure + 1],
    arr?.[indexOfLine - 2]?.[indexOfFigure + 2],
    arr?.[indexOfLine - 3]?.[indexOfFigure + 3],
    arr?.[indexOfLine - 4]?.[indexOfFigure + 4],
    arr?.[indexOfLine - 5]?.[indexOfFigure + 5],
    arr?.[indexOfLine - 6]?.[indexOfFigure + 6],
    arr?.[indexOfLine - 7]?.[indexOfFigure + 7],
  ];
  let upLeft = [
    arr?.[indexOfLine - 1]?.[indexOfFigure - 1],
    arr?.[indexOfLine - 2]?.[indexOfFigure - 2],
    arr?.[indexOfLine - 3]?.[indexOfFigure - 3],
    arr?.[indexOfLine - 4]?.[indexOfFigure - 4],
    arr?.[indexOfLine - 5]?.[indexOfFigure - 5],
    arr?.[indexOfLine - 6]?.[indexOfFigure - 6],
    arr?.[indexOfLine - 7]?.[indexOfFigure - 7],
  ];

  let downRight = [
    arr?.[indexOfLine + 1]?.[indexOfFigure + 1],
    arr?.[indexOfLine + 2]?.[indexOfFigure + 2],
    arr?.[indexOfLine + 3]?.[indexOfFigure + 3],
    arr?.[indexOfLine + 4]?.[indexOfFigure + 4],
    arr?.[indexOfLine + 5]?.[indexOfFigure + 5],
    arr?.[indexOfLine + 6]?.[indexOfFigure + 6],
    arr?.[indexOfLine + 7]?.[indexOfFigure + 7],
  ];

  //   return upLeft.concat(downRight).concat(downLeft).concat(upRight);

  return moveOnRightPlaceForGamblier(
    upRight,
    upLeft,
    downRight,
    downLeft,
    usedPlaces
  );
};
