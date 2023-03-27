let fs = require('fs');

const prompt = require('prompt-sync')({sigint: true});

let filename = prompt('Enter the input filename: ');

let table = JSON.parse(fs.readFileSync(filename, "utf8"));

for (let i = 0; i < table.length; i++) {
    table[i].timeExcel = JSDateToExcelDate(new Date(table[i].time.$date));
}


function JSDateToExcelDate(inDate) {


    var returnDateTime = 25569.0 + ((inDate.getTime() - (inDate.getTimezoneOffset() * 60 * 1000)) / (1000 * 60 * 60 * 24));
    return returnDateTime.toString().substr(0,20);
    
    
    }

fs.writeFileSync(filename.slice(0,-5)+"_converted.json", JSON.stringify(table));