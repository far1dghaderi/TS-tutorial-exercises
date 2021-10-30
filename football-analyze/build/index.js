"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./classes/CsvFileReader");
var MatchReader_1 = require("./classes/MatchReader");
var MatchResult_1 = require("./MatchResult");
var csvFileReader = new CsvFileReader_1.CsvFileReader("./data/football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var mutdWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] == "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        mutdWins++;
    }
    else if (match[2] == "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        mutdWins++;
    }
}
console.log("mutd won " + mutdWins + " matches!");
