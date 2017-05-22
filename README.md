# omi-cli

CLI for [Omi](https://github.com/AlloyTeam/omi) projects - [Omi框架](https://github.com/AlloyTeam/omi) 的命令行工具


中文 | [English](https://github.com/AlloyTeam/omi-cli#english--中文)


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

* 文件目录
* npm 脚本
    * npm start
    * npm run dist
* 代码分割
* 兼容 IE8


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

当你执行 npm run dist 之后，会创建一个dist目录，所有要发布的文件都在里面:

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

English | [﻿中文](https://github.com/AlloyTeam/omi-cli#中文--english)


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