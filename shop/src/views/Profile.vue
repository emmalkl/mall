<template>
   <div>
     <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" require clearable placeholder="请输入用户名" v-model="loginUsername"></van-field>
          <van-field label="密码" require clearable placeholder="请输入密码" v-model="loginPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="loginHandle" type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" require clearable placeholder="请输入用户名" v-model="registUsername"></van-field>
          <van-field label="密码" type="password" require clearable placeholder="请输入密码" v-model="registPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="registHandle" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
     </van-tabs>

   </div>
</template>

<script>
import axios from 'axios'
import url from '@/service.config.js'
 export default{
     data(){
       return{
         loginUsername:'',
         loginPassword:'',
         registUsername:'',
         registPassword:''
       }
     },
     methods:{
       //注册的处理方法
       registHandle(){
         axios({
           url:url.registUser,
           method:'post',
           data:{
             username:this.registUsername,
             password:this.registPassword
           }
         }).then(res=>{
          console.log(res);//  ???res.data.code
            if(res.data.code==200){
              this.$toast.success('注册成功');
              //注册完清空自己输入的
              this.registUsername=this.registPassword='';
            }else{
              this.$toast.fail('注册失败')
            }
         }).catch(err=>{
             console.log(err);
             this.$toast.fail('注册失败')
         })
       },
       //登录的处理方法     
       loginHandle(){
          axios({
            url:url.loginUser,
            method:'post',
            username:this.loginUsername,
            password:this.loginPassword
          }).then(res=>{
              console.log(res);
          }).catch(err=>{
              console.log(err)
          })
       }
     }
  }
</script>

<style lang="scss">

</style>