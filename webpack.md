## webpack

## 概述

#### 为什么需要打包工具

开发时，我们会使用Vue、es6等语法进行开发，这样的代码要想在浏览器运行必须经过编译成浏览器能识别的JS、CSS语法，才能运行。所以需要打包工具，同时打包工具还可以进行压缩代码、做兼容性处理、提升代码性能等。

#### webPack模式

- 开发模式：仅能编译JS中的esm语法
- 生产模式：能编译JS中的ESM语法和压缩JS代码



#### 使用

- 来到项目根目录，终端输入：npm init -y   

  生成基础的**package.json**文件，其中name字段不能为webpack

- 下载依赖：npm i webpack webpack-cli -D

- 启用webpack

  -  开发模式：npx webpack ./src/main.js --mode=development
  - 生产模式：npx webpack ./src/main.js --mode=production
  - 后面如果写了配置文件webpack.config.js 的话，只需要运行：npx webpack

- 观察输出文件：webpack将文件打包输出到dist目录下

  ​	vue项目中：npm run build 也是这样

注意！！！！！要想webpack打包资源必须要在mian.js中引入资源



#### 配置的五大核心概念

1**、entry（入口）**

​	webpack从哪个文件开始打包

**2、output（输出）**

​	打包完的文件输出到哪里去，如何命名等

**3、loader（加载器）**

​	webpack本身只能处理js、json等资源，其他资源css等需要借助loader，webpack才能解析

**4、plugins（插件）**、

​	扩展webpack的功能

**5、mode（模式）**

​	开发、生产模式



#### webpack基本配置

1、基本配置文件

​		在项目根目录下创建 **webpack.config.js** 文件：

```js
//webpack打包的基本配置文件
const path = require("path")  //nodejs的核心模块path，用来处理路径问题

module.exports = {
    mode: "development",     //模式，development开发模式，production生产模式
    entry: "./src/index.js", //整个项目的入口文件，相对路径
    //指定打包多个文件，打包到多个地方
    entry: {     
        off: './sensors/offWebsite/index.js', 
        manage: './sensors/manage/index.js',
    }
    //指定打包后的文件位置
    output: {
        path: path.resolve(__dirname, "dist"), //输出路径，————dirname指的是当前文件下
        filename: "main.js",     //打包后的文件位置及命名
        clean: true,  //自动清空上次打包结果
        //图片、字条等通过type:asset处理资源的命名方式
        assetMouduleFilename:"static/media/[hash:10][text][query]"
    }, 
    //指定webpack打包时要使用模块
    module: {
        //loader的配置规则
        rules: [
			test:     //指定规则生效的文件
            use: ["xxx"]  //要使用的loader
        	exclude: /node-modules/   //要排除的文件
        ]
    },
    plugins: [
        //plugins的配置
    ],
}
```



####  devDependencies和dependencies的区别

devDependencies：dev就是指development 开发模式，即里面的插件只用于开发环境，打包的时候需要，打包									完成就不需要了。

dependencies：需要发布到生产环境的包，自始至终都在

比如wepack等只是在开发中使用的包就写入到devDependencies，而像vue这种项目全程依赖的包要写入到dependencies。



### 2、处理样式资源

样式资源包括css、less、sass、style

webpack本身不能识别样式资源，所以需要借助webpack解析样式资源

- **处理css资源**

  - 下载包：**npm i css-loader style-loader -D**

  - css-loader：负责将css文件编译成webpack能够识别的模块

    style-loader：动态创建一个style标签，用来放置webpack中css模块内容

  - 最终样式以style标签的形式在页面上生效

  - 怎么看是否下载成功：package.json 文件中的  devDependencies配置中看到

  - 在配置文件中：

    ```js
  modul:{
        rules:[
            {
                test:/\.css$/,   //正则表达式，只检测以.css 结尾的文件
                use:["style-loader","css-loader"] //执行顺序从右到左，先css-loader
            }
        ]
    }
    ```
  
- **处理less资源**

  - 下载包：npm install less less-loader --save-dev

    ​		下载less和less-loader包

    less-loader：将less编译成css，再对css处理

  - ```js
    modul:{
        rules:[
            {
                test:/\.less$/,   //正则表达式，只检测以.css 结尾的文件
                use:["style-loader","css-loader","less-loader"] //执行顺序从右到左，先css-loader
            }
        ]
    }
    ```

    

### 3、处理图片资源

在webbpack4 中，处理图片资源使用 file-loader和url - loader

webpack5中配置

```js
rules:[
    {
        test:/\.(png|jpe?g|gif|webp|svg)$/,
        type: "asset",
        parser:{
            dataUrlCondition:{
                //使用data url 图片转base64，减少http请求数量，但是体积会变大，所以下面设置最大使用体积
                maxSize:10*1024,
            }
        },
    }
]
```



