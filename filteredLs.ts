//
// FILTERED LS
//

const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, cb) => {
    fs.readdir(dir, (err, data) => {
        if (err) return cb(err);
        
        let arr = [];
        for (var i = 0; i < data.length; i++) {
            if (path.extname(data[i]) == '.'+ext) {
                arr.push(data[i])
            }
        }
        cb(null, arr);
    });
};