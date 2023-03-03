const express = require('express');
const app = express();

//get请求,当用户端发送get请求，并且url路径为  /serve  时会调用这个函数，客户端得到的响应就是这里发送的响应体，就是 send 里面的内容
app.get('/delay-serve', (request, response) => {
    //这行代码是解决跨域问题的
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置延时响应
    setTimeout(() => {
        response.send('延时响应');
    }, 3000)

});

//当url路径为  /serve  时会调用这个函数，客户端得到的响应就是这里发送的响应体，就是 send 里面的内容
//all的意思是指可以进行post、get请求
app.all('/serve', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('hello Ajax post');
});


//post请求,当用户端发送post请求，并且url路径为  /json-serve  时会调用这个函数，客户端得到的响应就是这里发送的响应体，就是 send 里面的内容
//返回一个JSON对象
app.all('/json-serve', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个JSON对象数据
    const data = {
        name: 'PangSi'
    };
    //send()方法中只能返回字符串，所以对于上面的JSON数据，我们需要进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});

app.listen(8000, () => {
    console.log("服务已经启动,8000端口监听中...");
});