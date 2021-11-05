import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

//K is the structure of the data that our clas must deal with it
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public desrialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        const user = this.desrialize(value);
        this.models.push(user);
      });
    });
    this.events.trigger("change");
  }
}
