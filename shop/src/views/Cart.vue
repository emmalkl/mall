<template>
   <div>
     <van-nav-bar title="购物车"></van-nav-bar>
      <div class="card">
        <van-card class="card-content"
        v-for="(item,index) in productList" :key="index"
        :price="item.price"
        :desc="item.compony"  
        :title="item.name"
        :thumb="item.img"
      >
        <div slot="footer">
          <van-button size="mini" @click="delCart(item._id,index)">删除</van-button>
        </div>
      </van-card>
      </div>
      <van-submit-bar class="submit-bar"
        :price='totalPrice'
        button-text="提交订单"
        @submit="onSubmit"
      />
   </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import url from '@/service.config.js'
 export default{
   data(){
     return{
       productList:[]
     }
   },
   computed:{
     ...mapState(['userInfo']),
     //属性依赖于很多属性变化时
     totalPrice(){
       //循环遍历list用reduce把价格叠加在一起
       return this.productList.reduce((sum,elem)=>{
         sum+=elem.price;
         return sum;
       },0)*10*10;
     }
   },
    created(){
      //验证用户是否登陆
      if(JSON.stringify(this.userInfo)==='{}'){
                this.$toast.fail('请先登录');
                setTimeout(()=>{
                    this.$router.push('/profile')
                },1000)
      }else{
        axios({
          url:url.getCart,
          method:'get',
          params:{
            userId:this.userInfo._id
          }
        }).then(res=>{
          console.log(res);
          for(let item of res.data){
            this.productList.push(item.productId);
            // console.log(item) 
          }
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    methods:{
      onSubmit(){
        this.$toast.success('支付');
      },
      delCart(id,index){
        //删除数据库中的数据，如果删除成功进入回调函数，在回调函数中如下代码
        // console.log(1);
        axios({
          url:url.delCart,
          method:'get',
          params:{
          productId:id
          }
        }).then(res=>{
          console.log(res);
          this.productList.splice(index,1);
        }).catch(err=>{
          console.log(err);
        });       
      }
      
    }
  }
</script>

<style lang="scss">
.submit-bar{
  margin-bottom: 1rem;
}
.card-content:last-child{
  margin-bottom: 2rem;
}
</style>