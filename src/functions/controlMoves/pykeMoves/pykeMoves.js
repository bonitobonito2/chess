export const pykeMoves = (
  isWhite,
  firstClick,
  props,
  usedPlaces,
  unclickedPykeCordinates
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

  cordinates.some((cordinate) => {
    if (usedPlaces.includes(cordinate)) {
      const index = cordinates.indexOf(cordinate);
      if (index == 0) {
        cordinates = [];
      } else {
        cordinates.splice(index, 1);
      }
    }
  });
  if (usedPlaces.includes(props.id - 7) && isWhite) {
    cordinates.push(props.id - 7);
  }
  if (usedPlaces.includes(props.id - 9) && isWhite) {
    cordinates.push(props.id - 9);
  }

  if (usedPlaces.includes(props.id + 7) && !isWhite) {
    cordinates.push(props.id + 7);
  }
  if (usedPlaces.includes(props.id + 9) && !isWhite) {
    cordinates.push(props.id + 9);
  }

  return cordinates;
};
