### 开发模式
```
npm run dev
```
用小程序开发者工具打开dist目录, 文件变动将会实时编译

### 打包
```
npm run build
```
生成目录同上

### 生成page文件
```
npm run pages 文件名

npm run pages 文件名  标题名

如  npm run pages test 测试标题
将会生成test 的page 文件 同时 json文件里的navigationBarTitleText 为测试标题
```

### 生成component
```
npm run component 组件名
```

pages 和 componet 的模板可在templates目录中进行修改