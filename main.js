let fs = require('fs');
let table = JSON.parse(fs.readFileSync("power.json", "utf8"));

for (let i = 0; i < table.length; i++) {
    table[i].timeExcel = JSDateToExcelDate(new Date(table[i].time.$date));
}


function JSDateToExcelDate(inDate) {


    var returnDateTime = 25569.0 + ((inDate.getTime() - (inDate.getTimezoneOffset() * 60 * 1000)) / (1000 * 60 * 60 * 24));
    return returnDateTime.toString().substr(0,20);
    
    
    }

fs.writeFileSync("powernew.json", JSON.stringify(table));