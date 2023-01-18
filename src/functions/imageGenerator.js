import king from "../figures/whites/king.png";
import etli from "../figures/whites/etli.png";
import pyke from "../figures/whites/pyke.png";
import pykeBlack from "../figures/blacks/pyke_b.png";

import gamblier from "../figures/whites/gamblier.png";
import horse from "../figures/whites/horse.png";
import queen from "../figures/whites/queen.png";

export const imageGenerator = (i) => {
  switch (i) {
    case 8:
      return [pykeBlack, "pyke"];
    case 9:
      return [pykeBlack, "pyke"];
    case 10:
      return [pykeBlack, "pyke"];
    case 11:
      return [pykeBlack, "pyke"];
    case 12:
      return [pykeBlack, "pyke"];
    case 13:
      return [pykeBlack, "pyke"];
    case 14:
      return [pykeBlack, "pyke"];
    case 15:
      return [pykeBlack, "pyke"];

    case 48:
      return [pyke, "pyke"];
    case 49:
      return [pyke, "pyke"];
    case 50:
      return [pyke, "pyke"];
    case 51:
      return [pyke, "pyke"];
    case 52:
      return [pyke, "pyke"];
    case 53:
      return [pyke, "pyke"];
    case 54:
      return [pyke, "pyke"];
    case 55:
      return [pyke, "pyke"];
    case 56:
      return [etli, "etli"];
    case 57:
      return [horse, "horse"];
    case 58:
      return [gamblier, "gamblier"];
    case 59:
      return [queen, "queen"];
    case 60:
      return [king, "king"];
    case 61:
      return [gamblier, "gamblier"];
    case 62:
      return [horse, "horse"];
    case 63:
      return [etli, "etli"];
    default:
      return undefined;
  }
};
