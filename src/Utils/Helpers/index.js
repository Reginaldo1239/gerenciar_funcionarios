export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

export const filterObject = (object, keysToFilter=[]) => {
  for (let key of keysToFilter) {
    if (object[key]) {
      delete object[key]
    }
  }
  return object

}
