<template>
  <div :class="['todo-item',todo.completed?'complited':'']" >
    <input type='checkbox' class="toggle" v-model="todo.completed"/>
    <img :src="todo.completed?cheded:ched" class='yuan'/>
    <label @click="todo.completed=!todo.completed">{{todo.content}}</label>
    <img @click="delTodo" class="destry" src='../../assets/del_ic.png'/>
  </div>
</template>

<script>
import ched from '../../assets/check_ic.png'
import cheded from '../../assets/checked_ic.png'
export default {
  props:{
    todo:{ 
      type:Object,
      require:true
    }
  },
  data(){
    return{
       ched:ched,
       cheded:cheded,
    }
  },
  methods:{
    delTodo(){
      this.$emit('delTodo1',this.todo.id)
    }
  }
}
</script>

<style>
.todo-item{
  line-height:50px;
  text-align: left;
  border-bottom: 1px solid #999999;
  font-size: 14px;
  white-space: nowrap;  
  text-overflow:ellipsis; 
  overflow:hidden;
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
}
.toggle{
  position: relative;
  left:15px;top:2px;
  opacity: 0;
}
.yuan{
  position: relative;
  top:5px;right:9px;
  z-index: -1;
  height: 20px;
  width: 20px;
}
.destry{
  float: right;
  margin:12px 12px 0 0;
  width: 20px;height: 20px;
}
.complited label{
  text-decoration:line-through;
}
</style>
