## Vue3

 ### 项目结构区别

#### 创建新项目

```js
//使用vite构建工具
npm init vite@latest
//接下来按照提示输入项目名，选择vue、ts语言

//创建完成后进入项目目录
cd ./项目名
//安装依赖
cnpm i
//启动项目
npm run dev
```





#### main.js文件---入口文件

1、引入的不再是VUe构造函数，而是一个工厂函数（不需要new，可以直接调用）

```js
import { createApp } from 'vue';
const app = createApp(App);  //创建实例对象app，类似于vm，但app比vm更轻，没有那么多的属性和方法
app.mount('#app');           //挂载
//简写方式：createApp(App).mount('#app');

//vue2的写法
import Vue from 'vue';
const vm = new Vue({
    render:h => h(App)
})     //.$mount('#app')   简写
vm.$mount('#app')

```

#### vue组件

1、可以不需要根标签<div><div/>包裹，可以直接写组件

2、vue3是向下兼容的，所以可以在里面写vue2，但是不建议混用，冲突时以vue3的为准；vue2中的配置项可以访问到vue3中的数据方法，但是相反vue3访问不到vue2的



#### 常用的Composition API

##### 1、setup

理解：是vue3的一个新的配置项，值为一个函数，是所有Composition API的基础，组件中所用到的数据、方法等，均要配置在setup中。不再需要data、methods

```js
import {h} from 'vue'   //如果返回渲染函数，需要引入
export default {
    name:'App',
    setup(){
        let name = "张三"   //这种数据是写死的，非响应式
        let age = 18
        function sayHello(){xxxxxx}
        return {   //返回一个对象，对象中的属性在模板中可以直接使用
            name,
            age,
            sayHello
        }
        return ()=>  h('h1','ysy')
    }
}

//setup的语法糖
<script setup lang="ts">
 //在里面可以直接定义变量和方法，不再需要return
```

注意：

- 不能是个asyn函数

- setup执行时机：在beforeCreate之前执行一次，this是underfined，所以在setup中是没有办法使用this的

- setup的参数：setup(props,context){}

  - props：

    注意点：使用这个参数时，必须先声明    props:[’msg‘，’name‘],

    ​				如果有组件传了数据过来，但是没有使用props接收，vue2中不会报错，vue3中会警告

    ​				如果这个组件还暴露了其他方法给传递数据的组件的话，也要声明    emits:['sayHello']

  - context：上下文对象

  attrs：值为对象，包含：本组件外部传递过来，但是没有在props配置中声明的属性，相当于this.$attrs

  slots：收到插槽的内容，相当于this.$slots

  emit：分发自定义事件的函数，相当于this.$emit



##### 2、ref函数---响应式数据

理解：ref在vue2中考研用来给标签打标识，在js中就可以轻易的获取到该标签；在vue3找那个也有这个标签标识ref，但是多了一个ref函数

```js
this.$refs.xxx    //获取

import {ref} from 'vue' //使用ref需要引入
const name = ref('张三')   
const obj = ref({
    job:'前端工程师',
    salary:'30k'
})
//响应式语法：只使用ref包，使用ref包裹之后，就变成了一个响应式对象，是RefIml的对象-----引用对象
//RefImpl对象中只关注对象中的value
//基本数据类型：响应式依靠Object.defineProperty()中的getter和setter完成响应式，放在原型对象上，当实例中没有的时候，就会去原型对象上找，所以能找到
//引用数据类型：内部求助了vue3中的一个新的函数----reactive函数

name.value    //js中获取到ref中的数据
name          //模板中获取数据，与vue2一样
obj.value.job  //对于对象来说，obj.value是proxy的实例对象,obj是RefImpl的，对于对象类型，底层用的都是proxy
```



##### 3、reactive函数---对象类型的响应式数据

理解：定义一个**对象类型**的响应式数据（基本类型不能用，要用ref）

```js
import {reactive } from 'vues'

const obj = reactive({
    job:'前端工程师',
    salary:'30k'
})
obj.salary  //可以直接使用，响应式原理为ES6的Proxy
```

注意：数组同样适用，能通过下标更改数据

​			是深层次的响应式，多层嵌套也是直接.





