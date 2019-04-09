<template>
  <div class="home">
    <audio loop="loop" id='audio'>
      <source src="../../assets/xin.mp3" type="audio/mpeg" >
      Your browser does not support the audio tag.
    </audio>
    <Header/>
    <Todo/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.jsx'
import Todo from '../components/todo.vue'
export default {
  components:{
    Header,Footer,Todo
  },
  data(){
    return {
      
    }
  },
  mounted(){
    document.querySelector('body').style.height=window.screen.height+'px';
     
    document.addEventListener('DOMContentLoaded', () => { //--创建页面监听，
      const audioAutoPlay =() => {
        const audio = document.getElementById('audio');
        document.addEventListener("WeixinJSBridgeReady", () => { //等待微信端页面加载完毕 触发音频播放
          audio.play();
        }, false);
      }
      audioAutoPlay();
    });
   
    document.addEventListener('touchstart',  () =>{ //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
      const audioAutoPlay = () =>{
        const audio = document.getElementById('audio');
        audio.play();
      }
      audioAutoPlay();
    });
  }
}
</script>

<style>
  
</style>