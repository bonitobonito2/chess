import king from "../figures/king.png";
import etli from "../figures/etli.png";
import pyke from "../figures/pyke.png";
import gamblier from "../figures/gamblier.png";
import horse from "../figures/horse.png";
import queen from "../figures/queen.png";
export const imageGenerator = (i) => {
  switch (i) {
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
