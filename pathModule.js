const path = require("path")

const a1 = path.basename('C:\\temp\\myfile.html');
const a2 = path.dirname('C:\\temp\\myfile.html');
const a3 = path.extname('index.html');

console.log(a1,a1,a3)

const a4 = path.extname(__filename)

console.log(__filename, a4)
