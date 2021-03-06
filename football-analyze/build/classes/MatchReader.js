"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("../utils");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.readFromCsv = function (path) {
        var cvReader = new CsvFileReader_1.CsvFileReader(path);
        return new MatchReader(cvReader);
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (match) {
            return [
                (0, utils_1.stringDateToDate)(match[0]),
                match[1],
                match[2],
                parseInt(match[3]),
                parseInt(match[4]),
                match[5],
                match[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
