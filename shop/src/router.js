import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Cart from './views/Cart.vue'
import Profile from './views/Profile.vue'
import Ajax from './views/Ajax.vue'
import Detail from './views/Detail.vue'
import FooterBar from '@/components/FooterBar.vue'
import Error from './views/Error.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      components:{
        default:Home,
        'footer-bar':FooterBar
      },
      meta:{
        KeepAlive:true
      }
    },
    {
      path: '/category',
      name: 'category',
      // component: Category
      components:{
        default:Category,
        'footer-bar':FooterBar
      },
      meta:{
        KeepAlive:true
      }
    },
    {
      path: '/cart',
      name: 'cart',
      // component: Cart
      components:{
        default:Cart,
        'footer-bar':FooterBar
      },
      meta:{
        KeepAlive:true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      // component: Profile
      components:{
        default:Profile,
        'footer-bar':FooterBar
      },
      meta:{
        KeepAlive:false
      }
    },{
      path: '/ajax',
      name: 'ajax',
      component: Ajax
    },{
      path:'/detail/:id',
      name:'detail',
      component:Detail
    },{
      path:'*',
      component:Error
    }
  ]
})
