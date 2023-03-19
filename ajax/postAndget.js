// 1、导入express包，前提是npm i express
const express = require('express');

// 2、创建web服务器
const app = express();


// 4、监听GET、POST请求

//get请求,当客户端发送get请求，并且url路径为  /serve  时会调用，客户端得到的响应就是这里send发送的响应体
app.get('/delay-serve', (request, response) => {
    //这行代码是解决跨域问题的
    response.setHeader('Access-Control-Allow-Origin', '*');
    //向客户端发发送JSON对象
    response.send({
            name: 'ysy',
            age: 18
        })
        //设置延时响应
    setTimeout(() => {
        response.send('延时响应');
    }, 3000)

});

//当url路径为  /serve  时会调用这个函数，客户端得到的响应数据就是这里发送的响应体，就是 send 里面的内容
//all可以进行post、get请求
app.all('/serve', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //向客户端发送文本数据
    response.send('hello Ajax post');
});


app.all('/json-serve', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置一个JSON对象数据
    const data = {
        name: 'PangSi'
    };
    //send()方法中只能返回字符串，所以对于上面的JSON数据，我们需要进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体，也就是向客户端发送数据
    response.send(str);
});


// 3、启动web服务器
app.listen(8000, () => {
    console.log("服务已经启动,8000端口监听中...");
});