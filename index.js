 const COLORS = {
  black: 0, 
  brown: 1, 
  red: 2, 
  orange: 3, 
  yellow: 4, 
  green: 5, 
  blue: 6, 
  violet: 7, 
  grey: 8, 
  white: 9
};

 const decodedValue = ([colorOne, colorTwo, colorThree]) => {
    console.log(typeof(`${COLORS[colorOne]}`));
  return +`${COLORS[colorOne]}${COLORS[colorTwo]}`
 
};

decodedValue(["blue", "green", "purple"]);

