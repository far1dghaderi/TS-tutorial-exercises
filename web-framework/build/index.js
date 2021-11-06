"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collection_1 = require("./models/Collection");
var User_1 = require("./models/User");
var UserList_1 = require("./views/UserList");
var users = new Collection_1.Collection("http://127.0.0.1:3000/users", function (json) {
    return User_1.User.buildUser(json);
});
users.on("change", function () {
    var root = document.getElementById("root");
    if (root) {
        console.log(users);
        new UserList_1.UserList(root, users).render();
    }
});
users.fetch();
console.log("hey");