### 4、处理字体图标资源

与图片资源一样，唯一不同点：

test: test:/\.(ttf|woff2?)$/,

type:"asset/resource",

字体图标不需要转换base64，所以去掉parse配置



### 5、处理其他资源

处理音视屏等其他资源时，不需要做处理，只需要原封不动的打包就好了，但是webpack识别不到这些资源

解决：在处理字体图标时：test: test:/\.(ttf|woff2?|mp4|iav)$/,



### 6、处理JS资源

- 原因：webpack对js资源的处理能力是有限的，只能编译js中的ES模块化语法，像是箭头函数之类的在IE中是不认识的。还有就是对代码格式进行统一，。

- 处理方法

  - **Eslint**	：处理代码格式

    eslint配置文件：可以直接在 **package.json**中  **eslintConfig** 基础上写

    具体配置规则去官方文档查看

  - **Babel**    ：处理兼容性问题

打包后的main.js结构：

```js
// modules 就是传进来的对象 
(function(modules) {
    function __webpack_require__(moduleId) { //1、加载模块的函数,对已加载过的模块缓存，没加载过的就通过id定位再缓存。
    // 做模块缓存，此处省略
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);   // 执行模块中的代码
        return module.exports;   //返回模块的导出结果
    }
    return __webpack_require__("./src/index.js");    //3、 加载入口模块并返回导出结果
})({
  "./src/a.js": function(module, exports, __webpack_require__) { 
    // 2、维护每一个js模块，使用这个函数进行包裹
  },
  "./src/index.js": function(module, exports, __webpack_require__) { 
  },
});
```







### 7、处理html资源

处理之前需要手动在index.html中手动引入js资源，当js资源多的时候，会比较麻烦

处理：

- 下载插件  **npm install --save-dev html-webpack-plugin**

- 在webpack.config.js文件中引入：**const HtmlWebpackPlugin = require("html-webpack-plugin");**

- plugins的配置中使用：

  ```js
  plugins:[
      new HtmlWebpackPlugins({
          //以public/index.html文件创建新的html文件
          template: path.resolve(__dirname,"public/index.html")
      })
  ]
  ```

  

​			



### 8、修改输出文件目录

在使用这个之前，打包好的所有文件都是放在同一个dist文件夹根目录下，js、css等文件混合在一起，所以就需要把js放在一起、css放在一起等，方便管理

- 对于入口文件main.js

  ```js
  output: {
  	path: path.resolve(__dirname, "dist"), //输出路径，————dirname指的是当前文件下
  	filename: "js/main.js"  //这样写，main.js文件就放在dist/js/
    },
  ```

- 对于图片资源

  在配置rules的时候设定

  ```js
  rules:[
      {
          test:/\.(png|jpe?g|gif|webp|svg)$/,
          type:"asset",
          parser:{
              dataUrlCondition:{
                  //使用data url 图片转base64，减少http请求数量，但是体积会变大，所以下面设置最大使用体积
                  maxSize:10*1024,
              }
          },
          generation:{
              filename:"static/images/[hash:10][text][query]"
              //前面就是图片的存储位置dist/static/images,hash就是打包后生成的图片名字，是个图片的id，:10表示hash只取10位，为了后面使用图片的时候体积不会变大，text是图片的扩展名
          }
      }
  ]
  ```





### 9、处理TS文件

```js
/webpack.config.js
rules: [
    {
        test:/\.ts$/,
        use: 'ts-loader',
        exclude: /node-modules/
    }
]

//tsconfig.json文件的配置照常写
```





### 10、搭建开发服务器

- 自动化

每次修改了代码，都需要重新打包，很麻烦

解决：使用webpack-dev-serve

下载包：**npm i webpack-dev-servev -D**

进行配置：

```js
module.exports = {
    devServe: {
        host:"localhost",    // 启动服务器域名
        port:"3000",     //启动服务器端口
        open: true,     //是否自动打开浏览器
    }
}
```

使用后，打包命令变成了：npx webpack serve



## 生产模式

#### 什么是生产模式

生产模式就是代发万代码之后，我们需要得到代码将来部署上线，这个模式下我们需要对代码进行优化，让其运行性能更好，优化主要从两个方面;

​	1、优化代码运行性能

​	2、优化代码打包速度



#### 生产模式下的基本配置

- 需要重新创建一个配置文件  **webpack.prod.js**   ，与开发模式下的配置文件 **webpack.dev.js**是同一个目录下

- 与开发模式相比需要更改的地方：

  - 生产模式没有输入，在内存中编译打包

    想要查看编译后的代码，可以在右键检查的source中查看
    
    ```js
    output:{
        path:underfined,
    }
    ```

