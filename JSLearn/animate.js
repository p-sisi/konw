// 将动画函数封装起来，需要用的时候再将js文件引入
function animate(obj, target, callback) {
    //obj目标对象    target目标位置     callback 回调函数
    clearInterval(obj.timer); //先清楚了定时器，再重新设置定时器，排他思想，防止类似于每点一次按钮都会有一个定时器开始进程
    obj.timer = setInterval(function() {
        if (obj.offsetLeft > target) {
            clearInterval(obj.timer);
            //回调函数写在定时器结束里面,调用函数，在使用时，给这里传一个匿名函数，例如animate（span，800，function（）{}）
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + 1 + 'px';
    }, 15)
}