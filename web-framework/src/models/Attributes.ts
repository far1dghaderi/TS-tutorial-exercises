export class Attributes<T> {
  constructor(private data: T) {}

  //This syntax below makes sure that our input values to the method are a
  //Key of T and the input will be a value of that keys
  //So TS will understand the output type by itself
  get = <K extends keyof T>(propName: K): T[K] => {
    return this.data[propName];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll(): T {
    return this.data;
  }
}
