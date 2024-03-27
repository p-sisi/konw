

## Pinia

### 概念

pinia也是一个用来实现状态管理的，在vue3中可以使用vuex，也可以使用pinia实现状态管理。pinia是vuex的升级版，pinia是作者名，是vuex核心成员开发的，



### 优点

- vue2、vue3都支持
- 具有良好的TypeScript支持
- 体积非常小，只有1KB左右



### 与vuex的不同点

- pinia中只有state、getter、action，去除了vuex中对于同步函数Mutations和异步函数Actions的区分。直接在Actions中便能够使用同步和异步方法，vuex中mutations执行同步操作，actions执行异步操作，比较麻烦。
- pinia中每个store都是独立的，互相不影响；vuex数据多了，需要创建模块化数据
- pinia支持插件来扩展自身功能
- pinia支持TypeScript



### 安装

- 下载

  ```js
  cnpm install pinia@2.0.35(建议的版本，后续可能会换)
  //下载时注意可能太高版本的vite不兼容pinia，所以建议下载版本低一点
  
  cnpm install pinia-plugin-persistedstate@3.1.0  
  //pinia数据持久化，会将数据保存在本地浏览器中等
  ```

  


### 核心概念及使用

```js
使用前提：下载pinia（状态管理库）、pinia-plugin-persistedstate（数据持久化插件）
```

与vuex差不多，比vuex要简单

Store（如pinia）是一个保存状态和业务逻辑的实体，他不绑定到组件树上，换句话说，Store承载全局State，有点像一个始终存在的组件，每个组件都可以读取和写入，有三个核心概念：

- **state**
  - 类似组件的 **data**，用户存储**全局**数据
- **Getters**
  - 类似于组件的 **computed**，用于对数据进行处理，也具有缓存特性
- **actions**
  - 类似于组件的 **methods**，用来封装业务逻辑，同步异步都支持



**使用步骤：**

```js
//新建文件夹src/store,store文件夹下新建index.ts文件：
import { createPinia } from 'pinia';    //引入pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'; //引入持久化插件

const pinia = createPinia();   //创建实例

pinia.use(piniaPluginPersistedstate);  // 持久化 store

export const store = pinia;    //向外导出pinia为  store

export * from './modules';    //modules文件夹为各个模块的store
```

```js
//main.ts入口文件，引入pinia
import { store } from '@/store';

app.use(store);
```

开始定义共享数据

```js
//store文件夹下，新建modules文件夹，新建modules/index.ts文件：
//用于导出所有模板数据
export * from './counter';
//假设modules下有个counter.ts文件
```

```js
//modules/文件夹下新建counter.ts文件中
 
import { defineStore } from 'pinia'    //定义pinia容器

//定义接口，一般用于确定该共享所有的数据类型
export interface CounterState{
    name: string; //名字
    age: number; //年龄
    habby: Object; //爱好
}

//一般命名方式  use+文件名+Store 
export const useCounterStore = defineStore('counter',{
    //counter一般为文件名，在这开始写三大逻辑
    //CounterState 一般命名规则 文件名+State
    state: (): CounterState => ({   //这里实现了接口，不实现则去掉:CounterState
    	name:'',      //初始化数据
    	age: 0,
    	habby: null
	}),
    getters:{   
        //用来更新state里面的数据，实现共享更新
        isAdult: (state) => state.age >= 18, //判断是否是成年人
    },
    actions:{
        //不能使用箭头函数
       setName(name:string) {
           this.name = name;
       },
       //与methods一样封装异步方法
       async getList(){
           try{
               //发送请求
           }catch {
               //请求失败处理
           }
       }
    }
})
```

在组件中调用

```js
//xxx.vue文件中
//引入pinia模块
import { useCounterStore } from '@/store'

//实现里面的方法，后面直接使用counterStore调用。
const counterStore = useCounterStore()
counterStore.age++;    //调用state中数据

//批量更新数据
counterStore.$patch({ 
    age: counter.count + 1,
    name: '庞思思'
})
//第二种方式，用于比较复杂的数据更新，例如数组追加等
counterStore.$patch( state => {
    //这个state就是counter,js中的state数据
    state.age++;
    state.name = '庞思思';
    state.arr.push(4)
})
//第三种方式就是封装到actions中，用于更加复杂的数据处理
counterStore.setName('杨思远');   //调用actions中的方法
counterStore.getList();

//在DOM中使用
{{counterStore.age}}
//可以使用解构之后的
import { storeToRefs } from 'pinia'
const { age } = storeToRefs(counterStore)
{{age}}  //在DOM中就可以直接使用
```



### 数据持久化

Pinia 默认情况下并不提供自动的持久化功能，因此在刷新页面后，store 中的数据会重置为初始值。要实现数据在页面刷新后的持久化，你可以使用浏览器的本地存储机制（如 localStorage 或 sessionStorage）手动保存和加载数据。

- **使用插件**piniaPluginPersistedstate

  ```ts
  //1、下载插件
  cnpm install pinia-plugin-persistedstate
  
  //2、在创建pinia实例时使用该插件
  import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
  const pinia = createPinia();   
  pinia.use(piniaPluginPersistedstate);
  
  //3、在store中使用插件
  export const useEntryStore = defineStore('entryRect', {
      state: {
          history:[]
      }，
      getters: {},
      actions: {}, 
      persist: [   //数组对象
          {
              key: 'AI-history',  //存储的键名
              paths: ['history',...],   //存储的数据变量,成为存储的value
              storage: sessionStorage   //本地存储位置 localStorage、sessionStorage
          }
      ]  
  }) 
  ```

  