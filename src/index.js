import Vue from 'vue' //引用类库
import App from './page/app.vue'
import '../style/global.styl'

const root=document.createElement('div');//创建一个节点
document.body.appendChild(root);

new Vue({ //实例化一个vue对象
   render: h=>h(App)
}).$mount(root)//挂载