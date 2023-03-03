//1、不能拿浮点数来进行运算、判断是否相等
// 2、运算顺序跟数学一样，加减乘除
// 3、++age, 才是age = age + 1
// 4、 逻辑与短路中断： 表达式1 && 表达式2， 如果1为真则返回2， 如果1为假则返回1

// 5、逻辑或短路中断：表达式1 || 表达式2 ，如果1为真，则返回1；如果1为假，则返回2
console.log(123 || 456); //123
console.log(0 || 456); //456
console.log(123 || 456 || 789); //123

/* 利用new创建数组
var 数组名 = new  Array(); 
var arr = new Array()  创建一个空的数组

也可用同c语言方式吧来创建数组
var arr = [];空数组
var arr = [1,2,3];

访问：同c，访问全部数组时，同c用for循环
输出：直接使用数组名作为输出

数组长度：数组名.length

增加数组元素；
修改length长度*/
var arr = ['red', 'green', 'blue'];
console.log(arr.length);
arr.length = 5;
console(arr);

// 案例： 把数组中大于10的数筛选出来
var arr = [2, 8, 3, 43, 543, 2, 3, ];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        newArr[newArr.length] = arr[i]; //巧用length来使新数组跟着循环但是却从第0个开始
    }
}
console.log(newArr);
// 也可以像c一样直接添加
// 注意不要直接给数组名赋值