##### 4、响应式原理

vue2的响应式：

- 实现原理：

  - 对象类型：通过**Object.defineProperty()**对属性的读取、修改进拦截（数据劫持）

  - 数组类型：通过重写更新数组的一系列方法来实现拦截（对数组的变更方法进行了包裹）

    ```js
    Object.defineProperty(data,'count',{
        get(){},
        set(){}
    })
    ```

- 存在的问题

  - 直接新增属性、删除属性，界面不会更新

    ```js
    this.person.sex = '女'  //数据更新了，但是页面不更新
    delete this.person.sex
    this.$set(this.person,'sex','女')   //解决方法，调用特殊的API
    Vue.set(this.person,'sex','女')
    this.$delete(this.person,'sex','女') 
    Vue.delete(this.person,'sex','女')
    ```

  - 直接通过下标修改数组，界面不会自动更新

    ```js
    Vue.set(this.person.hobby,索引值,'女')    //解决方法，调用特殊API
    this.person.hobby.splice(0,1,'逛街')     //借助数组的变更方法
    ```



vue3的响应式原理

- 实现原理：

  ```js
  const p = new Proxy(person,{
      get(target,propName){
          console.log(`有人读取了p身上的${propName}`属性)
          return Reflect.get(target,propName)  //后面有Reflex的介绍
      }
      ....
  })
  ```

  

- Proxy---代理对象

  拦截对象中任意属性的变化，包括：属性值的读写、添加等

  window身上自带的属性 window.Proxy

  语法：**const p = new Proxy(person,{**

  ​				**get(谁的身上，什么属性){}**

  ​				**set(谁的身上，什么属性，什么值){}**

  ​				**deleteProperty(谁的身上，什么属性){}**

   			**})**  

  Proxy中 一定需要两个参数以上：代理的对象，添加的配置

- **Reflect：---反射对象**

  对被代理的对象进行操作

  window身上自带的属性 window.Reflect，也可以获取到对象身上的数据并进行更改

  语法： **Reflect.get(谁的身上，什么属性)**

注意：ECMA（脚本规范的组织），现在正在尝试把Object身上的属性移植到Reflect上，比如已经移植好的ObjectDefineProperty。Reflex会返回一个布尔值，告诉你有没有操作成功，这样不需要try catch，代码报错也能正常运行，对于Reflex来说，用来封装框架要好一点。





##### 5、computed

```js
import { computed } from "vue";  //是个组合式API，需要引入
setup(){
    //简写形式，不考虑计算属性被修改的情况。完整写法：里面是两个方法get()、set()
    person.fullName = computed(() => {
        return xxxxx   //其余与vue2一样
    })
    return {
        person   //同样需要在这交出去，模板中才能使用,交出去person对象就够了，模板中使用对象.fullName
    }
}
```





##### 6、watch

作用：与vue2一样，监视某个属性，监视到它修改了之后进行一些操作。

vue2中写法：

```js
watch:{
    sum(newValue,odlValue){
        console.log('sum的值变化了',newValue,oldValue)
    }
}
```

vue3中变成了组合式API

```js
import {watch} from 'vue'
set(){
    //监视一个响应式基本数据
    watch(sum,(newValue,oldVlaue) => {
         console.log('sum的值变化了',newValue,oldValue)
	},{immediate:true,deep:true}) //监听sum值，后面是回调
    //第三个参数是配置项
    
    //监视多个响应式基本数据
    watch([sum,msg],(newValue,oldVlaue) => {
         console.log('sum的值变化了',newValue,oldValue)
	})//newValue和oldValue是以数组的形式存在的，分别对应前面监听啥的属性
    
    //监试一个响应式对象数据的“全部属性"
    //注意：此处无法正确获取oldVlaue，强制开了深度监视（deep配置失效）
     watch(person,(newValue,oldVlaue) => {    //直接对象名
         console.log('person的某个属性变化了',newValue,oldValue)
	})
    
    //监视对象数据的某些属性
     watch([()=>person.age,()=>person.name],(newValue,oldVlaue) => {
         console.log('person的值变化了',newValue,oldValue)
	})
    
    //特殊情况  person{name，jib{}}
     watch(()=>person.job,(newValue,oldVlaue) => {
         console.log('sum的值变化了',newValue,oldValue)
	},{deep:true})   //监视对象里面的对象，deep配置有效
}
```





