# uni-app

#### uni-App介绍

uni-app是一个使用Vue.js开发所有前端应用的框架，开发者编写一套代码，可发布到IOS、Android、H5、以及各种小程序等多个平台。

1. 环境搭建

   uni-app使用HBuilderX进行开发，新建项目--选择uni-app--创建项目

   运行终端选择：运行---选择想要的终端

   注意：如果是第一次运行到微信开发者改工具上，需要填写微信开发者工具的文件目录，且需要到微信开发者		   工具中找到“设置”打开端口号。还需要登录微信开发者工具，并且在uni-app中选择manifest.json文件			在微信小程序中填入id。

2. 项目结构介绍

   pages：存放所有页面文件

   statice：存放静态界面文件

   unpackage：打包之后的跨端输出文件

   App.vue：页面首文件

   main.js：项目入口文件

   pages.json：整个项目存放的路径、窗口的外观设置

   

3. 开发规范
   - 页面文件遵循Vue单文件组件规范
   - 组件标签靠近小程序规范
   - 接口能力JS API靠近小程序规范，但需要将前缀wx替换为uni
   - 数据绑定及事件处理同Vue.js规范，同时补充了App及页面的生命周期
   - 为兼容多端运行，建议使用flex布局进行开发
4. 全局配置

#### 新建页面

- 在pages文件夹中，新建vue文件模板
- 到pages.json中，在pages对象中定义新建的文件的路径
- pages对象中有两个属性：path（文件路径）style（样式）
- style中的样式会把下面的全局样式覆盖掉
- 页面在pages对象中设置为第一项就会将这个页面设置为首页

#### 配置tabbar

实现tab栏切换效果

- 当设置position为top时，将不会显示icon
- tabbar中的list是一个数组对象，只能配置2-5个，tab按数组顺序排序
- 具体属性可以查看文档，tabbar写在pages.json文件中，与globalStyle同级

<img src="C:\Users\sisi\AppData\Roaming\Typora\typora-user-images\image-20230317223209575.png" alt="image-20230317223209575" style="zoom:80%;" />



#### 配置condition

类似于路由跳转，比如说商品列表页跳转到详情页，在微信开发者工具中头部有一个”普通编译“选项，下拉可以看到我们在condition中配置的页面

也是与tabbar同级

![image-20230317224352992](C:\Users\sisi\AppData\Roaming\Typora\typora-user-images\image-20230317224352992.png)





#### 其他问题

##### 1、渲染出来的是页面？

uniapp渲染结果取决于你的目标平台和编译配置，当你使用uniapp开发一个web页面时，会被编译成传统的web应用，同时还可以将代码编译成原生应用。



##### 2、当视频自动播放的时候，在 iOS 下视频会默认会弹成全屏播放，针对这个问题怎么解决？

​	这是由于iOS Safari浏览器的策略所致，解决办法：

- 使用用户交互播放，添加一个播放按钮，点击时才触发播放
- 使用内联播放，即在网页中直接在元素内播放视频，不弹出全屏播放器，可以使用HTML的video标签，并设置属性webkit-playsinline和playsinline为true来实现内联播放。这样视频会在网页中的指定区域内播放，而不会弹出全屏播放器。

