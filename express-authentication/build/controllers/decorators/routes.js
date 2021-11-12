"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.patch = exports.post = exports.get = void 0;
require("reflect-metadata");
const Methods_1 = require("../../Methods");
const MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.methods.get);
exports.post = routeBinder(Methods_1.methods.post);
exports.patch = routeBinder(Methods_1.methods.patch);
exports.put = routeBinder(Methods_1.methods.put);
exports.del = routeBinder(Methods_1.methods.del);
