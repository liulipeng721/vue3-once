
import {  ref, reactive, computed } from "vue";

function userAddLists(){
  let state = reactive({
       val:'',
       lists:[{
         name:'逛街',
         done:false,
       },{
         name:'打游戏',
         done:false,
       },{
         name:'吃烧烤',
         done:false,
       },{
         name:'看电影',
         done:false,
       }]
     }) 
     let total = computed(()=>state.lists.length )
     function addLists(){
       state.lists.push({
         name:state.val,
         done:false,
       })
       state.val = "";
     }
   return { state , total, addLists}
 }

export default userAddLists;