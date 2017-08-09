# omi脚手架

一款基于Omi框架 和 Webpack2 的脚手架


## 开发

```
npm start 
```

会自动打开链接 `localhost:9000`

开发过程**不兼容**IE8，但是没关系，生成的发布代码兼容IE8。

## 生成发布代码

```
npm run dist   // 或者 npm run build 也是同样的效果
```

通过上面的命令，最后生成的代码可以完美**兼容**IE8。


当然还有一个特殊命令:

``` js
$ npm run ie    //用于生成未压缩js的发布包用来定位ie8的问题
```