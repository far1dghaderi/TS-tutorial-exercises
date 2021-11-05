"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model(attributes, events, sync) {
        this.attributes = attributes;
        this.events = events;
        this.sync = sync;
    }
    Object.defineProperty(Model.prototype, "on", {
        get: function () {
            return this.events.on;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "trigger", {
        get: function () {
            return this.events.trigger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "get", {
        get: function () {
            return this.attributes.get;
        },
        enumerable: false,
        configurable: true
    });
    Model.prototype.set = function (update) {
        this.attributes.set(update);
        this.events.trigger("change");
    };
    Model.prototype.fetch = function () {
        var id = this.get("id");
        if (!id) {
            throw new Error("Cannot fetch data without an id");
        }
        this.sync.fetch(id).then(function (response) {
            console.log(response);
        });
    };
    Model.prototype.save = function () {
        var _this = this;
        this.sync
            .save(this.attributes.getAll())
            .then(function (response) {
            _this.events.trigger("save");
        })
            .catch(function () {
            _this.events.trigger("error");
        });
    };
    return Model;
}());
exports.Model = Model;
