import {person} from "./types";
import {getInput} from "./utils";

export class ObjectBlueprint implements person {
  public name = ''

  public async hello():Promise<void> {
    this.name = await getInput("What's your name?", 'name');
    console.log(`hello ${this.name}`);
  }
}
