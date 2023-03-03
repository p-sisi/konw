/* 声明函数：

1、function 函数名 {
    函数体；形式跟c一样
}
函数名();

2、var fun = function(){
    函数体
} 
fun (1,2,3);     也称为匿名函数，与变量的声明差不多
*/

// 调用函数跟c一样

// 如果函数的形参和实参的个数不一样
function getNum(num1, num2) {
    console.log(num1 + num2um);
}
getNum(1, 2); // 3
getNum(1, 2, 3); //3
getNum(1); //NAN 表示不是一个数字


//   arguments的使用
function fn() {
    console.log(arguments); //arguments里面储存的是所有传递过来的实参
    console.log(arguments.length); // 是一个伪数组，即使用数组的索引方法进行储存 ，具有数组的length属性，但是没有数组的一些方法pop，push等
    console, log(arguments[2]);
}
fn(1, 2, 3);
//还有函数才有arguments，且每个函数内部已经适配好了