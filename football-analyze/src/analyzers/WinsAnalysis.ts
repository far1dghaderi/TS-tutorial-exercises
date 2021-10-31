import { Analayzer } from "../classes/Summary";
import { MatchResult } from "../MatchResult";
import { MatchData } from "../matchData";

export class WinsAnalysis implements Analayzer {
  constructor(public teamName: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;

    for (const match of matches) {
      if (match[1] == this.teamName && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] == this.teamName &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }
    return `${this.teamName} has won ${wins} matches`;
  }
}