- 打包指令太长了，可以在package.json文件中找到

```js
 "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
     "dev":"webpack serve --config ./webpack.dev.js" 
     //找到打包配置文件就可以直接 npm run dev 
  },
```



#### css处理

css文件在开发模式中是被打包到js文件中的，当js文件加载时，会创建一个style标签俩生成样式，这对于网站来说，会出现闪屏现象，用户体验不好。

解决：提取成单独的css文件，通过   **link** 标签加载，

步骤：

- 下载包：npm i mini-css-extract-plugin -D

  MiniCssExtractPlugin插件会把css提取到单独的文件中，为每个包含css的js文件创建一个css文件，支持sourcemap的按需加载。

- 在webpack.config.js文件中引入

  ```js
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  ...
  		rules:[
      		{
                  test:/\.css$/i,
                  use:[MiniCssExtractPlugin.loader,"css-loader"]
                  //需要把所有的style-loader改成这个
              }
  		]
  
  	plugins: [
          //plugins的配置
          new MiniCssExtractPlugin({
              filename:""//可以指定最后的css目录
          })
      ],
  
  ```

- **css代码压缩**

css代码压缩插件：CssMiniMizer-webpack-plugin --save-dev 

在webpack.config.js文件中引入

```js
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

plugins: [
        //plugins的配置
       new CssMinimizerPlugin()
    ],
```

!!!!!!!注意：对于生产模式下，默认开启了html、js压缩，不需要想css一样额外配置





## 提升开发体验

#### SourceMap（源代码映射）

**1、为什么有sourceMap**

​	在开发中，我们打包编译后的代码，所有css和js合并成了一个文件，并且多了很多其他代码，此时如果代码运行出错，那么提示代码错误的位置我们是看不懂的，很难找到出错代码。所以就需要更加准确的错误提示，帮祝我们开发代码。

**2、是什么？**

SourceMap是一个用来生成  **源代码**  与  **构建后代码**  一一映射的文件的方案

它会生成一个xxx.map 文件，里面包含着每一行每一列的映射关系，当构建后的代码出错了，会通过这个文件，找到映射后的源代码出错位置，从而让浏览器提示源代码文件出错位置，帮助我们找到错误元。

**3、使用**

通过**devtool**来设置Sourcemap的值

- 开发模式：cheap-module-source-map

  特点：打包编译速度快，只包含行映射

```js
module.exports = {
    mode:"development",
    devtool:"cheap-module-source-map"
}
```

- 生产模式：source-map

  特点：打包编译速度很慢，包含行、列映射

```js
module.exports = {
    mode:"production",
    devtool:"source-map"
}
```

注意：行映射指的是，会提示是这一行出错了，但是具体这一行的哪个位置出错不清楚，需要自己判断

​			行、列映射指的是，会提示到这一行的哪个位置出错了





## 提升打包构建速度

#### HMR（热模块替换、热更新）

**1、为什么要提升**

开发中，如果我们只修改了其中一个模块的代码，但webpack会默认将所有模块重新打包，所以我们需要做到只打包修改过的模块。

**2、是什么？**

HotModuleReplacement（HMR、热模块），指的是在程序运行过程中，替换、添加、删除模块，而无需重新加载整个页面。

**3、使用**

```js
devServe:{
    ...
    hot:true,    //开启HMR
}
```

但是这个只对css代码生效，对于js代码需要手动配置

```js
//在mai.js文件中
if(module.hot){
    module.hot.accept("./js/count")//没有热模块的话，如果改变了代码，就只重新加载这个文件
}
```

像上面对于js文件一个个写很麻烦，所以在开发中有一个 **vue-loader**帮我们执行热模块



#### Oneof

**1、为什么**

​	打包时每个文件都会经过所有loader处理，去匹配哪一个loader能处理这个文件，要全部都过一遍，会很慢。所以OneOf就是做到如果匹配上了一个loader，就停止匹配。

**2、使用**

```js
rules:[
    {
        oneof:[
            {},{},{}  //这里写loader的配置
        ]
    }
]
```



#### Include/Exclude

开发时会用到很多第三方库或者插件，都下载在node_modules中吗，而这里面的文件是不需要编译直接使用的，所以我们在处理js文件时要**排除掉node—modules**下面的文件

- include：只处理xxx文件
- exclude：排除xxx文件

```js
rules:[
    {
        test:/\.js$/,
        exclude:/node_modules/,//或者使用include:path.resolve(__dirname,'../src')
    }
]
```



#### thread

当项目项目越来越大，打包速度越来越慢，甚至可能需要一个下午才能打包出来代码。想要提升打包速度，主要是提升js文件的打包速度，那么就是提升ealint、babel、terser三个工具的运行速度，可以**开启多线程同时处理**js文件。

