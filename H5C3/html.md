#### 选择器

- **标签选择器**

  标签名 { ... }

- **类选择器**

  .类名称{ ... }。一个标签可有多个类名，类名间用空格隔开class="red yellow”

- **id选择器**

  \#id名 { }   id唯一，class不唯一

- **通配符选择器**

  *{ }    选中页面中的所有标签

- **后代选择器**

  父元素 子元素 ...(一层层往里写都可以，元素可以是标签、.类名、#id名) { ... }    选择父元素的所有子元素

- **子选择器**

  父元素>子元素{ ... }    选择父元素的第一个子元素

- **并集选择器**

  元素名，元素名 { ... }

- **伪类选择器**

  a：xxx { ... }  

  a：link 选择未被访问的链接 

  a：visited 选择已被访问的链接

  a：hover 选择鼠标位于其上的链接

  a：active 选择鼠标按下未弹起的链接

  LVHA的顺序不能颠倒，先写后写

- **:focus伪类选择器**

  主要针对于表单元素，把获得光标的表单元素选取出来。  input:focus{ color:red; } 

- **属性选择器**

  标签 [属性="属性值"], 或者: 标签 [属性]

- **结构伪类选择器**

   1、元素 ：first-child，选择选择父元素中第一个子元素

   2、元素 ：last-child ，选择父元素中最后一个元素

   3、元素 ：nth-child（数字或关键字或公式例如2n+1），选择父元素中的第n个元素，关键字even表示偶数，odd表示奇数，括号中写n表示选择了全部的子元素，n从0开始，n++

   4、元素 ：first-of-type，选择第一个元素类型

   5、元素 ：last-of-type，选择最后一个元素

   6、元素 ：nth-of-type，选择第n个元素

  ​     前三个与后三个的区别是，前三个先看第几个，再去匹配相应元素，后三个是先看元素，再去找第一个元素，后三个多用于子元素的标签有不一样的情况 

- **伪元素选择器**

   1、元素名：：before{}，在元素内部的前面插入内容

   2、元素名：：after{}，在元素内部的后面插入内容

   before和after创建一个元素，但是属于行内元素。必须有content属性，可以为空，也可以写里面的内容。 权重和标签选择器一样为1 ，：：前不能有空格









#### 边框

##### 1、样式style

```js
border-width: 0px;     //边框大小
border-color: red;     //边框颜色
border-style: dashed;   //边框样式，solid实线边框，dashed虚线边框，dotted点线边框...
border：10px dashed red;   // 三者复合形式，没有顺序之分
border-left/right/top/bottom: 10px dashed red   //单独设置某一边
border-radius: 半径长度（决定边框有多弯）   //圆角边框

border-collapse: collapse;   //合并相邻的边框
```

设置圆形：基于正方形，圆角边框为边长的一半或50%

设置圆角矩形：基于长方形，圆角边框为高的一半



#### 边距

- **padding- left/right/top/bottom: 10px**   //边框距离内容的距离
- **padding ：** top right bottom left （按照顺时针方向）复合写法 ，设置两个则：上下 ，左右
- 注意点：
  - 当每个小盒子文字字数不同时，可设置padding来使盒子挤大，视觉效果更好，例如导航界面.
  - 如果盒子本身没有设置width和height，则设置padding值不会撑开盒子大小
- **margin：**边框外部的距离，与padding同理
- 注意点：
  - margin: 0 auto;    让块级盒子水平居中显示，需满足的条件：设置width
  - 当上面的div的下外边距为100px，下面的div上外边距为200px时，最后两个块元素上下距离为200px，他们的外边距会合并，取最大。解决方案为BFC。
  - 要巧妙运用margin的负值，可以消除盒子重叠时边框粗细问题，



#### 图片

##### 1、标签

```js
<div><img alt="加载失败时显示的内容" title="光标移上去显示的内容"/><div/>   
   该标签需要使用div等标签嵌套CIA生效
想要给整个浏览器都设置上背景时，注意要将html和body的高度设为100%，才能在body中插入图片
```

##### 2、css样式

- **background-color**： red  ，背景颜色

- **background-image:** url(背景图片位置)，易控制图片位置

- **background-repeat:** no-repeat        默认是repeat平铺；repeat-x横着平铺；repeat-y竖着平铺；背景图片会压住背景颜色

- **background-position:** x y;     可以是方位名词：left、right。center、top等，可以xy颠倒，如果只写一个，则另外一个默认居中显示。

- **background-attachment**: scroll;    背景图像固定，scroll为随内容滚动，fixed为固定不动

- **background**: rgba(0, 0, 0, 0)     修改背景色透明状态，最后一个0的取值范围0-1,0是全透明，1是全黑，前面三位为颜色

- **background-size**：contain/cover    contain当宽高有一个跟指定大小相等时，将不再进行缩放；cover将整个盒子全部覆盖，图片会变形

- **vertical-align**：center   可以设置图片垂直对齐方式，baseline为以父元素下边对齐，top与行内最高元素的顶端对齐，bottom与行内最低元素的顶端对齐，center垂直中心， middle放置在父元素的中心

  可以用来修改bug：图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐

  解决：给图片添加vertical-align：top|middle|bottom(推荐使用)。第二种方法是将图片转换为块级元素，display：block；

  

##### 3、网站favicon图标

> favicon.ico一般用于缩略的网站标志，它显示在浏览器的地址栏或标签上，制作步骤如下：
>
> 一、制作favicon图标
>
>  1.把要放上去的图标做成png图片 ，可以用到ps
>
>  2.把png图片转化为ico图标，借助第三方转换网站：http://www.bitbug.net/
>
> 二、把ico图标放到网站的根目录，也就是同一级目录下
>
> 三、HTML中引入ico图标
>
>  在网页的head标签中加link标签，link标签里面写上 rel="shortcut icon" href="ico图标名字"



##### 4、精灵图

```js
目的：可以有效减少服务器接收和发送请求次数的，提高页面加载速度，就是把所有东西全部打包一次发过去。
   原理：
      1、主要针对背景图片使用，就是把多个大背景图片整合到一张图片中
      2、网页中的坐标相当于笛卡尔坐标系的第四象限，使用的都为负值，因为默认盒子装的是背景图片的左上角
      3、在盒子中装精灵图时，使用语句：background：url（精灵图位置） no-repeat 精灵图中该背景图片的位置；还可以使用right 0 表示只要精灵图的右半部分</p>
```



##### 5、字体图标

- 无法代替精灵技术，只对结构样式简单小图标

- 减少了服务器的请求，本质是文字，可以随意修改样式颜色大小，几乎支持所有浏览器

- 使用步骤：

  - (1)、从网上将字体图标下载下来，下载的网站有http://icomoon.io和http://www.iconfont.cn
  - (2)、字体图标的引入：将下载的压缩包中的fonts文件放到html文件的根目录下，也就是同一级目录中。
  - (3)、在css文件中引入该字体文件，找到压缩包中的style.css文件，复制其中的代码从开头到block
  - (4)、在标签中输入字体图标，并在css中设置该字体图标的font-family为icomoon

- 阿里矢量图标库使用步骤（重要！！！！）：

- 一般使用阿里图标库，UI会将图标上传到公司的图标项目中，加入到该 项目中后，按照阿里图标库的使用方法

  - 在官方图标库中将想要的图标加入购物车 ,点击右侧购物车加入到项目中，

  - 在项目中选择合适的图标，若颜色不合适可以到购物车中编辑颜色，选择合适的图标加入购物车

  - 点击购物车，将加入购物车中的图标下载至本地

  - 解压好压缩包，有用的两个文件为 **iconfont.css** 和 **iconfont.ttf** ，将这两个文件复制到“**src/assets/font/**”下面

  - 在项目的**index.html**文件中引入字体图标样式表:    即   iconfont.css  文件，例如（地址是指在项目中该文件的位置）

    <link rel="stylesheet" href="./src/assets/iconfont/iconfont.css"/>

  - 在项目中调用图标，  在标签中设置合适的类名 ，

    <span class="iconfont icon_favorites-fill" >
  
    经常使用span标签来存着这个图标，第一个类名iconfont都一样必须要写，第二个类名用哪个图标，就用它的类名
  
  - 要是想修改小图标的样式，可以用类选择器.iconfont{ }来修改
  
  - ```css
    //iconfont.css文件
    @font-face {
      font-family: "iconfont"; /* Project id  */
      src: url('iconfont.ttf?t=1695622278285') format('truetype');
    }
    
    .ai-iconfont {   //一般会更改这里的ai-iconfont类名为自定义类名，可以避免不同项目图标产生冲突
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .icon-icon-delete:before {  //icon-icon-delete 为图标的类名，可自定义更改，使用时同样更改
      content: "\e7a5";
    }
    
    .icon-icon-aiwriting:before {
      content: "\e7a7";
    }
    
    //在组件中使用图标
    <i class="ai-iconfont icon-icon-aiwriting" style=""></i>
    ```
  
  - 



#### 文字

##### 1、CSS样式

- **color:** pink;   字体颜色   \#十六进制，rgb代码，共三种形式
- **font-size:** 100px;   字体大小
- **font-family:** 'Courier New', Courier, monospace;   字体样式
- **font-weight:** bold   字体粗细，normal不变粗，也可以直接用strong标签
- **font-style:** normal;  文字倾斜，normal是不倾斜
- **text-align:** center;   文字水平对齐方式，left左对齐，right右对齐
- **text-decoration:** underline;    装饰文本，none不要任何线，underline下划线，overline上划线，line-through删除线
- **text-indent:** 2em;     首行缩进，em为相对当前元素的一个文字大小，也可用100px等方式缩进
- **line-height:** 25px;   行间距 ，设置为当前元素的高度值，则文字垂直居中显示
- 复合属性：（按顺序）
  - font：font-style   font-weight      font-size/line-height      font-family 
  - font:  italic     700    16px     'Microsoft yahei'.

**文字溢出-----省略号表示：**

```js
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



#### 浮动和定位

##### 浮动

```js
float：right/left;
```

- 浮动的特性：
  - 浮动元素会脱离标准流（脱标）并且不再保留原先的位置，其他盒子会占有这个位置，浮动元素飘起来
  - 浮动会找父元素边沿去浮动，不局限于本行本列
  - 浮动元素会一行内显示并且顶部对齐,每一个盒子都要设置浮动才可以，否则就会飘在一个位置
  - 浮动元素会具有行内块元素特性;
  - 浮动的元素不会压住下面标准流的文字（图片），因为浮动产生的最终目的是为了做文字环绕效果（给图片添加浮动）的，
- 为了约束浮动元素的位置，我们一般采用的策略是：
  - **先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置**，符合网页布局的第一准则

- 清除浮动：
  - 消除浮动元素对标准流元素的影响，使浮动元素只在其父级元素内浮动：clear：left/right/both，清除指定方向上的所有浮动元素
  - 额外块级标签法清除浮动:即在浮动元素末尾添加新标签，再将该标签修改样式clear:both
  - 给父级元素添加样式：overflow：hidden或auto
- 注意点：
  - 多个块级元素纵向排列找标准流，多个块级元素横向排列找浮动流（浮动流块级元素排一起时可以没有间隔等）
  - 不建议设计父盒子的高度，应该由子盒子撑开，清除浮动考虑

##### 定位

定位=定位模式+边偏移

**边偏移**，就是定位的盒子移到最终位置，有四个值top，button，right，left，四个值分别表示相对于父元素各边的距离，例如：top：88px

**1、static静态定位**

**2、relative相对定位 ** 

- 是元素在移动位置的时候，相对于它原来的位置来说的     **position：relative**；
- 原来的位置仍然保存在原来的标准流中，移动后的位置也以标准流形式对待。

**3、absolut绝对定位**

- 是元素在移动位置的时候，相对于它的祖先元素来说的，如果没有父元素或者父元素没有使用定位，则相对于浏览器来定位；如果父元素有使用定位，则以最近一级有定位的祖先元素为参考位置；
- 口诀：**子绝父相**，则使用绝对定位的元素，其父元素要用相对定位
- 绝对定位是**脱标**的不占有原来的位置
- 加了绝对定位的盒子可以直接设置宽度和高度，不需要转换为行内块元素或块级元素
- 加了绝对定位的盒子是不能使用margin：0 auto来设置水平居中的
  - 设置水平居中方法：
  - 设置left：50%，让盒子的左侧移动到父元素的中心位置
  - margin-left：-盒子自身宽度的一半

**4、fixed固定定位**

- 可以在浏览器滚动时固定元素的
- 固定定位是**脱标**的，是一种特殊的绝对定位。
- 让固定定位贴合在版心的右（左）侧：
  - 1、让固定定位的盒子left:50%,走到浏览器可视区域的一半。
  - 2、让固定定位的盒子margin-left（right）：版心宽度的一半距离 

**5、sticky粘性定位**

- 以浏览器的可视窗口为移动参考
- 粘性定位占有原来的位置
- 必须添加top等其中一个语句才起作用（即移到什么地方的时候不再滚动）



**定位叠放次序 z-index**

- 使用定位时出现盒子重叠情况，用这个来控制盒子叠放次序

- 数值越大，盒子越靠上，相同则后来者居上

- 只有设置了定位的盒子才有该属性

  

**定位的特殊性**

- 行内元素添加了绝对定位或者固定定位后，就可以直接设置高度宽度值
- 块级元素添加绝对定位或者固定定位后，如果不给宽度或者高度，则默认大小是内容的大小
- 绝对定位或固定定位会压住下面标准流的全部内容
- 固定定位和绝对定位设置时，与float不能同时起作用，，float的优先级更高



#### SEO优化

- 放logo的盒子里面首先放一个h1标签，目的是为了提权，告诉搜索引擎，这个地方很重要
- h1里面在放一个a标签，链接，可以点击logo返回首页的，在链接里添加logo作为背景图片即可，所以需要设置a标签和h1的大小一样，因为要设置大小，所以a链接要转换为block块元素
- 为了搜索引擎收录我们，我们链接里面要放文字（网站名称），但是文字不显示出来。
  - 方法1：text——indent移到盒子外面，例如：text—identity：-9999px；然后overflow：hidden，淘宝的做法
  - 方法二：直接给font-size：0 ，就看不到文字了，京东的做法,直接在设置盒子里面加
- 最后给a标签添加title属性，属性值是提示文字，这样鼠标放到logo上就可以看到提示文字了。



#### BFC

##### **含义**

一个BFC区域包含创建该上下文元素的所有子元素，但是不包括子元素中又创造了新的BFC区域的内部元素。

```js
<div class="box1" id="HM_bfc1">
    //.box1 是一块BFC区域，这块区域包含了box2、3、4、5，也就是box1的所有子元素，同时box1的子元素也创建了一块BFC区域，这块区域包含了box6、7、8。所以每一块BFC区域只包含了自己的子元素，不包含孙子。
    <div class="box2"></div>
	<div class="box3"></div>
	<div class="box4"></div>
	<div class="box5" id="HM_bfc2">
    	<div class="box6"></div>
		<div class="box7"></div>
		<div class="box8"></div>
	</div>
</div>
//BFC区域是相互隔绝的，互不影响
```

##### **触发BFC**



#### 样式设置

##### 1、字符间距

```js
//字符左右间距 letter-spacing
<div style="letter-spacing: 1px;">测试字符间距</div>
```



##### 2、隐藏元素

- **opacity：0**

  元素只是透明，DOM依然存在，依然可以触发事件

-  **visibility: hidden;**

  隐藏元素，空间保留

- **display：none**

  DOM不存在，无法设置动画

- **hidden属性：**<div hidden></div>

  浏览器解析成display：none；使用不允许样式更改的内容管理系统时可以使用

- **z-inde**

  一定程度上将某个Dom元素隐藏在另外一个DOM元素的下方，越小在下方



##### 3、变换颜色

```scss
a {
    color: darken(#fff,10%);   //对#fff颜色加深10%
    color: lighten(#fff,10%);  //对#fff颜色变亮10%
}
```



