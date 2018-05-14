var json2xls = require('json2xls');
var fs = require('fs');

var excel2Json = require('./src/main')

const fileName = process.env.FILE_NAME;
const sheetName = process.env.SHEET_NAME;

excel2Json(fileName, {
    'convert_all_sheet': false,
    'return_type': 'Object',
    'sheetName': sheetName
}, function(err, output) {
    if (err) {
        throw new Error(err);
    }
    output['Sheet1'].map(x => {
        x.apiKey2 = 'heyhey'
    })
    var xls = json2xls(output['Sheet1']);
    fs.writeFileSync('data.xlsx', xls, 'binary');
});