# promise
    1、promise是一本新的技术（es6规范），现在也是主流技术
    2、promise是JS中进行异步编程的新解决方案，旧方案是单纯使用回调函数，比如计数器，ajax请求，文件操作等
    3、 （1）从语法上来说：Promise是一个构造函数
       （2）从功能上来说：Promise对象用来封装一个异步操作并可以获取其成功或失败的结果值

# 为什么要使用Promise
    1、指定回调函数的方式更加灵活
        （1）旧的：在启动异步任务之前，必须先指定其回调函数
        （2）promise：启动异步任务---返回promise对象--给promise对象绑定回调函数（甚至是可以在异步任务结束后指定多个）
    2、支持链式调用，可以解决回调地狱问题-------很重要的点
        （1）回调地狱：回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调执行的条件
        （2）回调地狱的缺点：不便于阅读不便于异常处理

# promise使用
    1、promise是一个构造对象，里面使用函数作为参数 
       参数函数中有两个函数类型的参数：
       resolve 解决 成功的时候调用，并将promise对象的状态设置为成功，还可以传递异步成功或失败的结果值
       reject  拒绝 失败的时候调用，并将promise对象的状态设置为失败
       const p = new Promise((resolve, reject) => {
            if(n<=30){  这里面用于封装一个异步操作
                resolve(n);  异步操作为成功，传递参数n，供后面的then中的回调调用
            }else {
                reject(n);   异步操作为失败，传递参数n，供后面的then中的回调调用
            }
        })
    2、之后要调用then方法，then方法里面有两个回调函数
       	p.then(
        	(value) => {
            	promise状态为成功时的行为，如果成功则执行这个回调，同样可以接收到resolve传递的结果值
        	},
        	(reason)=>{
            	promise状态失败时的行为，如果成功则执行这个回调
        })



# Promise的状态

实例对象中的一个属性，[PromiseState]
    1、pending 未决定的
    2、resolved 成功
    3、rejected 失败
    只有两种转变可能：pending--resolved、pending--rejected
    无论异步成功还是失败，都会有一个结果数据，成功的结果数据一般称为value，失败的结果数据一般称为reason



# promise对象的值
实例对象中的另一个属性,[PromiseResult]
存的是实例对象成功/失败的结果值，只有resolve和reject函数能对结果值进行修改



# promise API
promise.prototype指的是实例对象  
    1、 promise构造函数：
        executor函数：执行器  （resolve，reject）=>{}
        resolve函数
        reject函数
        说明：executor会在Promise内部立即同步调用，异步操作在执行器中执行

    2、 promise.prototype.then方法：
        onResolved函数：成功的回调函数 （value）=> {}
        onRejected函数：失败的回调函数 （reason）=> {}
        说明：返回一个新的promise对象
    
    3、 promise.prototype.catch方法：
        onRejected函数：失败的回调函数 （reason）=> {}
    
    4、Promise.resolve方法：（value）=> {}
        value：成功的数据或promise对象
        说明：返回一个成功/失败的promise对象
    
        如果传入的参数为 非Promise类型 的对象，则返回的结果为成功的promise对象
        let p1 = Promise.resolve(521);   p1就变成了了promise对象
        如果传入的参数是 Promise对象，则返回的结果取决于该对象的结果，成功它就成功，失败它也失败
    
    5、Promise.reject方法：（reason）=> {}
        reason:失败的原因
        说明：返回一个失败的promise对象，不管是传入什么类型的参数，返回的都是一个失败的promise对象，如果传入的是一个成功的promise对象，返回的结果就是一个成功的promise对象，但是这个promise对象是失败的
    
    6、Promise.all（promises）=>{}
        promises:包含n个promise对象的数组
        说明：返回一个新的promise对象，但是只要数组里有一个对象是失败的，返回的promise对象就是失败的，且失败后后返回的promise结果值就是数组里第一个失败对象的结果值
    
    7、Promise.race(promises)=>{}
        promises：包含n个promise对象的数组
        说明：多个promise对象赛跑，返回一个新的promise对象，其结果状态就是第一个完成的promise对象的结果状态
    
    8、Promise.any(promise数组) => {}
    	说明：多个Promise对象执行，返回第一个成功的对象，其结果状态值就是第一个成功的Promise对象值

