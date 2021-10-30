import fs from "fs";
import { MatchResult } from "../MatchResult";
import { stringDateToDate } from "../utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader<T> {
  constructor(public filePath: string) {}
  abstract mapRow(match: string[]): T;
  data: string[][] = [];
  readCsv(): void {
    this.data = fs
      .readFileSync(this.filePath, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((match): string[] => {
        return match.split(",");
      });
  }
}
