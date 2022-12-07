"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const csv_parse_1 = require("csv-parse");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const csvFilePath = path.resolve(__dirname, 'files/D_Bahnhof_2020_alle.csv');
    const headers = ['EVA_NR', 'DS100', 'IFOPT', 'NAME', 'Verkehr', 'Laenge', 'Breite', 'Betreiber_Name', 'Betreiber_Nr', 'Status'];
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    (0, csv_parse_1.parse)(fileContent, {
        delimiter: ';',
        columns: headers,
        fromLine: 2,
        cast: (columnValue, context) => {
            if (context.column === "Laenge" || context.column === "Breite") {
                return parseFloat(columnValue.replace(/,/, "."));
            }
            return columnValue;
        }
    }, (error, result) => {
        if (error) {
            console.error(error);
        }
        console.log(result);
        // fs.writeFileSync(result, __dirname + "/data.json")
        let jsonData = JSON.stringify(result);
        fs.writeFileSync(__dirname + "/data.json", jsonData);
    });
}))();
//# sourceMappingURL=csv2json.js.map