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
  return array.slice(0, arraySlice);
}
