webpackJsonp([4],{299:function(t,e,s){s(487);var i=s(25)(s(389),s(504),"data-v-5d83ad60",null);t.exports=i.exports},389:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"projectinfo",components:{},mixins:[],data:function(){return{notes:["Axios不支持JSONP，需要另外安装jsonp模块实现","如果需要动态生成路由，可以使用router.addRoutes(routes)","如果要区分新建页和编辑页，可以在路由对象中设置meta属性","在组件中访问路由信息对象：this.$route","在组件中访问路由实例：this.$router","可以在全局拦截路由，也可以在单个组件中拦截路由","如果是中等规模的项目，推荐使用vuex","代码按页面分，每个人负责一个页面，尽量避免公共代码文件","如果想看其它队友的页面效果，可以在本地新建一个分支，然后将自己和对方的分支合并上去","深度监听一个对象非常消耗性能，可以转换成监听一个开关变量，开关一变就运行","渲染图表时，可以在渲染前先 this.myChart.dispose()，销毁上次的图表","vue-particles打包报错：https://github.com/creotip/vue-particles/issues/7","配置favicon：https://segmentfault.com/a/1190000010043013#articleHeader5"]}},methods:{}}},399:function(t,e,s){e=t.exports=s(293)(),e.push([t.i,"li[data-v-5d83ad60]{line-height:30px}",""])},487:function(t,e,s){var i=s(399);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(294)("66940296",i,!0)},504:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"title",rawName:"v-title",value:"项目信息",expression:"'项目信息'"}]},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",slot:"header"},[s("i",{staticClass:"el-icon-edit"}),t._v("  \n            "),s("span",[t._v("Vue开发备忘录")])]),t._v(" "),s("div",{staticClass:"text item"},[s("ol",t._l(t.notes,function(e,i){return s("li",{key:i},[t._v(t._s(e))])}))])])],1)},staticRenderFns:[]}}});