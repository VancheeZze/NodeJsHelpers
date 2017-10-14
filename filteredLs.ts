//
// FILTERED LS
// Example: node filteredLs.ts ./ json
//

const fs = require('fs');
const path = require('path');
const folder = process.argv[2];
const extension = '.'+process.argv[3];

fs.readdir(folder, (err, data) => {
    if (err) throw new Error(err);
    
    for (var i = 0; i < data.length; i++) {
        if (path.extname(data[i]) == extension) {
            console.log(data[i]);
        }
    }
});