export const pykeMoves = (isWhite, firstClick, props) => {
  let cordinates;
  if (isWhite == true && firstClick) cordinates = [props.id - 8, props.id - 16];
  else if (firstClick && !isWhite) cordinates = [props.id + 8, props.id + 16];
  else if (!firstClick && isWhite) cordinates = [props.id - 8];
  else if (!firstClick && !isWhite) cordinates = [props.id + 8];

  return cordinates;
};
