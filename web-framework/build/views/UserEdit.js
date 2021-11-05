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
exports.UserEdit = void 0;
var View_1 = require("./View");
var UserShow_1 = require("./UserShow");
var UserEdit = /** @class */ (function (_super) {
    __extends(UserEdit, _super);
    function UserEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserEdit.prototype.regionsMap = function () {
        return {
            userShow: ".user-show",
            userForm: ".user-form",
        };
    };
    UserEdit.prototype.onRender = function () {
        new UserShow_1.UserShow(this.regions.UserShow, this.model).render();
        new UserEdit(this.regions.UserEdit, this.model).render();
    };
    UserEdit.prototype.template = function () {
        return "\n    <div>\n        <div class=\"user-show\"></div>\n        <div class=\"user-form\"></div>\n    </div>  \n    ";
    };
    return UserEdit;
}(View_1.View));
exports.UserEdit = UserEdit;