# 改变promise状态、指定回调函数，谁先谁后
    1、都有可能，正常情况下是先指定回调再改变状态
    2、如何先改变状态再指定回调
        在执行器中直接调用resolve()/reject()
        延长更长时间再调用then()
    3、promise.then()返回的新的promise结果状态由上面决定
        由then（）指定的回调函数执行的结果决定
    4、promise如何串连多个操作任务
        promise的then（）返回一个新的promise，可以开成then（）的链式调用
    
        p.then(value => {     链式回调，因为then的返回值是一个promise对象
            console.log(111);
            return new Promise(() => {})  中断链式回调
        }).then(value => {
            console.log(222);
        }).then(value => {
            console.log(333);
        }).catch(reason => {
            console.log(reason)    这个就是异常穿透
        })
        中断链式回调：有且只有一种方法，返回一个pending状态的对象。因为这样then返回的也是一个pending状态的对象，那么第一个then后面的then方法都不会去执行，因为then执行的条件是状态要改变，所以对于一个一直都是pending状态的对象是不回去执行的


    5、promise异常穿透
        当使用promise的then链式调用时，可以在最后指定失败的回调
        前面的任何操作出了异常，都会传到最后失败的回调中处理


# promise自定义封装
    1、初始化结构搭建
        在使用Promise的文件中还是正常使用类似于下面的代码
        const p = new Promise((resolve, reject) => {
            resolve('OK')
        })
    
        p.then((value) => {
            console.log(value)
        }, (reason) => {
            console.warn(reason)
        })
    手写一个Promise对象：
        但是需要新建一个promise.js文件，该文件会构造一个新的Promise对象，在上面的文件中引入该文件后，上面的文件的promise就是指的是该文件下的promise
        代码：
        function Promise(executor){
            this.PromiseState = 'pending'    添加属性
            this.PromiseResult = null
            const that = this;           保存实例对象的this值
            function resolve(data){      重新定义resolve和reject函数，还需要用data接收参数
                if(that.PromiseState !== 'pending') return ;    保证状态只能被改变一次
                that.PromiseState = 'fulfilled'     1.修改对象的状态，不然then无法调用 promiseState,fulfilled也是成功
                that.PromiseResult = data           2、设置对象结果值   promiseResult
            }
            function reject(data){
                if(that.PromiseState !== 'pending') return ;
                that.PromiseState = 'rejected'
                that.PromiseResult = data
            }
            executor(resolve,reject)
        }
        
        Promise.prototype.then = function (onResolved,onRejected){
            if(this.PromiseState === 'fulfilled' ){ 
                onResolved(this.PromiseResult)       返回结果值
            }
            if(this.PromiseState === 'rejected' ){ 
                onResolved(this.PromiseResult)       返回结果值
            } 
        }

# async函数
    1、async关键字用于声明一个异步函数，返回值是promise对象
    2、promise的=对象的结果由async函数执行的返回值决定的
    
    async function f(){
    
    }
    f();

# await表达式
    通常使用await是后面会跟上一个表达式，这个表达式会返回一个Promise；那么await会等到Promise的状态变成fulfilled状态，之后继续执行异步函数； 后面的代码相当于await返回的promise对象调用then里面需要执行的代码
    1、await右侧的表达式一般为promise对象，但也可以是其他的值
    2、如果表达式是promise对象，await返回的是promise成功的值
    3、如果表达式是其他值，直接将此值作为await的返回值
    
    注意：1、await必须写在async函数中，但async函数中可以没有await
         2、如果await的promise失败了，就会抛出异常，需要通过try...catch捕获处理，如果我们在async中抛出了异常，那么程序它并 不会像普通函数一样报错，而是会作为Promise的reject来传递；
         3、async与await结合使用，可以不再使用回调函数，也能实现异步编程
    
         async function getData() {
            const res1 = await requestData('zyk')
            const res2 = await requestData(res1 + 'aaa')
            const res3 = await requestData(res2 + 'bbb')
            const res4 = await requestData(res3 + 'ccc')
            console.log(res4);
        }
     
        getData()


