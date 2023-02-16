import classes from "./game.module.css";
import useSound from "use-sound";
import start from "../sounds/game-start.wav";
import Square from "../components/square";
import { useEffect } from "react";
let smth = true;
function Game(props) {
  const [sound] = useSound(start);

  useEffect(() => {
    sound();
  }, []);
  return (
    <div className={classes.board}>
      <div className={classes.text}>
        <p>
          this chess game is not for mobile devices, please go to google
          settings, and check the Dekstop site
        </p>
      </div>
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
