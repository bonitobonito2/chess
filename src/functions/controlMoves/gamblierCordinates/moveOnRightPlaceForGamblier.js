export const moveOnRightPlaceForGamblier = (
  upRight,
  upLeft,
  downRight,
  downLeft,
  usedPlaces
) => {
  upRight.some((r) => {
    if (usedPlaces.includes(r)) upRight = upRight.filter((data) => data >= r);
  });
  upLeft.some((r) => {
    if (usedPlaces.includes(r)) upLeft = upLeft.filter((data) => data >= r);
  });

  console.log(downRight);
  downRight.some((r) => {
    if (usedPlaces.includes(r))
      downRight = downRight.filter((data) => data <= r);
  });

  console.log(downRight, "after");

  downLeft.some((r) => {
    if (usedPlaces.includes(r)) downLeft = downLeft.filter((data) => data <= r);
  });

  return upRight.concat(upLeft).concat(downRight).concat(downLeft);
};
