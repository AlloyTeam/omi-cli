#### 中文 | [English](https://github.com/AlloyTeam/omi-cli#english--中文)

# omi-cli

CLI for [Omi](https://github.com/AlloyTeam/omi) projects - [Omi框架](https://github.com/AlloyTeam/omi) 的命令行工具

## 简介

环境要求: Node.js 版本 6.x+, npm 版本 3+

```
$ npm install omi-cli -g     //安装CLI
$ omi init [project name]    //初始化项目 
$ cd your_project_name       //转到目录
$ npm start                  //开发
$ npm run dist               //生成发布文件   
```

脚手架完全基于 webpack2. 执行 `omi init` 的过程中会自动安装npm依赖包，请耐心等待。国内用户可通过下面的命令切换npm镜像:

```
$ omi init app -m cnpm 
```

支持 `npm`, `cnpm` 和 `taobao` 。

## 用户指南

* [文件目录](#文件目录)
* [npm 脚本](#npm-脚本)
    * [npm start](#npm-start)
    * [npm run dist](#npm-run-dist)
* [代码分割](#代码分割)
* [兼容 IE8](#兼容-ie8)
* [插入样式](#插入样式)
* [插入组件局部样式](#插入组件局部样式)
* 导入组件
* 导入图片、字体、SVG 等文件
* 修改 CDN 地址

### 文件目录

执行完`omi init my-app`，你可以看到会生成如下的基础目录结构

```
my-app/
  src/
    component
    css
    img
    js
    libs
    page
      index
      page-b
    favicon.ico
```

### npm 脚本

#### npm start

当你执行 `npm start` 会自动打开 [http://localhost:9000/](http://localhost:9000/)。现在你可以开始开发和调试，修改代码并且保存，浏览器会自动刷新显示最新的结果。

#### npm run dist

当你执行 `npm run dist` 之后，会创建一个dist目录，所有要发布的文件都在里面:

```
my-app/
  dist/
    chunk
    css
    img
    js
    libs
    favicon.ico
    index.html
    page-b.html
```

### 代码分割

为了优化性能，用户不需要一次性加载所有网页的依赖，可以在需要使用的时候再进行加载，所以这部分可以进行分割成单独的模块。
如下面的a.js:

```js
import logo from '../../img/omi.png'

module.exports = { src: logo }
```

通过require.ensure进行按需使用，在用户点击事件触发之后才会进行加载a.js以及a.js的所有依赖，如下面代码所示:

```js
class Hello extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  handleClick(){
    require.ensure(['./a.js'], function() {
      var a = require("./a.js")
      document.body.innerHTML+=`<img src="${a.src}">`
    })
  }

  render() {
    return `
      <div class="App">
        <div class="App-header">
          <img src='${logo}' onclick="handleClick" class="App-logo" alt="logo" />
          <h2>Welcome to Omi</h2>
        </div>
        <p class="App-intro">
          To get started, edit <code>src/component/hello.js</code> and save to reload.
        </p>
         <p class="App-intro">
          {{name}}
        </p>
      </div>
    `
  }
}

```

### 兼容 IE8

Omi框架是可以兼容IE8的。

由于使用了`webpack-hot-middleware`, 开发过程**不兼容**IE8，但是没关系，`npm run dist `生成的发布代码是兼容IE8。

需要主要的是，你需要在你的HTML里引用es5-sham或者es5-shim。如:

```js
<!--[if lt IE 9]>
<script type="text/javascript" crossorigin="anonymous" src="//s.url.cn/qqun/xiaoqu/buluo/p/js/es5-sham-es5-sham.min.77c4325f.js"></script>
<![endif]-->
```

### 插入样式

通过import可以在js依赖相关的css文件，

```js
import './index.css'
```

index.css会在运行时插入到head里面。

### 插入组件局部样式

``` js
import './index.css'

class Hello extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  style(){
    return require('./_hello.css')
  }
  ...
  ...
}
```

Omi框架的style方法返回的字符串会生成为组件的局部CSS。

  需要特别注意的是: 组件的局部CSS必须使用下划线开头，如`_xxx.css`，`_aaa-bbb.css`,不然会被识别成全局CSS插入到head里。


#### English | [﻿中文](https://github.com/AlloyTeam/omi-cli#中文--english)


## Introduction
Prerequisites: Node.js (>=6.x), npm version 3+

```
$ npm install omi-cli -g    
$ omi init [project name]    
$ cd your_project_name
$ npm start                  //development
$ npm run dist               //build   
```

Scaffolding is based on webpack2. omi-cli will run npm command to install dependencies automatically. You could switch the mirror source with for faster  speed:

```
$ omi init app -m cnpm 
```

we support to shift from default to `npm`, `cnpm` or `taobao` mirror.


## Contributors

|name   |avatars   |company   |
|---|---|---|
|  [pasturn](https://github.com/pasturn) |  ![](https://avatars2.githubusercontent.com/u/6126885?v=3&s=60)  | Mars Holding  |  
|  [heyli](https://github.com/lcxfs1991) | ![](https://avatars3.githubusercontent.com/u/3348398?v=3&s=60)  |  Tencent |
|  [dntzhang](https://github.com/dntzhang) | ![](https://avatars2.githubusercontent.com/u/7917954?v=3&s=60)  |  Tencent |

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.