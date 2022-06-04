const fs = require('fs');

fs.writeFile('./files/3.txt', '这个也是我后面创建传入的', err => {
  if (err) return console.log('写入文件失败' + err.message);
  console.log('写入文件成功');
})