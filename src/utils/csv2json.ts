let csvToJson = require('convert-csv-to-json');



const myInputFile = "../data/D_Bahnhof_2020_alle.csv";

let json = csvToJson.getJsonFromCsv("myInputFile");
for (let i = 0; i < json.length; i++) {
    console.log(json[i]);
}