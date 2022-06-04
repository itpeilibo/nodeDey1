const fs = require('fs');

fs.readFile('./files/成绩.txt','utf-8',(err,res)=> {
  if (err) return console.log('读取失败:' + err.message);
  
  // console.log(res);
  // 把等号转成冒号
  // 再给
  let arrOld = res.split(' ')
  let arrNew = []
  arrOld.forEach((item) => {
    // console.log(item);
    arrNew.push(item.replace('=',':'))
  })
  let newArr = arrNew.join('\r\n')

  fs.writeFile('./files/成绩-ok.txt', newArr, err => {
    if (err) return console.log('写入失败' + err.message);
    console.log('写入成功');
  }) 
})