##### 7、watchEffect函数

作用：watch：既要指明监视的属性，也要指明监视的回调

​	        watchEffect：监视的回调中用到了哪个属性，就监视哪个属性

```js
import { watchEffect } from 'vue'   //组合式API，需要引入，是个函数
set(){
    watchEffect(() => {    //直接调用回调，不需要指明属性
        const x1 = sum.value   //ref定义的sum
        const x2 = person.name  //reactive定义的person对象
        console.log('watchEffect配置的回调执行了')   
    })//immediate配置项默认为ture
}
```







##### 8、生命周期

1. 与vue2不同点：beforeDestroy ---->    beforeUnmount

   ​							destroy -------->  unmounted
   
   注意点：上面这些名字只适用于在setup()函数外直接写： mounted(){}



2、第二种写法：通过组合式API的形式写生命钩子（往setup中写）

​	与vue3中的生命钩子对应关系：

​	beforeCreate====setup()    create这两个在vue3中不提供，vue3中的setup就相当于这两个

​	created ========setup()

​	beforeMount === onBeforeMount

​	mounted =======onMounted

​	beforeUpdate ===onBeforeUpdat

​	updated ========onUpdated

​	beforeUnmount ==onBeforeUnmount

​	unmounted ======onUnmounted

```js
import {mounte } from 'vue'  //所有组合式API都要引入，都在setup中写
setup(){
    mounte(( )=> {
        回调函数
    })
}
```





##### 9、自定义hooks

写法：新建文件夹hooks，里面的文件命名规则“useXXXX”

作用：体现了组合式API，本质是一个函数，把setup函数中使用的组合式API进行了封装，复用了代码，让setup里面的逻辑更加清楚易懂

```js
//../hooks/usePoint文件：
import {ref} from 'vue'     //同样写了什么就引入什么
export default function(){  //向外面暴露这个里面
    const name = "pss"
    return name    //需要向外界暴露出去某个被需要的值
}

//外部文件引入时
import usePoint from '../hooks/usePoint'
setup(){
    //就可以在这里直接使用usePoint，因为上面定义的是一个函数，且暴露一个变量
    let point = userPoint（）
    return {point}
        
    }
}
```



​	

##### 10、toRef

作用：创建一个ref对象，其value值指向另一个对象中的某个属性

语法 :

```js
import {tpRef} from 'vue'    //也是个组合式API
const name = toRef(person,'name')   
return {
    ...torefs(person)  //在模板中就可以直接使用person中的属性name，不再需要person.name
}
```

应用：要将响应式对象中的某个属性单独提供给外部使用时

扩展：toRefs 和toRef功能一致，toRefs可以批量创建多个ref对象，语法：toRefs（person)



#### 其他组合式API

##### 1、shallowReactive、shallowRef

- shallowReactive：只处理对象中最外层的响应式（浅响应式）
- shallowRef：处理基本类型数据的响应式时与ref一模一样，但是它不处理对象的响应式
- 什么时候用？
  - 如果有一个对象，结构比较深，但变化时只是外层属性变化 ====>shallowReactive
  - 如果有一个对象，后续功能不会修改该对象中的属性，而是新的对象来替换 ====> shallowRef



##### 2、readonly、shallowReadonly

- readonly：让一个响应式数据变为只读的（深只读）

- shallowReadonly：让一个响应式数据编程猪肚的（浅只读）

- 应用场景：不希望数据被修改时

  ```js
  import {readonly} from 'vue'
  setup(){
      person = readonly(person)  //person对象就不能被改变
  }
  ```

  

##### 3、toRaw、markRaw

- toRaw

  - 作用：将一个有reactive生成的响应式对象转为普通对象
  - 使用场景：用于读取响应式对象对应的普通对象，对这个对象的所有操作，不会引起页面更新

- markRaw

  - 作用：标记一个对象，使其永远不会成为响应式对象

  - 应用场景：

    1、有些值不应被设置为响应式的，例如复杂的第三类库等

    2、当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能

