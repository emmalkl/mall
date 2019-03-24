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
import {SubmitBar,Card,GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,PullRefresh,List,Row, Col ,Toast,Field, CellGroup,Tab, Tabs ,Button,Icon,NavBar,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload} from 'vant'
Vue.use(SubmitBar).use(Card).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(PullRefresh).use(List).use(Row).use(Col).use(Toast).use(Field).use(CellGroup).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs)
 
import '@/mock/mock.js'
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
