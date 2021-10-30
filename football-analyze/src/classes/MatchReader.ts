import { MatchResult } from "../MatchResult";
import { stringDateToDate } from "../utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
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
