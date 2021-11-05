"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
//because we should have all of Model methods and props in our View class, So we just extend a generic from it
//and because Model is also a generic, we just get a type for model as K and then we'll pass it to Model
var View = /** @class */ (function () {
    function View(parent, model) {
        this.parent = parent;
        this.model = model;
        this.regions = {};
        this.bindModel();
    }
    View.prototype.eventsMap = function () {
        return {};
    };
    View.prototype.regionsMap = function () {
        return {};
    };
    View.prototype.bindModel = function () {
        var _this = this;
        this.model.on("change", function () {
            _this.render();
        });
    };
    View.prototype.bindEvents = function (fragment) {
        var eventsMap = this.eventsMap();
        var _loop_1 = function (eventKey) {
            var _a = eventKey.split(":"), eventName = _a[0], selector = _a[1];
            fragment.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        };
        for (var eventKey in eventsMap) {
            _loop_1(eventKey);
        }
    };
    View.prototype.onRender = function () {
        //nothing
    };
    View.prototype.mapRegions = function (fragment) {
        var regionMap = this.regionsMap();
        for (var key in this.regionsMap) {
            var selector = regionMap[key];
            var element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element;
            }
        }
    };
    View.prototype.render = function () {
        this.parent.innerHTML = "";
        var templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);
        this.onRender();
        this.parent.appendChild(templateElement.content);
    };
    return View;
}());
exports.View = View;
