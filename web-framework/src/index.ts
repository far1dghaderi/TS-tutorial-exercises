import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserList } from "./views/UserList";

const users = new Collection(
  "http://127.0.0.1:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");
  if (root) {
    console.log(users);
    new UserList(root, users).render();
  }
});

users.fetch();
console.log("hey");
