<template>
  <div class="helper">
    <span class="left"><span style="color:red">{{unFineshTodoLength}}</span> item left</span>
    <div class="tabs">
      <span v-for='sta in stas' :key='sta' :class="[filter === sta ?'actived':'']" @click="toggleFilter(sta)">
        {{sta}}
      </span>
    </div>
    <span class="clear" @click="clearAllCompleted">Clear complited</span>
  </div>
</template>

<script>
export default {
  props:{
    filter:{
      type:String,
      required:true
    },
    todos:{
      type:Array,
      required:true,
    }
  },
  computed:{//每次数据跟新自动计算
    unFineshTodoLength(){
      return this.todos.filter(todo=>!todo.completed).length;
    }

  },
  data(){
    return{
      stas:['all','active','complited'],
    }
  },
  methods:{
    toggleFilter(sta){
      this.$emit('toggle',sta)
    },
    clearAllCompleted(){
      this.$emit('cleadAllComped')
    }
  }
}
</script>

<style>
  .helper{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 40px;
    padding: 0 5px;
  }
  .tabs span{
    margin: 0 2px;
  }
  .actived{
    border:1px solid red;
    padding: 2px 1px;
  }
</style>