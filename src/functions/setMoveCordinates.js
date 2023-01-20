import { controlMovesForHorse } from "./controlMoves/controlMoves";
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
console.log(arr);
export const setMoveCordinates = (figureName, props, isWhite, firstClick) => {
  console.log("shemovedi");
  console.log(props.id);

  let indexOfLine;
  if (props.id == 0) indexOfLine = 0;
  else
    indexOfLine = arr.findIndex((data) =>
      data.find((data) => data == props.id)
    );
  console.log(indexOfLine);
  console.log(arr[indexOfLine]);

  let indexOfFigure = arr[indexOfLine].findIndex((data) => data == props.id);

  let cordinates;
  switch (figureName) {
    case "pyke":
      if (isWhite == true && firstClick)
        cordinates = [props.id - 8, props.id - 16];
      else if (firstClick && !isWhite)
        cordinates = [props.id + 8, props.id + 16];
      else if (!firstClick && isWhite) cordinates = [props.id - 8];
      else if (!firstClick && !isWhite) cordinates = [props.id + 8];
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
      const left = [
        arr[indexOfLine][indexOfFigure - 1],
        arr[indexOfLine][indexOfFigure - 2],
        arr[indexOfLine][indexOfFigure - 3],
        arr[indexOfLine][indexOfFigure - 4],
        arr[indexOfLine][indexOfFigure - 5],
        arr[indexOfLine][indexOfFigure - 6],
        arr[indexOfLine][indexOfFigure - 7],
        arr[indexOfLine][indexOfFigure + 1],
        arr[indexOfLine][indexOfFigure + 2],
        arr[indexOfLine][indexOfFigure + 3],
        arr[indexOfLine][indexOfFigure + 4],
        arr[indexOfLine][indexOfFigure + 5],
        arr[indexOfLine][indexOfFigure + 6],
        arr[indexOfLine][indexOfFigure + 7],
      ];
      cordinates = [
        props.id + 8,
        props.id + 16,
        props.id + 24,
        props.id + 32,
        props.id + 40,
        props.id + 48,
        props.id + 56,
        props.id + 64,
        props.id - 8,
        props.id - 16,
        props.id - 24,
        props.id - 32,
        props.id - 40,
        props.id - 48,
        props.id - 56,
        props.id - 64,
      ];
      cordinates = cordinates.concat(left);
      break;
  }

  return cordinates;
};
