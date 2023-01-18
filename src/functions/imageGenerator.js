import king from "../figures/whites/king.png";
import etli from "../figures/whites/etli.png";
import pyke from "../figures/whites/pyke.png";

import gamblier from "../figures/whites/gamblier.png";
import horse from "../figures/whites/horse.png";
import queen from "../figures/whites/queen.png";

//blacks

import pykeBlack from "../figures/blacks/pyke_b.png";
import gamblierBlack from "../figures/blacks/gamblier_b.png";
import horseBlack from "../figures/blacks/horse_b.png";
import etliBlack from "../figures/blacks/etli_b.png";
import queenBlack from "../figures/blacks/queen_b.png";
import kingBlack from "../figures/blacks/king_b.png";
export const imageGenerator = (i) => {
  switch (i) {
    case 0:
      return [etliBlack, "etli", false];
    case 7:
      return [etliBlack, "etli", false];
    case 1:
      return [horseBlack, "horse", false];

    case 6:
      return [horseBlack, "horse", false];
    case 5:
      return [gamblierBlack, "gamblier", false];

    case 2:
      return [gamblierBlack, "gamblier", false];
    case 3:
      return [queenBlack, "queen", false];
    case 4:
      return [kingBlack, "king", false];
    case 8:
      return [pykeBlack, "pyke", false];
    case 9:
      return [pykeBlack, "pyke", false];
    case 10:
      return [pykeBlack, "pyke", false];
    case 11:
      return [pykeBlack, "pyke", false];
    case 12:
      return [pykeBlack, "pyke", false];
    case 13:
      return [pykeBlack, "pyke", false];
    case 14:
      return [pykeBlack, "pyke", false];
    case 15:
      return [pykeBlack, "pyke", false];

    case 48:
      return [pyke, "pyke", true];
    case 49:
      return [pyke, "pyke", true];
    case 50:
      return [pyke, "pyke", true];
    case 51:
      return [pyke, "pyke", true];
    case 52:
      return [pyke, "pyke", true];
    case 53:
      return [pyke, "pyke", true];
    case 54:
      return [pyke, "pyke", true];
    case 55:
      return [pyke, "pyke", true];
    case 56:
      return [etli, "etli", true];
    case 57:
      return [horse, "horse", true];
    case 58:
      return [gamblier, "gamblier", true];
    case 59:
      return [queen, "queen", true];
    case 60:
      return [king, "king", true];
    case 61:
      return [gamblier, "gamblier", true];
    case 62:
      return [horse, "horse", true];
    case 63:
      return [etli, "etli", true];
    default:
      return undefined;
  }
};
