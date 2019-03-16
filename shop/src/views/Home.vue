<template>
   <div>
     <van-nav-bar title="首页">
       <van-icon name="search" slot="left"></van-icon>
       <van-icon name="cart" slot="right"></van-icon>
     </van-nav-bar>
     <!-- 轮播图 -->
     <div class="carousel">
        <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in carouselItem" :key="index">
            <img v-lazy="item.imgsrc" alt="">
        </van-swipe-item>
      </van-swipe>
     </div>
     <!-- 热门商品 -->
     <div class="hot">
       <p>热销产品</p>
       <swiper class="hot-swiper">
       <swiper-slide v-for="(item,index) in hotproducts" :key="index">
         <div class="hot-swiper-content">
           <img :src="item.img" alt="">
           <div>{{item.name}}</div>
           <div>￥{{item.price}}</div>
         </div>
       </swiper-slide>
       </swiper>
     </div>

   </div>
   
</template>

<script>
//来自官网例子复制
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 export default{
    data(){
      return{
        carouselItem:[//轮播图
        {
          name:'img1',
          imgsrc:'http://img0.selfimg.com.cn/Lvogue807/2019/02/20/1550634959_AguPg3.jpg'
        },{
          name:'img2',
          imgsrc:'http://img3.selfimg.com.cn/Lvogue807/2019/03/11/1552292693_hZcrqy.jpg'
        },{
          name:'img3',
          imgsrc:'http://img1.selfimg.com.cn/Lvogue807/2018/10/30/1540885477_aBQOvx.jpg'
        }
        ],
        hotproducts:[//热门商品
          
        ]
          
        
      }
    },
    componets:{
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="scss">
  //  .carousel{
  //    height: 3rem;
  //    &-item{
  //      img{
  //        width: 100rem;
  //        height: 3rem;
  //      }
  //    }
  //  }
</style>
