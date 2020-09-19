// 采用 vue3.0 做一个鼠标移动显示鼠标位置的js

// vue3.0可以将功能拆分

import { ref, onMounted, onUnmounted } from "vue";

export default function userMounse(){
  const x = ref(0);
  const y = ref(0);
  function update(e){
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(()=>{
    window.addEventListener('mousemove',update)
  })
  onUnmounted(()=>{
    window.removeEventListener("mousemove",update)
  })

  return { x, y}
}