import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//存储数据 将用户登陆信息保存在vuex中
     userInfo:{
       username:'未登录'
     }
  },
  getters:{//数据筛选

  },
  mutations: {//函数，改变state的数据唯一途径，不能异步
     changelogin(state,status){//state见上
        state.userInfo=status;
     }
  },
  actions: {//异步操作
     loginAction({commit},user){
       commit('changelogin',user); //user=status
     }
  }
})
