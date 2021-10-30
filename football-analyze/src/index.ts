import { CsvFileReader } from "./classes/CsvFileReader";
import { MatchReader } from "./classes/MatchReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader("./data/football.csv");

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let mutdWins = 0;

for (const match of matchReader.matches) {
  if (match[1] == "Man United" && match[5] === MatchResult.HomeWin) {
    mutdWins++;
  } else if (match[2] == "Man United" && match[5] === MatchResult.AwayWin) {
    mutdWins++;
  }
}

console.log("mutd won " + mutdWins + " matches!");
