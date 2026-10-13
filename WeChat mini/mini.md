## 微信小程序

### 开发工具

微信开发者工具下载：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

### 微信小程序的环境准备
- 微信小程序账号注册，到微信小程序公众号注册；

  https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=92692286&lang=zh_CN

- 获取APPid，该APPID将作为开发者的唯一标识，在登录账号之后的小程序官网中，“开发”-“开发设置”中考研获取到APPID；

- 云开发：指的是需要用到服务器来进行开发的，一般不选

- 在微信小程序官网，开发者工具中，选择开发版，根据自己电脑的配置，下载开发者工具。
            开发中通常使用VSCode来编写代码，微信开发者工具进行预览
            开发者工具配置：如果进行异步请求的话，需要勾选”详情“中的”不校验合法域名。。。

### 全局配置文件app.json

定义小程序的页面路径、窗口外观、底部Tab栏等

```json

```

### 全局逻辑文件app.js/ts

处理小程序的生命周期（如启动、显示、隐藏）和定义全局数据

```ts
import { setStorageTime, getStorageTime } from '@/utils/index';
import { handleFetchBaseUrl, handleCheckToken } from '@/utils/login';
import { forceUpdate } from './utils/version-check/index';

App<IAppOption>({
  globalData: {
    storagePoster: {}
  },
  async onLaunch() {
    // 强制更新
    forceUpdate();

    // 设置环境
    // 展示本地存储能力
    const logs = getStorageTime('logs') || [];
    logs.unshift(Date.now());
    setStorageTime('logs', logs);
    // 登录
    handleCheckToken();
    handleFetchBaseUrl();

    // 埋点注册
    require('./utils/sensors/init');
  },
});
```

### 全局样式文件app.wxss

设置所有页面共用的样式

```less
// 可以批量引入单独的样式文件
@import './static/iconfont/iconfont.less';
@import './static/styles/variable.less';
@import './static/styles/common.less';
@import './static/fonts/D-DIN-Bold/font.less';

// 也可以全局定义容器样式
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
view, text {
  font-family: "PingFang SC";
  box-sizing: border-box;
}
```





## 小程序注册

### 地址

https://mp.weixin.qq.com/wxopen/waregister?action=step1&token=&lang=zh_CN

### 要求

- 一个邮箱只能注册一个微信小程序账号
- 一个身份证只能注册5个小程序





## 开发标准

### wxml

类似于vue文件，但是里面只有元素文件，遵循xml语法



### wxss

微信页面的样式，类似于css文件，绝大部分的css样式都可以直接使用，但是也有扩展的特性：

- 尺寸单位rpx

  可以根据当前的屏幕宽度自适应，以屏幕为750px为基准计算，1rpx = 1px；

  比如，在iPhone6上，屏幕宽度为375px，1rpx = 0.5px

- 样式导入

  使用@import 语句可以导入外联样式表（类似于scss），后面是相对路径

  ```wxss
  @import "common.wxss";
  
  .middle-p {
      padding:15px;
  }
  ```



### JS/TS

完成微信页面与用户交互行为，与web中的js/ts文件不同的是:

- 微信这没有BOM、DOM概念，因为小程序运行在微信环境中，而不是浏览器中
- 提供的是 wx 对象，这是小程序自己封装的顶级对象，通过这个对象可以完成小程序中的各种功能



### json

配置文件，是用来配置小程序页面的公共配置的。分为两个方面：

- 全局配置

  在项目的根目录下 app.json，用来对小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多Tab等。

  ```json
  {
     // 文件所有页面结构
    "pages": [
      "pages/index/index",
      "pages/customer/index",
    ],
    // 是否开启debug模式，默认关闭
    "debug": true,
    "subpackages": [
      {
        "root": "pages-main-affiliate",
        "pages": [
          "pages/scan-code/index"
        ]
      }
    ],
    // 全局设置，可以查看文档，有很多字段
    "window": {
      "backgroundTextStyle": "light",			  // 背景文本颜色
      "navigationBarBackgroundColor": "#fff",   // 头部bar的背景颜色
      "navigationBarTitleText": "小鹅通合伙人",   // 头部bar标题
      "navigationBarTextStyle": "black",        // 头部bar字体颜色
      "backgroundColor": "#eeeeee",			  // 内容区背景颜色
      "backgroundTextStyle": "light",		      // 内容区的文本颜色
      "enablePullDownRefresh",				  // 是否开启全局的下拉刷新
    },
    // 
    "style": "v2",
    "sitemapLocation": "sitemap.json",
    "useExtendedLib": {
      "weui": true
    },
    "resolveAlias": {
      "@/*": "/*"
    },
    "lazyCodeLoading": "requiredComponents",
    // 底部tab栏
    "tabBar": {
      "selectedColor": "#FF781F", // tab上文本选中颜色
      "color": "#CCCCCC",			// tab上文本默认颜色
      "borderStyle": "black",     // tab上边框颜色
      "backgroundColor": "#cccccc",// tab背景色
       "position": "bottom",		// tab位置，top的时候无图标
      "list": [   				// tab列表，最少2个，最多5个
        {
          "pagePath": "pages/index/index",
          "iconPath": "static/images/tabbar/icon-index.png",
          "selectedIconPath": "static/images/tabbar/icon-index-active.png",
          "text": "首页"
        },
        {
          "pagePath": "pages/customer/index",
          "iconPath": "static/images/tabbar/icon-customer.png",
          "selectedIconPath": "static/images/tabbar/icon-customer-active.png",
          "text": "客户"
        },
        {
          "pagePath": "pages/mine/index",
          "iconPath": "static/images/tabbar/mine.png",
          "selectedIconPath": "static/images/tabbar/mineActive.png",
          "text": "我的"
        }
      ]
    }
  }
  ```

