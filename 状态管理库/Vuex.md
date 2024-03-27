## Vuex-----状态管理库

### 简介

#### 1、概念

专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式的管理（读/写），也是 一种组件间通信的方式，且适用于**任意组件间通信**。



#### 2、使用场景-------共享数据

-  多个组件依赖同一个数据渲染
-  多个组件修改同时修改同一个数据



#### 3、原理

vueX组成部分：Actions、Mutations、State

- **Actions**

  里面存的是各种行为函数等，是对象类型的

  通过接口  store.dispatch   调用

  发送请求 也是在 actions中写

- **Mutations**

  里面存行为函数和数据，是对象类型

  通过接口store.commit调用

- **State**

  里面存的是数据，是对象类型

- **gatters**

  里面对state数据进行处理



#### 4、环境搭建

- 在vue2环境中，只能安装VueX3版本；在vue3环境中，安装最新版本vueX4

  ```
  npm i vuex@3
  ```

- Vuex是一个插件，需要在main.js 中引入

  ```
  import Vuex from 'vuex'
  ```

   使用插件时，会有一个问题：VueX还没使用，就不能创建vuex,与代码运行顺序有关，所以使用插件要在下面的第四步的文件中使用插件

  ```
  Vue.use(Vuex)
  ```

  当VueX引入之后，在创建组件实例vc的时候，就可以使用配置项 store

- 创建store，store负责管理VueX三大组成部分，同时提供两个接口  dispatch、commit

   第一种方法：在src中创建文件夹vuex，在vuex文件夹中创建store.js文件

   第二种方法：在src中创建文件夹store，在store文件夹中创建index.js文件（一般用这个）

- 创建好文件之后，就可以在文件夹中写store

  一般开发中分为模块，所以会再新建文件夹 modules

- 创建好store之后，在main.js中引入store，只需要引入store，因为store中引入了vuex

  ```
  import store from './store'
  ```

  

### vuex的使用

- 将环境和VueX文件配置好之后，在组件中使用，实现数据共享

​       共享数据写在state中**，对象**形式

- **在组件中拿到VueX中的数据**，在三个部分中的数据定义方式：

  - **State中**：（组件中拿取方式）

    ```js
    this.$store.dispatch( ' 事件行为，比如jia '   ,  '加的数据是多少，比如this.n')
    //这句代码去调用vuex中的Actions接口 
    ```

  - **Actions中**：（state中的事件行为jia必须在Actions中定义才能使用）（数据定义方式）

       ```js
    // context：是一个对象，包含commit等接口,value：用户需要操作的数值  
    jia(context,value){
        //JIA是mutations中的方法，value是用户传入的参数
    	context.commit('JIA',value)
    }
       ```

     在Actions中可以对数据进行判断，进行业务逻辑，比如说判断state中的sum值是奇数就加一：

    ```js
    if(context.state.sum % 2 ){
    	context.commit('INCREASE', value)   
        //想要在actions中拿到state中的值，需要通过上下文	context拿到state
    }
    ```

  - **mutations中**：  （数据定义方式）

  ​          为了区分actions和mutations中的函数，mutations中的函数需要使用其**大写**

      ```js
  JIA(state,value){
  	state.sum += sum;
  }
      ```

  - **在组件中**

    ```js
    //在html元素中拿到sum   
    $store.state.sum
    //在子组件中拿到sum    
    this.$store.state.sum
    ```

    ```js
    //如果对组件传入的数据不做处理
    //可以直接访问mutations，跳过actions，也就是调用commit接口访问mutations
    this.$store.commit("JIA", this.n);    
    ```

  - **getters**

    ```js
    //当state中的数据需要加工再使用时，可以使用getters进行加工，相当于computed，而state就是data
     const getters = {
    	bigSum(state){
    		return state.sum * 10
    	}
    }
    //不要忘了暴露getters
    //在组件获取getters中的数据： 
     $store.getters.bigSum
    ```

  - **mapState、mapGetters**

     ```js
    //如果在模板中获取数据的时候不想通过$store.state.sum或者$store.getters.bigSum，而是想直接使用sum时，需要用到mapState。
    
    //在组件中引入
    import { mapState,mapGetters } from 'vuex'
    //直接使用计算属性computed
    computed:{
    	sum(){
    		return this.$store.state.sum  
            //这样就可以直接在模板中使用  {{sum}} ,而不是 {{$store.state.sum}}
    	},
    	school(){
    		return this.$store.state.school
    	}
    }
    
    //computed中的代码相当于使用mapState的这段代码：
    computed:{
        ...mapState ({sum:'sum',school:'school'})  （对象写法）
     	...mapState(['sum','school'])  （数组写法：要求名字要和state中定义的一样才可以这么写）
        mapGetter同理
    }
    // ()sum、school数据是存在state中的
    // ()在对象中写对象形式的数据，需要在对象数据前面添加"..."，后面添加逗号
    // ()在vue开发者工具中，mapState中的键值对也是属于计算属性，但是会单独拎出来形成 vuex bindings
     ```

  -   **mapActions、mapMutations**

            ```js
  //在组件中引入：
  import {mapActions,mapMutations} from 'vuex'
  
  //优化
  methods: {
     crease(){
        this.$store.commit("CREASE", this.n);       
     },
     increment() {
        this.$store.dispatch("increase", this.n);
     }
     // 上面四行代码等价于下面两行
     ...mapMutations({crease:'CREASE'}) （对象方法，也存在另外一种数组方法）
     ...mapActions({increase:'INCREASE'})
  }
  //在模板中调用的时候不是写 "crease" 而是要写 "crease(n)" ，来传入参数n，否则mapMutations在创建crease方法的时候，默认传入的参数是value，而在模板中不写(n)的时候，系统默认传入的参数是event，是一个鼠标事件，这样就无法生成结果          
            ```

  ​                     

