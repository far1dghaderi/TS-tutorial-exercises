import { MatchResult } from "../MatchResult";
import { stringDateToDate } from "../utils";
import { CsvFileReader } from "./CsvFileReader";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(match: string[]): MatchData {
    return [
      stringDateToDate(match[0]),
      match[1],
      match[2],
      parseInt(match[3]),
      parseInt(match[4]),
      match[5] as MatchResult,
      match[6],
    ];
  }
}
