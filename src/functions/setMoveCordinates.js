export const setMoveCordinates = (figureName, props) => {
  let cordinates;
  switch (figureName) {
    case "pyke":
      cordinates = [props.id - 8, props.id - 16];
      break;
    case "horse":
      cordinates = [
        props.id - 15,
        props.id - 17,
        props.id - 6,
        props.id - 10,
        props.id + 15,
        props.id + 17,
        props.id + 6,
        props.id + 10,
      ];
      break;
  }

  return cordinates;
};