```js
import {toRaw} from 'vue'
setup(){
    const p = toRaw(person)
}
```





##### 4、customRef

作用：创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显示控制

实现防抖效果



##### 5、provide、inject

作用：实现**祖孙间**通信（爷爷和孙之间）

​			当然祖给父传也会成功，但是一般使用最简单的props

套路：祖组件中有个provide选项来提供数据，孙组件中有一个inject选项来开始使用这些数据

具体写法：

```js
import {provide} from 'vue'
//祖组件中
setup(){
    ....
    let car = reactive({
        name:'奔驰',
        price:'40万'
    })
    provide('car',car)    //第一个参数，新起的名字，第二个参数，传递的数据
    ...
}
    
//孙组件中
setup(props,context){
    ...
    const car = inject('car')   //provide新起的名字
}
```



##### 6、响应式数据的判断

- isRef：检查一个值是否为ref对象
- isReactive：检查一个对象是否是由reactive创建的响应式代理
- isReadonly：检查一个对象是否是由readonly创建的只读代理
- isProxy：检查一个对象是否是由reactive或者readonly方法创建的代理





#### 组合式API的优势

- vue2中是配置API（Options API）

  存在的问题：新增或者修改一个需求，就需要分别在data、methods、computed中修改

- vue3中是组合式API（Composition API）

  优势：我们可以让相关功能的代码更加有序的组织在一起

  要想让组合式API发挥优势，要使用hooks



#### 新的组件

##### 1、Fragment

- 在vue2中：组件必须有一个根标签
- 在vue3中：组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中
- 好处：减少标签层级，减小内存占用



##### 2、Teleport

作用：Teleport是一种能够将组件HTML结构移动到指定位置的技术

只需要把想要移动的东西使用<teleport to="html”></teleport> 标签包裹起来，to里面写的是移动到哪里，例如html就是放到html结构上去，to里面还能写选择器





##### vue3中的其他改变

##### 1、注册全局组件、全局指令

```js
//vue2中：
//注册全局组件
Vue.component('MyButton',{
    data:() => ({
        count:0
    }),
    template:'<button @click="count++">点击 {{count}} </button>'
})
//注册全局指令
Vue.directive('focus',{
    inserted: el => el.focus()
})

//在vue3中，把所有的Vue.变成了app.
const app = createApp(App)
//其中一个特殊的全局指令
Vue.prototype  ===>    app.config.globalProperties
```



##### 2、data函数

vue2：data可以写成一个函数的形式，也可以不写，但是最好写

vue3：只能写成函数的形式



##### 3、过渡类名的更改

```js
//vue2中：
.v-enter,
.v-leave-to {
    opacity:0
}
.v-leave,
.v-enter-to {
    opacity:1
}

//vue3中
.v-enter-from,
.v-leave-to {
    opacity:0
}
.v-leave-from,
.v-enter-to {
    opacity:1
}
```



##### 4、其他

移除了过滤器、不能使用键盘编码获取键盘按键



#### 表格渲染技巧

##### 1、计算某一列数据

使用场景：在使用表格的时候，后端请求回来的数据需要经过某个处理之后，才渲染在表格中。

**formatter** 表格属性

```js
<el-table-column 
	label="点击/曝光次数" 
    :formatter="formatCount" 
	min-width="200" align="center" />
//这一列不再需要绑定prop数据，而是将该行的数据传入formatter所绑定的方法，formatterCount可以是一个函数表达式、函数名、箭头函数等
const formatCount = (row) => {
    return `${row.click_times}/${row.show_times}`; 
};
```



##### 2、表格行/列间隔

使用场景：使用栅格布局组件<el-row><el-col>，实现响应式布局，<el-row>是行组件，包裹一组<el-col>列组件，其中这组列组件的总宽度为24个网格单元

```js
<template>
  <el-row :gutter="20">
    <el-col :span="12">左侧内容</el-col>
    <el-col :span="12">右侧内容</el-col>
  </el-row>
</template>
//列组件上设置span属性，指定该列所占的网格单元数量，从而实现不同屏幕尺寸下的布局效果。
//行组件上设置gutter属性，指定每一列之间的间隔（px），当是一个数值时，表示每列的间隔大小一样；当是一个长度为2数组时，第一个数值表示左侧列与其相邻列之间的间距，第二个数值表示右侧列与其相邻列之间的间距。
```



