"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./classes/MatchReader");
var MatchResult_1 = require("./MatchResult");
var matchReader = new MatchReader_1.MatchReader("./data/football.csv");
matchReader.readCsv();
var matches = matchReader.data;
var mutdWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] == "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        mutdWins++;
    }
    else if (match[2] == "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        mutdWins++;
    }
}
console.log(mutdWins);
