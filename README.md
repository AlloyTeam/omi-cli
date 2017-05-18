# omi-cli

CLI for Omi projects - Omi框架的命令行工具

## Installation
Prerequisites: Node.js (>=6.x), npm version 3+

```
$ npm install omi-cli -g
```

## Usage
initialize a new omi application :

```
$ omi init                          // in current directory
$ omi init [project name]           // in new directroy named project name
```

Scaffolding is based on webpack2. omi-cli will run npm command to install dependencies automatically. You could switch the mirror source with:

```
$ omi init app -m cnpm 
```

we support to shift from default to `npm`, `cnpm` or `taobao` mirror.



### development

``` js
$ npm run dev
```

### build

``` js
$ npm run dist
```

## omi pr

initialize a new `omi-pr` project :

```
$ omi init-pr                          // in current directory
$ omi init-pr [project name]           // in new directroy named project name
```

pre-render your project for speeding up your web page access times, you can run:

```
$ omi pr
```

in your omi-pr project.


## Contributors

|name   |avatars   |company   |
|---|---|---|
|  [pasturn](https://github.com/pasturn) |  ![](https://avatars2.githubusercontent.com/u/6126885?v=3&s=60)  | Mars Holding  |  
|  [heyli](https://github.com/lcxfs1991) | ![](https://avatars3.githubusercontent.com/u/3348398?v=3&s=60)  |  Tencent |
|  [dntzhang](https://github.com/dntzhang) | ![](https://avatars2.githubusercontent.com/u/7917954?v=3&s=60)  |  Tencent |

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
