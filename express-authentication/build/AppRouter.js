"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = __importDefault(require("express"));
class AppRouter {
    static get router() {
        if (!this.instance) {
            this.instance = express_1.default.Router();
        }
        return this.instance;
    }
}
exports.AppRouter = AppRouter;
