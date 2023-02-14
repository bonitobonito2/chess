import { moveOnRightPlace } from "../etliCordinates/moveOnRightPlace";
import { moveOnRightPlaceForQueen } from "./moveOnRightPlaceForQueen";

export const cordinatesGeneratorForQueen = (
  indexOfLine,
  indexOfFigure,
  arr,
  props,
  usedPlaces
) => {
  let left = [
    arr[indexOfLine][indexOfFigure - 1],
    arr[indexOfLine][indexOfFigure - 2],
    arr[indexOfLine][indexOfFigure - 3],
    arr[indexOfLine][indexOfFigure - 4],
    arr[indexOfLine][indexOfFigure - 5],
    arr[indexOfLine][indexOfFigure - 6],
    arr[indexOfLine][indexOfFigure - 7],
  ];
  let right = [
    arr[indexOfLine][indexOfFigure + 1],
    arr[indexOfLine][indexOfFigure + 2],
    arr[indexOfLine][indexOfFigure + 3],
    arr[indexOfLine][indexOfFigure + 4],
    arr[indexOfLine][indexOfFigure + 5],
    arr[indexOfLine][indexOfFigure + 6],
    arr[indexOfLine][indexOfFigure + 7],
  ];
  let up = [
    props.id + 8,
    props.id + 16,
    props.id + 24,
    props.id + 32,
    props.id + 40,
    props.id + 48,
    props.id + 56,
    props.id + 64,
  ];
  let down = [
    props.id - 8,
    props.id - 16,
    props.id - 24,
    props.id - 32,
    props.id - 40,
    props.id - 48,
    props.id - 56,
    props.id - 64,
  ];

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
