## scss（sass）

### 变量$

```js
/定义变量                    /使用变量
$变量名：变量值；               直接使用$变量名



$primary-color: #123456;
$primary-border: 1px solid $primary-color;
div {
    background-color: $primary-color;
    border: $primary-border;
}
```

注意点

- 一般变量名采用“-”为间隔符的命名方式



### 字符串

```sass
模板字符串： '#{randow(100)}px'
使用普通字符串符号，使用#{}进行变量的拼接
```





### 嵌套

```css
可使用嵌套选择器样式
.box {
    height: 100px;   //ul li都具有这个样式
    .box-text {      //可以使用 &-text  &表示父选择器，在这里表示.box
        margin: 0px;
        .li {
            folat:left;
            list-style: none;
            padding: 5px;
        }
    }
}

属性嵌套:  重复的属性名：{...}
.box {                             .box {
    font-size: 16px;					font: {
    font-weight: 600;						size: 16px;
    font-family: Helvetica;					wieght: 600;  family: Helvetica;
}									}}		
```





### 函数

语法格式：

```scss
@mixin 名字（$参数1，$参数2,...) {
}

例子
@mixin alert($text-color) {
    color: $text-color;
    background-color: #fff;
    div {                       //可以使用嵌套选择器
        font-size: darken（$text-color，10%）;
    }
}
.alert-warning {
    @include alert(#ccc);     //使用alert样式，两种颜色则被引用进来
}

自定义函数：变量前使用$ ,关键字前使用@
@function getNum($n) {
    $shadow: '20px 20px #fff';
    @for $i from 2 through $n (
        ...循环体
     )
}
```



### 继承@extend

```scss
@extend 选择器
    
.box {
    padding: 7px;
}
.box-text {
    @extend .box;     //继承了.box选择器中的所有样式，包括嵌套选择器内的
    background-color: #fff;
}
```



### 导入@import

```scss
@import "base";    

//base是文件名 base.scss
```

