"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
var axios_1 = __importDefault(require("axios"));
var Eventing_1 = require("./Eventing");
//K is the structure of the data that our clas must deal with it
var Collection = /** @class */ (function () {
    function Collection(rootUrl, desrialize) {
        this.rootUrl = rootUrl;
        this.desrialize = desrialize;
        this.models = [];
        this.events = new Eventing_1.Eventing();
    }
    Object.defineProperty(Collection.prototype, "on", {
        get: function () {
            return this.events.on;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "trigger", {
        get: function () {
            return this.events.trigger;
        },
        enumerable: false,
        configurable: true
    });
    Collection.prototype.fetch = function () {
        var _this = this;
        axios_1.default.get(this.rootUrl).then(function (response) {
            response.data.forEach(function (value) {
                var user = _this.desrialize(value);
                _this.models.push(user);
            });
        });
        this.events.trigger("change");
    };
    return Collection;
}());
exports.Collection = Collection;