- 页面配置

  每个小程序单独的页面可以使用一样的文件名字，对本页面的窗口表现进行配置，页面配置项会覆盖app.json中的window中相同的配置项



## 工程结构

常用的结构

```js
- apis   //接口，与其他项目接口文件一样就行
- component  //封装的公共组件文件，与其他一样
- constants  //常量文件
- static     //静态资源文件
- utils      //工具文件
- pages  //页面文件
	- index     //index首页
    	- index.js    //index页面的逻辑
        - index.json  //index页面的配置信息
        - index.wxml  //index页面的元素布局
        - index.wxss  //index页面的样式
    - error     //其他页面，也是这个文件结构
    	...
```



## wxml语法

### 数据绑定

- 普通绑定

  依旧是双大括号绑定

  ```vue
  <view> {{ message}} </view>
  ```

- 组件属性

  ```vue
  <view id="item-{{id}}"></view>
  
  Page({
  	data: {
  		id: 0
  	}
  })
  ```

- 关键字

  ```vue
  <checkbox checked="{{false}}"></checkbox>
  ```

  如果写成了 checked=“false”，则其计算结果是一个字符串，而不是一个布尔值

- 逻辑判断 wx:if

  ```vue
  <view wx:if="{{a > 5}}"></view>
  <view wx:elif></view>
  <view wx:else></view>
  ```

- 循环 wx:for

  wx：for 绑定一个数组，即可使用数组中的每一项进行重复渲染，默认下标index，默认当前项item

  ```vue
  <view wx:for="{{array}}" wx:key="index">
      {{index}} : {{item.message}}
  </view>
  ```

  wx:for-item 可以指定当前项变量名，wx：for-index可以指定当前下标变量名

	```vue
	<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="ary">
	    {{idx}}: {{ary.message}}
	</view>
	```

### 标签

与vue项目的标签类比

- div -----view
- span -----text
- img -------image
- router-link/ a --------navigator
- template -----block

### 模板

- 模板的一般写法

  ```vue
  name属性：当前模板的名字
  
  <template name="message">
  	<view>{{index}}:{{msg}}</view>
  </template>
  ```

- 模版引入

  - **import**

    "模板引用"，引入和使用定义好的模板

    作用域限制：c中有b，b中有a，c只能用b，c不能用a

    ```vue
    子组件
    <template name="item">
    	<text>{{text}}</text>
    </template>
    
    父组件引入
    <import src="item.wxml"/>
    父组件使用
    <template is="引入的模板名字，这里是item" data="传入模板的数据：{{text: 'forbar'}}"/>
    ```

  - **include**

    代码拷贝，把目标文件中除了 `<template/>` 和 `<wxs/>` 标签之外的**所有代码**，原封不动地“拷贝”到 `include` 所在的位置。

    适合引入在页面中始终固定的公共部分，比如页面头部、底部等。

    ```xml
    子组件：
    <view>这是页面的公共头部</view>
    
    引入：
    <include src="header.wxml"/>
    <view>这里是当前页面的主要内容</view>
    ```



## wxss语法

wxss不是完全的css，除了两个小程序特定的属性外，wxss支持的选择器类型只有这些：

- .类名
- #id
- 标签名
- 标签名，标签名
- 标签名:nth-child(n)
- 标签名::after
- 标签名::before

其他样式的设置和类名定义等和vue一样

```xml
<view style="color:{{color}};" />
<view class="normal_view" />
```



## js语法

跟vue差不多，都是js

```js
page({
    data: {   //变量
        id: 0 
    }
    handleClick(name) {   // handleClick方法
    	
    }
})
```



## 生命周期

### 应用生命周期

小程序从创建、启动、运行、退出的一次完整运行过程。必须在 app.js 中的 App() 函数中调用，必须调用，且只能调用一次

```js
App({
    onLaunch(optios) {
        // 小程序初始化完成时触发，全局只会调用一次
    },
    onShow(optios) {
        //小程序启动，或者从后台进入到前台时触发
    },
    onHide() {
    	//小程序从前台进入后台时触发
    },
    onerror(msg) {
        //小程序发生脚本错误或者API调用错误时触发
    },
    globalData: {
        // 添加任意全局变量或者函数，全局文件通过this可以访问
    	//
        msg: 'hello word',
        userInfo: null
    }
})
```

### 页面生命周期

page中的页面的生命周期

```js
Page({
	data: {

    },
	onLoad(optios) {
		// 页面加载时，每次打开页面执行一次，一个页面只会调用一次
        // optios就是当前页面路径中的页面参数
        // 例如：page/error/index?error_code=30030, 可以options.error_code
    },
    onReady() {
        //页面第一次渲染完成后执行，一个页面调用一次，代表页面已经准备妥当，可以和视图层进行交互
    },
    onShow() {
        //页面加载后，第一次等待显示时会执行，或者从后台进入到前台显示时执行，可以反复执行多次
    },
    onHide() {
        // 页面显示后，从前台进入到后台或者底部tab切换到其他页面等时执行，可以反复执行多次
    },
    onUnload() {
        // 页面卸载时执行，当redirectTo 或 navigateBack 后退时调用
    }
})
```



## API

小程序的API官方文档：https://developers.weixin.qq.com/miniprogram/dev/api/

### 界面提示

- wx.showToast() / wx.hideToast()   显示、关闭消息提示
- wx.showLoading() / wx.hideLoading()  显示、关闭消息加载框
- wx.showModal   显示模态对话框
- wx.showActionSheet  显示操作菜单

### 页面跳转及传参

- navigator组件
