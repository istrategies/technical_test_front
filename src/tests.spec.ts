import {ObjectBlueprint} from "./lib/first";
import {freeze} from "./lib/second";
import {formatData, retrieveData, sort} from "./lib/third";

const prompt = jest.spyOn(window, 'prompt')
const obj = new ObjectBlueprint()
const mockArray = [{name: 'Ana'}, {name: 'John'}, {name: 'John'}]
const formattedArray = formatData(mockArray);
const orderedArray = sort(formattedArray, 'times');
test('greeting function should print name', async () => {

  prompt.mockImplementation(() => 'person')

  jest.spyOn(console, 'log').mockImplementation();
  await obj.hello();
  expect(obj.name).toBe('person')
  expect(console.log).toHaveBeenCalledWith('hello person');
})

test('object should be inmutable', () => {
  freeze(obj);
  expect(Object.isFrozen(obj)).toBe(true)
})

test('should return { name: string; times: number; } array', () => {
  expect(formattedArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({name: 'John', times: 2})]
    )
  )
})

test('should retrieve slice of array by given number or all array', async ()=>{
  const arraySlice = 1;
  const arraySliceBiggerEqual = 3;
  const slice = retrieveData(orderedArray, arraySlice);
  const slice2 = retrieveData(orderedArray, arraySliceBiggerEqual);

  expect(Array.isArray(slice)).toBe(true)
  expect(slice).toHaveLength(arraySlice)
  expect(slice2).toStrictEqual(orderedArray)
})
