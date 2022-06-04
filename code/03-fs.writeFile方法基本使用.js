// 引入模块
const fs = require('fs')

fs.writeFile('./files/2.txt', '这是我后面写入传进的', err => {
  if (err) return console.log('写入文件失败:' + err.message)
  console.log('写入成功');
})