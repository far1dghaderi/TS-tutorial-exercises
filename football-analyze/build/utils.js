"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringDateToDate = void 0;
var stringDateToDate = function (date) {
    var dateParts = date.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.stringDateToDate = stringDateToDate;
