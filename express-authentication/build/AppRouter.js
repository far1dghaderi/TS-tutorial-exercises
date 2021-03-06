"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
var express_1 = __importDefault(require("express"));
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    Object.defineProperty(AppRouter, "router", {
        get: function () {
            if (!this.instance) {
                this.instance = express_1.default.Router();
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    return AppRouter;
}());
exports.AppRouter = AppRouter;
