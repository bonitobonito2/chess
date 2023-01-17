import { useState } from "react";
import classes from "./game.module.css";
import king from "../figures/king.png";
import etli from "../figures/etli.png";
import pyke from "../figures/pyke.png";
import gamblier from "../figures/gamblier.png";
import horse from "../figures/horse.png";
import queen from "../figures/queen.png";

import Square from "../components/square";
let smth = true;
function Game(props) {
  return (
    <div className={classes.board}>
      {[...Array(64)].map((x, i) => {
        if (i % 8 == 0) smth = !smth;
        if (smth) {
          if (i % 2 == 0) return <Square id={i} key={i} color="black" />;
          return <Square id={i} key={i} color="white" />;
        } else {
          if (i % 2 == 0) return <Square id={i} key={i} color="white" />;
          return <Square id={i} key={i} color="black" />;
        }
      })}
    </div>
  );
}

export default Game;
