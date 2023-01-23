export const moveOnRightPlace = (right, left, down, up, usedPlaces) => {
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

  return up.concat(down).concat(left).concat(right);
};
