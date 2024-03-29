"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analysers/WinsAnalysis");
var Summary_1 = require("./Summary");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(reader.data);
