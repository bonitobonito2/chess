import classes from "./square.module.css";
import { figureActions } from "../store/clickedFigureSlice";
import king from "../figures/whites/king.png";
import etli from "../figures/whites/etli.png";
import pyke from "../figures/whites/pyke.png";
import { setFigureActions } from "../functions/setFigureActions";
import gamblier from "../figures/whites/gamblier.png";
import { memo, useMemo } from "react";
import { imageGenerator } from "../functions/imageGenerator";
import { useCallback } from "react";
import horse from "../figures/whites/horse.png";
import queen from "../figures/whites/queen.png";
import { useSelector } from "react-redux";
import { setMoveCordinates } from "../functions/setMoveCordinates";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

//blacks
import pykeBlack from "../figures/blacks/pyke_b.png";
import gamblierBlack from "../figures/blacks/gamblier_b.png";
import horseBlack from "../figures/blacks/horse_b.png";
import etliBlack from "../figures/blacks/etli_b.png";
import queenBlack from "../figures/blacks/queen_b.png";
import kingBlack from "../figures/blacks/king_b.png";

function Square(props) {
  const [state, setState] = useState("");
  const [img, setImg] = useState();
  const [isAcces, setAcces] = useState(false);
  const [name, setName] = useState();
  const [isWhite, setIsWhite] = useState(undefined);
  const id = useSelector((data) => data.clickedFigureSlice.id);
  const figure = useSelector((data) => data.clickedFigureSlice.figure);
  const firstClick = useSelector((data) => data.clickedFigureSlice.clickedOnce);
  const isClickedFigureWhite = useSelector(
    (data) => data.clickedFigureSlice.isClickedFigureWhite
  );
  const pykeFirstClick = useSelector(
    (data) => data.clickedFigureSlice.pykeFirstClick
  );
  const accesIds = useSelector(
    (data) => data.clickedFigureSlice.accessFigureIds
  );
  const secondClick = useSelector(
    (data) => data.clickedFigureSlice.clickedTwice
  );
  const dispatch = useDispatch();

  const clickHandler = useCallback(() => {
    console.log("wtf", name);
    if (name && !firstClick) {
      if (name == "pyke") {
        dispatch(
          figureActions.setAccesFigures(
            setMoveCordinates(name, props, isWhite, pykeFirstClick)
          )
        );
      } else if (name == "horse") {
        dispatch(
          figureActions.setAccesFigures(setMoveCordinates(name, props, isWhite))
        );
      } else if (name == "etli") {
        console.log("shemovedi");
        dispatch(
          figureActions.setAccesFigures(setMoveCordinates(name, props, isWhite))
        );
      }
      setFigureActions(dispatch, figureActions, name, props.id, isWhite);
    } else if (figure && accesIds.find((data) => data == props.id)) {
      if (
        (firstClick && img && isClickedFigureWhite && !isWhite) ||
        (firstClick && img && !isClickedFigureWhite && isWhite) ||
        (firstClick && !img)
      ) {
        switch (figure) {
          case "pyke":
            if (isClickedFigureWhite == true) setImg(pyke);
            else if (isClickedFigureWhite == false) setImg(pykeBlack);
            break;
          case "gamblier":
            setImg(gamblier);
            break;
          case "queen":
            setImg(queen);
            break;
          case "king":
            setImg(king);
            break;
          case "horse":
            setImg(isClickedFigureWhite ? horse : horseBlack);
            break;
          case "etli":
            setImg(isClickedFigureWhite ? etli : etliBlack);
            break;
          default:
            setImg(queen);
        }
        setState(figure);
        dispatch(figureActions.setSecondClick(true));
        setName(figure);
        dispatch(figureActions.setAccesFigures([]));
        dispatch(figureActions.setPykeFirstClick());
        setIsWhite(isClickedFigureWhite);
        dispatch(figureActions.setIsClickedFigureWhite(undefined));
      }
    } else {
      dispatch(figureActions.setAccesFigures([]));
      dispatch(figureActions.setSecondClick(false));
      dispatch(figureActions.setFirstClick(false));
      dispatch(figureActions.setId(-1));
      // setImg(undefined);
    }
  });
  useEffect(() => {
    const img = imageGenerator(props.id);
    if (img) {
      setName(img[1]);
      setImg(img[0]);
      setIsWhite(img[2]);
    }
  }, []);
  useEffect(() => {
    const data = accesIds.find((data) => data == props.id);
    if (data) setAcces(true);
    else setAcces(false);
  }, [accesIds]);
  useEffect(() => {
    if (id == props.id && secondClick) {
      setState("error");
      dispatch(figureActions.setSecondClick(false));
      dispatch(figureActions.setFirstClick(false));
      dispatch(figureActions.setId(-1));
      setImg(undefined);
    }
  }, [id, secondClick, firstClick]);

  return (isAcces && img && isClickedFigureWhite && !isWhite) ||
    (isAcces && img && !isClickedFigureWhite && isWhite) ? (
    <div onClick={clickHandler} className={classes.redSquare}>
      <img className={classes.figure} src={img} />
    </div>
  ) : (
    <div
      onClick={clickHandler}
      className={
        props.color == "black" ? classes.blackSquare : classes.whiteSquare
      }
    >
      {isAcces && !img && <div className={classes.point}></div>}
      {isAcces && img && isClickedFigureWhite && !isWhite && (
        <div className={classes.kill}></div>
      )}
      {state && state != "error" && (
        <img className={classes.figure} src={img} />
      )}
      {img && !state && <img className={classes.figure} src={img} />}
    </div>
  );
}

export default memo(Square);
