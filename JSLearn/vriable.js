// 1、变量就是用来装东西的盒子, 变量初始化方法：    var 变量名=赋值；  
//2、跟c一样，多个变量用；未赋值的话，变量存值undefined
//3、不声明直接赋值使用，在js中是允许的，例如：age = 19; console,log(age);,会变成全局变量
//4、js的变量是不需要设置变量类型的，在程序运行过程中会自动识别数据类型，例如：var age = 10;程序会自动检测该类型为int类型，变量的数据类型是可以变化的
var age = 19;
console.log(age); // 将变量保存在console中

//也可以在for循环中直接定义变量
for (var i = 1; i < 10; i++) {}

var artle = '大喊一声\n'; //\n换行字符
alert(artle);

//检测字符串长度：字符串名.length
alert(artle.length);
//字符串的拼接，使用+，什么类型都可以拼接，跟java一样，数值相加，字符相连

var age = prompt('您今年多少岁了');

//typeof检测数据类型
console.log(typeof age);

// 字符类型转换，“+“拼接的结果都是字符串类型
var num = 1;
alert(num.toString); //将number型转换为字符型
parseInt('19'); //将string类型转换为整数数值型  var add = parseInt(num1) + parseInt(num2);
parseFloat('19.5'); //将string类型转换为浮点数型