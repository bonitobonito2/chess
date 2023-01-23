import { controlMovesForHorse } from "./controlMoves/controlMoves";
import store from "../store/store";
import { moveOnRightPlace } from "./controlMoves/etliCordinates/moveOnRightPlace";
import { cordinatesGeneratorForEtli } from "./controlMoves/etliCordinates/cordinatesGenerator";
import { pykeMoves } from "./controlMoves/pykeMoves/pykeMoves";
let arr = [];
let subarr = [];
for (let i = 0; i < 64; i++) {
  if (i % 8 == 0 && i != 0) {
    arr.push(subarr);
    subarr = [];
    subarr.push(i);
  } else {
    subarr.push(i);
  }
}
arr.push(subarr);

export const setMoveCordinates = (figureName, props, isWhite, firstClick) => {
  const usedPlaces = store.getState().clickedFigureSlice.placedSpaces;

  let indexOfLine;
  if (props.id == 0) indexOfLine = 0;
  else
    indexOfLine = arr.findIndex((data) =>
      data.find((data) => data == props.id)
    );

  let indexOfFigure = arr[indexOfLine].findIndex((data) => data == props.id);

  let cordinates;
  switch (figureName) {
    case "pyke":
      cordinates = pykeMoves(isWhite, firstClick, props);

      break;
    case "horse":
      cordinates = [
        controlMovesForHorse(indexOfFigure, props.id - 15),
        controlMovesForHorse(indexOfFigure, props.id - 17),
        controlMovesForHorse(indexOfFigure, props.id - 6),
        controlMovesForHorse(indexOfFigure, props.id - 10),
        controlMovesForHorse(indexOfFigure, props.id + 15),
        controlMovesForHorse(indexOfFigure, props.id + 17),
        controlMovesForHorse(indexOfFigure, props.id + 6),
        controlMovesForHorse(indexOfFigure, props.id + 10),
      ];

      break;
    case "etli":
      cordinates = cordinatesGeneratorForEtli(
        indexOfLine,
        indexOfFigure,
        arr,
        props,
        usedPlaces
      );

      break;
  }

  return cordinates;
};
