##  八股文

## JS

#### ES6新特性

1、引入了**类clas**s，实现了面向对象编程；继承extend

2、模块化开发（Module)

​	将一个文件视作一个模块，模块的功能主要由import、export组成，通过import来引入，export向外部暴露，每个模块都有自己单独的作用域。

3**、箭头函数**

​	可以很好的解决this指向问题等

4、可在定义函数时为其设定默认值

5、**模板字符串**  ``

6、**解构赋值**

7、新增了**数据类型symbol、bigint，声明 变量let、const**

8、新的对象和方法

- Map、Set

  Map：用于保存键值对，object的键只能是字符串或ES6的symbol值，而Map可以是任何值，Map对象有一个size属性，存储了键值对的个数，而object对象没有类似属性。

  Set：集合，轻松实现数组去重

- 字符串新方法：includes()、startWith()、endWith()

- 数组新方法：of()、findIndex()0

9、两种异步机制

- Promise   await /async
- 迭代器和生成器：Generator

10、对象Object新增API

- Object.is() ：判断两个对象是否相等，相当于===

- Object.getOwnProPertyNames()：枚举属性，返回字符串数组

- Object.assign()：用于混合对象到第一个参数中，有的覆盖，没有的添加，可以实现浅拷贝

  ```js
  const obj = Object.assign({},obj1, obj2);
  ```









#### 解构赋值

1、概念：通过解构赋值，将属性、值从对象、数组中提取出来，赋给其他的变量

2、语法结构：赋值变量类型   数据模型 = 数据源

3、内容

​	数组注重下标相匹配，对象注重变量名相匹配

``` js
//数组解构
let [a, b, c] = [1, 2, 3];
//对象解构
let { foo, bar } = { bar: 'bbb' , foo: 'aaa'};
```

```js
	let boy = { age: 22, B: true };
    let { age: foo, B: bar } = boy;
    console.log(foo); // 22
    console.log(bar); // true
```

```js
 function fetch({ name, age, like }) {
        // 参数经历了 let { name, age, like } = option
        console.log(name,age,like);
    }
function add([x, y]) {
	    return x + y;
    }
    add([1, 2]);
```

4、作用用途

- 提取JSON数据（使用解构最多的）

  ```js
  let sinadata = {
      id: 520,
      statuses: "isOK",
      data: [520, 1314]
      };
      
      //像下面这样写可以快速取到想要的数据
      let { id, statuses, data: number } = jsonData;
      console.log(id, status, number);   520, "isOK", [520, 1314]
  ```

  

- 交换变量的值：[a,b] = [b,a]

- 从函数返回多个值

  ```js
  // 返回一个数组
      function exe1() {
          return [1, 2, 3];
      }
      let [a, b, c] = exe1();
      console.log(a,b,c);   //1 2 3
      // 返回一个对象
      function exe2() {
          return {
              foo: 1,
              bar: 2
          };
      }
      let { foo, bar } = exe2();
      console.log(foo,bar); //1 2
  ```

  





#### 数组去重方法

