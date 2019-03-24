<template>
    <van-tabbar  v-model="active" @change="change">
       <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
       <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
       <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
       <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
export default {
    data() {
    return {
      active: 0
    }
  },
  created(){
      this.active=parseInt(localStorage.getItem('active'));
  },
  methods:{
    change(active){
      //输出当前选中标签
      console.log(active);
      //使用localStorage存active  存的时候是string型
      localStorage.setItem('active',active);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
