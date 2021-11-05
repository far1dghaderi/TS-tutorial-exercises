"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./models/User");
var UserForm_1 = require("./views/UserForm");
var user = User_1.User.buildUser({ name: "Mry", age: 24 });
var root = document.getElementById("root");
if (root) {
    var form = new UserForm_1.UserForm(root, user);
    form.render();
}
else {
    throw new Error("Root element not found");
}
