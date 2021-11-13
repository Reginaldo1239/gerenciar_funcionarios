export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((object, item) => {
    return {
      ...object,
      [item[key]]: item,
    };
  }, initialValue);
};


export const filterObject = (object, callback) => {
  for (let key in object) {
    if (!callback(object[key])) {
      delete object[key]
    }
  }
  return object;
}
