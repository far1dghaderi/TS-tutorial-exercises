"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
var View_1 = require("./View");
var UserForm = /** @class */ (function (_super) {
    __extends(UserForm, _super);
    function UserForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSetAgeClick = function () {
            _this.model.setRandomAge();
        };
        _this.onSetNameClick = function () {
            var input = _this.parent.querySelector("input");
            if (input) {
                var name_1 = input.value;
                _this.model.set({ name: name_1 });
            }
        };
        _this.onSaveClick = function () {
            console.log(_this.model.get("name"));
            _this.model.save();
        };
        return _this;
    }
    UserForm.prototype.eventsMap = function () {
        return {
            "click:.set-age": this.onSetAgeClick,
            "click:.set-name": this.onSetNameClick,
            "click:.save-user": this.onSaveClick,
        };
    };
    UserForm.prototype.template = function () {
        return "\n        <div>\n            <div> User's name: " + this.model.get("name") + " </div>\n            <div> User's age: " + this.model.get("age") + " </div>\n            <input placeholder=" + this.model.get("name") + "/>\n            <button class=\"set-name\"> Set name </button>\n            <button> Click me </button>\n            <button class=\"set-age\"> Set random age </button>\n            <button class=\"save-user\"> Save </button>\n        </div>\n        ";
    };
    return UserForm;
}(View_1.View));
exports.UserForm = UserForm;
