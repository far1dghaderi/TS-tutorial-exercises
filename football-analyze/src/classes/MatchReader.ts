import { MatchResult } from "../MatchResult";
import { stringDateToDate } from "../utils";
import { MatchData } from "../matchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static readFromCsv(path: string): MatchReader {
    const cvReader = new CsvFileReader(path);
    return new MatchReader(cvReader);
  }

  constructor(public reader: DataReader) {}

  matches: MatchData[] = [];

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((match: string[]): MatchData => {
      return [
        stringDateToDate(match[0]),
        match[1],
        match[2],
        parseInt(match[3]),
        parseInt(match[4]),
        match[5] as MatchResult,
        match[6],
      ];
    });
  }
}