### vuex开发工具

​	VueX开发者工具与Vue是同一个，那个逆时针的工具可以切换到VueX视图



### vuex模块化开发

在开发过程中，多个模块一起放在同一个actions中的时候，会造成混乱，所以有一种vuex的模块化开发

- 将同一类的actions、state、mutations、getters写在一个模块里

  ```js
  const countOptions = {          const personOptions = {
      actions:{...}                    actions:{...}
      mutations:{...}                  mutations:{...}
      state:{...}                      state:{...}
   	getters:{...}                    getters:{...}
  }                                 }    
  ```

  ```js
  //模块化开发的例子
  //可以在里面进行请求，共享请求数据
  import { getBusinessList } from '@/api/bussiness'
  
  export const useBusinessStore = {
    state() {   //state中定义数据
      return {
          businessList: [],
      };
    },
    getters: {   //只用于对state中的数据进行单独处理
      //例如这里的，接收请求回来的数据，赋值给state中的名称
      getBusinessScopeList(state: any): any {
        return state.businessList;
      },
    },
    mutations: {   //这里是封装的方法 ，在state中使用commit调用，在组件中使用store.commit调用
      setBusinessScopeList(state: any, payload: any) {
        state.businessList = payload
      },
    },
    actions: {   //封装的方法、请求等，使用dispatch调用
      async getBusinessScopeList({ commit }: any): Promise<void> {
        const { data: res } = await getBusinessList()
        await commit("setBusinessScopeList", res.data);
      }
    },
  };
  ```

- 在组件中使用模块化数据

  - **第一种情况：**

  ​        在组件中mapState的时候直接引入模块化数据的名字，也就是countOptions,personOptions，再通过模块名字来使用里面的数据；

  - **第二种情况**：

    ​    在store中：暴露时给模块重新命名: countAbout : countOptions

    ​    在定义模块中：namespace：true   要想在组件中使用countAbout这个名字，就需要在模块中写这句代码，使用命名空间。

    ​    在组件中：...mapMutations('countAbout',{increase:'JIA'})  这句话表明使用的是countAbout里面的JIA

    同时也可以获取到state、getters等中的数据方法

  - **第三种情况**：

    ​     不使用mapXXX时：使用this.$store.commit('countAbout/JIA',personList)

    ​     使用斜杠前面写上该mutations属于哪个模块

  - **第四种情况：**

    ​      不使用mapXXX，但是想要拿取getters中的数据时，也要通过斜杠来指定是哪个模块

    ​       			this.$store.getters['countAbout/getSum']   

    ​	   其实中括号里面是通过点出来的，但是js语法中点后面不能跟特殊符号   

- 每个模块都可以单独出去形成一个js文件，记得要分别暴露

  ```js
  // index.js 总文件中引入模块化数据的js文件
  import { useBusinessStore } from './module/business'
  
  // 创建一个新的 store 实例
  const store = createStore({
    modules: {
      useBusinessStore
    }
  })
  //向外界暴露store实例对象
  export default store
  //
  ```

- 在组件中使用模块化vuex

  ```js
  //首先引入userStore，用于创建和管理一个状态存储对象
  import { useStore } from 'vuex'
  
  //调用函数创建store
   const store = useStore()
   //即可通过sotre.state使用模块化中的数据
   store.state.useBusinessStore.businessList
  ```

  