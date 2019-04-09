<template>
  <section class="real-app">
    <input type='text' class="add-input" autofocus='autofocus' placeholder="随便输入点什么" @keyup.enter='addTodo'/>
    <Item v-for='it in filtedTodos' :key='it.id' :todo='it' @delTodo1='del'/>
    <Tabs :filter='filter' :todos='todos' @toggle='toggleFilter' @cleadAllComped='clearCompedAllT'/>
  </section>
</template>

<script>
import Item from '../components/item.vue'
import Tabs from '../components/tabs.vue'
let id=0;
export default {
  components:{
    Item,Tabs
  },
  data(){
    return{
      todos:[],
      filter:'all'
    }
  },
  computed:{
     filtedTodos(){
       if(this.filter==='all'){
         return this.todos;
       }
       const complited = this.filter === 'complited';
       return this.todos.filter(todo=>complited===todo.completed)
     }
  },
  methods:{
    addTodo(e){
      this.todos.unshift({
        id:id++,
        content:e.target.value.trim(),
        completed:false,
      });
      e.target.value='';
    },
    del(id){
      this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1) //findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
    },
    toggleFilter(sta){
      this.filter=sta
    },
    clearCompedAllT(){
      this.todos=this.todos.filter(todo=>!todo.completed)
    }
  }
}
</script>

<style>
  .real-app{
    text-align: center;
    background: rgba(255, 250, 250,0.5);
    box-shadow: 4px 4px 10px white;
    margin-top: 10%;
  }
  .add-input{
    height: 40px;
    font-size: 16px;
    background: rgba(255, 250, 250,0);
    border:none;
    border-bottom:1px solid #999999;
    width: 90%;
    color:gray;
  }
  .add-input:focus{outline:none}
</style>