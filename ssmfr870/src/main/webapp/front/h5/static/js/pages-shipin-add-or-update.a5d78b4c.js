(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shipin-add-or-update"],{5425:function(t,e,r){"use strict";r.r(e);var i=r("feb3"),n=r("d257");for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);r("5975");var o,s=r("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"4d37f3e1",null,!1,i["a"],o);e["default"]=u.exports},5975:function(t,e,r){"use strict";var i=r("cd93"),n=r.n(i);n.a},c446:function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("ac6a"),r("28a5"),r("96cf");var n=i(r("3b8d")),a=i(r("e2b1")),o={data:function(){return{ruleForm:{mingcheng:"",leixing:"",neirong:"",tupian:"",shipin:"",thumbsupnum:"",crazilynum:""},leixingOptions:[],leixingIndex:0,user:{},ro:{mingcheng:!1,leixing:!1,neirong:!1,tupian:!1,shipin:!1,thumbsupnum:!1,crazilynum:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var r,i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(i=t.sent,this.user=i.data,this.leixingOptions="养生,养老,法律".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){t.next=14;break}return this.ruleForm.id=e.id,t.next=12,this.$api.info("shipin",this.ruleForm.id);case 12:i=t.sent,this.ruleForm=i.data;case 14:if(!e.cross){t.next=49;break}n=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(n);case 17:if((t.t1=t.t0()).done){t.next=49;break}if(a=t.t1.value,"mingcheng"!=a){t.next=23;break}return this.ruleForm.mingcheng=n[a],this.ro.mingcheng=!0,t.abrupt("continue",17);case 23:if("leixing"!=a){t.next=27;break}return this.ruleForm.leixing=n[a],this.ro.leixing=!0,t.abrupt("continue",17);case 27:if("neirong"!=a){t.next=31;break}return this.ruleForm.neirong=n[a],this.ro.neirong=!0,t.abrupt("continue",17);case 31:if("tupian"!=a){t.next=35;break}return this.ruleForm.tupian=n[a],this.ro.tupian=!0,t.abrupt("continue",17);case 35:if("shipin"!=a){t.next=39;break}return this.ruleForm.shipin=n[a],this.ro.shipin=!0,t.abrupt("continue",17);case 39:if("thumbsupnum"!=a){t.next=43;break}return this.ruleForm.thumbsupnum=n[a],this.ro.thumbsupnum=!0,t.abrupt("continue",17);case 43:if("crazilynum"!=a){t.next=47;break}return this.ruleForm.crazilynum=n[a],this.ro.crazilynum=!0,t.abrupt("continue",17);case 47:t.next=17;break;case 49:this.styleChange();case 50:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},leixingChange:function(t){this.leixingIndex=t.target.value,this.ruleForm.leixing=this.leixingOptions[this.leixingIndex]},tupianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.tupian=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},shipinTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.shipin=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){t.next=3;break}return this.$utils.msg("赞应输入整数"),t.abrupt("return");case 3:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){t.next=6;break}return this.$utils.msg("踩应输入整数"),t.abrupt("return");case 6:if(!this.ruleForm.id){t.next=11;break}return t.next=9,this.$api.update("shipin",this.ruleForm);case 9:t.next=13;break;case 11:return t.next=13,this.$api.add("shipin",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(t){this.$refs[t].show()}}};e.default=o},ca6c:function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-4d37f3e1]{padding:%?20?%}.content[data-v-4d37f3e1]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-4d37f3e1]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-4d37f3e1]{width:%?180?%}.avator[data-v-4d37f3e1]{width:%?150?%;height:%?60?%}.right-input[data-v-4d37f3e1]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-4d37f3e1]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-4d37f3e1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-4d37f3e1]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-4d37f3e1]{border:0}.cu-form-group uni-input[data-v-4d37f3e1]{padding:0 %?30?%}.uni-input[data-v-4d37f3e1]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-4d37f3e1]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-4d37f3e1]::after{line-height:%?88?%}.select .uni-input[data-v-4d37f3e1]{line-height:%?88?%}.input .right-input[data-v-4d37f3e1]{line-height:%?88?%}',""]),t.exports=e},cd93:function(t,e,r){var i=r("ca6c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("15e523e6",i,!0,{sourceMap:!1,shadowMode:!1})},d257:function(t,e,r){"use strict";r.r(e);var i=r("c446"),n=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},feb3:function(t,e,r){"use strict";var i,n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[t._v("名称")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:t.ro.mingcheng,placeholder:"名称"},model:{value:t.ruleForm.mingcheng,callback:function(e){t.$set(t.ruleForm,"mingcheng",e)},expression:"ruleForm.mingcheng"}})],1),r("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[t._v("类型")]),r("v-uni-picker",{attrs:{value:t.leixingIndex,range:t.leixingOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.leixingChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[t._v(t._s(t.ruleForm.leixing?t.ruleForm.leixing:"请选择类型"))])],1)],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==t.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tupianTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[t._v("图片")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[t.ruleForm.tupian?r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:t.ruleForm.tupian,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==t.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shipinTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[t._v("视频")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[t.ruleForm.shipin?r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"视频"},model:{value:t.ruleForm.shipin,callback:function(e){t.$set(t.ruleForm,"shipin",e)},expression:"ruleForm.shipin"}}):r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(204, 204, 204, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"308rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[t._v("内容")]),r("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"内容"},model:{value:t.ruleForm.neirong,callback:function(e){t.$set(t.ruleForm,"neirong",e)},expression:"ruleForm.neirong"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(147, 193, 7, 1)",borderColor:"rgba(147, 193, 7, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmitTap.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},a=[];r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return i}))}}]);