function map(array, transform) {
  const newArray = [];
  for (let ii = 0; ii < array.length; ii++) {
    const result = transform(array[ii]);
    newArray.push(result);
  }
  return newArray;
}