使用：

- 启动进程数量就是cpu的核数，所以要先获取核数，再决定开启多少个多线程

  ```js
  const os = require("os");   //nodejs核心模块，直接使用
  const threads = os.cpus().length;
  ```

- 下载包：npm i thread-loader -D

- 配置多线程

  ```js
  rules:[
      {
          test:/\.js$/,
          exclude:/node_modules/,//或者使用include:path.resolve(__dirname,'../src')
          use:[
             {
                 loader:"thread-loader",//开启多线程
                 options:{
                     works:threads,
                 }
             },
             {},{} ///在这配置babel-loader之类的
          ]
      }
  ]
  ```

  压缩js代码的terser，是自带的，默认就会开启压缩js代码

  terser配置多线程：

  ```js
  const TerserWebpackPlugin = require("terser-webpack-plugin")
  ...
  plugins:[
  ],
  optimization:{
  	minimizer:[
          new TerserWebpackPlugin({
              parallel:threads
          })
      ]
  }
  ```

  

### 

## 减少代码体积，提高加载速度

#### tree shaking

减少没用的代码，webpack默认已经配置好了，无需配置



#### 压缩图片  --image minimizer

在开发中，如果图片体积太大、图片太多，请求的速度就会变慢，可以对图片压缩体积

使用插件：image-minimizer-webpack-plugin   用来压缩图片的

**使用：**

- 下载包：npm i image-minimizer-webpack-plugin imagemin -D

- 下载剩下包，包括两种模式：

  - 无损压缩：npm i imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D
  - 有损压缩：npm i imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D

- 引入插件：

  ```js
  const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
  
  optimization:{
  	minimizer:[
          new ImageMinimizerPlugin({
             //这里面的配置有点长，去搜直接复制
          })
      ]
  }
  ```

  

#### code Split（代码分割）

打包代码时会把所有的js文件打包到一个文件中，体积太大了。如果我们只需要渲染首页，就应该只加载首页的js文件，其他文件不应该加载。

这个时候就需要将打包生成的文件进行代码分割，生成多个js文件。

code split作用：分割js文件，按需加载

配置时：

```js
entry:{
    app:"./src/app.js",		//有多个入口文件，多个入口，最后输出多个js文件
    main:"./src/main.js"
},
output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[name].js"  //webpack命名方式，[name]指的就是入口中的App、main
}
```

- 把公共模块打包成一个文件，而不是在每一个入口文件中都打包一份。

  ```js
  optimization:{
      splitChunks:{
          //这里面的默认配置去搜
      }
  }
  ```

- 按需加载js文件，哪里需要该js文件，就使用动态import引入：

  ```js
  document.getElementBtiId("btn").omclick = function (){
      import(/* webpackChunkName:"math"*/"./js/math").then()  //动态载入，暴露出来的东西在defalut里面,可以设定打包出来后的名字为math(webpack魔法命名)
  }
  
  //再到配置文件中设置，即可命名成功
  output:{
      chunkFilename:"static/js/[name].chunk.js"
  }
  ```



#### preload、Prefetch

我们虽然使用code split做了代码分割，同时使用import动态导入来进行代码按需加载，但是加载速度还不够好，因为如果资源体积很大，点击了按钮之后，就会出现卡顿现象。

所以，我们要在浏览器空闲时间加载后续使用到的资源。

- Preload：告诉浏览器立即加载资源
- Prefetch：告诉浏览器在空闲时加载资源

**共同点**：都只会加载资源，不执行；都有缓存。

**区别：**Preload的加载优先级较高，且只能加载当前页面需要用到的资源；

​			Prefetch的优先级低，能加载下一个页面需要用到的资源。

**使用：**

- 下载资源：npm install --save-dev @vue/preload-webpack-plugin

- 导入资源：const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')

- 配置资源：

  ```js
  plugins：[
      new PreloadWebpackPlugin({
          rel:'preload',
          as:'script'
      })
  ]
  ```

  





### vue-cli的配置

#### 1、vue-loader

vue-loader是一个webpack的loader，能够帮我们编译单文件组件vue

使用：

- 下载包：npm install -D vue-loader vue-template-compiler

- ```js
  //webpack.config.js
  const {VueLoaderPlugin } = require('vue-loader')
  
  rules:[
  	{
  		test:/\.vue$/,
          loader:'vue-loader'
  	},
      {    //处理.css文件和vue文件中的style块的时候用这个
          test:/\.css$/,
          use:['vue-style-loader','css-loader']
      }
  ],
  plugins:[
      new VueLoaderPlugin()
  ],
  resolve:{
      extensions:[".vue",".js",".json"] //自动补全文件扩展名
  }
  ```

vue脚手架自动配置好的webpack

less-loader、babel、eslint