import { User, UserProps } from "../models/User";
import { View } from "./View";
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-user": this.onSaveClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };
  onSaveClick = (): void => {
    console.log(this.model.get("name"));

    this.model.save();
  };

  template(): string {
    return `
        <div>
            <div> User's name: ${this.model.get("name")} </div>
            <div> User's age: ${this.model.get("age")} </div>
            <input placeholder=${this.model.get("name")}/>
            <button class="set-name"> Set name </button>
            <button> Click me </button>
            <button class="set-age"> Set random age </button>
            <button class="save-user"> Save </button>
        </div>
        `;
  }
}
