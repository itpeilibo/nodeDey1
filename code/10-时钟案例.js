// 1.读取素材下的 index.html 这个文件
// 2.处理拿到的数据


const fs = require('fs');
const path = require('path');

fs.readFile(
  path.join(__dirname, '../素材/index.html'),
  'utf8',
  (err, res) => {
  if (err) return console.log(('读取html失败' + err.message));
  // console.log('读取html成功' + res);
    resolveCss(res)
    resolveJS(res)
    resolveHTML(res)
  })

  
  const regCSS = /<style>[\w\W]*<\/style>/
  const regJS = /<script>[\w\W]*<\/script>/

// 处理CSS
function resolveCss(htmlStr) {
  const r1 = regCSS.exec(htmlStr)
  const newCSS = r1[0].replace('<style>', '').replace('<\/style>', '')
  console.log(newCSS);
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, err => {
    if (err) return console.log('写入css失败' + err.message);
    console.log('写入css成功');
  })
}

// 处理js
function resolveJS(htmlStr) {
  const r1 = regJS.exec(htmlStr)
  // console.log(r1);
  const newJS = r1[0].replace('<script>','').replace('</script>','')
  // console.log(newJS);
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, err => {
    if (err) return console.log('写js失败' + err.message);
    console.log('写入js成功');
  })
}

// 处理html
function resolveHTML(htmlStr) {
  const newHTML = htmlStr
    .replace(regCSS, '<link rel="stylesheet" href="./index.css">')
    .replace(regJS, '<script src="./index.js"></script>')
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, err => {
    if (err) return console.log('写入失败' + err.message);
    console.log('写入成功');
    })
}
  

