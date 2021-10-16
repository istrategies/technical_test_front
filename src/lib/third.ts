import {dataJsonType, resumedData} from "./types";

export function formatData<T extends dataJsonType>(objects: T[]): resumedData[] {
  const formattedArray: resumedData[] = []
  objects.forEach((object) => {
    const find = formattedArray.find(item => item.name === object.name)
    if (find) {
      find.times++
      return;
    }
    formattedArray.push({name: object.name, times: 1})
  })
  return formattedArray;
}

export function retrieveData(array: resumedData[], arraySlice: number): dataJsonType[] {
  if (arraySlice >= array.length) {
    console.log('The given number is bigger than/equal to database, all elements served')
    return array;
  }
  return array.slice(0, arraySlice);
}

export function sort<T = resumedData>(array: T[], by: keyof T): T[] {
  return array.sort((a, b) => +b[by] - +a[by])
}

export function convertToArray(json: { objects: dataJsonType[] }): dataJsonType[] {
  const {objects} = json;
  return objects
}
