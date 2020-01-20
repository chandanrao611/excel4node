var xl = require('excel4node');
const path = require('path');
const fs = require('fs');
module.exports = {
    userList: async (req, res) => {
        console.log('hello');
        // Create a new instance of a Workbook class
        var wb = new xl.Workbook();
        // Add Worksheets to the workbook
        var ws = wb.addWorksheet('Sheet 1');
        // Create a reusable style
        var style = wb.createStyle({
            font: {
                color: '#FF0800',
                size: 12,
            },
            alignment: {
                horizontal: 'center',
            },
        });
        ws.cell(1, 1, 1, 6, true).string('All User List').style(style);
        for (let index = 3; index < 10; index++) {
            ws.cell(index, 1).string(index + 'Included in print area');
            ws.cell(index, 2).string(index + '------Included in print area');
            ws.cell(index, 3).string(index + '------Included in print area');
            ws.cell(index, 4).string(index + '------Included in print area');
            ws.cell(index, 5).string(index + '------Included in print area');
        }
        let rnFile = `${Date.now()}_user.xlsx`;
        let file = `uploads/${rnFile}`;
        wb.write(file);
        /** Download file and delete */
        setTimeout(() => {
            res.download(file);
            fs.access(file, error => {
                if (!error) {
                    fs.unlinkSync(file, function (error) {
                        console.log(error);
                    });
                } else {
                    console.log(error,'not error');
                }
            });
        }, 1000);
    }
}