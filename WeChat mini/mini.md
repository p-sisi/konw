微信小程序

一、微信小程序的环境准备：
    （一）微信小程序账号注册，到微信小程序公众号注册；
    （二）获取APPid，该APPID将作为开发者的唯一标识，在登录账号之后的小程序官网中，“开发”-“开发设置”中考研获取到APPID；
    （三）在微信小程序官网，开发者工具中，选择开发版，根据自己电脑的配置，下载开发者工具。
          开发中通常使用VSCode来编写代码，微信开发者工具进行预览
          开发者工具配置：如果进行异步请求的话，需要勾选”详情“中的”不校验合法域名。。。


二、全局配置文件app.json
    （一）page字段是文件的结构
    （二）window字段是：navigationBarBackgroundColor   背景颜色
                       navigationBarTitleText    头部标题
                       navigationBarTextStyle    标题字体颜色（black或white）
                       还有很多功能配置，具体可以查看文档，比如下拉刷新等