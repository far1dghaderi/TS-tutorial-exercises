import { CsvFileReader } from "./classes/CsvFileReader";
import { MatchReader } from "./classes/MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./classes/Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReports";

const matchReader = MatchReader.readFromCsv("./data/football.csv");
matchReader.load();

const winsAnalysis = new WinsAnalysis("Chelsea");
const consoleReport = new ConsoleReport();
const summary = new Summary(winsAnalysis, consoleReport);

summary.buildAndPrintReport(matchReader.matches);
