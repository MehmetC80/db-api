import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import { DBModel } from "../types/model";






(async () => {
    const csvFilePath = path.resolve(__dirname, 'files/D_Bahnhof_2020_alle.csv');

    const headers = ['EVA_NR', 'DS100', 'IFOPT', 'NAME', 'Verkehr', 'Laenge', 'Breite', 'Betreiber_Name', 'Betreiber_Nr', 'Status'];

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    parse(fileContent, {
        delimiter: ';',
        columns: headers,
        fromLine: 2,
        cast: (columnValue, context) => {
            if (context.column === "Laenge" || context.column === "Breite") {
                return parseFloat(columnValue.replace(/,/, "."))
            }
            return columnValue
        }
    }, (error, result) => {
        if (error) {
            console.error(error);
        }


        console.log(result)

        // fs.writeFileSync(result, __dirname + "/data.json")
        let jsonData = JSON.stringify(result);

        fs.writeFileSync(__dirname + "/data.json", jsonData)

    });

})();