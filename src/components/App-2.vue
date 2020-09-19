<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1> {{title}}: {{count}} </h1>
  <button @click="addCount">点击计数</button>
</div>

</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import {  ref } from "vue";
export default {
  name: "App", 
  setup() {
    let count = ref(1)

    function addCount() {
      count.value++
    }
    return {
      count,
      addCount
    }
  },
  data() {
    return {
      title: "计数器",
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
