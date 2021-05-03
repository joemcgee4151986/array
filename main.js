const binaryArrayToNumber = arr => {
  const binaryNumber = arr.join(""); //.join returns the array into a string
  return parseInt(binaryNumber, 2);
};