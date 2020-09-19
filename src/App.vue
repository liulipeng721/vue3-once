<template>
<div> 
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1> reactive </h1>
  <h1> 鼠标当前位置:  X = {{x}}, Y = {{ y }}</h1>
  <input type="text" v-model="state.val" @keyup.enter="addLists" /> ====  {{state.val}}
  <ul>
    <li v-for="(list,index) in state.lists" :key="index">{{ list.name }}</li>
  </ul>

  <div> Total: {{total}} </div>
</div>

</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

import userAddLists from './components/userAddList'
import userMouse from './components/userMouse'
// ref 可以将简单的数据变为响应式
// reactive 可以将复杂的数据变为响应式

// CompositionAPI
export default {
  name: "App",
  setup(){
    let { state , total, addLists} = userAddLists();
    let { x, y} = userMouse();
    return { 
      state , total, addLists, 
      x, y
    }
  },
};

/**
 * 将userAddLists从这里抽离出去  作为单独的js文件
 * 相比于mixin好处是数据来源清晰
 * **/

</script>
