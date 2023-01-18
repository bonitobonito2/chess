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

function Square(props) {
  const [state, setState] = useState("");
  const [img, setImg] = useState();
  const [isAcces, setAcces] = useState(false);
  const [name, setName] = useState();
  const id = useSelector((data) => data.clickedFigureSlice.id);
  const figure = useSelector((data) => data.clickedFigureSlice.figure);
  const firstClick = useSelector((data) => data.clickedFigureSlice.clickedOnce);
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
    if (name && !firstClick) {
      if (name == "pyke") {
        if (pykeFirstClick)
          dispatch(
            figureActions.setAccesFigures(setMoveCordinates(name, props))
          );
        else dispatch(figureActions.setAccesFigures([props.id - 8]));
      } else if (name == "horse") {
        dispatch(figureActions.setAccesFigures(setMoveCordinates(name, props)));
      }
      setFigureActions(dispatch, figureActions, name, props.id);
    } else if (figure && accesIds.find((data) => data == props.id) && !img) {
      console.log("MEORE");

      if (firstClick) {
        switch (figure) {
          case "pyke":
            setImg(pyke);
            break;
          case "etli":
            setImg(etli);
            break;
          case "queen":
            setImg(queen);
            break;
          case "king":
            setImg(king);
            break;
          case "horse":
            setImg(horse);
            break;
          case "gamblier":
            setImg(gamblier);
            break;
          default:
            setImg(queen);
        }
        setState(figure);
        dispatch(figureActions.setSecondClick(true));
        setName(figure);
        dispatch(figureActions.setAccesFigures([]));
        dispatch(figureActions.setPykeFirstClick());
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

  return (
    <div
      onClick={clickHandler}
      className={
        props.color == "black" ? classes.blackSquare : classes.whiteSquare
      }
    >
      {isAcces && !img && <div className={classes.point}></div>}
      {state && state != "error" && (
        <img className={classes.figure} src={img} />
      )}
      {img && !state && <img className={classes.figure} src={img} />}
    </div>
  );
}

export default memo(Square);
