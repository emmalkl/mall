import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

//vant完全引入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
//按需引入vant
import {Button,Icon,NavBar,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload} from 'vant'
Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
