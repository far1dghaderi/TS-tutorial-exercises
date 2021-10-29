"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var Company_1 = require("./interfaces/Company");
var User_1 = __importDefault(require("./interfaces/User"));
var Map_1 = __importDefault(require("./interfaces/Map"));
var user1 = new User_1.default();
var company1 = new Company_1.Company();
var map = new Map_1.default("#map");
map.addMarker(user1);
map.addMarker(company1);
