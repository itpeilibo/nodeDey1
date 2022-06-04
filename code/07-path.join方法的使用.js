const path = require("path");
const fs = require("fs");

const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
// console.log(pathStr);


const pathStr2 = path.join(__dirname, './files/1.txt')
//C:\Users\PLB0616\Desktop\前端三剑客\Nodejs\Nodejs\day1\code\files\1.txt
// console.log(pathStr2);
// path.join(__dirname + '../1.txt')

fs.readFile(path.join(pathStr2), 'utf8', (err, res) => {
  if (err) return console.log(('读取失败' + err.message));
  console.log('读取成功' + res);
})
