import {ObjectBlueprint} from "./lib/first";
import {freeze} from "./lib/second";
import {person} from "./lib/types";

export const foo = async (): Promise<void> => {

  //#region PART 1
  /**
   * For the first test, we ask you to create an object that
   * contains a name and use a hello function that prints "hello {the person's name}"
   */
  let object = new ObjectBlueprint()
  await object.hello()
  //#endregion

  //#region PART 2
  /**
   * For the second part of the test, you have to make the above object immutable,
   * and you have to create a test with Jest that validates that the object is immutable
   * **The test must be in a separate file**
   */
  object = freeze<person>(object);
  //#endregion

  //#region  PART 3
  // For this third part, you have to import the data.json file found in the root of src,

  /**
   * First you have to create an array of objects with the data obtained in the .json file
   */

    //TODO -->

  /**
   * Now we must return the number of times the names are repeated with the following structure
   * { name: string; times: number; }
   */

    //TODO -->

  /**
   * According to the previous structure, it orders from highest to lowest,
   * showing only the first 3, and only returning the name of the person
   * **The number of names to display must be dynamic**
   */
  //TODO -->
   /**
   * Create a test that checks all of part 3
   * **The test must be in a separate file**
   */
  //#endregion
}
