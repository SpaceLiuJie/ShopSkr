import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import persistedState from "vuex-persistedstate"

const context = require.context('./modules', true, /\.js$/); //–require.context( )动态加载modules文件下的所有JS文件
let modules = context.keys().reduce((prev, filename, index) => { 
  //prev 表示上一次调用回调时的返回值，或者初始值 init;
  // filename 表示当前正在处理的数组元素；
  let key = filename.replace(/(\.js|\.\/)/g, ""); //文件名 列app user
  // console.log(key,'1213111',context(filename).default);
  prev[key] = context(filename).default;
  // console.log(prev);
  return prev
}, {})
Vue.use(Vuex)
const store = new Vuex.Store({
  modules,
  getters,
  plugins: [persistedState({
    paths: ['user']
  })]
})

export default store