1、借助[ES6](https://so.csdn.net/so/search?q=ES6&spm=1001.2101.3001.7020)提供的Set结构 **new Set()** 简单好用 强烈推荐

```js
var oldArr = [1, 2, 3, 1, 2];
var newArr = [...new Set(oldArr)]
console.log(newArr) //[1,2,3]
```

2、利用filter过滤器去重

3、利用数组的方法**includes**

​	创建一个新数组，对旧数组循环遍历，如果旧数组includes（arr[i]）返回false，就新数组push这个元素





#### 数组常用的方法（一共有19个）

1、splice() ：删除：splice（删除的起始位置index，删除个数）  返回删除的元素数组，且原数组已改变

​	   			    插入：splice（插入的起始位置index，0，插入的元素）  返回的是空数组，且原数组已改变

​                       替换：splice（替换的起始位置index，替换的位数，替换项）

2、push()：在原数组***末尾***添加若干元素，不生成新数组，原数组改变

3、pop()：在原数组**末尾**删除若干元素。不生成新数组，原数组改变，若原数组为空，返回undefined

​                 array.pop() 也可以获取到数组的末尾元素

4、unshift()：在原数组**开头**添加若干元素，不生成新数组，原数组改变

5、shift()：删除原数组第一项元素，并返回该元素值array.shift()

6、concat(arr1,arr2,...)：合并多个数组，**返回新数组，原数组不变**

7、join("")：将数组的每一项用指定字符连接形成一个字符串。默认连接字符为 “,” 逗号

8、reverse()：将数组倒序。原数组改变。

9、sort()：数组排序，默认升序，降序写法

```js
var downSort = function(a,b){
    return b-a;//升序是a-b,a比b小，返回-1
}
arr.sort(downSort)
//按照数组对象的某个值排序：
function objSort (param){
    return function sortAge(a,b){
        return a[param]-b[param]
    }
}
arr.sort(compare("age"))
```

10、map(function(当前项item,当前下标index，原数组arr))：原数组的每一项执行函数后，**返回一个新的数组**。原数组不变。

11、forEach(function(当前项value,当前下标index，原数组arr))：调用数组的每一项，并将元素传递给回调函数。forEach()**不会返回数据**没有返回值，原数组不变。

**注：**两个迭代性能差异不大，迭代都不能中断

12、slice()： 按照条件查找出原数组中的部分内容，**返回新数组**，原数组不变

​						array.slice(n, m)，从索引n开始查找到m处（不包含m）

​						array.slice(n) 第二个参数省略，则一直查找到末尾

​						array.slice(0)原样输出内容，可以实现浅拷贝

13、filter( () => {} )：获取数组中符合条件的元素，**组成新的数组**，原数组不变

14、every(function(当前tValue,当前index,原数组arr))，对数组中的每一项进行判断，若**都**符合则返回true，否则返回false。不改变原数组。

15、some(function(当前Value,当前index,原数组arr))，对数组中的每一项进行判断，只要有一项符合就返回true，否则返回false，不改变原数组。

16、reduce(function callbackfn（上一次调用callbackfn获得的值，当前value，当前index，arr)，接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

``` 
var arr = [1,2,3,4,5];
var total = arr.reduce((a,b) => a+b);  //15
```

17、indexOf()：检测值在数组中第一次出现的位置索引，不存在返回-1，不改变原数组

18、findIndex()：查找元素下标。 有则返回下标，无则返回固定值-1，查找数组中的元素都是引用类型 

19、find(): 查找某个指定元素， TAB_TYPE.find(item => item.label === label)

19、includes()：判断一个数组是否包含一个指定的值，返回值是布尔值，indexOf、find、findIndex也能实现

20、of()：es6新增，把传入的任何形式的参数，当做数组的元素

21、arr.flat(遍历深度)：按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。



#### 字符串方法

1、**charAt（index）：**返回指定index的字符。

2、**indexOf（值，开始index）**：返回指定值，从开始index之后第一次出现的位置；

3、**LastIndexOf（值，开始index）：**返回指定值，从开始index之后最后一次出现的位置；

4、**concat（string1，string2，...，stringn）**：将字符串拼接，返回新字符串；

5、**slice（开始index，结束index）**：返回字符串从开始index到结束index之间的字符串；忽略结束index，则截取到结尾；负数则从结尾开始；[startIndex, endIndex)

6、**substring（开始index，结束index）：**返回开始index-结束index的字符串；没有负数，会调换两个参数位置；

7、**substr（开始index，长度）：**从开始index，返回指定长度的字符串；

6、**split（字符串中出现的分割符，数组长度）：**将字符串按照分隔符，返回指定长度的数组；

8、**trim（）**：去除字符串两端的空格，返回新字符串





#### 数组合并方法

1、**array1.concat(array2)**

​     无论数据量大小，concat()方法都能应付，且性能可观，兼容性强；

​	两个十万的数组合并：1.1ms

2、**扩展运算符：[…array1, …array2]**

​	两个十万的数组合并：16.2ms

3、**push加扩展运算符：array1.push(…array2)**

​	两个数万的数组合并：2.87ms

4、**Array.prototype.push.apply(array1,array2)**

​	两个数万的数组合并：2.09ms



#### 删除数组指定下标的元素的方法

1、**arr.shift()：**删除第一位元素

2、**arr.pop()：**删除最后一位元素

3、**arr.splice(index,1) ：**删除index的元素

4、for循环：

```js
for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
        newArr.push(arr[i])
    }
}
```



#### 数组扁平化（拍平）的方法

将数组里面的数组打开，合并为一个数组

1、flat(Infinity)

```js
arr.flat(Infinty);
```

2、递归实现

```js
function fn(arr) {
            let arr1 = []
            arr.forEach((val) => {
                if (val instanceof Array) {   //是数组就继续递归
                    arr1 = arr1.concat(fn(val))
                } else {
                    arr1.push(val)
                }
            })
            return arr1
        }
```

3、reduce

```js
function fn(arr){
    return arr.reduce((prev,cur)=>{
        return prev.concat(Array.isArray(cur)?fn(cur):cur)
    },[])
}
```









#### 阻止默认事件、事件冒泡

preventDefault方法、stopPropagation()



#### 判断数据类型

**JS数据类型：**

- 基本数据类型（7种）：Number、String、Boolean、Null、Underfined、Symbol、bingInt

  直接存储在栈中

- 引用数据类型（5种）：Object、Function、Array、Date、RegExp（正则表达式的数据类型）

  **存储在堆中，在栈中保存数据的引用地址**，这个引用地址指向的是对应的数据，以便快速查找到[堆内存](https://so.csdn.net/so/search?q=堆内存&spm=1001.2101.3001.7020)中的对象。

**1、typeof()**

- typeof（表达式）   typeof 变量名

- null/underfine都是Object类型（因为在JS中，不同对象都是用二进制进行存储的，如果二进制前三位都是0的话，系统会判断为是`Object`类型，而null的二进制全是0，自然也就判断为`Object`）

  字符：100

  布尔：110

  整型：1

**2、Object.prototype.toString.call()（最佳）**

- 如果toString方法没有被重写，调用toString会返回一个内部属性，它是一个字符串**"[object X]"**,X就是对象的类型
- 对于Object对象，直接调用toString()，其他数据类型需要再调用call()

**3、instanceof**

- A instanceof B  判断A是不是B的实例;  123 instanceof Number
- 不能判断基本数据类型，null、underfine会报错

**4、constructor**

- 利用原型链，例如定义函数F时，会在函数F原型prototype上添加一个constructor属性，指向它的实例对象，
- 不能判断underfine、null



#### 对象Object

- 给对象添加属性：

  ```js
  obj['1'] = 0;
  obj[1] = 1; //这两种都是给'1'添加值，最后结果{‘1’：1}，因为对象的属性会被自动转化成字符串类型
  
  obj.name = 'ysy';
  
  Object.defineProperty(obj, 'name', {
    value: 'ysy',
    writable: true, // 是否可写
    enumerable: true, // 是否可枚举
    configurable: true // 是否可配置
  });
  
  Object.defineProperties(obj, {
    name: {
      value: 'ysy',
      writable: true,
      enumerable: true,
      configurable: true
    },
    age: {
      value: '18',
      writable: true,
      enumerable: true,
      configurable: true
    }
  });
  
  const propertyName = 'name';
  const obj = {
    [propertyName]: 'ysy'
  };
  
  Object.assign(obj, { name: 'ysy' });
  
  const obj = { ...obj,name: 'ysy' };
  
  //给对象添加属性的顺序，不等于对象最后的属性呈现顺序:
  //会将数字类的属性名提前，并且按照升序排序，
  	//例如obj[1] = 0;  obj['2'] = 0;   obj = { 1:0 , 2: 0}
  //非数字类属性按照添加顺序排序
  ```

  



#### 浅拷贝、深拷贝

浅拷贝：将原对象/数组的引用直接赋给新对象/数组，对基本对象类型的值的拷贝，对引用类型的地址的拷贝，两个对象指向同一个内存地址，所以修改其中任意的值，另一个值都会随之变化

深拷贝：创建一个新对象/数组，将原对象/数组的值复制过来，两个对象修改其中任意的值另一个值不会改变。在另一个对象中开辟对应的空间，空间大小占用一样但是位置不同

1、浅拷贝

第一层原对象改变，不会改变浅拷贝后的对象；

第二层原对象改变，会改变浅拷贝后的对象

**对象：**

- **for in 循环**遍历复制

  ```js
   function shallowClone1(o) {
        let obj = {}
  
        for (let i in o) {
          obj[i] = o[i]
        }
        return obj
    }
  ```

- **三点运算符**

  var shallowObj2 = { ...obj1 }

- **assign()方法**

  var shallowObj3 = Object.assign({}, obj1)

**数组**：

- Array.prototype.slice(0),
- Array.prototype.concat()

2、深拷贝

- **for**循环

  ```js
  function deepClone(o) {   //简易版，没有考虑到传入的参数类型
      let obj = {}
      for (var i in o) {
          if(o.hasOwnproperty(i)){
              if (typeof o[i] === "object") {
            		obj[i] = deepClone(o[i])
          	} else {
            		obj[i] = o[i]
          	}
          } 
  	}
      return obj
  }
  //升级版1，考虑了对象、数组类型
  function isObject(o) {
              return Object.prototype.toString.call(o) === "[object Object]" || Object.prototype.toString.call(o) === "[object Array]"
          }
  
  function deepClone(o) {
      if (isObject(o)) {
          let obj = Array.isArray(0) ? [] : {};
          for (let i in o) {
              if (isObject(o[i])) {
                  obj[i] = deepClone(o[i])
              } else obj[i] = o[i]
          }
          return obj
      } else return o;
  }
  ```

  

- **JSON.stringify()**

  function cloneJson(obj) {   

     return  JSON.parse(JSON.stringify(obj))    

  }



#### 压缩代码

terser

- 去除多余的空格。字符。注释
- 压缩变量名
- 编译预计算，就是声明变量的时候，直接给结果，而不是给表达式



#### 模块化

概念：模块化开发就是将复杂的代码按照功能的不同，划分为不同的模块，单独去维护。

E：ESMAScript：js的一种标准化规范

S：Script：js的执行单元，即脚本

模块化规范：

**1、ESM（**ES 模块, 异步导入，用于浏览器端)

​	import、export

​	优点：具有commonjs的简单语法和AMD的异步；可以进行tree shaking；自动采用严格模式，

```js
<script type="module">
	 var bar = 88      //其中一种使用方法
	 console.log(bar);  //88
</script>
<script type="module">
	 console.log(bar);  //Uncaught ReferenceError: bar is not defined
</script>
```

**2、CommonJs**（同步导入模块，用于服务器端，浏览器端使用会导致效率低下）

```js
//require函数载入
const doSomething = require('./doSomething.js'); 
// module export导出
module.exports = function doSomething(n) {
  // do something
}
```

​	一个文件就是一个模块；node就是使用的CJS；commentJs具有缓存。在第一次被加载时，会完整运行整个文件并输出一个对象，拷贝(浅拷贝）在内存中。下次加载文件时，直接从内存中取值

3、AMD（异步模块）



#### tree shaking（摇树）

技术通常是通过使用 ESM 模块系统来实现的，可以自动地静态分析和删除这些无用的代码，从而减小打包体积，减小模块之间的冗余，就是DCE（dead code elimination）新的实现原理。

**有两种方式**：

- sideEffects：

  用于告知webpack compiler哪些模块是有副作用的，在package.json中添加属性sideEffects，当为true时：表示任何模块都是有副作用的(默认)，当为false时：表示任何模块都是没有副作用的(告知webpack可以安全的删除未用到的exports)

- usedExports

  给一些代码添加魔法注释：unused harmony export mu，标注这是一段dead code



#### 值传递和引用传递

值传递针对基本数据类型，引用传递针对引用数据类型，传递可以理解为复制变量值。

1、值传递：传递完后俩个变量各不相干。

2、引用传递：地址传递、两个变量共享堆地址、相互影响。因为复杂数据类型存储的是地址，真实内容存储在堆中，引传递赋值，赋的是地址，指向同一个内存空间



#### 宏任务、微任务（Event loop）

事件循环event loop就是一个宏微任务的循环

js是一种单线程语言，分同步和异步，微任务和宏任务皆为异步任务，它们都属于一个队列

**执行顺序**：先同步再异步，执行同步任务过程中，遇到微任务就放到微任务队列，宏任务放到宏任务队列；

​					执行完同步任务，将微任务调入主线程执行，清空队列；

​					再从宏任务队列中第一个宏任务出来，又分为同步任务、微任务、宏任务，按顺序执行；

​					直到最后一个宏任务执行完毕

宏任务：script、setTimeOut、setInterval、setImmediate

微任务：promise.then、process.nextTick、Object.observe、MutationObserver

同步任务：console那些从上到下执行的，new Promise 



#### 防抖、节流

**1、防抖**

- n秒后执行该事件，若在n秒内被重复触发，则重新计时

- 应用：多次点击，造成多次提交，每次点击前都重新计时

-  function debounce(func,delay){

  ​          let timer;  //闭包，因为每次都不需要重新定义延时时间，只需要初始化一次，且每次调用只是不断赋值

  ​          return function (){

  ​          	let context = this;      //改变this指向

  ​          	let args = arguments;   //增加参数给func使用

  ​          	clearTimeout(timer);     //重新计时

  ​          	timer = setTimeout(() => {

  ​                 	func.apply(context，args)    //修改this指向触发事件的DOM，原先是window

  ​          	}, delay);

  ​          }

  ​     }

  ​    btn.addEventListener('click',debounce(fun,1000))

在实际项目中

```js
// 防抖函数，封装的，无需修改
const debounce = (func: any, delay: any) => {
  let timeoutId: any;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// 在原始的处理函数上应用防抖，将原始的处理函数更改为使用防抖
const handleResetPasswordDebounced = debounce(async () => {
  if (newResetPassword1.value !== newResetPassword2.value) {
    ElMessage.error('两次输入的密码不一致！');
    return;
  }

  try {
    const params = {
      password: oldResetPassword.value,
      newPassword: newResetPassword1.value,
      username: userCount.value,
    };

    await fetchResetPassword(params);
    ElMessage.success('密码重置成功！');
    resetPasswordVisible.value = false;
  } catch (error) {
    ElMessage.error(error);
  }
}, 500); // 设置防抖延迟时间为500毫秒（可以根据实际需求调整）

// 在事件处理中使用防抖函数，真正被btn调用的方法
const handleResetPassword = () => {
  handleResetPasswordDebounced();
};
```



**2、节流**

设置时间间隔，在时间间隔内，再次触发的事件会被忽略

```js
 function throttle(fn, delay) {
	let timer;
	return function() {
		if (timer) return;
        let context = this;
        let args = arguments;
        timer = setTimeout(() => {
            fn.apply(context, args);
            timer = null;
         }, delay)
     }
}
```



#### 继承

**1、原型链继承**

让子类构造函数的原型作为父类的实例，那么子类new出来的实例就具有父类的属性方法。

父类实例和子类实例的属性方法会相互影响。

```js
function Parent(){         //一个构造函数
    this.isShow = true;
    this.info = {
        name:"mjy",
        age:'18'
    }
} 
Parent.prototype.getInfo = {    //直接在parent构造函数原型上添加方法
    console.log(this.info);
} 
function Children(){}       //新的构造函数
Children.prototype = new Parent();     //Children继承Parent

let child1 = new Children();    //Children的实例，具有Parent的方法，包括利用原型添加的

//ES5新增Object.create() ，可以直接实现原型链继承，不需要创建Children空构造函数和new Parent
let child1 = Object.create(Parent);
let child2 = Onject.create(Parent);
```

优点：容易理解

缺点：子类实例共享了所有继承的属性方法，各实例之间的数据会相互影响；不能传递参数。



**2、构造函数继承**（利用call）

在子类型构造函数的内部调用父类构造函数；使用 apply() 或 call() 方法将父类构造函数绑定在子类上。

```js
function Parent(sex){         //一个构造函数
    this.isShow = true;
    this.info = {
        name:"mjy",
        age:'18',
        sex:sex
    }
} 
function Children(sex){
    Parent.call(this,sex)      //实现继承，Children继承Parent
} 
let child1 = new Child('男');   
```

优点：子类的各实例之间的数据不会相互影响；解决了原型链的不能传参问题

缺点：父类原型上直接定义的方法，子类是不能使用的；无法实现函数复用



**3、组合继承**

原型链和构造函数的组合，使用原型链实现对原型属性和方法的继承，使用构造函数实现对实例属性的继承

```js
function Parent(sex){         //一个构造函数
    this.isShow = true;
    this.info = {
        name:"mjy",
        age:'18',
        sex:sex
    }
} 
function Children(sex){      //另一个构造函数，实现构造函数继承
    Parent.call(this,sex)      
} 
Child.prototype = new Person();    //真正实现组合继承

let child1 = new Child('男');
```

优点：通过在原型链上定义方法实现函数复用；每个实例都有自己的属性；能够传递参数。

缺点：无论什么情况下，都会调用两次父类的构造函数，造成了不必要的消耗



**4、寄生继承**

与“原型链继承”和“工厂模式”相似，

```js
function objectCopy(obj) {
  function Fun() { };
  Fun.prototype = obj;
  return new Fun();
}
 
function createAnother(obj) {
  let clone = objectCopy(obj);
  clone.showName = function () {
    console.log('my name is：', this.name);
  };
  return clone;
}
 
let person = {
     name: "mjy",
     age: 18,
     hoby: ['唱', '跳']
}
 
let child1 = createAnother(person);
child1.hoby.push("rap");
console.log(child1.hoby); // ['唱', '跳', 'rap']
child1.showName(); // my name is： mjy
 
let child2 = createAnother(person);
console.log(child2.hoby); // ['唱', '跳', 'rap']
```

缺点：不能函数复用；



**5、寄生组合继承**

通过构造函数来继承属性，通过原型链的混成形式继承方法

```js
function Father(name) {    //一个构造函数
      this.name = name
      this.hobby = ["篮球", "足球", "乒乓球"]
    }

    Father.prototype.getName = function () {   //在原型链上定义方法
      console.log(this.name);
    }

    function Son(name, age) {    //另一个构造函数
      Father.call(this, name)
      this.age = age
    }

    Son.prototype = Object.create(Father.prototype) //实现继承
    Son.prototype.constructor = Son

    var s2 = new Son("ming", 18)
    console.log(s2);
```

优点：只调用了一次父类构造函数；能传参



6、extend继承（寄生组合继承的语法糖）

ES6新增的

```js
//子类只要继承父类，可以不写 constructor ，一旦写了，则在 constructor 中的第一句话必须是 super 。
   class Son3 extends Father { // Son.prototype.__proto__ = Father.prototype
      constructor(y) {
        super(200)  // super(200) => Father.call(this,200)
        this.y = y
      }
    }

```





#### 手写call、apply、bind

改变函数的this指向

**1、call**

function.call（想要this指向，传递任何类型参数），function立即执行

**2、apply**

function.apply（想要this指向，传递数组类型参数）,function立即执行

**3、bind**

fn.bind（想要this指向，传递任何类型参数），fn不执行，返回的是一个绑定了新的this 的新函数，需要接收后调用新函数，想要fn执行，需要调用：fn.bind() ()



#### js文件通信

- 使用事件或观察者模式，定义一个事件或观察者，当数据发生变化时，通知其他文件进行相应的更新

```js
//a.js
//定义可供观察的数据
let availableDomains = [];

// 定义观察者对象
const observer = {
  subscribers: [],
  subscribe(callback) {
    this.subscribers.push(callback);
  },
  notify(data) {
    this.subscribers.forEach(callback => callback(data));
  }
};

// 定义修改可供观察的数据的函数
function updateAvailableDomains(domains) {
  availableDomains = domains;
  observer.notify(availableDomains);
}

// 导出函数和数据
export { updateAvailableDomains, availableDomains, observer };
```



- 使用观察者-订阅者模式，



#### defer、async

用于加载外部 JS 文件的 `<script>` 标签上的属性    <script src="example.js" defer ></script>

- **defer**

标签中的脚本会被异步下载，在***HTML解析完毕之后***，多个包含 `defer` 属性的脚本会按照它们在文档中的顺序依次执行，这确保了它们之间的执行顺序与它们在文档中的顺序一致。

适用于不需要立即执行的脚本，但需要按照它们在文档中的顺序执行。

- **async**

标签中的脚本会被异步下载，***不会等待 HTML 解析***，一旦下载完成就会立即执行，不考虑它们在文档中的顺序。

适用于不依赖于文档结构的脚本，可以并行下载和执行。



#### 页面可见度

检测当前页面是否处于用户的视野中。

- **visibilitychange 事件**

  当文档的可见性状态发生变化时触发

  ```js
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      // 页面变得可见时的操作
      console.log('该页面可见');
    } else {
      // 页面变得不可见时的操作
      console.log('该页面不可见');
    }
  });
  ```

- **document.visibilityState 属性**

  文档可见性状态的只读属性

  ```js
  'visible': 页面可见。
  'hidden': 页面不可见。
  'prerender': 页面在进行预渲染，此时可能并未显示给用户。
  
  if (document.visibilityState === 'visible') {
    console.log('该页面可见');
  } else {
    console.log('该页面不可见');
  }
  ```

- **document.hidden 属性**

  当前页面是否不可见的只读属性

  ```js
  'true'： 当前页面不可见
  'false': 当前页面可见
  
  if (document.hidden) {
    console.log('Page is hidden');
  } else {
    console.log('Page is visible');
  }
  ```

  



## CSS/HTML

#### 浏览器页面渲染规则

**1、构建节点树DOM tree**

​		从上到下解析html文档生成节点树，也叫内容树（content tree）

**2、构建CSS规则树**

​		加载解析css样式

**3、加载JS代码**

​	包括内联和外联JS文件

**4、构建渲染树( Render tree )**

​	根据 DOM 树和 CSS 规则树，生成渲染树( Render tree )【渲染树：按顺序展示在屏幕上的一系列矩形，这些矩形带有字体，颜色和尺寸等视觉属性】

**5、布局**

​	根据渲染树将DOM树中的每一个节点布局在正确的位置

**6、绘制**

​	根据渲染书绘制所有节点，为每一个节点匹配上样式





#### 组件库进行深度样式修改

- [sass](https://so.csdn.net/so/search?q=sass&spm=1001.2101.3001.7020)和less的样式穿透 使用：（/deep/）

  在想要深度修改样式的css选择器前面添加   （自定义类名） /deep/ .组件库自带的类名 { 样式 }

- stylus的样式穿透 使用:（>>>)

  定义类名  >>> .需修改样式的元素身上的组件库自带类名 { 样式 }

- 通用的[样式穿透](https://so.csdn.net/so/search?q=样式穿透&spm=1001.2101.3001.7020) 使用：（::v-deep）

  自定义类名   ::v-deep   .需修改样式的元素身上的组件库自带类名 { 样式 }



#### CSS选择器的优先级/权重 

**css specifity**

！important > 内联选择器 >  id选择器 > 类选择器 = 属性选择器 = 伪类 > 元素选择器  > 通配符选择器

1.！important 优先级10000
2.内联选择器 优先级1000   标签中的style=“”属性中
3.id选择器 优先级100      #
4.类选择器 优先级10       .
5.属性选择器 优先级10     标签中的属性：[title]  或   [title=one] 
6.伪类 优先级10     

![image-20230330210444881](C:\Users\sisi\AppData\Roaming\Typora\typora-user-images\image-20230330210444881.png)

7.元素选择器 优先级1     html   标签之类的
8.通配符选择器 优先级0       *  全部
9.继承选择器 没有优先级

~（波浪号）：A ~ B表示选择A标签后的所有B标签，但是A和B标签必须有相同的父元素。

~（加号）：加号又被称作兄弟选择器。A+B表示选择紧邻在A后面的B元素，且A和B必须拥有相同的父元素，所选到的仅为一个B元素标签

**CSS样式层叠规则：**

```js
1、优先级
	作者样式表（开发者所书写的样式） ！important
    默认样式表（浏览器等自带的样式） ！important
    作者样式表普通样式
    默认样式表普通样式
2、权重（特殊性）
	（上面所说的选择器规则）
3、代码顺序
	下面的覆盖上面的
```



#### 实现垂直居中

1、**vertical-align:middle**

​	前提是一个inline-block，垂直居中于父元素

2、**行高line-height等于height**

​	适用于单行的行内元素

3、**align-items: center**

​	flex布局中，父元素设置子元素垂直居中

4、**grid+place-items**

​	grid布局中，子元素设置

4、**绝对定位  margin**

​	将上下左右（top、bottom、left、right）设为0，再设置margin：auto

5、**绝对定位 + transform: translate(-50%,-50%)**

​	垂直元素设置

6、**绝对定位+margin减去子元素宽高的一半**

7、**table-cell**  表格

​	vertical-aline：middle



#### 左侧固定，右侧自适应

1、左边宽度固定左浮动，右边margin-left值为左侧的宽度，且右侧width：auto

2、左边宽度固定左浮动，右侧overflow：hidden，触发BFC

3、父元素flex布局，左边宽度固定，右边设置flex：1，（flex-grow:1; flex-shrink:1; flex-basis: auto的缩写)

4、父元素gird布局，设置"grid-template-columns: 100px 1fr"属性，表示第一列宽度始终为100px，第二列的宽度自适应。

5、绝对定位，左边子元素设置left为0，宽度100，右边元素left设置为100



#### Flex

​	Flexible Box ，意为弹性布局，为盒装模型提供最大的灵活性。所有元素都可以设置弹性布局，且设置之后float + clear + vertical-aline属性将失效。

​	父元素设置了flex布局之后，它的所有子元素自动成为flex item。

​	容器自动含有两个轴，主轴、交叉轴

- 容器的属性

  - **flex-direction**：row（默认值） | row-reverse | column | column-reverse

    主轴的方向（即项目的排列方向）

  - **flex-wrap**：nowrap（默认值） | wrap | wrap-reverse

    如果一条轴线排不下，如何换行

  - **flex-flow：**row  nowrap

    flex-direction和flex-wrap的简写形式

  - **justify-content**：flex-start（左对齐） | flex-end | center | space-between（两边对齐） | space-around（每个项目两侧的间隔相等）

    项目在**主轴上**的对齐方式（默认是是一行的）

  - **align-items**：flex-start | flex-end | center | baseline （中点对齐）| stretch（第一行文字的基线对齐）

    项目在**交叉轴上**的对齐方式（默认是纵轴上怎么对齐）
    
  - **gap**：xxxpx

    子元素之间的间隙

- item的属性

  - **order：**0       item排列顺序，越小越靠前

  - **flex-grow：**  0     item放大比例

    例如：一列有三个item，默认第一个为0，第二个为3，第三个为1，则除去三个默认排列的大小之后，剩余空间分成4份，第二个给3份，第三个给1份

  - f**lex-shrink**：1  item缩小比例，默认是1，负值无效，如果是0则表示不收缩。按照设置的比例及item本身大小去计算缩小的权重值，基于溢出部分。

  - **flex-basis**：auto    item在分配多余的主轴空间时，固定占据的大小，这个时候width就不起作用了，缩放的计算机会基于这个值去分配。

  - **align-self：**     auto | flex-start | flex-end | center | baseline | stretch;

    设置某个item的对齐方式，覆盖align-items属性

- flex布局的优点
  - 在flex眼中，标签不再分类，简单来说就是没有块级元素，行内元素之分
  - 响应式布局，提高了布局的效率、灵活性，适应不同的屏幕大小以及设备类型

适应不同的屏幕大小以及设备类型

- flex：1     auto (1 1 auto) 和 none (0 0 auto)。

是flex-grow、flex-sh rink、flex-basis的简写，默认flex：1 , 0，auto，后面两个属性可不写。



#### 表格实现单行双行样式不一

用选择器： ：nth-child(2n){}

​					:nth-child(2n+1){}



#### 伪类与伪元素

- 伪类：用来选择DOM树之外的不能够被普通[选择器](https://so.csdn.net/so/search?q=选择器&spm=1001.2101.3001.7020)选择的文档之外的元素，比如:hover :active 。作用对象是整个元素，
- 伪元素：DOM树没有定义的虚拟元素，比如::before :after，作用于元素的一部分：一个段落的第一行或者第一个字母
- 区别：可以同时使用多个伪类，而只能同时使用一个伪元素；
  - 它们是否创造了**新**的元素，这个新创造的元素就叫 "伪无素"



#### prefecth、preload

能够控制浏览器加载资源

preload：浏览器加载当前路由必需的、优先级高的资源；它加载的资源是在浏览器渲染机制之前进行处理的

prefetch：利用浏览器的空闲时间加载页面加载优先级低的资源；



#### 禁止复制粘贴

- 给文本元素添加“user-select:none;

- document.oncontextmenu事件禁用右键菜单

  ```js
  document.oncontextmenu = function(){
      return false;
  }
  ```

- oncopy事件禁用复制

  ```js
  document.oncopy = function(){ 
      return false; 
  } 
  ```




#### 实现瀑布流

瀑布流：不规则的排列布局

实现方式：

1. vue-waterfall 组件库可以实现



#### 块级作用域

ES6出现的，js引擎会先编译和创建执行上下文，再按顺序执行代码

1、为什么会出现？

在使用之前，js代码中会出现一个**变量污染**的问题，

```js
var myname = "极客时间"
function showName(){
  console.log(myname);
  if(0){
   var myname = "极客邦"
  }
  console.log(myname);
}
showName()   //undefined
```

在函数执行过程中，JavaScript 会优先从当前的执行上下文中查找变量，执行到函数调用时，调用栈中有两个上下文：全局执行上下文（myname = "极客时间"，showName），函数执行上下文（myname =undefined），由于变量提升，导致最后输出的结果为函数执行上下文中的myname。

本应该被销毁的变量没有被销毁：

```js
function foo(){
  for (var i = 0; i < 7; i++) {
  }
  console.log(i); 
}
foo()  //7
```

由于变量提升，在创建函数执行上下文的时候，i=7，for循环结束之后，i没有被销毁。



2、什么是

大括号包裹的一段代码，es6中使用let和const来创建块级作用域，

```js
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;// 不同的变量，当前作用域
    let y = 3;
    console.log(x);  // 2
  }
  console.log(x);  // 1
  console.log(y);//报错变量没定义
}
```



```js
for(var i = 0;i < 5;i++)
{
    setTimeout(() => console.log(i),1000);
}
//1s后连续输出5个5    
//改成let，则1s后连续输出0234，形成闭包
```

原因：for循环是同步任务，定时器是宏任务，事件循环会先执行他同步任务，for循环结束之后，在下一次事件循环才会去执行定时器。



#### 圣杯布局、双飞翼布局

​	圣杯布局和双飞翼布局都可以实现**三栏布局**，即两侧宽度固定，中间自适应的效果。圣杯布局是先用padding将中间内容留出，再定位左右盒子到相应位置；而双飞翼布局首先将中间盒子的宽度设为了100%，在定位左右盒子的时候会覆盖中间盒子的两端，这样就需要在中间盒子中在定义一个盒子，并留出margin的两侧值。两种布局都需要把center盒子写在left和right前面，为了最先渲染。


**布局效果：**

上面header，下面footer，宽度100%，高度固定；

中间outer为三栏布局，左右不变，center填充中间，三栏高度以最高为基准。

解决问题：

- 高度如何自适应屏幕高度：

  给整个body设置flex布局，header和footer高度设定，中间outer设置flex：1，填充多余空白即可。



#### 懒加载

​		原理：初始时给页面上的图片的`src`设置为空值或者`javascript:;`,给图片创建一个`data-url`属性,并将图片正确的url赋值给`data-url`属性,当图片到达浏览器视窗时,将`data-url`的值赋值给`src`属性,这样就达到了懒加载的目的。

​		DOM对象中有个**dataset**属性对象，可以在该对象中存一些与该DOM对象相关的数据。 date-id="id"  是在生成dom对象时对dataset的一个初始化的动作，dataset中会存在一个id属性和age属性。这里需要注意data-仅仅是一个约定好的前缀，在生成DOM对象时所有已data-开头的属性会将其去掉前缀data-后存在dataset中

```js
img.src = img.dataset.src;  //核心代码
```

还有一种方法是直接给图片加一个属性，给浏览器自己做懒加载

```js
<img src="xxx.jpg" loading="lazy" />
```




**如何判断元素进入可视区域**：

- **getBoundingClientRect**

返回值是一个 `DOMRect`对象，拥有`left`, `top`, `right`, `bottom`, `x`, `y`, `width`, 和 `height`属性

```js
const target = document.querySelector('.target');
const clientRect = target.getBoundingClientRect();
console.log(clientRect);
```

如果一个元素在视窗之内的话，那么它一定满足下面四个条件：

​	top 大于等于 0

​	left 大于等于 0

​	bottom 小于等于视窗高度:  right <= viewWidth

​	right 小于等于视窗宽度:bottom <= viewHeight

- **Intersection Observer**

重叠观察者，性能更好，主要分为两步：创建观察者、传入被观察者

````js
//创建观察者
const callback = (entries, observer) => {在这里实现可视区域内的操作}
  						// 表示重叠面积占被观察者的比例，从 0 - 1 取值，1 表示完全被包含
const observer = new IntersectionObserver(callback, {threshold: 1.0, });
//传入被观察者
const target = document.querySelector('.target');
observer.observe(target);
````

**scrollTop**：已经滚动上去的滚动区域高度。

**scrollHeight：**自身高度加上隐藏部分的高度

**offsetTop：**

​	定位的元素： 子元素上外边框开始到父元素内部边框的距离（当然包括了子元素的margin）

​	非定位元素： 就算子元素拥有父元素，父父元素，也是从上外边框距离整个文档顶部的距离

**offsetHeight：**自身宽度加上border+padding

**window.innerHeight**：窗口显示区的高度



#### 文本换行

```css
//单行超出
.text-ellipsis {
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden; /* 隐藏超出容器的文本部分 */
  text-overflow: ellipsis; /* 使用省略号表示文本溢出 */
}
//多行超出，有兼容性问题，适用于webkit内核的浏览器（谷歌、safiri）和移动端
.multi-line-ellipsis {
  display: -webkit-box; /* 将元素属性变为webkit引擎的一部分 */
  -webkit-line-clamp: 3; /* 指定希望显示的行数 */
  -webkit-box-orient: vertical;  /* 文本在垂直方向上显示 */
  overflow: hidden; /* 溢出部分隐藏 */
}
```



#### 位置方位词

left、width和top、height相似

- **offsetParent**      

  ```js
  var box = document.getElementById('sonBox');    //获取子元素
  //获取包含当前元素的具有定位属性（position不是atatic的）的父元素，返回的是DOM元素
  var offsetParent = box.offsetParent;     
  ```

- **clientTop**

  ```js
  var box = document.getElementById('myBox');    //获取目标元素
  //获取元素上边框的宽度（border-top)的只读属性,不包括padding、margin、滚动条
  var topBorderWidth = box.clientTop;
  ```

- **scrollTop**

  ```js
  var contentElement = document.getElementById('content');
  //获取用户滚动后，内容区域顶部被隐藏的部分的高度
  var scrollTopValue = contentElement.scrollTop;
  ```

- **offsetTop**

  ```js
  var childElement = document.getElementById('child');
  // 获取元素上边缘相对于其定位父元素上边缘的距离，只读属性
  var offsetTopValue = childElement.offsetTop;
  ```

- **clientHeight**

  ```js
  var boxElement = document.getElementById('box');
  // 获取元素内容区域的高度，不包括边框、边距、滚动条隐藏部分
  var clientHeightValue = boxElement.clientHeight;
  ```

- **scrollHeight**

  ```js
  var boxElement = document.getElementById('box');
  //获取元素内容的实际高度，包括被滚动条隐藏的部分,不包括边框、边距，只读属性
  var scrollHeightValue = boxElement.scrollHeight;
  ```

- **offsetHeight**

  ```js
  var boxElement = document.getElementById('box');
  // 获取元素的整体全部高度，包括高度、内边距、边框和不可见部分，只读属性
  var offsetHeightValue = boxElement.offsetHeight;
  ```

- **clientX、clientY**

  ```js
  //鼠标指针在   浏览器窗口可视区域的X，Y坐标（窗口坐标）。浏览器窗口左上角为原点，
  //相对于浏览器标签页的窗口
  <div id="output">
      当前鼠标坐标: <span id="coordinates"></span>
  </div>
  
  // 获取输出和坐标元素
  var outputElement = document.getElementById('output');
  var coordinatesElement = document.getElementById('coordinates');
  // 处理鼠标移动事件
  document.addEventListener('mousemove', function(event) {
     // 获取鼠标坐标
     var mouseX = event.clientX;
     var mouseY = event.clientY;
     // 在页面上显示鼠标坐标，随着鼠标在页面上移动，坐标信息将被更新。
     coordinatesElement.textContent = mouseX + ', ' + mouseY;
  });
  ```

- **pageX、pageY**

  ```js
  //鼠标指针在   整个文档页面的坐标（文档坐标）。浏览器窗口左上角为原点
  //整个文档页面滚动了，依然计算高度，不包括标签页部分
  ```

- **screenX、screenY**

  ```js
  //鼠标指针在   整个电脑屏幕的坐标（屏幕坐标）。屏幕左上角为原点
  //相对于整个屏幕，包括标签页部分高度
  ```

  

#### 渐变函数

使用场景：可以在背景、边框等属性中使用

- **linear-gradient()**

  线性渐变：沿着一条直线从一个颜色过渡到另一个颜色
  
  ```css
background-color: linear-gradient(方向，颜色1，颜色2，...)
  
  to top: 从底部到顶部
  to bottom: 从顶部到底部
  to left: 从右到左
  to right: 从左到右
  to top left: 从右下到左上
  to top right: 从左下到右上
  to bottom left: 从右上到左下
  to bottom right: 从左上到右下
  可以使用其他角度值，例如 45deg 表示从左上到右下的方向
  
  例如：background: linear-gradient(to right, #ff0000, #00ff00);
  ```
  
- **radial-gradient()**

  径性渐变：从某个指定的点由一种颜色过渡成另一种颜色，渐变形状类似于圆形

  ```css
  background: radial-gradient(渐变中心, 颜色1, ..., 颜色n);
  
  circle: 渐变中心位于元素的中心。
  top, bottom, left, right: 渐变中心位于元素的顶部、底部、左侧或右侧。
  top left, top right, bottom left, bottom right: 渐变中心位于元素的左上、右上、左下或右下角
  
  /* 使用关键字值 */
  background: radial-gradient(center, #ff0000, #00ff00);
  /* 使用百分比值 */
  background: radial-gradient(50% 50%, #ff0000, #00ff00);
  /* 使用长度值 */
  background: radial-gradient(100px 100px, #ff0000, #00ff00);
  /* 使用位置值 */
  background: radial-gradient(20% 80%, #ff0000, #00ff00);
  
  ```

- **repeating-linear-gradient()**

  重复型线性渐变

  ```css
  background: repeating-linear-gradient(方向, 颜色1, 颜色2, ...);
  
  /*20px为每次渐变效果的长度*/
  background: repeating-linear-gradient(to right, #ff0000, #00ff00 20px);
  
  ```

- **repeating-radial-gradient()**

  ```css
  background: repeating-radial-gradient(circle, #ff0000, #00ff00 20px);
  ```




#### 阴影

**box-shadow**：在元素周围创造阴影

```css
box-shadow: 水平偏移 ，垂直偏移 [模糊半径] [扩展半径] [阴影颜色];

水平偏移：阴影水平方向的偏移量，正值向左，负值向右
垂直偏移：阴影垂直方向的偏移量，正值向下，负值向上
模糊半径：值越大，阴影越模糊
扩展半径：指定阴影的大小，正值扩大，负值缩小

box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

```



#### 动画

在css中，使用 @keyframes  规则来定义动画效果，使用 animation 来将动画应用到元素中

```css
1、定义关键帧：每个关键帧包含了元素在某个时间点的样式
@keyframes exampleAnimation {
  0% {                          动画开始时的效果
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {                         动画进行到50%的效果
    opacity: 0.5;
    transform: translateX(0);
  }
  100% {                         动画结束时的效果
    opacity: 1;
    transform: translateX(100%);
  }
}

2、应用动画：将某个动画效果使用选择器应用到某个元素身上
div {
    animation: 动画名称 动画持续时间 [timing-function] [延迟时间] [播放次数] [direction] [fill-mode] [play-state];
}

1、动画名称：即关键帧名称
2、动画持续时间：完成动画所花费的时间。可以使用单位，如 s（秒）或 ms（毫秒）。
3、timing-function：动画的时间曲线，控制动画的速度。常见的值有 ease、linear、ease-in、ease-out 等。4、延迟时间：规定动画开始的延迟时间
5、播放次数：可以是某个具体数字，infinite 表示无限循环
6、direction：规定是否应该轮流反向播放动画。常见的值有 normal（正常播放）、reverse（反向播放）、	              alternate（正向和反向交替）等
7、fill-mode (可选值): 规定在动画执行前和执行后如何应用动画外部样式。常见的值有 none（不填充）、                            forwards（保持动画最后的状态）、backwards（应用动画样式到动画开始前的状态）等。
8、play-state (可选值): 规定动画是运行还是暂停。常见的值有 running（运行）和 paused（暂停）。
```

- 使用第三方动画库，**animate.css**

  ```js
  //1、下载资源库
  cnpm install animate.css --save
  
  //2、在mian.ts文件中引入资源文件
  import 'animate.css';
  
  //3、使用动画，animate__animated为必须添加的类名，animate__XXX为右侧菜单栏想要的动画名
  <h1 class="animate__animated animate__bounce">An animated element</h1>
  ```

- 使用**lottie**动效

  ```ts
  //1、找到lottie库，可用的有阿里矢量图标库中的
  
  //2、下载插件
  cnpm install lottie-web
  
  //3、在lottie库中下载对应动画的JSON文件，存放在项目中的静态资源文件夹中
  
  //4、在使用动效的.vue文件中
  import car from "../assets/images/car-loading3-data.json"   //引入下载的动效文件
  import lottie from 'lottie-web'    //引入动效资源库
  
  <div  ref="animation1"></div>        //创建dom元素装载动效
  
  const animation1 = ref<any>(null)  //获取DOM
  onMounted(() => {    //一般在页面加载时触发
      lottie.loadAnimation({
          container: animation1.value,   //选择渲染DOM
          renderer: 'svg',   //渲染格式
          loop: true,   //循环播放
          autoplay: true,   //自动播放
          animationData: car   //要渲染的动效
      })
  })
  ```

  







## 网络原理

#### http的 8 种请求方法

​	HTTP 1.0 定义了3种请求方法： get、post 和、head方法。
​	HTTP 1.1 新增了5种请求方法：options, put, delete, trace 和 connect方法

- get：客户端向服务器获取数据信息，不做任何修改操作

- head：与get方法相同，但没有响应体，仅传输状态行和标题部分，通常用来获取资源信息，这些信息蕴含在响应头中，比如[Content-Length](https://so.csdn.net/so/search?q=Content-Length&spm=1001.2101.3001.7020), 客户端只是想知道自己将要请求的资源有多大，而并不是真的想要获取这份资源，那么就可以使用head方法进行查看。

- post：客户端将数据发送给服务器以创建或更新资源，着重于update，提交的数据一般有两种格式：form表单、json数据

- put：客户端将数据发送给服务器以创建或更新资源，着重于创建insert

- patch：和put一样，也用于资源的更新，PATCH用于资源的部分更新，PUT多用于资源的整体更新
  如果资源不存在，使用PATCH时应创建一个新的资源，而PUT则不要求创建新资源
  
- delete：删除URI给出的目标资源的所有当前内容

- options（预检请求）：可以测试服务器功能是否正常，服务器会返回这个资源所支持的HTTP请求方法，在javascript中，使用XMLHttpRequest对象进行CORS跨域资源共享时，会先使用options方法进行嗅探，以此判断对指定资源是否具有访问权限。

  **携带的请求头信息：**Access-Control-Request-Method：告诉服务器实际请求所使用的 HTTP 方法；

  ​								   Access-Control-Request-Headers：告诉服务器实际请求所携带的自定义首部字段；

  ​								  Origin：发起请求的域名 （协议、域名、端口号）

  **响应头信息：**Access-Control-Allow-Methods：服务端允许的请求，包含 get、head之类的

  ​						Access-Control-Allow-Credentials：允许跨域携带 cookie

  ​						Access-Control-Allow-Origin：允许跨域请求的域名

  ​						Access-Control-Allow-Headers：客户端请求所携带的自定义首部字段

- connect：一般工作中不会遇到，它的作用是让服务器作为代理，让服务器代替用户访问其他网页，其实就是代理服务器。

- trace：用于http请求的测试和诊断，根据协议，服务器在收到trace请求后，应回显所收到的数据，即服务器返回自己所收到的数据。



#### 跨域

1、**同源策略**

​      (1) 同源策略（Same-Origin Policy）最早有NetScape公司提出，是浏览器的一种安全策略。

​      (2) 同源：要求我们当前网页的url和Ajax目标请求的url必须 协议、子域名、主域名、端口号 完全相同。

​      (3) 跨域：违背同源策略

​		浏览器在执行JS时，会遵循同源策略（Same-Origin Policy），这意味着页面中的JavaScript只能访问与其来源相同的资源，而无法直接访问其他域的数据

解决跨域的方法：

- **JSONP**：非官方解决方案

  只支持get方法，利用标签img、a、link、iframe、script等天生的跨域能力，需要后端配合进行函数逻辑书写。

  实现原理：

  - 

- **CORS**：官方解决方案，不需要在客户端做任何特殊的操作，完全在服务器中进行处理，设置一个响应头**response.setHeader('Access-Control-Allow-Origin', '*');**

- 配置**代理服务器**（proxy）

  - 代理服务器位于本机与请求服务器之间，其端口号与本机相同（例如都是8080）

  - 本机先向代理服务器发送请求，此时不需要跨域；代理服务器再向请求地址发送请求，因为代理服务器的请求是在服务器端发起的，而不是从浏览器中的JavaScript发起的，而不是从浏览器发起的，它不受同源策略的限制。

  - 开启代理服务器-----使用vue-cli
    - 方式一：

      ```js
      //找到vue.config.js
       module.exports = {
      	....,//其他代码
      	//开启代理服务器
      	devServer:{
              //这里的5000端口就是你需要跨域请求的服务器的端口号，只需要写到端口号
              proxy:'http://localhost:5000'   
          }
       }
      /*注意：
      ()回到axios请求中，将请求地址由需要跨域解决的5000改为本机端口号8080
      ()缺点：如果在本机中有和请求同样的文件名的时候，请求就会直接在本机拿了，而不会去5000端口
      	   不能配置多个代理，不能控制是否要走代理
      ()应用：使用这个代理配置方式，当想要的数据前端不存在时，就去请求服务器
      
      知识点：
      在vue组件中，8080端口持有的数据都放在了public文件夹中，想要这个数据就直接输入地址，例如：http://localhost:8080/favicon.ico*/
      
      ```

    - 方式二：

      ```js
      //找到vue.config.js
      module.exports = {
      	....,//其他代码
      	//开启代理服务器
      	devServer:{
              proxy:{
                  '/api':
      //  /api为请求前缀，在axios请求中的地址中前缀书写的位置为端口号后面，想要代理服务器进行请求时，需要表明请求前缀是什么，
      			target:'http://localhost:5000',     //然后来这里找对应的，
      			pathRewrite:{'^/api':''}      //因为想要请求的服务器中并没有/api，而当没有这句代码的时候，代理服务器是将/api作为地址的一部分发送出去的，所以必须清空前缀
      			ws:true,               //用于支持websocket
      			changeOrigin:true      //将代理服务器的端口号改成与拥有数据的服务器相同，也就是控制服务器收到的请求的请求头中的Host值
      		},
          	'/foo':{
                  target:'<other_url>'
              }
      	}
      }
      ```



#### http状态码

- 1开头的表示请求接收，需要继续处理

  100：continue，客户端继续发送请求

  101：客户端与服务器http版本不一致

- 2开头的表示请求成功，响应体即将返回

  201：有新的资源根据请求已经建立

  204：请求处理成功，但是没有任何返回实体

  206：partial content 分片，处理了部分请求

- 3开头的表示重定向

  301：永久重定向，请求的资源被永久转移到了新的位置，定位响应头中会有新的url地址，浏览器会自动连接到新的地址

  302：临时重定向，请求的资源在24到48小时内被临时转移到了新的位置，超过了就要用301

  304：可以在缓存中获取数据

- 4开头的表示客户端错误

  401：认证不通过

  403：禁止访问，比如爬虫爬太多了ip被封了，跨域了

  404：请求的资源不存在

  405：这种请求方法服务器拒绝了

- 5开头的表示服务端错误

  500：服务器内部错误（后端脚本出错、数据库出错）
  
  501：服务器无法识别当前请求



#### http各版本区别

- http0.9 
  
  - 只能进行get请求
- http1.0
  - 添加了POST，HEAD，OPTION，PUT，DELETE等
  - 每进行一次HTTP通信，都需要经历建立TCP连接释放
  - 每个域名绑定一个唯一的ip地址
  - 在响应头中设置完整的数据大小，浏览器根据设置的数据大小来接收数据，传输数据之前并不知道最终的数据大小，导致了浏览器不知道何时会接收完所有的文件数据。
- http1.1
  - 增加了**长连接keep-alive**，在一个TCP连接上可以传输多个HTTP 请求，只要浏览器或者服务器没有明确断开连接，那么该TCP连接会一直保持，同时维护6个TCP连接。减少了服务器的负担，提升整体HTTP的请求时间。
  - 会导致队头阻塞问题：等待前面请求返回之后，才能进行下一个请求，如果某个请求没有及时返回，就会阻塞后面的所有请求（通过管线化技术解决，后来放弃了）
  - 增加了Host字段，表示当前的域名地址，这样服务器就可以根据不同的Host值做不同的处理，解决了一个服务器一个域名的问题
  - 引入Chunk transfer机制，**服务器会将数据分割成若干个任意大小的数据块**，每个数据块发送时会附上上个数据块的⻓度，提供了对动态内容的支持
- http2
  - 多路复用机制，添加了一个**二进制分帧层**，可以将请求分成一帧一帧的数据去传输，服务器接收到所有帧之后，会将所有相同ID的帧合并为一条完整的请求信息。
  
    当收到一个优先级高的请求时，比如接收到JavaScript或者CSS关键资源的请求，服务器可以暂停之前的请 求来优先处理关键资源的请求
  
  - 一个域名只使用一个TCP⻓连接来传输数据
  
  - 实现资源的并行请求，也就是任何时候都可以将请求发送给服务器，而并不需要等待其他请求的完成，然后服务器也可以随时返回处理好的请求资源给浏览器（解决对头阻塞）
  
  - 每次请求头部都会附上所有的信息，而且很多的信息都是重复的，使用gzip或compress进行头部压缩



#### 预检请求

什么情况下会发生预检请求：

- 设置了用户自定义请求头
- 发生跨域请求
- 使用了（get、没有搭配MIME类型的POST以外的请求）

 使用option发起请求，从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求



#### 强缓存、协商缓存

- **强缓存：**使用强缓存策略时，如果缓存资源在有效时间内，则**直接使用缓存资源**，不必再向服务器发起请求

  设置方法： http 头信息中的 Expires 属性（指定资源的过期时间，http1.0提出）或者 Cache-Control（http1.1提出，max-age属性） 属性两种方式设置，后者优先级高，请求返回`200`

  **`Cache-Control`可设置的字段：**

  - no-cache：先要和服务器确认是否有资源更新，在进行判断强缓存还是协商缓存
  - no-store：不使用任何缓存，每次请求都直接从服务器获取资源
  - max-age：设置缓存的最大有效期，单位秒

- **协商缓存：**命中协商缓存缓存，就用缓存内容，没有命中，就要返回资源

  ​					先向服务器发送一个请求，如果资源没有发生修改，则返回一个 [304](https://so.csdn.net/so/search?q=304&spm=1001.2101.3001.7020) 状态，让浏览器使用本地的缓存副本。如果资源发生了修改，则返回修改后的资源。

  条件：max-age过期、no -cache

  设置方法：http头信息中的 **Etag**(优先级高) 和 **Last-Modified** 属性

  - **Last-Modified**：浏览器在响应头中添加 Last-Modified 属性来指出**资源最后一次修改的时间**，

    浏览器下一次请求时，在请求头中添加If-Modified-Since 的属性，值为上一次资源返回时的Last-Modified的值；

    对比两个值，判断**资源是否修改**；

    没有修改，返回304，让客户端使用本地缓存；

    如果修改了，就返回修改后的资源；

  - **Etag：**服务器在返回资源的时候，在**头信息中添加了 Etag 属性**，这个属性是**资源生成的唯一标识符**，当资源发生改变的时候，这个值也会发生改变。

    作用：有时候编辑了文件，但是没有修改，但是`last-modified`属性的时间就会改变，导致服务器会重新发送资源。Etag就不会

    缺陷：产生负载平衡问题，多个服务器上资源的 Last-Modified 应该保持一致，因为每个服务器上 Etag 的值都不一样

二者关系：

- 缓存命中时都会使用缓存副本，只是协商缓存会发送一次请求
- 缓存不命中时，都会向服务器发送请求来获取资源
- 实际缓存机制中，二者一起使用，浏览器首先会根据请求的信息判断，强缓存是否命中，如果命中则直接使用资源。如果不命中则根据头信息向服务器发起请求，使用协商缓存，如果协商缓存命中的话，则服务器不返回资源，浏览器直接使用本地资源的副本，如果协商缓存不命中，则浏览器返回最新的资源给浏览器。



#### https原理

<img src="C:\Users\sisi\Desktop\IMG_20230322_170406.jpg.jpg" style="zoom: 33%;" />



#### http强制转换到https

HSTS(HTTP Strict Transport Security）

HSTS响应头格式：

```js
Strict-Transport-Security: max-age=expireTime [; includeSubDomains] [; preload]
```



#### localStorage、SessionStorage、cookie、session 之间有什么区别

- localStorage、SessionStorage（两个都是web store)

  - **localStorage**

    实现永久保存，数据存储在本地硬盘，关闭浏览器还存在

  - **sessionStorage**

    临时保存，保存在session对象中，关闭浏览器就消失，不同浏览器窗口、不同标签页中数据不共享，

    在同一个标签页下，进行刷新或者打开一个同源的网站依然存在

  - 二者联系：

    存储数据的大小一般是5MB，都存储在客户端

- cookie、session

  - **cookie**：服务器发送到永辉浏览器，并**保存在本地**的一小块数据。如果浏览器需要记录用户状态，就用response给服务器发送一个cookie，客户端存储cookie，当浏览器下次向同一服务器发起请求时，**浏览器把请求的网址连同该Cookie一同提交给服务器**。服务器获取Cookie，以此来辨认用户状态。

    会话cookie：

    ​	保存在内存中，不设置过期时间，浏览器窗口关闭，cookie就消失；

    持久cookie：

    ​	保存在硬盘里，设置过期时间，窗口关闭仍有效。

    特性：不可跨域

    作用：

    - 判断用户是否登陆过，以便自动登录、记住密码

    - 保存上次登录的时间等信息

      

  - **session**：保存在服务器上，客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上。用户与服务器建立连接的同时，服务器会自动为其分配一个**SessionId**，来标识用户的唯一身份，用于跟踪用户的状态和存储用户信息。不支持跨域，。

    session机制：

    - 当用户访问web程序时，服务器会为该用户创建一个会话对象，生成**唯一的session ID**，使用cookie方式存储id到客户端
    - 服务器为每个sessionID分配一块存储空间，存储用户信息
    - 用户发送请求时，会将session ID以cookie的形式发送到服务器
    - 服务器收到请求后，根据session ID 查找对话数据，会话会过期，也就是我们平时的登录过期等

  - 二者区别：

    - Cookie保存在浏览器端，Session保存在服务器端；

    - **Cookie** 只能保存**字符串类型**，以**文本**的方式；

      session能**支持任何类型**的对象；

    - 单个cookie保存数据不能超过4kb

      session大小没有限制

    - session比cookie安全

      原因：

      ​		sessionid存储在cookie中，要攻破session，先攻破cookie；

      ​		sessionid要有人登陆或启动session_star才会有，所以攻破了cookie，也不一定能拿到sessionid；

      ​		sessionid会过期和失效，而且是加密的

      

#### web攻击：XSS、CSRF、SQL

- XSS

  跨站脚本攻击。攻击者在Web页面里插入了恶意的Script代码，当用户浏览页面时，会遭受到到代码攻击。

  主要有三种类型：

  - 反射型：恶意脚本作为参数放在在请求的URL中，恶意脚本被发送到服务器，并随着响应内容一起传给用户进行解析执行。

  - 存储型：XSS被保存到了服务器端（数据库，内存，文件系统），当其他用户访问包含这些恶意脚本的页面时，脚本被发送到他们的浏览器并执行。

  - DOM型：修改页面的DOM结构

    举例：

    （1）在网页 input 或者 textarea 中输入 <script>alert('xss')</script>或者其他脚本。

  

XSS防御方法：

- 对用户输入的内容进行**过滤**，对所有用户提交内容进行可靠的输入验证，包括对 URL、查询关键字、POST数据等，仅接受指定长度范围内、采用适当格式、采用所预期的字符的内容提交，对其他的一律过滤。(客户端和服务器都要)，比如说用户在input框里面输入了script标签，就把他过滤掉
  - 尽量避免直接操作HTML字符串
  - 将包含敏感信息的cookie标记为httponly（cookie的一个属性），防止恶意脚本访问
  - CSP：Content Security Policy内容安全策略，网站通过发送一个 CSP 头部，来告诉浏览器什么是被授权执行的与什么是需要被禁止的，就是我们能够规定，**我们的网站只接受我们指定的请求资源**，Content-Security-Policy 头部和指令。（比较新的，不是很了解）

- CSRF

  跨站请求伪造。伪造请求，冒充用户在站内的正常操作，就可以添加管理员之类的。

  攻击方法：

  - 攻击者创建一个包含恶意代码的网页
  - 使受害者在登录的状态下去访问该网页
  - 受害者的浏览器会自动发送请求到目标网站，包含一些恶意操作，如修改密码、转账等
  - 目标网站受到请求，因为受害者处于一登录状态，已经进行了身份验证，所以服务器会将请求视为合法操作，就会去执行相应的请求操作
  
  CSRF防御方法：
  
  - 在请求地址中添加 token 并验证，token 可以在用户登陆后产生并放于 session 之中，然后在每次请求时把 token 从 session 中拿出，与请求中的 token 进行比对
  - 在 HTTP 头中自定义属性并验证
  - 使用SCRF令牌，验证请求的来源和合法性，就是在每个包含敏感操作的请求中，随机生成一个与用户会话相关的SCRF令牌，由服务器去进行验证。
  - 好像这个CSP也是可以防御的，具体不是很清楚
  
- SQL注入

  Web 应用未对用户提交的数据做过滤或者转义，导致后端数据库服务器执行了黑客提交的 sql 语句。黑客利用 sql 注入攻击可进行拖库、植入 webshell，进而入侵服务器。
  
  可以执行的操作：
  
  - 绕过身份验证，恶意执行SELECT语句去获取用户密码等个人信息



#### CDN

Content Delivery Network 内容分发网络，

将源站的资源缓存到分布在全国各地的CDN节点，用户请求数据时，先访问距离用户最近的CDN节点上缓存的资源，没有取到缓存的时候才去访问源站，不必让所有用户请求都从源站获取，避免了高峰期网络拥塞、为源站分担了压力，也缩短了用户等待时长。这是一项用存储空间换取时间的技术。



#### DNS

域名解析，因为IP地址是一串数字，不方便记忆，DNS将域名转换成IP地址

![DNS域名解析过程](D:\sisi\Pictures\Camera Roll\DNS域名解析过程.jpg)



#### 封装及发送请求

- 一般在**api/request/index.ts**去封装所有的请求方法，并暴露出去

```js
/** 常用请求方法封装 */
get(url: string, params: any = null, config: AxiosRequestConfig = {}) {
   return this.instance.get(url, { params, ...config });
}

post(url: string, data: any, config: AxiosRequestConfig = {}) {
   return this.instance.post(url, data, config);
}
```

- 在**api/modules/xxx.ts** 去新建接口需要的请求方法

  ```js
  import request from '../request';
  //获取知识库
  export function fetchKnowBaseList() {
      return request.get('/api/knowledge/list');
  }
  //知识点列表
  export function fetchKnowPointList(data) {
      return request.post('/api/robots_gpt/list', data);
  }
  ```

- 在组件中发送请求

  ```js
  import { fetchKnowBaseList, fetchKnowPointList } from '@/api';
  
  const getKnowDetectionData = async () => {
      try{
          const params = {   //定义请求接口文档中需要的请求参数
               knowledge_id: state.know.activeKnowBase,
               doc_state: 3
          };
          //发送请求并接受返回体，在接口文档中查看返回了哪些需要的内容
          const saveResult = await editKnowPoint(params);
          //检测成功走这下面---------
          //通过.data的方式获取到返回数据内容
          const idParams = saveResult.data._id; 
      }catch (error) {
          //检测失败走这-----------
          console.log(error)
          ElMessage.error('检测失败');
      } finally {
          //请求失败或成功都需要做的事，也可以不写
      }
  }
  ```

  注意点：

  ​	请求时，如果涉及到id，请求参数不传，可能会新建一个id，如果传了，可能会在该id的东西上update。

- 封装请求，进行请求并发

  ```js
  import { fetchKnowIntegrity} from '@/api'; 
  const integrityRequest1 = () => {
      //定义请求参数
      const paramsIntegrity = {
          prompt: GET_KNOW_INTEGRITY_PROMPT.PROMPT,
          text: formData.answer
      };
      //发送请求，并接收返回体，处理返回数据
      return fetchKnowIntegrity(paramsIntegrity).then((integrityResult) => {
          //integrityResult是接收返回体的变量
          console.log('接收到了数据',integrityResult.data.answer)
      });
  };
  const integrityRequest2 = () => {}
  const integrityRequest3 = () => {}
  
  const getKnowDetectionData = async () => {
      try {
          //并发三个请求，promise.all语法规定，只要有一个请求失败，则结果为失败
          await Promise.all([integrityRequest1(), integrityRequest2(), 		 integrityRequest3()]).then((xxx1,xxx2,xxx3) => {
         //xxx1,xxx2,xxx3也可以在这里接收到请求的返回体，按照请求书写顺序，在这里进行三个都请求成功的处理。
          });
      }catch (error) {}
  }
  ```

  

#### mockjs模拟

在后端出了接口文档，但是接口未上线，无法进行实时请求，查看结果时，可以模拟接口去进行请求

- 安装axios

  ```js
  npm install axios
  ```

- 将要使用的axios实例单独编写成一个文件，文件夹可以建立在**src/plugins/**。命名为： `axiosInstance.js`

  ```js
  import axios from 'axios'   //导入axios
  
  //使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
  export const API = axios.create({
  	baseURL:'http://localhost:8080', //请求后端数据的基本地址，自定义
  	timeout: 2000                   //请求超时设置，单位ms
  })
  ```

- 安装mockjs

  ```js
  npm install mockjs
  ```

- 新建文件**/src/mock/index.js**，书写模拟的数据及请求的数据

  ```js
  import Mock from 'mockjs'  //导入mockjs
  
  //使用Mock下面提供的mock方法进行需要模拟数据的封装
  //参数1，需要拦截的完整请求地址，参数2，请求方式，参数3，请求的模拟数据
  export default testData = Mock.mock('http://localhost:8080/test','get',{
  	status:200, //请求成功状态码
  	dataList:[1,2,3,4,5,6,7,8,9,10] //模拟的请求数据
  })
  
  ```

- 在**main.js**里面全局引用一下我们的编写的相关mockjs及axios的接口

  ```js
  import './mock/'     //导入mock
  import axios from '@/plugins/axiosInstance.js' 
  
  app.config.globalProperties.$axios=axios;  //配置axios的全局引用
  ```

- 在组件中使用

  ```js
  //测试请求方法
  const getData = function(){
      API({             //API是封装的接口
         url:'/test',   //定义的地址
         method:'get'
      }).then((res)=>{
      	alert('请求成功!');
          testData.list = res.data.dataList; //请求结果
       });
  }
  ```



**使用postman进行接口模拟**

使用场景：后端接口文档已出，但是接口未开发完成，前端需要使用mock数据

```js
1、点击new或者其他，反正就是创建一个新的 mock serve
2、根据接口文档，添加请求方法，输入对应的请求成功的数据、请求参数，点击next
3、输入mock serve的名字，勾选“save。。。。。”添加环境变量，点击创建即可；
4、创建成功之后，返回一个请求mock地址，
5、collections：创建的所有服务器及其对应的接口
	在右上角菜单处选择一个环境变量；
    在某个API接口下，选择“default”，修改请求参数、响应体等（JSON格式），
6、environments：环境变量，你所创建的所有mock serve服务器
```






##  Vue

#### 1、vue2、vue3的区别

- **响应式原理**

  **vue2** 的[响应式](https://so.csdn.net/so/search?q=响应式&spm=1001.2101.3001.7020)原理是利⽤es5 的⼀个 API ，Object.defineProperty()（直接在一个对象上定义新的属性），对数据进⾏劫持结合发布订阅模式的⽅式来实现的。只代理对象上的某个属性，只代理对象上的某个属性，无法监听对象或数组新增、删除的元素，监听不到数组的方法。

  理解defineProperty

  v**ue3** 中使⽤了 es6 的 proxy API 对数据代理，通过 reactive() /ref()函数给每⼀个对象都包⼀层 Proxy，通过 Proxy 监听属性的变化，从而实现对数据的监控。Proxy代理的是整个对象，而不只是某一个属性；可以省去for in、闭包等内容来提升效率（直接绑定整个对象即可）；可以直接拦截所有对象类型数据的操作，完美⽀持对数组的监听

- **vue3在组件可以拥有多个根节点**

  就是vue2组件最外层需要一个div标签，而vue3不需要

- **数据和方法的定义**     

  vue2是选项optionAPI，vue3是组合式compisitionAPI

- **生命周期不同**

  差别不大，vue3中多数加了on在前面，还增加一个setup，少了三个钩子http://gldz.bysjy.com.cn

  vue2可以直接使用，而vue3在组合式API中需要先引入

- **虚拟DOM不同**

- **自定义指令不同点**

  vue3中自定义指令钩子函数中，增加了两个参数（vnode，prenode）



#### 2、data url

Data URL由   data：MIME类型（表明数据类型）、base64标志位（如果是文本，则可选）、数据本身  四部分组成。图片被转换成[base64](http://en.wikipedia.org/wiki/Base64)编码的字符串形式，并存储在URL中，嵌入到了页面中，与HTML成为一体。

好处：比如说图片的url，获取到还要向服务器发送一次http请求，图片体积很小，占用了网络资源，而很多浏览器只支持并发请求数是4。

缺点：Data URL形式的图片不会被浏览器缓存，这意味着每次访问这样页面时都被下载一次（解决方案：将Data URL形式的图片存储在CSS样式表background-image属性中引用它的地址)；体积较原体积变大



#### 3、watch、computed的区别

- computed能实现的，watch都能实现

- watch能监听到异步操作时的数据变化

- computed支持缓存，当依赖的属性值发生变化时，computed会重新计算，不然，就直接使用缓存中的值；

  watch不支持缓存，当监听到属性值变化时，立即执行

- conputed第一次加载的时候就监听，watch第一次加载时不监听

- computed一定要用return，watch不用



#### 4、虚拟DOM的Diff算法

​	**Diff 算法**（在 Vue 里面就是叫做 patch）**通过新旧虚拟 DOM 对比**（即 patch 过程）**，找出最小变化的地方转为进行 DOM 操作**。

- Diff算法执行过程

  - 在页面首次渲染时，会调用一次patch函数，创建新的虚拟DOM（vnode节点），不会进行比较。
  - 组件中数据变化时，会触发Setter，通过Notify去通知Watcher，对应的Watcher会通知更新并会执行更新函数，执行 render 函数获取新的虚拟 DOM，然后执行 patch ()对比老的虚拟DOM，并计算出最小的变化，然后再去根据这个最小的变化去更新真实的 DOM，也就是视图。
  - Vue3重写了Diff算法
    - 将事件缓存，变成静态的，事件触发时，先读取缓存，在vue2中事件是动态的
    - 当新老节点都有子节点，且子节点不一样时，要对比，vue2用的是updateChildren()函数，vue3用的是patchKeyedChildren()函数，还使用了最长递增子序列优化了对比过程。

- diff算法特点

  - 比较标签名、比较key

    key的作用：为了更高效的更新虚拟DOM，

  - DOM tree的同层级比较



#### 5、vue2 中常见的修饰符

**1、v-model**：v-model.xxx = ""

- .lazy：通常用在input框，当光标离开的时候，input框中的数据才会更新
- .trim：去掉首尾的空格
- .number：先输入数字就限制只能输入数字，先输入其他的则忽略这个修饰符

**2、事件修饰符：@click.XXX = " "**

- .stop：阻止冒泡，相当于JS中的event.stopPropegation() 
- .capture：捕获事件
- .self：触发自己范围内的事件，不包含子元素
- .once：事件只执行一次

**3、键盘鼠标的修饰符**

​	.enter、tab、space、left、right等

**4、其他修饰符**

​	.sync：父子组件之间的一个prop数据双向绑定：money.sync = "money"



#### 6、父子组件的生命周期

是一个嵌套的过程，顺序：

**1、渲染时**

​		父组件：beforeCreate-->created-->beforeMount

​		子组件：beforeCreate-->created-->beforeMount--->mounted

​		父组件：mounted

**2、子组件更新时**

​		父组件：beforeUpdate

​		子组件：beforeUpdate--->updated

​		父组件：updated

**3、父组件更新时**

​		父组件：beforeUpdate --> updated

**4、销毁时**

​		父组件：beforeDestory

​		子组件：beforeDestroy-->destroyed

​		父组件：destroyed



#### 7、虚拟DOM

**1、做了什么？**

虚拟DOM主要做了两件事：

- 创建JS对象（虚拟节点）用来模拟真实DOM节点，该对象包含了真实DOM节点的结构和属性

  ```js
  var VNode = {
      tag:'div',  
      attrs:{
          id:'wrap'
      },
      children:[{子元素节点跟根节点格式一样}]
  };
  ```

- 将虚拟节点与旧虚拟节点进行比较，用来更新视图。



#### 8、组件间通信

vue3

- **父（方法）--> 子** 

  ```js
  
  ```

  

- **父（值）-->  子           defineProps**

  - 父组件   

    想传递什么值，直接在子标签中：=，即可

    ```js
    <template>
        //sonData是子组件中接收的名字，fatherData是要传递的数据
        <son :sonData="fatherData" :isDetection="isDetection"/>   
    </template>
    
    <script setup lang="ts">
        const fatherData = reactive({
            id: '',
            category: '',
        });
    	const isDetection = ref()
    </script>
    ```

  - 子组件

    接收值，需要使用defindeProps，只读，触发时使用props.xxxx 即可
    
    ```js
    <script setup lang="ts">
     	const props = defineProps({    //接收数据
         	fatherData: Object,
         	isDetection:{
             	type: Boolean,   //类型
             	default: true	 //默认值
         	}
     	});
    	//在js中使用props.xxx，并将将ref实例格式转化为对象格式
    	const formData = JSON.parse(JSON.stringify(props.fatherData));
  </script>
    ```

    注意点：**props是只读**，不允许在子组件中修改该值，父组件动态传值，不允许调用父组件的方法
    
    

- **子（值）----> 父     父（方法）-->子  defineEmits   触发父组件的方法** 

  - 子组件

    先定义emits变量，给每一个传递触发起个名字，然后在想传递值的地方使用emits，第一个参数是触发名字，第二个参数是想传递的值。

    ```js
    <script setup lang="ts">
        //所有的emits都写在这一起传
        const emits = defineEmits(['toFather','xxx',...])
        emits('toFather',name.value,age.value)  //前面是名字，后面是要传的值
    	//emits可以写在任何地方，只要想传啥就写在啥下面
    	emits('xxx',xxx)
    	//如果是触发父组件的方法，也可以使用这个emits，传递方法的参数
    	emits('xxx',传递的方法参数（可不写）)
    </script>
    ```

  - 父组件

    先在子组件中使用@=接收，并定义处理子组件传递过来的数据的**方法**，方法的形参就是子组件传递的数据，按照传递顺序，在方法里面进行处理即可
    
    ```js
    <template>
        //save是子组件中接收的名字，toFather是要传递的数据方法名
        <son @toFather="save"/>   
    </template>
    
    <script setup lang="ts">
        let qualityScore = ref('');
    	const save = (name,age) => {  //在toFather里面传了两个值，按顺序接收
            qualityScore.value = name;
            console.log('年龄是:',age)
        }
    </script>
    ```

- **子（属性、方法）-----> 父       defineExpose**

  - 子组件

    ```js
     defineExpose({
         //要传给父亲的属性和方法，也可以在上面封装之后，在这直接传名字
        childName: "子组件的名称属性",
        childMethod(){
        	console.log("子组件的方法");
        }
    })
    ```

  - 父组件

    ```js
    <template>
        <child ref="childRef"></child>
        <button @click="handlerClick">按钮</button>
    </template>
    
    <script setup>
        //获取子组件的DOM
        const childRef = ref(null);
        const handlerClick = () => {
            // 获取子组件对外暴露的属性
            const childName = childRef.value.childName;
            // 调用子组件对外暴露的方法
           childRef.value.childMethod();
        }
    </script>
    ```

    

- **爷（值）--> 孙            provide、inject**

  无论层级多深，API都可以实现从父组件到子孙组件的数据传递

  - 爷爷组件

    ```js
    drawerOperate.value = 'edit';
    //drawerOperate是要传的数据，changeOperate是接收数据的名字，类似于钥匙
    provide('changeOperate', drawerOperate);
    ```

  - 子孙组件

    ```js
    // 后代组件通过 inject 可以直接拿到父组件提供的信息
    const name = inject("changeOperate");
    console.log('拿到了值',name.value)
    ```


- **兄弟之间     全局事件总线$bus**



vue2

- **父组件（方法）----->    子组件**    子组件触发事件且传递数据     **emit**

  - 父组件

  ```js
  <div>
     <child-component @submit="handleSubmit"></child-component>
  </div>
  
  methods: {
      handleSubmit(data) {
        // 处理子组件传递过来的数据
      },
  },
  ```

  - 子组件

  ```js
  <div>
      <el-input v-model="searchText" @keydown.enter="handleSearch"></el-input>
  </div>
  
  emits: ['toFather'],
  data() {
     return {
       searchText: '',
     };
  },
  methods: {
    handleSearch() {
      // 处理搜索逻辑,触发 submit 事件并传递数据
     this.$emit('toFather', this.searchext);
    },
  },
  ```

- **父组件（值）-->  子组件       emit，与传递方法类似**

  - 父组件

  ```js
  <div>
     <child-component  @update-message="updateMessage" :childMessage="message"></child-component>
  </div>
  data {
      message: 'Hello, World!',
  }
  methods: {
     updateMessage(newMessage) {
        this.message = newMessage     //传给子组件的值，子组件修改后传递回来再赋值给传递过去的值
      },
  },
  ```

  - 子组件

  ```js
  <div>
      <el-button @click="changeMessage"> 修改属性值</el-button>
  </div>
  
  props: {   //接收父组件传的过来的数据，不能改变该值
      childMessage: {
        type: String,
        required: true,
      },
   },
  methods: {
    changeMessage() {
  	  const newMessage = 'Hello, Vue!';  //修改了属性值，再传递给父组件
        this.$emit('update-message', newMessage);
    },
  },
  ```

  

- **Event Bus**     多个组件间通信

  



#### 9、自定义插槽

- 作用多使用在一些类似于表格内容不只是根据data渲染的问题中、某些表格的值有特殊处理等，可以自定义内容
- 注意点：
  - 



#### 10、hooks

​		hook是钩子的意思，也是一种函数的写法，就是  **将文件的一些单独功能的`js`代码进行抽离出来** ，放到单独的js文件中，或者说是一些可以复用的公共方法/功能。有点像vue2的mixin，但是相对 `mixins` 而言， `hooks` 更清楚复用功能代码的来源, 更清晰易懂。

- **用法**

```js
//1、在src下建立一个hooks文件夹，用来存放hook文件
//2、一个功能一个文件，文件命名为useXXXX.ts
//3、编写代码
function useMousePosition(){
  const x = ref(0)
  const y = ref(0)

  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
 
  onMounted(() => {
    document.addEventListener('click', updateMouse)
  })
    
  return { x, y }
}
 
export default useMousePosition

//4、在使用该hook功能的文件中使用，正常使用封装的函数
import useMousePosition from '../../hooks/useMousePosition'
```



#### 11、路由vue-router

**在vue3中使用vue-router管理路由**

- 1、下载vue-router

```js
npm install vue-router@4
```

- 2、在实际开发中，路由一般位于单独的文件  router 文件夹，新建index.ts文件：

```js
//1.引入两个基本的router方法
import { createRouter,createWebHashHistory } from "vue-router";

//2.引入组件文件，也可以在定义路由规则时直接引入，component: () => import('@/views/index.vue'),这个叫做路由懒加载
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'

//3.定义路由规则
const routes = [
    {
        name: 'ai-create',     //路由规则名字，用于编程式导航和组件内路由跳转
        path: '/ai-create',    //路由路径
        component: () => import('@/views/index.vue')   //该路由路径对应的组件
        meta: { ... }          //路由元信息，例如路由是否需要登录、权限鉴定等
    },
    {
        name: 'temp-create',
        path: '/temp-create',
        component: () => import('@/views/createTemp/index.vue'),
        chidren: [    //当前路由的子路由
            {
				name: 'temp-create1',
        		path: '/temp-create1',
        		component: xxxx
            }
        ]
    },
    {
        path: '/',
        redirect: '/ai-create'   //路由根路径的重定向
    }
];

//4.创建路由实例，定义路由模式和路由规则
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

//5.导出路由实例
export default router;
```

- 3、在入口文件main.ts中导入路由

```js
//1.导入定义的路由规则
import router from './router'
//2.注册路由
const app = createApp(App)
app.use(router) //注册路由
```

- 4、在app.vue项目入口组件中添加路由入口

```js
//app.vue
<router-view></router-view>
```



**路由跳转方法**

- 使用  <route-link to="/ai-create"></route-link>

  将触发跳转元素使用该标签包裹，使用to定义跳转路由路径

- 使用 **router.push** 函数

  ```js
  //引入路由路径文件
  import router from '@/router/index.ts';
  
  router.currentRoute.value.query   //可以获取到当前路由的路由参数（？后面的）
  router.currentRoute.value.query.type   //获取到key值为type的参数值
  
  // 只跳转，不做其他事情
  router.push('/users/eduardo')            //字符串路径
  router.push({ path: '/users/eduardo' })  //对象路径，两个结果一样
  
  // 使用命名的路由，并携带参数，让路由建立 url
  router.push({ name: 'user', params: { username: 'eduardo' } })
  
  // 带查询参数，结果是 /register?plan=private
  router.push({ path: '/register', query: { plan: 'private' } })
  
  // 带 hash，结果是 /about#team
  router.push({ path: '/about', hash: '#team' })
  
  ```



**路由传参**

- 定义路由规则时传参

  ```js
  const routes= [
      {
        //第一种传参方式，在路径中使用冒号:表示变量，参数值会被放入route.params对象中，如访问地址为/detail/123，则我们可以通过route.params.id获取值为"123"。
        path: '/detail/:id',    
        name: 'Detail',
        component: Detail,
        props: {
            id: 123    //第二种传参方式，在组件中可以直接使用props接收参数
        },
        meta: {
            id:  123   //第三种传参方式，通过route.meta.id获取值
        }
      }
  ]
  ```

- query参数传递

  ```js
  router.push({           // 在组件中跳转
    path: '/detail',
    query: { id: 123 }
  })
  
  <router-link to="/detail?id=123">Detail</router-link>       // 在模板中跳转
  
  //如访问地址为 /detail?id=123，通过  route.query.id  获取值为  "123"。
  ```

- params参数传递，携带参数跳转，该参数供组件使用

  ```js
  router.push({
      path: '/detail',
      params: {
          id:123
      }
  })
  //访问地址为/detail,通过 route.params.id获取值值
  ```



**路由守卫**

路由守卫是一种函数，在路由的各个阶段被调用，可以用于拦截路由的访问或对路由进行一些操作。我们可以使用路由守卫来控制路由的跳转和访问权限。

- to：表示即将要跳转的目标路由对象，包含路由的路径、参数和查询字符串等信息。


- from：表示当前路由对象，即正在离开的路由对象。


- next：是一个函数，用于进行路由控制和跳转。当调用next函数时，路由会继续向下执行。我们可以通过next函数来控制路由的行为，例如渲染组件、跳转路由、取消操作等。
  - `next()`: 表示继续执行下一个路由守卫。
  - `next(false)`: 表示取消当前的路由跳转。
  - `next('/path')`: 表示跳转到指定的路由路径。
  - `next(error)`: 表示在路由跳转过程中发生了错误，例如权限不足等



- 全局路由守卫

  全局路由守卫是在整个应用中都生效的守卫，可以用于拦截所有的路由操作。在Vue Router@4中，全局守卫有三个：`beforeEach`、`beforeResolve`和`afterEach`。

  ​	beforeEach:  在路由跳转之前执行，可以用于进行全局的访问控制或重定向跳转等操作。

  ​	beforeResolve:  在路由跳转完成前执行，可以用于等待异步路由组件加载完成或在路由跳转前进行一些操作。

  ​	afterEach: 在路由跳转完成后执行，可以用于对页面进行一些操作，例如监测页面埋点或修改页面标题等。

  

- 路由独享守卫

  路由独享守卫仅对当前路由生效，可以用于限制或增强某个路由的访问权限。在Vue Router@4中，路由独享守卫有两个：beforeEnter和leaveGuard。

  ​		beforeEnter: 在进入当前路由之前执行，可以用于增强当前路由的访问权限或进行相关操作。

  ​		leaveGuard: 在离开当前路由之前执行，可以用于给用户提示或进行相关操作。

  ```js
  const routes=[
      {
        path: '/',
        component: Home
      },
      {
        path: '/about',
        component: About,
        beforeEnter: (to, from, next) => {
          // 进行路由访问控制或相关操作
        }
      }
    ]
  ```

  



## vuex

#### 页面刷新之后state中数据消失

**1、原因：**vuex中的数据是存储在运行内存中的，如果页面刷新了，页面会重新加载vue实例，vuex里面的数据会				 被清空。

2、解决方法：

- **将数据保存在浏览器缓存中sessionStore**

  - 监听页面是否刷新，如果刷新了，就把state数据存储在浏览器缓存中。页面打开后，判断缓存中是否存在数据，如果存在，就直接给state赋值

  - 在created生命周期函数中判断

  - ```js
    if (sessionStorage.getItem('store')) {
       this.$store.replaceState(
       		Object.assign({},this.$store.state, 
       			JSON.parse(sessionStorage.getItem('store'))));
    }
     //在页面刷新时将vuex里的信息保存到sessionStorage里
        window.addEventListener('beforeunload', () => {
          sessionStorage.setItem('store', JSON.stringify(this.$store.state));
        });
    ```

- **vuex-persist插件**

  



​		

​											





## webpack

#### 1、如何提升构建速度

- 在使用`loader`时，可以通过配置`include`、`exclude`（不处理一些文件）、`test`属性来匹配文件，规定哪些匹配应用`loader`；
- 使用 cache-loader，结果缓存到磁盘里；
- thread-load 启动多线程，使用多进程并行运行-----优化解析时间，把耗时的操作换一个线程执行



#### 2、webpack与vite的区别

- vite不需要打包，不用分析模块依赖和编译，启动速度要比webpack快，是按需动态编译，需要什么编译什么
- 底层语言不同，vite的层语言是go语言，纳秒级别计算，webpack是基于js语言的，js语言以毫秒计算，所以打包速度要快

![image-20230402214922335](C:\Users\sisi\AppData\Roaming\Typora\typora-user-images\image-20230402214922335.png)



#### 3、webpack 体积优化

webpack打包速度分析：**speed-measure-webpack-plugin**

- 分析整个打包总耗时
- 每个插件和loader的耗时情况

webpack打包体积分析：webpack-bundle-analyzer

- 构建完成后会在 8888 端口展示大小
- 分析依赖的第三方模块文件大小
- 分析业务里面的组件代码大小

压缩方法：使用terser、tree-shaking



## 杂项

#### 1、微前端

概念：微前端就是一种多个团队独立发布功能的方式来完成web应用的技术手段，将一个庞大的应用拆分成多个小型应用，每个应用可以独立运行独立部署，降低了耦合度

**特性：**

- 与技术栈无关
- 独立部署、开发、运行，多个团队仓库独立，互不依赖
- 增量升级，如果一个应用庞大起来了，技术升级或重构会很麻烦，而微前端具有渐进式升级的特性
- 提高维护效率



**微前端方案**

- iframe

- single-spa

  实现路由劫持和数应用加载

  

- qiankun

  基于aingle-spa(监控URL），提供了开箱即用的API，使用更加简单，沙箱嵌套URL，



#### 2、性能优化

- 加载优化（减少http请求次数）
  - 合并图片，使用css精灵图
  -  预加载、按需加载
  - 多使用缓存，使用长缓存
  - 开启gzip压缩代码
- 图片优化
  - 多使用PNG格式的图片，体积小
  - 图片懒加载
  - 避免src'属性为空
  - 尽量避免使用 Data Url
- SEO优化
  -  标题字数不要太长
  - 关键词优化
- 渲染优化
  - 尽量减少DOM节点
  - 合理使用requestAnimationFrame动画代替setTimeout
- 样式优化
  - 避免在HTML中书写style
  - 不滥用float

​                

	#### 排序算法

1、插入排序

思路：每步将一个待排序的记录，按其顺序码大小插入到前面已经排序的字序列的合适位置，直到全部插入排序完为止。 



#### 包管理器

1. **npm**（node package manager）

   node.js生态系统默认的包管理器

2. **cnpm**

   是通过淘宝源加速的npm国内镜像，加快包的下载速度，功能上与npm没有区别，但速度和性能有提升。

   主要是用来解决下载包的网络速度问题

3. **Yarn**

   facebook创建的前端包管理器，能缓存已经下载的包，在以后安装相同依赖项时不必下载，

4. **pnpm**

   能减少磁盘的空间占用，能够共享依赖项



#### 浏览器线程

浏览器是多线程的，但是js执行线程是单线程的

1. **主线程 (Main Thread)**：处理用户界面渲染、DOM 操作、布局和用户输入。它是单线程的，称为UI线程。
2. **渲染线程 (Rendering Thread)**：将HTML、CSS和JavaScript转化为用户界面。这个线程也可以执行一些与UI渲染相关的任务，如绘制页面、处理CSS动画和计算布局。
3. **网络线程 (Network Thread)**：网络线程用于处理网络请求，包括HTTP请求和响应。这个线程负责从服务器获取资源，如HTML、CSS、JavaScript和图像。
4. **定时触发线程 (Timer Thread)**：定时触发线程用于管理定时器，包括`setTimeout`和`setInterval`等，以触发定时事件。
5. **事件线程 (Event Thread)**：事件线程用于处理各种异步事件，如鼠标点击、键盘输入、AJAX请求和其他事件。
6. **Web Worker 线程**：Web Worker 是JavaScript中的多线程解决方案，允许在独立的线程中执行脚本，以执行复杂的计算而不阻塞主线程。



#### 按需加载





## 场景题

#### 如何进行多端适配

#### 大文件上传，断点续传方式

​		文件断点续传是一种上传或下载大文件时的技术，可以将大文件**分成多个块**进行传输，每个块都有一个唯一的**标识符，**例如块序号或块偏移量，在上传或下载文件时，发送的请求中包含了当前传输块的标识符，以及已经传输的字节数和总字节数等信息，服务器可以根据这些信息确定从哪个位置开始继续传输，避免重新传输整个文件。

​		这个方式的话前端需要做的不多，主要是三个部分，**文件名，块序号，块哈希值**，就是把大文件分成1MB、2MB的块，再通过fetchAPI把这些块的原信息（块序号、大小等）上传到服务器，后端会把已经上传的块信息保存在临时文件夹中，后面就是通过块的哈希值、序号去进行匹配。具体实现断点续传的就是，假设这个大文件有100个块，上传了10个块，中断上传之后，再继续上传同一个文件，后端匹配到正在上传的块哈希值和存储在临时文件夹中的块哈希值是一样的，所以就跳过前面的10个块，从11块开始匹配不到了再开始存储，上传完100个块之后，再进行合并去校验，校验就是后端去计算收到的合并后的文件的哈希值，返回给客户端，客户端计算本地文件的哈希值去跟接收到的哈希值去比对，是否完整一致，如果校验不通过的话，就会重新上传，再走一遍流程。

​		前端做的一些处理

- 记录已上传的文件块，避免下次重复上传（localStorage）	
- 文件校验

```js
 <input type="file" id="fileInput" />         //从本地选择文件，已选中的文件加入file对象
 <button id="uploadButton">上传文件</button>
 <progress id="progressBar" value="0" max="100"></progress>  //上传进度条

 <script>
    const uploadButton = document.getElementById("uploadButton");
    const progressBar = document.getElementById("progressBar");

	//捕获用户已选择的文件File对象
	const fileInput = document.getElementById("fileInput");   
    let file;     //文件对象
    fileInput.addEventListener("change", (e) => {
      	file = e.target.files[0];
        console.log("文件名：" + file.name);
      	console.log("文件大小（字节）：" + file.size);
      	console.log("文件类型（MIME类型）：" + file.type);
      	console.log("最后修改时间：" + file.lastModifiedDate);
    });

	//开始上传
    let startByte = 0;     //文件开始的字节B
    uploadButton.addEventListener("click", () => {
     if (file) {    //如果文件存在
        const chunkSize = 1 * 1024 * 1024; // 文件分块大小1MB
         //标记文件块结束位置，如果是最后一块，则不需要加文件块大小，而是文件大小
        const endByte = Math.min(startByte + chunkSize, file.size);  
        //调用 File 对象的方法slice(startByte, endByte) 从文件file切割出一个指定范围的子文件,slice返回一个新的 Blob 对象，代表了所切割的文件块。
        const chunk = file.slice(startByte, endByte);
         
        // 检查是否已上传该分片
        const uploadedChunks = JSON.parse(localStorage.getItem("uploadedChunks"));
        let chunkAlreadyUploaded = false;
        if (uploadedChunks) {
          for (const item of uploadedChunks) {
            if (startByte >= item.startByte && endByte <= item.endByte) {
              chunkAlreadyUploaded = true;
              break; // 这个分片已经上传，跳过
            }
          }
        }

        //该分片没上传
        if (!chunkAlreadyUploaded) {
            // 前端计算分片的哈希值
            //FileReader()对象，用于将文件块读取成文本readAsText、二进制readAsArrayBuffer、数据URL  readAsDataURL
            const reader = new FileReader();
            //一旦文件块内容被读取，就会触发onload事件
            reader.onload = (e) => {
                //计算文件块的hash值、并发送到服务器
                const chunkData = e.target.result;  //e.target.result已读取的文件块的内容
               
                //使用自定义封装函数计算hash值
                calculateHash(chunkData).then((hash) => {
                   console.log("SHA-256 哈希值: " + hash);
                   sendHashToServer(hash);     //将hash值发送到服务器
                });
                
                const formData = new FormData();     //创建一个新的 FormData 对象
                //将文件数据添加到表单数据中，file是key，chunk是value
                formData.append("file", chunk);

                //发送请求，向服务器传输文件块
                fetch("/upload-endpoint", {
                    method: "POST",
                    body: formData,
                }).then( (response) => {
                    if (response.status === 200) {
                        //记录已上传的文件块
                        uploadedChunks.push({ startByte, endByte });
                        localStorage.setItem("uploadedChunks", JSON.stringify({ startByte, endByte }));
                        startByte = endByte;   //标记下一个文件块
                        const percentComplete = (startByte / file.size) * 100; //处理进度条
                        progressBar.value = percentComplete;

                        //判断文件是否全部传输完毕
                        if (startByte < file.size) {
                          uploadButton.click(); // 递归继续上传下一个分片
                        } else {
                          alert("整个文件上传完成！");
                        }
                    } else {
                        alert("上传失败！其他状态码处理");
                    }
                 }).catch((error) => {
                    alert("上传失败：可能是网络错误" + error);
                 });
            };
      		reader.readAsArrayBuffer(chunk)
          }
      } else {
          alert("还未选择文件，请选择文件！");
      }
    });
        
    // 计算文件块的哈希值的逻辑，可以使用MD5、SHA-256等哈希算法，返回文件块的哈希值  
    function calculateHash(chunkData) {
      return crypto.subtle.digest("SHA-256", chunkData).then((hashBuffer) => {
         const hashArray = Array.from(new Uint8Array(hashBuffer));
         const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
         return hashHex;
      });
    }
     
    // 封装请求将哈希值发送到服务器
    function sendHashToServer(chunkHash) {
    }

  </script>
```





#### 预览大文件图片优化

一个常用的办法应该是用sharp库去生成原图副本缩略图把，就像是qq、微信图片那样，只有点击了阅读原图才会加载出原图，使用缩略图的话尺寸体积都会比较小，加载较快，这个前端后端都能去进行处理的，如果是尺寸比较大的图片，可以使用懒加载、延迟加载这些，图片进入可视区域之后，再去加载图片。



#### 浏览器快速加载页面

- **缓存页面资源**

  利用浏览器的缓存机制，把一些css、js等文件缓存起来，加载时直接从缓存获取

- **CDN加速**

  将源站的资源缓存到分布在全国各地的CDN节点，使资源更加接近用户

- **减少资源大小**

  webpack和vite打包的时候尽量压缩资源大小，使用图像压缩等

- **异步加载资源**

  可以使用preload、prefetch，加载浏览器资源

- **使用预加载、预渲染**



#### 对vue的理解

​		Vue是一种JS的前端框架，基于HTML的模板语法，主要用于构建交互式的页面，它的开发模式是组件化的，能够将一个用户界面拆分为单独的复用性较强的单文件组件，从而以模块化的方式构建起页面。它通过响应式的数据绑定来管理web程序的一个状态，vue现在有着一个比较成熟稳定生态系统，有很多的第三方库、工具还有插件。	



#### 微信登录的流程



#### 扫码登录的实现





#### SPA、MPA

- **SPA（Singlge Page Application）：单页面应用程序**

  ​	所有的页面切换和内容更新都在单个页面中完成，只有初始页面加载时会获取完整的HTML、CSS和JavaScript文件，后面交互时，不需要加载整个页面。用户体验更好，页面切换和内容更新通常是通过Ajax请求获取数据

  

- **MPA（Mulit Page Application）：多页面应用程序**

  ​	每个页面都是一个独立的HTML文件，每次用户访问不同的链接时，都会加载新的完整的HTML页面，所以会产生加载延迟



#### SSR

服务器端渲染（Server-Side Rendering，简称 SSR），是在服务器上将页面的内容完全渲染好，然后将渲染好的页面发送给客户端（通常是浏览器），使用户能够更快地看到页面的内容。

传统的是客户端渲染（Client-Side Rendering，简称CSR）。

工作原理：

- 当用户访问一个使用 SSR 的网页应用时，首先会发送一个页面请求到服务器；
- 服务器收到请求后，用获取的页面数据和模板渲染出完整的HTML页面



#### 强缓存问题

**问题描述：**

一个内部系统功能不断更新迭代，每次新功能全网之后，用户在不知道的情况下，就会出现白屏、加载不出内容的404报错，就是找不到资源，因为服务器中的资源已更新，但是用户使用的依旧是更新前的URL资源地址，每次都需要用户在清除浏览器强缓存之后再重新登录，在一些不同的浏览器设置上又会产生不同的问题，即一些用户使用相同的浏览器不会出现该问题。

- **自动打包静态资源文件**（原来）

   webpack等自动打包时，生成的文件名是基于文件内容的哈希值。文件名一直变化，但这种变化发生在文件名上而不是 URL 上的，浏览器缓存的 HTML 页面中是通过URL去引用资源文件，在请求资源时会检查 URL，如果 URL 没有变化，它会尝试使用缓存的文件，发生变化才会重新请求服务器。

- **手动动态打包资源文件**（解决办法）

  通过JS 动态创建一个 `<script>` 标签，并设置其 `src` 属性以加载一个资源文件，浏览器会根据这个动态生成的 URL 发起请求。每次生成的 URL 都不同，因此浏览器不会从缓存中获取该文件，而是会向服务器请求最新版本的文件。这允许你实现按需加载或动态加载资源，以确保获取最新的内容。

```js
//build打包生成的文件夹dist下的html文件中
<link href="/renewal_manage_system/css/AppDetailComp.b84a2add.css" rel="prefetch">
<link href="/renewal_manage_system/css/AppList.352e0dac.css" rel="prefetch">
<link href="/renewal_manage_system/js/404Page.ec4b85fb.js" rel="prefetch">
<link href="/renewal_manage_system/js/AppDetailComp.892bf64f.js" rel="prefetch">
//其中.css、.js前的编码是哈希值，当文件内容改变时，哈希值也会改变
//浏览器在加载静态资源时，会将这些资源缓存到本地。当用户再次访问相同的页面时，浏览器会从缓存中获取这些资源，从而加快页面加载速度。问题就是，当代码重新打包更新时，用户浏览器缓存的是旧版本的代码，导致用户无法获取新版本的代码，
    
//浏览器中index使用静态资源时的地址URL，不带hash值
<link href="https://static.nowcoder.com/fe/file/site/www-web/prod/1.0.277/lib/common.css" as="style" rel="preload">
```



已经处理过的方法：

前端和后端都使用no-cache策略，但是会遇到浏览器的兼容性问题，在有些浏览器上是还是在使用缓存，并不会使用新文件。



**办法：**

​		考虑到资源文件大小问题，不使用缓存机制，每次都去向浏览器重新请求资源。只需要在打包静态资源的时候，不使用自动引入，而是在html中引入一个自定义的js文件，通过这个文件去动态向index.html文件插入link静态资源。

**操作：**

​		新建一个js文件，主要作用是封装一个ajax请求，如果请求成功则去匹配静态资源，包括js文件、css文件，去动态的创建资源标签，在index文件中直接添加该js脚本，就能进行动态加载资源文件。还需要在vue.config.js中去更改一些打包的配置，在 webpack 构建完成后，收集打包后的 JS、CSS 文件，并将它们的 URL 写入到一个 JSON 文件modules.js中，可以用来判断是否打包成功。在modules导出的时候，通过HtmlWebpackPlugin在生成的 HTML 文件中，JS、CSS 文件的 URL 会自动插入到指定的位置，这里需要区分一下是开发环境还是生产环境，不同的环境导出的html文件不一样。



步骤：

1、在public文件夹下新建一个文件module-loader.js

```js
(function() {
    const url = new URL(location.href);
    const app_id = url.searchParams.get('app_id') || localStorage.getItem('appid');

    moduleInit();
	//通过请求去注入打包后的文件
    function moduleInit() {
        $ajax({
            url: `/scrm_toolbar/modules.js?app_id=${app_id}&stamp=${new Date().getTime()}`,
            success({ responseText }) {
                try {
                    getModules(JSON.parse(responseText));
                } catch (error) {
                    handleError(error);
                }
            },
            error(error) {
                handleError(error);
            }
        });
    }
	//匹配文件，动态注入标签
    function getModules(files) {
        files.forEach((file) => {
            if (/\.js$/.test(file)) {
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = `${file}`;
                document.body.appendChild(script);
            } else if (/\.css$/.test(file)) {
                let link = document.createElement('link');
                link.href = `${file}`;
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            }
        });
    }

    function handleError(error) {
        document.body.innerHTML = `<div id="app" style="text-align: center;padding-top: 100px;">页面资源加载失败，请刷新重试或联系服务管家~</div>`;

        $ajax({
            url: 'https://log.xiaoe-tools.com/skynet',
            method: 'post',
            data: {
                appID: app_id,
                details: {
                    message: 'WeworkToolbar assets response fail',
                    res: error
                },
                level: 'ERROR',
                network: navigator.connection.effectiveType,
                projectName: 'WeworkToolbar',
                time: new Date().getTime(),
                type: 'ASSETS_ERROR',
                ua: navigator.userAgent,
                url: location.href
            }
        });
    }

    //封装ajax请求
    function $ajax(params) {
        const xhr = new XMLHttpRequest();
        const method = params.method ? params.method.toLowerCase() : 'get';
        const data = params.data ? params.data : {};
        let url = params.url;
        xhr.open(method, url, true);
        if (method === 'post') {
            let str = '';
            if (typeof data === 'object') {
                str = JSON.stringify(data);
            }
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-rulencoded');
            xhr.send(str);
        } else {
            xhr.setRequestHeader('If-Modified-Since', 0);
            xhr.setRequestHeader('If-None-Match', 0);
            xhr.send();
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    params.success && params.success(xhr);
                } else {
                    params.error && params.error(xhr);
                }
            }
        };
    }
})();
```

2、在public文件夹中的index.html中：

```js
<head>
    //http-equiv指定该meta标签的头部名称，该 meta 标签模拟了 HTTP 头部中的 Cache-Control 字段
    //content 属性用于指定该 HTTP 头部字段的值,max-age=0即该 Web 页面的缓存过期时间为 0，即不缓存
    //must-revalidate指示浏览器必须验证缓存的有效性，而不能直接使用缓存的数据。这样可以确保用户总是看到最新的数据，而不会被过期的缓存数据所误导
    //这个不是这次使用的方法需要的代码，是之前尝试过的方法。
    <meta http-equiv="Cache-Control" content="max-age=0,must-revalidate" />
</head>

<body>
    <noscript>
        <strong>We're sorry but Current Web Page doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>

    <div id="app"></div>
	//添加module-loader.js模块，主要是添加这一行代码
    <script src="./module-loader.js"></script>
</body>
```

3、在vue.config.js文件中

​		在 `configureWebpack` 中添加一个 `plugins` 数组，然后将 `HtmlWebpackPlugin` 和 `AssetModulePlugin` 实例添加到数组中。`HtmlWebpackPlugin` 可以生成 HTML 文件，并将打包后的 JS、CSS 文件自动注入到 HTML 中。`AssetModulePlugin` 可以在 webpack 构建完成后，自动生成 HTML 文件和收集打包后的 JS、CSS 文件的 URL。，并将它们的 URL 写入到一个 JSON 文件中。

```js
//fs操作文件系统，
const fs = require('fs');
//要确保HtmlWebpackPlugin插件已经存在，不存在安装npm install --save-dev html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

//在 webpack 构建完成后，收集打包后的 JS、CSS 文件，并将它们的 URL 写入到一个 JSON 文件中
class AssetModulePlugin {
    apply(compiler) {
         //webpack 的compiler.hooks.afterEmit 钩子，该钩子会在 webpack 构建完成后被调用。
        compiler.hooks.afterEmit.tap('AssetModulePlugin', (compilation) => {
            //用于收集打包后的 JS、CSS 文件的 URL
            let files = [];  

            const initialChunks = compilation.chunks.filter((chunk) => {
                if ('canBeInitial' in chunk) {
                    return chunk.canBeInitial();
                } else {
                    return chunk.isInitial();
                }
            });
	//判断它的后缀名是否是 .js 或 .css，如果是，则将它的 URL 存入 files 数组中
            initialChunks.forEach((chunk) => {
                chunk.files.forEach((file) => {
                    if (/\.(js|css)$/.test(file)) {
    //这里与打包后生成的文件地址有关，URL就是下面配置中的 publicPath
                        files.push(`${URL}${file}`);
                    } else {
                        throw `AssetModulePlugin ${file} 资源类型异常`;
                    }
                });
            });

            fs.writeFileSync('./dist/modules.js', JSON.stringify(files));
        });
    }
}

//由于区分生产环境和开发环境，所以需要判断当前环境之后，再去决定应该是走静态渲染，还是动态渲染
//下面的plugins在实际代码中不写，写这个
const plugins = [
    new HtmlWebpackPlugin({
        template: isDev ? './public/index-dev.html' : './public/index.html',
        inject: isDev,
    }),
];
!isDev && plugins.push(new AssetModulePlugin());

module.exports = {
    publicPath: isDev ? '/' : URL,
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                //这里的处理比较复杂，如果是在开发环境中，走的是public/index-dev.html，但是在开发环境中是不会有打包生成的modules.js文件供项目使用的，就会报错，因为没办法加载出静态资源。
                //在生成的 HTML 文件中，JS、CSS 文件的 URL 会自动插入到指定的位置
                template: isDev ? './public/index-dev.html' : './public/index.html',
                //在开发模式下，我们将 inject 设为 true，在生产模式下，我们将 inject 设为 false。
                inject: isDev,
            }),
            new AssetModulePlugin(),
        ],
  	}
}
```

4、验证是否打包成功

- 运行 `npm run build` 命令，进行打包。
- 打包完成后，在 `dist` 目录下查看生成的 `modules.js` 文件，确保其中包含了所有的 JS、CSS 文件的 URL。
- 打开生成的 HTML 文件，查看页面是否正确渲染，并且所有的 JS、CSS 文件是否被正确引入。可以使用浏览器的开发者工具（F12）查看网络请求，确认所有的 JS、CSS 文件都被正确加载。



## 开发思维

#### 定位

1、不要使用 display：inline-block 

```js
1、会形成与块级格式化上下文（BFC）相反的行级格式化上下文（IFC）
2、产生空白间隙，html代码中的空白字符（换行符、空格符）会被浏览器渲染成一个空白间隙，代码打包时会压缩代码，去掉空白字符，就导致在开发环境中，出现空白字符，而生产环境中，空白字符消失。
3、IFC默认的垂直对齐方式是基于基线对齐（基线就是类似于一个文字的中点），这就导致了列与列之间的间隙影响，导致行与行也会产生间隙
4、行块盒的基线又是极其复杂的，如果行块盒里面是一张图片，那么基线就在图片的底部，也就是行块盒的底部，如果是文字，那个基线就在最后一行文字的基线上。
```





下面的图表展示了系统功能结构图：

```markdown
系统功能结构图
├─ 系统功能
│   ├─ 文本
│   │   ├─ AI自然语言生成能力
│   │   │   ├─ 营销推广文案
│   │   │   ├─ 论文报告书写
│   │   │   ├─ 多语言文本翻译
│   │   │   ├─ 文案修改、缩写、扩写、续写等
│   │   │   │   └─ 多种文案快捷输入配置表单
│   │   │   │        └─ 快捷输入多类创作要求
│   │   │   └─ 自由问答入口
│   │   │        └─ 利用大语言模型精准解答用户疑问
│   │   └─ 用户模块功能
│   │        ├─ 注册用户
│   │        ├─ 登录
│   │        ├─ 收藏夹
│   │        ├─ 保存历史记录
│   │        └─ 生成周报
│   ├─ 图像
│   │   ├─ AI的图像整合技术
│   │   │   ├─ 根据用户生成图像文字描述，生成一组与描述相关的图片
│   │   │   ├─ 用户可提供图片，生成与用户图片相类似的一组图片
│   │   │   ├─ 基于用户上传的图片，对图片进行文字解说
│   │   │   └─ 为图像生成对应的诗歌、构造故事
│   │   └─ 用户模块功能
│   └─ 文档
│        ├─ 基于用户上传的world文档
│        │   ├─ 文档内容总结概述
│        │   ├─ 基于文档的问答接口
│        │   └─ 用户可为文档写摘要等内容
```