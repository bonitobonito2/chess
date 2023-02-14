export const moveOnRightPlaceForQueen = (
  right,
  left,
  down,
  up,
  upRight,
  upLeft,
  downRight,
  downLeft,
  usedPlaces
) => {
  down.some((r) => {
    if (usedPlaces.includes(r)) down = down.filter((data) => data >= r);
  });
  up.some((r) => {
    if (usedPlaces.includes(r)) up = up.filter((data) => data <= r);
  });
  right.some((r) => {
    if (usedPlaces.includes(r)) right = right.filter((data) => data <= r);
  });

  left.some((r) => {
    if (usedPlaces.includes(r)) left = left.filter((data) => data >= r);
  });

  upRight.some((r) => {
    if (usedPlaces.includes(r)) upRight = upRight.filter((data) => data >= r);
  });
  upLeft.some((r) => {
    if (usedPlaces.includes(r)) upLeft = upLeft.filter((data) => data >= r);
  });

  downRight.some((r) => {
    if (usedPlaces.includes(r))
      downRight = downRight.filter((data) => data <= r);
  });

  downLeft.some((r) => {
    if (usedPlaces.includes(r)) downLeft = downLeft.filter((data) => data <= r);
  });
  return up
    .concat(down)
    .concat(left)
    .concat(right)
    .concat(upRight)
    .concat(upLeft)
    .concat(downRight)
    .concat(downLeft);
};
