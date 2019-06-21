/**
 * 生成 pages 的页面文件  
 * node generate page
 */

let fs = require('fs');
let basepath = './templates/index';
let srcPath = './src/pages/'
let cptName = process.argv.splice(2);
if (!cptName.length) {
  console.log('请传入参数')
  return 
}
let path = cptName[0].split('/');
let name = path[path.length - 1];
let writes = [`index.ts`, `index.wxml`, `index.less`, `index.json`];
let reads = [`${basepath}/index.ts`, `${basepath}/index.wxml`, `${basepath}/index.less`, `${basepath}/index.json`];
let file = [];
//检测是否存在文件夹
let exists = function () {
  return new Promise((res, rej) => {
    (async function () {
      if (fs.existsSync(srcPath + name)){
        rej(`${name}: 当前文件夹已存在`)
      } else {
        let src = await mkdir(name)
        res(src)
      }
    })()
  })
}
//建立文件夹
let mkdir = function (a) {
  return new Promise((res, rej) => {
    fs.mkdir(srcPath + a, (err) => {
      if (err) rej(err);
      res(srcPath);
    });
  })
}
//读取模板文件内容，并替换为目标组件
let readFile = function () {
  return new Promise((res) => {
    for (let a of reads) {
      let text = fs.readFileSync(a).toString();
      if (a === './templates/index/index.json' && cptName[1]) {
        let temp = JSON.parse(text)
        temp.navigationBarTitleText = cptName[1]
        file.push(JSON.stringify(temp))
      } else {
        file.push(text)
      }
    }
    res(file);
  })
}
//生成文件，并填入之前读取的文件内容
let writeFile = function (file) {
  return new Promise((res, rej) => {
    (async function () {
      for (let a of writes) {
        console.log(`${srcPath + name}/${a}`)
        await fs.writeFile(`${srcPath + name}/${a}`,
        file[writes.indexOf(a)], 
        (err) => {
            if (err) rej(err)
        })
      }
      res('succ');
    })()
  })
}
async function creatCpt() {
  try {
    let src = await exists();
    await writeFile(await readFile());
    return console.log(`${name} page 已生成`)
  }
  catch (err) {
    console.error(err)
  }
}
creatCpt();