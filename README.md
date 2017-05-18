# omi-cli

CLI for [Omi](https://github.com/AlloyTeam/omi) projects - [Omi框架](https://github.com/AlloyTeam/omi)的命令行工具

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