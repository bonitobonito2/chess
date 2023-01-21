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

import { moveFigure } from "../functions/moveFigure";
//blacks
import pykeBlack from "../figures/blacks/pyke_b.png";
import gamblierBlack from "../figures/blacks/gamblier_b.png";
import horseBlack from "../figures/blacks/horse_b.png";
import etliBlack from "../figures/blacks/etli_b.png";
import queenBlack from "../figures/blacks/queen_b.png";
import kingBlack from "../figures/blacks/king_b.png";
import { removePosition } from "../functions/removePosition";
import { remove } from "../functions/removeOnSameIdAndSecondClick";

function Square(props) {
  const [state, setState] = useState("");
  const [img, setImg] = useState();
  const [isAcces, setAcces] = useState(false);
  const [name, setName] = useState();
  const [isWhite, setIsWhite] = useState(undefined);
  const id = useSelector((data) => data.clickedFigureSlice.id);
  const figure = useSelector((data) => data.clickedFigureSlice.figure);
  const firstClick = useSelector((data) => data.clickedFigureSlice.clickedOnce);

  const usedPlaces = useSelector(
    (data) => data.clickedFigureSlice.placedSpaces
  );
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
        dispatch(
          figureActions.setAccesFigures(setMoveCordinates(name, props, isWhite))
        );
      }
      setFigureActions(dispatch, figureActions, name, props.id, isWhite);
    } else if (figure && accesIds.find((data) => data == props.id)) {
      console.log(usedPlaces);
      dispatch(figureActions.removeFromPlacedSpaces(id));
      dispatch(figureActions.addPlacesSpaces(props.id));
      if (
        (firstClick && img && isClickedFigureWhite && !isWhite) ||
        (firstClick && img && !isClickedFigureWhite && isWhite) ||
        (firstClick && !img)
      ) {
        moveFigure(
          figure,
          isClickedFigureWhite,
          setImg,
          dispatch,
          figureActions,
          setState,
          setIsWhite,
          setName
        );
      }
    } else {
      removePosition(dispatch, figureActions);
    }
  });
  useEffect(() => {
    const img = imageGenerator(props.id);
    if (img) {
      dispatch(figureActions.addPlacesSpaces(props.id));
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
      remove(dispatch, figureActions, setState, setImg, setName);
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
