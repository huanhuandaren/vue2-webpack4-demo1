<template>
  <div class="home">
    <audio loop="loop" id='audio'>
      <source src="../../assets/xin.mp3" type="audio/mpeg" >
      Your browser does not support the audio tag.
    </audio>
    <Header/>
    <Todo/>

    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <img :src='iconSrc' id='anse_img' v-if='iconSrc'/>
      <p style='color:red'>{{ answer }}</p>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.jsx'
import Todo from '../components/todo.vue'
import axios from 'axios';
export default {
  components:{
    Header,Footer,Todo
  },
  data(){
    return {
      iconSrc:'',
      question: '',
      answer: '请输入一个问题！'
    }
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('？') === -1) {
        this.answer = '问题一般以中文问号结尾 ;-)'
        return
      }
      this.answer = '思考中。。。';
      const vm = this;
      axios.get('https://yesno.wtf/api')
      .then(function (response) {
        vm.answer = response.data.answer;
        vm.iconSrc= response.data.image;
      })
      .catch(function (error) {
        vm.answer = '请求错误：' + error
      });
    }
  },
  watch: {
    question: function (newQuestion, oldQuestion) { // // 如果 `question` 发生改变，这个函数就会运行
      console.log('旧问题：'+oldQuestion+'\n'+'新问题：'+newQuestion);
      this.answer = 'Waiting for you to stop typing...';
      this.iconSrc='';
      this.getAnswer();
    }
  },
  mounted(){
   
    document.querySelector('body').style.height=window.screen.height+'px';
    // document.addEventListener('DOMContentLoaded', () => { //--创建页面监听，
    //   const audioAutoPlay =() => {
    //     const audio = document.getElementById('audio');
    //     document.addEventListener("WeixinJSBridgeReady", () => { //等待微信端页面加载完毕 触发音频播放
    //       audio.play();
    //     }, false);
    //   }
    //   audioAutoPlay();
    // });
   
    // document.addEventListener('touchstart',  () =>{ //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
    //   const audioAutoPlay = () =>{
    //     const audio = document.getElementById('audio');
    //     audio.play();
    //   }
    //   audioAutoPlay();
    // });
  }
}
</script>

<style>
  #anse_img{
    height:150px;width:100%;
  }
</style>