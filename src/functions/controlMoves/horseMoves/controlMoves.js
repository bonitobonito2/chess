export const controlMovesForHorse = (cordinate, nextCordinate) => {
  let result;
  const nextRealCordinate = nextCordinate % 8;
  if (nextRealCordinate > cordinate) {
    let sxvaoba = nextRealCordinate - cordinate;
    if (sxvaoba > 2) {
      result = undefined;
    } else {
      result = nextCordinate;
    }
  } else if (nextRealCordinate < cordinate) {
    let sxvaoba = cordinate - nextRealCordinate;
    if (sxvaoba > 2) {
      result = undefined;
    } else {
      result = nextCordinate;
    }
  }

  return result;
};
