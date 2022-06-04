const fs = require('fs')

// fs.readFile('/files/1.txt', 'utf-8', (err, res) => {
//   if (err) return console.log(err.message)

//   console.log(res)
// })
fs.readFile(__dirname + '/files/1.txt', 'utf-8', (err, res) => {
  if (err) return console.log('读取失败' + err.message)
  console.log(__dirname);
  console.log('读取成功' + res)
})