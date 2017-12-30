#### 中文 | [English](https://github.com/AlloyTeam/omi-cli#english--中文)

# omi-cli

创建网站无需任何配置。对 [Omi框架](https://github.com/AlloyTeam/omi) 或者 [Omix框架](https://github.com/AlloyTeam/omix) 集成十分友好。

## 简介

环境要求: Node.js 版本 6.x+, npm 版本 3+

```
$ npm install omi-cli -g     //安装CLI
$ omi init [project name]    //初始化项目 
$ cd your_project_name       //转到目录
$ npm start                  //开发
$ npm run dist               //生成发布文件   
```

也可以初始化 [Omix](https://github.com/AlloyTeam/omix) 的项目:

```
omi init-x [project name]
```

脚手架完全基于 webpack2+. 执行 `omi init` 或 `omi init-x` 的过程中会自动安装npm依赖包，请耐心等待。国内用户可通过下面的命令切换npm镜像:

```
$ omi init app -m cnpm 
```

支持 `npm`， `taobao`等镜像, 如果你的系统安装了yarn或者cnpm，也可以将参数设为yarn或者cnpm进行安装。


## 用户指南

* [文件目录](#文件目录)
* [npm 脚本](#npm-脚本)
    * [npm start](#npm-start)
    * [npm run dist](#npm-run-dist)
* [代码分割](#代码分割)
* [兼容 IE8](#兼容-ie8)
* [插入 CSS](#插入-css)
* [插入组件局部 CSS](#插入组件局部-css)
* [局部CSS使用图片](#局部css使用图片)
* [插入 Less](#插入-less)
* [插入组件局部 Less](#插入组件局部-less)
* [导入组件](#导入组件)
* [导入图片、字体、SVG 等文件](#导入图片字体svg-等文件)
* [修改配置](#修改配置)
    * [修改 CDN 地址](#修改-cdn-地址)
    * [修改 webserver 和 port](#修改-webserver-和-port)
    * [修改 route](#修改-route)
* [切换 uglify 和 babili](#切换uglify和babili)
* [创建新页面](#创建新页面)
* 创建新组件(即将到来)      

你可能还感兴趣的文档: [精通Omi框架](https://github.com/AlloyTeam/omi/blob/master/tutorial/all.md)

### 文件目录

执行完`omi init my-app`，你可以看到会生成如下的基础目录结构

```
my-app/
  config
    project.js
    config.js
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

* config里的文件是webpack打包配置以及cdn、webserver，端口、route配置
* src目录是我们的项目逻辑代码目录

### npm 脚本

#### npm start

当你执行 `npm start` 会自动打开 [http://localhost:9000/](http://localhost:9000/)。现在你可以开始开发和调试，修改代码并且保存，浏览器会自动刷新显示最新的结果。

#### npm run dist

当你执行 `npm run dist` 之后，会创建一个dist目录，所有要发布的文件都在里面:

```
my-app/
  dist/
    chunk
    component
    css
    img
    js
    libs
    favicon.ico
    index.html
    page-b.html
```

component会保留其依赖的某些资源文件，chunk会输出分割出来的模板，怎么分割请往下看。

### 代码分割

为了优化性能，用户不需要一次性加载所有网页的依赖，可以在需要使用的时候再进行加载，所以这部分可以进行分割成单独的模块。
如下面的a.js:

```js
import logo from '../../img/omi.png'

export function getSrc(){
    return logo
}
```

通过require.ensure进行按需使用，在用户点击事件触发之后才会进行加载a.js以及a.js的所有依赖，如下面代码所示:

```js
import logo from './logo.svg'
import './index.css'
import Intro from '../intro/index.js'

class Hello extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  handleClick(){
      alert('Hello Omix !')
      import("./a.js").then(function(moduleA) {
          //console.log(moduleA);
          document.body.innerHTML+=`<img src="${moduleA.getSrc()}">`
      });
  }

  style(){
    return require('./_hello.css')
  }

  render() {

    return <div class="app">
                <div class="app-header">
                  <img src={logo} onclick={this.handleClick.bind(this)} class="app-logo" alt="logo" />
                  <h2>Welcome to Omix</h2>
                </div>
                <Intro></Intro>
                <p>
                  {this.data.name}
                </p>
            </div>
  }
}

export default Hello
```

上面是老的方式，webpack2更加建议使用一种"类函数式(function-like)"的 import() 模块加载语法。如:

```js
import("./a.js").then(function(moduleA) {
  document.body.innerHTML+=`<img src="${moduleA.getSrc()}">`
})
```

这样也能达到同样的效果，当然你也[可以使用async/await](https://doc.webpack-china.org/guides/code-splitting-async/#-babel-async-await)。

### 兼容 IE8

由于使用了`webpack-hot-middleware`, 开发过程**不兼容**IE8，但是没关系，`npm run dist `生成的发布代码是兼容IE8。

注意，如果你需要兼容IE8需要把 .babelrc 里的 ` "modules": false` 去掉，改成如下:

```js
{
    "plugins": ["syntax-dynamic-import","transform-es3-member-expression-literals","transform-es3-property-literals"],
    "presets": [
        ["es2015", {"loose": true}]
    ]
}
```

定位IE8问题可以使用:

``` js
$ npm run ie    //用于生成未压缩js的发布包用来定位ie8的问题
```

需要注意的是，你需要在你的HTML里引用es5-sham或者es5-shim。如:

```js
<!--[if lt IE 9]>
<script type="text/javascript" crossorigin="anonymous" src="//s.url.cn/qqun/xiaoqu/buluo/p/js/es5-sham-es5-sham.min.77c4325f.js"></script>
<![endif]-->
```

### 插入 CSS

通过import可以在js依赖相关的css文件，

```js
import './index.css'
```

index.css会被提取到CSS文件当中，插入到head里面。

### 插入组件局部 CSS

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

Omi框架的style方法返回的字符串会生成为组件的局部CSS，`_hello.css`文件会在运行时动态插入到head里面。

  需要特别注意的是: 组件的局部CSS必须使用下划线开头，如`_xxx.css`，`_aaa-bbb.css`,不然会被识别成全局CSS插入到head里。

### 局部CSS使用图片

当然不是必须require外部的css文件，也可以直接写在style方法内，组件的依赖的图片资源也在组件的目录内:

```
my-app/
  src/
    component
        hello
            index.js
            pen.png
            pencil.png

```

对应的index.js如下所示:

``` js
class Hello extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }
  
  style(){
    return `
        .icon-pen {
            background-image: url(${require('./pen.png')});
        }
        .icon-pencil {
            background-image: url(${require('./pencil.png')});
        }
    `
  }
  ...
  ...
}
```

### 插入 Less

通过import可以在js依赖相关的css文件，

```js
import './xxx.less'
```

xxx.less会在转换成CSS，并且被提取到CSS文件当中，插入到head里面。

### 插入组件局部 Less

``` js

class Intro extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  style(){
    return require('./_index.less')
  }

  render() {

    return `
          <p class="app-intro">
          To get started, edit <code>src/component/hello.js</code> and save to reload.
        </p>
    `
  }
}

export default Intro
```

Omi框架的style方法返回的字符串会生成为组件的局部CSS，`_index.css`文件会在运行时动态插入到head里面。

  需要特别注意的是: 组件的局部Less必须使用下划线开头，如`_xxx.css`，`_aaa-bbb.css`,不然会被识别成全局CSS插入到head里。

### 导入组件

如上面一节定义了`Intro`组件，利用复用。那么怎么在其他组件中使用?

``` js
import Intro from '../intro/index.js'

class XXX extends Omi.Component {
  constructor(data, option){
      super(data, option)
  }

  render() {

    return `
      <div>
        <div>Hello Omi!</div>
        <Intro></Intro>
      </div>
    `
  }
}

export default XXX
```



特别需要注意的是每个组件必须要要闭合成一个节点，比如:

错误写法:

```
  render() {
    return （
        <div>a</div>
        <div>b</div>
    ）
  }
```

正确写法:

```
  render() {
    return （
        <div>
            <div>a</div>
            <div>b</div>
        <div>
        )
  }
```


### 导入图片、字体、SVG 等文件

如上面的例子:

``` js
import logo from './logo.svg'
```

logo.svg会被动态转成base64。我们可以为每种类型都对应webpack里的一个loader来处理所有的文件类型。

图片也是类似:

``` js
import logo from '../../img/omi.png'
```

当然也支持require:

``` js
const logo = require('../../img/omi.png')
```

### 修改配置

打开 `config.js`，其位置如下:

```
my-app/
  config
    project.js
    **config.js**
```

打开之后可以看到

```js
module.exports = {
    "webserver": "//localhost:9000/",
    "cdn": "",
    "port": "9000",
    "route": "/news/",
};
```

#### 修改 CDN 地址

```js
module.exports = {
    "webserver": "//localhost:9000/",
    "cdn": "//s.url.cn/",
    "port": "9000",
    "route": "/news/",
};
```

#### 修改 webserver 和 port
```js
module.exports = {
    "webserver": "//localhost:9000/",
    "cdn": "//s.url.cn/",
    "port": "9001",
    "route": "/news/",
};
```
#### 修改 route

```js
module.exports = {
    "webserver": "//localhost:9001/",
    "cdn": "//s.url.cn/",
    "port": "9001",
    "route": "/user/",
};
```

举个例子,如:

```
module.exports = {
    "webserver": "//qun.qq.com/qqweb/m/qun/effect/",
    "cdn": "//s.url.cn/qqun/qun/qqweb/m/qun/effect/",
    "port": "9000",
    "route": "/qqweb/m/qun/effect/",
};
```

在fiddler 的 willow 或者其他工具配置HOST:

```
127.0.0.1:9000 qun.qq.com s.url.cn
```

你现在就可通过url:  `http://qun.qq.com/qqweb/m/qun/effect/index.html` 访问网站了,这样调试AJAX就不要出现跨域问题。

### 切换uglify和babili

```
module.exports = {
    "webserver": "//localhost:9000/",
    "cdn": "",
    "port": "9000",
    "route": "/news/",
    //默认是false使用uglify压缩，改成true之后使用babili进行压缩
    "babili" : false
};
```

### 创建新页面

```
npm run tpl --tpl=index --path=detail
```

通过上面命令，就会在你的page目录下创建detail页面目录以及相关的资源。


#### English | [﻿中文](https://github.com/AlloyTeam/omi-cli#中文--english)

# omi-cli

Create website with no build configuration. be friendly to [Omi](https://github.com/AlloyTeam/omi) framework.

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

other cmd:

``` js
$ npm run ie    //for debugging in ie8 
```

## Contributors

|name   |avatars   |company   |
|---|---|---|
|  [pasturn](https://github.com/pasturn) |  ![](https://avatars2.githubusercontent.com/u/6126885?v=3&s=60)  | Mars Holding  |  
|  [heyli](https://github.com/lcxfs1991) | ![](https://avatars3.githubusercontent.com/u/3348398?v=3&s=60)  |  Tencent |
|  [vorshen](https://github.com/vorshen) | ![](https://avatars2.githubusercontent.com/u/10334783?v=3&s=60)  |  Tencent |
|  [dntzhang](https://github.com/dntzhang) | ![](https://avatars2.githubusercontent.com/u/7917954?v=3&s=60)  |  Tencent |

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
