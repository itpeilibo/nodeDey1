// 引入模块
const fs = require('fs');

// 读取文件
fs.readFile('./files/1.txt', 'utf-8', (err, res) => {
  // console.log(err);

  console.log('-----------');

  console.log(res);
})