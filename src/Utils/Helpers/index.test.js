import { filterObject, convertArrayToObject } from '../Helpers';

describe('testar a função filterObject', () => {
  test('verica se está filtrando conforme esperado', () => {
    let objectMocks = { 1: { id: 1 }, 2: { id: 2 } };
    expect(filterObject(objectMocks, (objectMock) => objectMock.id !== 1)).toEqual({ 2: { id: 2 } });
  });
})

describe('testar a função convertArrayToObject', () => {
  test('verica se está convertendo conforme esperado', () => {
    let arrayMocks = [{ id: 1 }, { id: 2 }, { id: 3 }];
    let expectObject = { 1: { id: 1 }, 2: { id: 2 }, 3: { id: 3 } };
    expect(convertArrayToObject(arrayMocks,'id')).toEqual(expectObject);
  });
})

