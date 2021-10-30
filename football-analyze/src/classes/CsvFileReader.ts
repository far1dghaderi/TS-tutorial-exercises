import fs from "fs";

export class CsvFileReader {
  constructor(public filePath: string) {}
  data: string[][] = [];

  read(): void {
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
