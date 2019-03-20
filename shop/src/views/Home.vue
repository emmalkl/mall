<template>
   <div class="contain">
     <van-nav-bar title="首页" class="nav-title">
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
       <p class="hot-title">热销产品</p>
       <swiper class="hot-swiper" :options="swiperOption">
       <swiper-slide v-for="(item,index) in hotproducts" :key="index">
         <div class="hot-swiper-content">
           <img :src="item.img" alt="">
           <div>{{item.name}}</div>
           <div>￥{{item.price}}</div>
         </div>
       </swiper-slide>
       </swiper>
     </div>
     <!-- 推荐商品 -->
     <div class="variety">
      <p>推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item,index) in varietyItem" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <p>￥{{item.price}}</p>
        </li>
      </ul>
     </div>
   </div>
   
</template>

<script>
//来自官网例子复制
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import url from '@/service.config.js'

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
        {
          name:"去海边",
          img:"http://img1.selfimg.com.cn/Lvogue903/2018/08/16/1534411812_0W8EXR.jpg",
          price:"120",
          company:"VOGUE杂志",
          city:"USA"
        },{
          name:"粉色火烈鸟",
          img:"http://img3.selfimg.com.cn/Lvogue903/2018/08/03/1533286520_OIWDpJ.jpg",
          price:"150",
          company:"VOGUE杂志",
          city:"England"
        },{
          name:"色彩飘扬",
          img:"http://img2.selfimg.com.cn/Lvogue903/2018/07/31/1533033188_pIJKS5.jpg",
          price:"130",
          company:"VOGUE杂志",
          city:"French"
        },{
          name:"未知之地",
          img:"http://img2.selfimg.com.cn/Lvogue903/2018/06/08/1528444261_9xTvG1.jpg",
          price:"30",
          company:"VOGUE杂志",
          city:"England"
        },{
          name:"绚烂秋意",
          img:"http://img0.selfimg.com.cn/vogue210X210/2019/03/11/1552300610_JsGiXC.jpg",
          price:"50",
          company:"VOGUE杂志",
          city:"us"
        },{
          name:"金风玉露",
          img:"http://img2.selfimg.com.cn/Lvogue912/2018/08/16/1534411903_d8Yf35.jpg",
          price:"60",
          company:"VOGUE杂志",
          city:"Korea"
        },{
          name:"pink",
          img:"http://img2.selfimg.com.cn/Lvogue912/2018/08/03/1533286544_Hswj0O.jpg",
          price:"80",
          company:"VOGUE杂志",
          city:"NY"
        },{
          name:"服饰美容",
          img:"http://img2.selfimg.com.cn/Lvogue912/2018/07/31/1533033288_xdpAui.jpg",
          price:"40",
          company:"VOGUE杂志",
          city:"LA"
        },{
          name:"AW秋冬时尚周",
          img:"http://conde.adsame.com/dolphinfile/vogue/2019/02/0_36.jpg",
          price:"55",
          company:"VOGUE杂志",
          city:"us"
        },{
          name:"刘亦菲美好时光",
          img:"http://img3.selfimg.com.cn/Lvogue914/2016/06/15/1465972831_RbVxfV.jpg",
          price:"90",
          company:"VOGUE杂志",
          city:"shanghai"
        },{
          name:"杨幂摩登力量",
          img:"http://img1.selfimg.com.cn/Lvogue914/2015/11/27/1448612991_E3XHJY.jpg",
          price:"99",
          company:"VOGUE杂志",
          city:"beijing"
        },{
          name:"女神制造",
          img:"http://img0.selfimg.com.cn/Lvogue913/2016/12/08/1481193105_ZpFfW4.jpg",
          price:"40",
          company:"VOGUE杂志",
          city:"french"
        }
        ],
        swiperOption:{
          slidesPerView:3
        },
        // 推荐商品
        varietyItem:[
        // {
        //   name:"去海边",
        //   img:"http://img1.selfimg.com.cn/Lvogue903/2018/08/16/1534411812_0W8EXR.jpg",
        //   price:"120",
        //   company:"VOGUE杂志",
        //   city:"USA"
        // },{
        //   name:"粉色火烈鸟",
        //   img:"http://img3.selfimg.com.cn/Lvogue903/2018/08/03/1533286520_OIWDpJ.jpg",
        //   price:"150",
        //   company:"VOGUE杂志",
        //   city:"England"
        // },{
        //   name:"色彩飘扬",
        //   img:"http://img2.selfimg.com.cn/Lvogue903/2018/07/31/1533033188_pIJKS5.jpg",
        //   price:"130",
        //   company:"VOGUE杂志",
        //   city:"French"
        // },{
        //   name:"未知之地",
        //   img:"http://img2.selfimg.com.cn/Lvogue903/2018/06/08/1528444261_9xTvG1.jpg",
        //   price:"30",
        //   company:"VOGUE杂志",
        //   city:"England"
        // },{
        //   name:"绚烂秋意",
        //   img:"http://img0.selfimg.com.cn/vogue210X210/2019/03/11/1552300610_JsGiXC.jpg",
        //   price:"50",
        //   company:"VOGUE杂志",
        //   city:"us"
        // },{
        //   name:"金风玉露",
        //   img:"http://img2.selfimg.com.cn/Lvogue912/2018/08/16/1534411903_d8Yf35.jpg",
        //   price:"60",
        //   company:"VOGUE杂志",
        //   city:"Korea"
        // },{
        //   name:"pink",
        //   img:"http://img2.selfimg.com.cn/Lvogue912/2018/08/03/1533286544_Hswj0O.jpg",
        //   price:"80",
        //   company:"VOGUE杂志",
        //   city:"NY"
        // },{
        //   name:"服饰美容",
        //   img:"http://img2.selfimg.com.cn/Lvogue912/2018/07/31/1533033288_xdpAui.jpg",
        //   price:"40",
        //   company:"VOGUE杂志",
        //   city:"LA"
        // },{
        //   name:"AW秋冬时尚周",
        //   img:"http://conde.adsame.com/dolphinfile/vogue/2019/02/0_36.jpg",
        //   price:"55",
        //   company:"VOGUE杂志",
        //   city:"us"
        // },{
        //   name:"刘亦菲美好时光",
        //   img:"http://img3.selfimg.com.cn/Lvogue914/2016/06/15/1465972831_RbVxfV.jpg",
        //   price:"90",
        //   company:"VOGUE杂志",
        //   city:"shanghai"
        // },{
        //   name:"杨幂摩登力量",
        //   img:"http://img1.selfimg.com.cn/Lvogue914/2015/11/27/1448612991_E3XHJY.jpg",
        //   price:"99",
        //   company:"VOGUE杂志",
        //   city:"beijing"
        // },{
        //   name:"女神制造",
        //   img:"http://img0.selfimg.com.cn/Lvogue913/2016/12/08/1481193105_ZpFfW4.jpg",
        //   price:"40",
        //   company:"VOGUE杂志",
        //   city:"french"
        // }
        ]
          
        
      }
    },
    components:{
      swiper,
      swiperSlide
    },
    created(){//页面被渲染出来后触发
      // axios.get('https://bird.ioliu.cn/v2?url=http://api.douban.com/v2/movie/top250?start=25&count=25').then(res=>{
      //    console.log(res)
      // })
      // let url1='http://www.alin.com/getlist';
      // let url2='http://www.alin.com/getuser';
      // let url5='http://www.alin.com/getVarietyItem';
      let url6=url.getVarietyItem;
      axios.get(url6).then(res=>{
        console.log(res);
        this.varietyItem=res.data;
      })
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
  .contain{
   width:320px;
  //  height:2000px;
   background:#eee;
  }
  .carousel{
    margin-top: 1rem;
    width: 100%;
  }
  .nav-title{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000!important;
  }
  .hot{
    margin-top: 0.2rem;
    background: #fff;
      &-title{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        padding-left: 0.1rem;
        box-sizing:border-box; 
      }
      &-swiper{
        &-content{
          width: 2rem;
          text-align: center;
          img{
            width: 2rem;
            height: 2rem;
          }
        }
      }
  }
  .variety{
    margin-top: 0.2rem;
    background: #fff;
    text-align: center;
    margin-bottom: 1rem;
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    &-item{
      flex-basis: 45%;
    }
    img{
      width:2rem;
      height: 2rem;
    }
  }
</style>
