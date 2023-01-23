import { moveOnRightPlace } from "./moveOnRightPlace";

export const cordinatesGeneratorForEtli = (
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

  return moveOnRightPlace(right, left, down, up, usedPlaces);
};
