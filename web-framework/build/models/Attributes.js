"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attributes = void 0;
var Attributes = /** @class */ (function () {
    function Attributes(data) {
        var _this = this;
        this.data = data;
        //This syntax below makes sure that our input values to the method are a
        //Key of T and the input will be a value of that keys
        //So TS will understand the output type by itself
        this.get = function (propName) {
            return _this.data[propName];
        };
        this.set = function (update) {
            Object.assign(_this.data, update);
        };
    }
    Attributes.prototype.getAll = function () {
        return this.data;
    };
    return Attributes;
}());
exports.Attributes = Attributes;
