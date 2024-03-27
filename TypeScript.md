## TypeScript

### 概述

**TS为什么会出现：**为了解决JS存在的一些问题，Type容易理解，就是针对JS的动态类型做出改变，变成静态类型，增加了项目的可维护性。

**TS** ：TS是以JS为基础构建的语言，并不是取代JS，是JS的一个超集（对JS的扩展），可以在任何可以运行JS的平台中运行，但是不能被JS解析器执行，要想执行，需要把TS代码编译成JS，然后执行JS。

即使TS代码出现错误，编译成js的时候还是会编译成功，但是会报错

**TS增加的东西**

- 类型

  对于JS中的数据类型，TS也是支持的

- ES中不具备的新特性

  抽象类、接口等

- 丰富的配置选项

- 强大的开发工具



### 开发环境搭建

- 安装node.js
- 使用npm全局安装typescript
  - 进入命令行：npm i -g typescript
  - 命令行：tsc，出现一堆命令，说明安装成功
- 创建一个ts文件
- 使用tsc对ts文件进行编译
  - 进入命令行，进入ts文件所在目录，执行：tsc xxx.ts，就会生成js文件





### 类型

#### 1、写法

```ts
let a:number;
let a:number | string;   //同时声明两种类型
let b = "hello";
let c:"male" | "female";   //使用字面量进行类型声明，但是值只能是这两个，不能改变
function getSum(a:number,b:number):number{//后面这个是指定函数返回值类型
    ...
}
```

声明变量a的类型为number，以后a的类型就不会变;

如果声明变量的同时赋值，TS会自动检测数据类型；

好处：

- 指定变量的类型

- 在js中对于函数参数是不指定个数及类型的，使用TS就可以给参数指定类型

  

#### 2、基本类型

**number、string、boolean、字面量**

**any**：与原生js没啥区别，设置了之后相当于对该变量去除了类型检测，TS中不建议使用，如果声明变量时不指定		   类型，TS解析器也会解析为any类型

​			any类型的变量能够赋值给任何类型的变量，会导致环境污染

**unknown：**未知类型

​					 是一个类型安全的any，不能直接赋值给其他类型的变量，会报错，可以进行判断

```js
if(typeof e === "string"){
    s = e   //直接s=e，就会报错，添加一个判断，就不保存
}
//也可以使用类型断言，用来告诉解析器变量的实际类型
s = e as string;
s = <string>e;
```

注意：当变量类型不确定的时候，就设置unknown类型，尽量少用any类型

**void（没有返回值）、never、array、tuple、enum**

**object：**对象类型

```js
//用来指定对象中考研包含哪些属性及类型，不能多也不能少
let b:{
    name: string,
    age?: number  //？表示这个属性是可选的
}
 
//设置函数结构的类型声明，括号内参数类型，剪头后返回值类型
let fn: (a:number ,b:number) => number ;
```

**array：**数组类型

```js
//两种都是表示xxx类型的数组
let arr1: number[];
let arr2: Array<number>
```



```js
//固定长度的数组
let p: [string,string]    //只需要两个string类型的数据

```

**enum：**枚举---------TS新增的类型

```js
//定义一个枚举类型
enum Gender {
    Male = 0,
    Female = 1
}
let obj: {name: string, gender: Gender }  //可以直接使用枚举类型
obj = {
    name: '杨思远',
    gender: Gender.Male   //这样写会比gender:1更加直观
}
```



**类型别名**

```js
//type 关键字
type myType = 1 | 2 | 3 | 4 | 5;    //定义一种可以是1-5的类型
let k: myType

type myType = {   //描述一个对象myType的类型
    name: string,
    age: number
}
```



### 编译选项

#### 1、自动编译文件

- 编译文件时，使用-w指令后，Ts编译器会自动监视文件的变化，并在文件发生变化时对文件进行编译
- 一个文件使用一个命令行，不能一个命令行监视多个文件
- tsc xxx.ts -w       会生成一个对应的js文件



#### 2、手动编译文件

- TS编译器的配置文件是**tsconfig.json**
- 当输入命令 **tsc** 之后，所有的TS文件都会编译出一个js文件，使用 **tsc -w**  则会自动监视所有TS文件

- 配置选项

  - **compilerOptions**

    - 编译器的选项，决定了编译器如何编译ts文件，是最重要的配置项，其中包含多个子选项，用来完成对编译的配置

      ```js
      {
          "compilerOptions": {
              //设置TS代码编译的目标版本
              //可选值：ES3（默认），ES5、ES6/ES2015、ES7/ES2016、ES2017....
              "target": "ES6",
              
              //指定要使用的模块化规范
              //可选值：ES6、commonjs、none、ES2015、ES2020....
              "module": "ES6",
              
              //指定编译器所需的库文件，当指定了则严格按照指定内容，一般不设置，设为默认
              //可选值：ES标准库、DOM API等
              "lib": [""],
              
              //指定编译后的文件（js文件）所在的目录
              "outDir": "./dist",
              
              //将编译后的代码合并为一个文件
              "outFile": "./dist/app.js",
              
              //是否对js文件进行编译，默认是false
              "allowJs": true,
                  
              //是否检查js代码是否符合语法规范，默认false
              "checkJs":true
              
              //编译后是否移除注释，默认false
              "removeComments": false
              
              //不生成编译后的文件，默认false
              "noEmit": true
              
              //当有错误时，不生成编译后的文件,默认false
              "noEmitOnError": false
              
              //严格检查的总开关
              "strict": true
              
              //设置编译后的文件是否是严格模式，默认false
              "alwaysStrict": false
              
              //不允许隐式的any类型
              "noImplicitAny": true
              
              //不允许不明确类型的this, function fn(this:window){ ... }
              "noImplicitThis": true
              
              //严格的检查空值
              "strictNullChecks": true
              
              //有未使用的变量时，抛出错误
              "noUnusedLocals": false
              
              //有未使用的参数时，抛出错误
              "noUnusedParameters": true
          }
      }
      ```

    

  - **include**

    - 定义希望被编译文件所在的目录

    - ```js
      {
          "include": [
              "./src/**/*"      //*表示任意文件，**表示任意目录
          ]
      }
      ```

  - **exclude**
    - 定义需要排除编译的目录，语法与include相同，一般不需要写
    - 默认值：["node_modules","bower_components","jspm_packages"]
  - **extends**
    - 定义被继承的配置文件，比如说有两个xxx.json配置文件，但是xxx.json文件不想再写了，就可以直接继承，一般不用。
    - "extends": "./configs/base"    当前配置文件中会自动包含base.json中的所有配置信息
  - **files**
    - 指定被编译的文件列表，与include作用一样
    - "flies": [ "xxx.ts", "xxx.ts"]



### 面向对象

#### 类（class）

同java

```js
class Person{
    name: string;       //实例属性，只有new创建对象之后才能使用
	static age: number; //在属性前使用static关键字，静态属性，不需要创建对象也能直接使用 Person.age
	//如果添加readonly表示是个只读属性
	
	constructor(name: string,age: number){   //构造函数，new的时候，就是执行构造函数
        this.name = name;
        this.age = age
    }

	sayHello() {
        //也有static关键字
    }
}
const ysy = new Person()
```



#### 接口（interface）

```js
//接口用来定义一个类结构
interface myInterface {
    name: string,
    age: number
}

//使用接口，多一个少一个属性都不行
const obj: myInterface = {
    name: 'sss',
    age: 111
}
```



#### 属性的封装

作用：对象中的属性可以进行任意更改，会导致对象中的数据变得非常不安全

