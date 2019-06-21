### 开发模式
```
在项目根目录执行
npm run dev
```
用小程序开发者工具打开dist目录, 文件变动将会实时编译

### 打包
```
在项目根目录执行
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

### 使用vant-weapp 第三方

```
进入dist 
执行
npm i vant-weapp -S --production

```
[开发者工具开启npm支持设置](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

npm模块使用实例
```
{
  "navigationBarTitleText": "编辑收货地址",
  "usingComponents": {
    "van-cell-group":"/miniprogram_npm/vant-weapp/cell-group/index",
    "van-field": "/miniprogram_npm/vant-weapp/field/index"
  }    
}
```

