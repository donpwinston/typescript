import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { Summary } from "./Summary";

const reader = new MatchReader("football.csv");
reader.read();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);
summary.buildAndPrintReport(reader.data);
