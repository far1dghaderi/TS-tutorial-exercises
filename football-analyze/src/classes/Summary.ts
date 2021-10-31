import { WinsAnalysis } from "../analyzers/WinsAnalysis";
import { MatchData } from "../matchData";
import { HtmlReport } from "../reportTargets/HtmlReports";

export interface Analayzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analayzer: Analayzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analayzer.run(matches);
    this.outputTarget.print(output);
  }
}
