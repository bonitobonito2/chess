export const pykeMoves = (
  isWhite,
  props,
  usedPlaces,
  unclickedPykeCordinates,
  indexOfFigure
) => {
  let cordinates = [];

  if (unclickedPykeCordinates.includes(props.id)) {
    if (!isWhite) {
      cordinates = [props.id + 8, props.id + 16];
    } else {
      cordinates = [props.id - 8, props.id - 16];
    }
  } else if (isWhite) cordinates = [props.id - 8];
  else if (!isWhite) cordinates = [props.id + 8];
//579 
  cordinates.some((cordinate) => {
    if (usedPlaces.includes(cordinate)) {
      const index = cordinates.indexOf(cordinate);
      if (index == 0) {
        cordinates = [];
      } else {
      //90
        cordinates.splice(index, 1);
      }
    }
  });
//84
//36
  if (usedPlaces.includes(props.id - 7) && isWhite) {
    let nextRealCordinate = (props.id - 7) % 8;
    if (nextRealCordinate - indexOfFigure == 1) {
      cordinates.push(props.id - 7);
    }
  }

  if (usedPlaces.includes(props.id - 9) && isWhite) {
    let nextRealCordinate = (props.id - 9) % 8;
    if (indexOfFigure - nextRealCordinate == 1) {
      cordinates.push(props.id - 9);
    }
  }

  if (usedPlaces.includes(props.id + 7) && !isWhite) {
    let nextRealCordinate = (props.id + 7) % 8;
    if (indexOfFigure - nextRealCordinate == 1) {
      cordinates.push(props.id + 7);
    }
  }
  if (usedPlaces.includes(props.id + 9) && !isWhite) {
    let nextRealCordinate = (props.id + 9) % 8;
    if (nextRealCordinate - indexOfFigure == 1) {
      cordinates.push(props.id + 9);
    }
  }

  return cordinates;
};
