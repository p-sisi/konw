# package.json

## 概述

**作用**：package.json  文件是  Node.js  项目根目录下的一个文件，包含与项目相关的各种信息，提供给  npm   的信息使其能够识别并处理项目的依赖关系。

```json
{  
	"name": "enterprise-ai-assistant",
    "version": "1.0.0",
    ...
}
```

**创建**

- 快速创建package.json文件

  ```bash
  npm init -y       //-y为使用默认值快速创建
  ```

  



## name

必须配置。npm包的名字。

- 名字可以选择一范围为前缀，如  @sisi/mypackages



## version

必须配置，npm包的版本，name    和   version   共同构成弄啊的唯一标识符。如果修改了包，需要发布新的包应该要同时修改版本。

- 版本格式：<major>.<minor>.<patch>   
  - major：主版本号，涉及重大功能更新，更改不向后兼容时
  - minor：次版本号，当更新包含的新功能不会被破坏时
  - patch：修订号，小的错误修复，功能上线时



## description

包的描述，字符串，有助于其他开发人员发现你的包，因为它在  npm  search  中列出



## keywords

包的关键字描述，字符串数组，有助于其他开发人员发现你的包，因为它在  npm  search  中列出



## private

是否拒绝npm发布。目的是防止意外发布私有存储库



## types

在node支持ES模块后，要求ES模块采用 .mjs后缀文件名，只要遇到 .mjs 文件，就认为它是ES模块，如果不想修改文件后缀，就可以在package.json  文件中指定该字段为 module

```js
{
    "types": "module"
}
```



## imports





## exports

- 定义包的入口点，node12 +  才支持该字段，作为main的替代字段，支持定义子路径导出和条件导出，同时封装内部未导出模块。
- 在使用   import 'xxxx'   和   require('xxxx')  时会从不同的入口引入文件

```js
{
    'exports':[
        "require": "./index.js",
        "import": "./index.mjs"
    ]
}
```



## module

指定项目ES模块的入口文件

```js
{
    "module": "./index.mjs"
}
```





## main

指定程序主要入口点，也就是说，如果已发布的包名为   @xiaoe/assistant   ,用户安装你的包之后，执行 require（“@xiaoe/assistant")，  主模块导出的对象将被返回。

```js
{
    "main": "./libCos/AssistantWeb/index.js",
}
```



## respository

仓库位置，对想要贡献的人很有帮助，如果    git repo  在GitHub上，那么  npm  docs命令能够找到你

```js
"repository": {
  "type" : "git",
  "url" : "https://github.com/npm/cli.git"
}

"repository": {
  "type" : "svn",
  "url" : "https://v8.googlecode.com/svn/trunk/"
}
```



## script

执行对应的用户脚本或命令.。   例如 使用    npm  run dev    就会执行下面的dev命令

```js
{
    "script": {
        "dev": "vite --force",
    	"build": "vite build",
    	"build:dev": "vite build --mode dev",
    	"build:pro": "vite build --mode prd",
    }
}
```



## dependencies

项目中使用的生产环境依赖包及其版本。使用    npm  install  --production  仅会安装这里面的依赖包



## devDependencies

开发过程中所需的软件包依赖关系。使用    npm  install  --save-dev  仅会安装这里面的依赖包。

列出生产环境中不必要的包，但有助于创建和原始设置一样的开发环境



## peerDependencies

在插件开发的场景下，你的插件需要某些依赖的支持，但是我又没必要去安装，因为插件的宿主会去安装这些依赖，就可以用这个字段去声明一下需要依赖的插件和版本，如果出问题  npm  就会警告来提醒使用者去解决这个版本冲突问题

```js
{
    "peerDependencies": {
        "react": ">=16.9.0",
        "react-dom": ">16.9.0"
    }
}
```





## engines

- 可以指定包的适用  node  版本，如果不指定或者指定为    **“*”**  ，那么任何版本的node都可以

- 可以指定哪些npm版本能够正确安装你的包
- 除非设置了engine-strict，否则这些字段只是建议性的，只会在安装依赖时产生警告

```js
{
    "engines":
    {
        "node": "~14.0.0",
        "npm": "8.9.0"
    }
}
```



