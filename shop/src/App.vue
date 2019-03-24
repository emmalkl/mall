<template>
  <div id="app">
    <keep-alive>
       <router-view v-if="$route.meta.KeepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.KeepAlive"></router-view>
    
    <!-- <ul class="footer-bar">
      <li class="footer-bar-item"><router-link to="/">首页</router-link></li>
      <li class="footer-bar-item"><router-link to="/category">分类</router-link></li>
      <li class="footer-bar-item"><router-link to="/cart">购物车</router-link></li>
      <li class="footer-bar-item"><router-link to="/profile">我的</router-link></li>
    </ul> -->
    <!-- <van-tabbar  v-model="active">
       <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
       <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
       <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
       <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar> -->
    <router-view name="footer-bar"></router-view>
  </div>
</template>

<style lang="scss">

</style>
<script>
import FooterBar from '@/components/FooterBar.vue'
export default {
  //  data() {
  //   return {
  //     active: 0
  //   }
  // }
  // components:{
  //   FooterBar
  // }
}
</script>
