<template>
   <div>
     <van-nav-bar title="商品分类"></van-nav-bar>
     <div class="category">
          <van-row>
            <van-col span="8" class="nav">
                <ul>
                                          <!-- 绑定一个会变的active=被点击的index -->
                  <li @click="selectcategory(item.typeId,index)" :class="{active:active==index}" v-for="(item,index) in types" :key="index">
                    {{item.typeName}}
                  </li>
                </ul>
            </van-col>
            <van-col span="16" class="container">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
               <van-list class="content" v-model="isLoading" @load="onload" :finished="finished">
                <div class="content-item" v-for="(item,index) in productList" :key="index">
                  <img :src="item.img" alt="">
                  <p class="content-item-name">{{item.name}}</p>
                  <p>{{item.price}}</p>
                </div>
               </van-list>
              </van-pull-refresh>
            </van-col>
          </van-row>

     </div>
   </div>
</template>

<script>
import axios from 'axios'
import url from '@/service.config.js'
 export default{
   data(){
      return{
        types:[],
        active:0,//选中的状态
        productList:[],
        typeId:1,//当前选中类型的id
        start:0,
        limit:10,
        finished:false,//表示当前数据是否取完
        isLoading:false//上拉加载
      }
   },
    created(){
      axios({
        url:url.getTypes
      }).then(res=>{
        // console.log(res);
        this.types=res.data;//把res中data存入数组，然后在li中for
        this.selectcategory(this.typeId,this.active)
      }).catch(err=>{
        console.log(err)
      })
    },
    methods:{
      selectcategory(typeId,index){
        this.active=index;
        this.typeId=typeId;//把点击的id付给自己设的id
        //每次选别的东西的时候要给productList赋[]
        this.productList=[];
        //点其他的选中时finished=flase
        this.finished=false;
        this.getproductList();
      },
      getproductList(){
        this.isLoading=true;
        axios({
          url:url.getProductByType,
          method:'get',
          params:{
             typeId:this.typeId,
             start:this.productList.length,
             limit:this.limit
          }
        }).then(res=>{
          // console.log(res);
          if(res.data.length!=0){
             this.productList=this.productList.concat(res.data);
          }else{
            this.finished=true;
          }
          this.isLoading=false;
        }).catch(err=>{
          console.log(err)
        })
      },
    onload(){
      setTimeout(()=>{
        this.getproductList();
      },2000)
    },
    onRefresh(){
      setTimeout(()=>{
        this.productList=[];
        this.getproductList();
      },2000)
    }
    }
  }
</script>

<style lang="scss">
.nav{
  background-color: pink;
  li{
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #eee;
    padding: 3px;
    text-align: center;
  }
  .active{
    background: #eeeeee;
  }
}
.container{
  position: fixed;
  top:40px;
  right: 0;
  bottom: 1rem;
  overflow-y: scroll;
}
.content{
  display: flex;
  padding-bottom: 1rem;
  flex-wrap: wrap;//根据宽度换行
  &-item{
    width:40%;
    padding: 0 10px;
    text-align: center;
    img{
      width: 2rem;
      height: 2rem;
    }
    &-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>