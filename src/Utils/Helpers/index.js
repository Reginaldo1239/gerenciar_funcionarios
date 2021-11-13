export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

export const filterObject = (object, keysArrayToFilter) => {
  for (let key of keysArrayToFilter) {
    if (object[key]) {
      delete object[key]
    }
  }
  return object;
}