##### 3、分页请求

使用场景：列表请求的数据是通过分页处理的，一般请求参数中：页面大小（多少行）、页码，为必填，返回数据和所有一共有多少条数据。

```js
<el-pagination
    class="recommend_pagination" 
    :total="total"
    :current-page="pageIndex"
    :page-size="pageSize"
    :page-sizes="[5, 10, 15, 20]"  //可以改变的页面大小,0号即为默认大小
    layout="total, sizes, prev, pager, next"  //页码展示哪些内容
    background
    @size-change="handleSizeChange"  //页面大小改变
    @current-change="handleIndexChange"//页码改变
/>
    
const total = ref(20);  // 数据条数请求返回的数据data中，请求成功后赋值
let pageIndex = ref(1); //页码，一般初值赋1
let pageSize = ref(5); //页面大小，初值赋值

const handleSizeChange = (size: number) => {  //页面大小改变时调用
    if (loading.value) {
        ElMessage.warning('正在加载中，请稍后再试');
        return;
    }
    pageIndex.value = 1;   // 页面改动跳转到第一页
    pageSize.value = size; // 改变的页面大小
    getCommendListQuest(); //重新获取列表数据，请求参数绑定pageIndex.value，pageSize.value
};

const handleIndexChange = (index: number) => { //页码变化时调用
    if (loading.value) {
        ElMessage.warning('正在加载中，请稍后再试');
        return;
    }
    pageIndex.value = index; //改变页码
    getCommendListQuest();  //重新获取数据
};

.recommend_pagination {  //一般页码设置的方式，居中显示
    display: flex;
    justify-content: center;
    margin-top: 16px;
}
```



##### 4、筛选列表数据

使用场景：一般对列表要求有筛选功能，在列表上添加DOM元素及 ”筛选“ ”重置“ 按钮，筛选功能的实现依赖于后端请求列表数据的接口中设置筛选字段的参数，否则前端无法做到分页功能。一般接口中对某些字段具有筛选功能，则设置该字段的请求参数。

```js
<el-input v-model="recommendText" placeholder="请输入推荐内容" clearable />
    
let recommendText = ref('');
let recommendCapacity = ref('');

content: recommendText.value.trim(), //在请求参数中只需要动态绑定input框的响应式数据
content_type: recommendCapacity.value
```



##### 5、表格插槽

使用场景：使用表格时，某列或者某个单元格的内容非直接渲染，而是会有按钮、图标等，即可使用表格插槽`slot` 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据

```js
//某一列数据需要处理后渲染
<el-table-column prop="content_type" label="所属能力" min-width="200" align="center">
     <template #default="{ row }">   结构赋值，原来是#default=“scope”，row为这一行的数据
           <span>{{ abilityLabel(row.content_type) }}</span>
     </template>
</el-table-column>

//某个表头单元格需要处理
<el-table-column :formatter="ctrCount" min-width="200" align="center">
    <template #header={column}>   
         <span style="line-height: 3em">CTR点击曝光率</span>
         <el-icon >
                <ArrowDownBold />
        </el-icon>
    </template>
</el-table-column>
```





#### 其他处理

##### 1、数据：字符串-数字

使用场景：当请求返回数据与渲染显示的数据是数字与字符串一一对应的时候，考虑使用数组对象的形式，采用插槽渲染

```js
<el-table-column prop="content_type" label="所属能力" min-width="200" align="center">
    <template #default="{ row }">
         <span>{{ abilityLabel( row.content_type ) }}</span>
    </template>
 </el-table-column>

const abilities = ref<any>([ //请求返回1,2,3，渲染文本
    {value: 1,label: '文案'},
    {value: 2,label: '咨询'},
    {value: 3,label: '查找'}
]);
const abilityLabel = (v) => {	//根据传入value，寻找对应的label
    return abilities.value.find((item) => item.value === v).label;
};
```



