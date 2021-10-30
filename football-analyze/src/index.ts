import { CsvFileReader } from "./classes/CsvFileReader";
import { MatchReader } from "./classes/MatchReader";
import { MatchResult } from "./MatchResult";

const matchReader = new MatchReader("./data/football.csv");
matchReader.readCsv();
const matches = matchReader.data;
let mutdWins = 0;

for (const match of matches) {
  if (match[1] == "Man United" && match[5] === MatchResult.HomeWin) {
    mutdWins++;
  } else if (match[2] == "Man United" && match[5] === MatchResult.AwayWin) {
    mutdWins++;
  }
}

console.log(mutdWins);
