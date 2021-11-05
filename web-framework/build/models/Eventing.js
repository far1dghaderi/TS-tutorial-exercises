"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eventing = void 0;
var Eventing = /** @class */ (function () {
    function Eventing() {
        var _this = this;
        this.events = {};
        this.on = function (eventName, callback) {
            var handlers = _this.events[eventName] || [];
            handlers.push(callback);
            _this.events[eventName] = handlers;
        };
        this.trigger = function (eventName) {
            if (!_this.events[eventName])
                return;
            _this.events[eventName].forEach(function (fn) {
                fn();
            });
        };
    }
    return Eventing;
}());
exports.Eventing = Eventing;
