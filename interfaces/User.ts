import faker from "faker";

export default class User {
  constructor() {
    this.name = faker.name.firstName() + " " + faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
      <div>
        <h1> ${this.name}
      </div>
    `;
  }
}
