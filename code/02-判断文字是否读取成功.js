// 引入 fs模块
const fs = require('fs');

// 读取文件
fs.readFile('./files/1.txt', 'utf-8', (err, res) => {
  // 如果读取成功，err 为 null, 如果失败，err 为一个错误对象
  if (err) {
    console.log('读取失败' + err.message);
    return;
  } else {
    console.log('读取成功' + res);
  }

  
})