(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fuwuchanpin/add-or-update"],{"0bb8":function(e,n,u){},"810f":function(e,n,u){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(u("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,u,t,r,a,i){try{var o=e[a](i),c=o.value}catch(f){return void u(f)}o.done?n(c):Promise.resolve(c).then(t,r)}function i(e){return function(){var n=this,u=arguments;return new Promise((function(t,r){var i=e.apply(n,u);function o(e){a(i,t,r,o,c,"next",e)}function c(e){a(i,t,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([u.e("common/vendor"),u.e("components/w-picker/w-picker")]).then(function(){return resolve(u("4f56"))}.bind(null,u)).catch(u.oe)},c={data:function(){return{ruleForm:{fuwumingcheng:"",fuwuleixing:"",fuwujieshao:"",fuwurenyuan:"",fuwurenyuanjieshao:"",tupian:"",thumbsupnum:"",crazilynum:""},fuwuleixingOptions:[],fuwuleixingIndex:0,user:{},ro:{fuwumingcheng:!1,fuwuleixing:!1,fuwujieshao:!1,fuwurenyuan:!1,fuwurenyuanjieshao:!1,tupian:!1,thumbsupnum:!1,crazilynum:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var u=this;return i(t.default.mark((function r(){var a,i,o,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.getStorageSync("nowTable"),r.next=3,u.$api.session(a);case 3:if(i=r.sent,u.user=i.data,u.fuwuleixingOptions="医疗服务,生活照料类服务".split(","),u.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(u.ruleForm.refid=n.refid,u.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=14;break}return u.ruleForm.id=n.id,r.next=12,u.$api.info("fuwuchanpin",u.ruleForm.id);case 12:i=r.sent,u.ruleForm=i.data;case 14:if(!n.cross){r.next=53;break}o=e.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 17:if((r.t1=r.t0()).done){r.next=53;break}if(c=r.t1.value,"fuwumingcheng"!=c){r.next=23;break}return u.ruleForm.fuwumingcheng=o[c],u.ro.fuwumingcheng=!0,r.abrupt("continue",17);case 23:if("fuwuleixing"!=c){r.next=27;break}return u.ruleForm.fuwuleixing=o[c],u.ro.fuwuleixing=!0,r.abrupt("continue",17);case 27:if("fuwujieshao"!=c){r.next=31;break}return u.ruleForm.fuwujieshao=o[c],u.ro.fuwujieshao=!0,r.abrupt("continue",17);case 31:if("fuwurenyuan"!=c){r.next=35;break}return u.ruleForm.fuwurenyuan=o[c],u.ro.fuwurenyuan=!0,r.abrupt("continue",17);case 35:if("fuwurenyuanjieshao"!=c){r.next=39;break}return u.ruleForm.fuwurenyuanjieshao=o[c],u.ro.fuwurenyuanjieshao=!0,r.abrupt("continue",17);case 39:if("tupian"!=c){r.next=43;break}return u.ruleForm.tupian=o[c],u.ro.tupian=!0,r.abrupt("continue",17);case 43:if("thumbsupnum"!=c){r.next=47;break}return u.ruleForm.thumbsupnum=o[c],u.ro.thumbsupnum=!0,r.abrupt("continue",17);case 47:if("crazilynum"!=c){r.next=51;break}return u.ruleForm.crazilynum=o[c],u.ro.crazilynum=!0,r.abrupt("continue",17);case 51:r.next=17;break;case 53:u.styleChange();case 54:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fuwuleixingChange:function(e){this.fuwuleixingIndex=e.target.value,this.ruleForm.fuwuleixing=this.fuwuleixingOptions[this.fuwuleixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.thumbsupnum||e.$validate.isIntNumer(e.ruleForm.thumbsupnum)){n.next=3;break}return e.$utils.msg("赞应输入整数"),n.abrupt("return");case 3:if(!e.ruleForm.crazilynum||e.$validate.isIntNumer(e.ruleForm.crazilynum)){n.next=6;break}return e.$utils.msg("踩应输入整数"),n.abrupt("return");case 6:if(!e.ruleForm.id){n.next=11;break}return n.next=9,e.$api.update("fuwuchanpin",e.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,e.$api.add("fuwuchanpin",e.ruleForm);case 13:e.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,u=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?u-=60:"end"===e&&(u+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(u,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,u("543d")["default"])},"944f":function(e,n,u){"use strict";u.r(n);var t=u("810f"),r=u.n(t);for(var a in t)"default"!==a&&function(e){u.d(n,e,(function(){return t[e]}))}(a);n["default"]=r.a},"9f10":function(e,n,u){"use strict";var t=u("0bb8"),r=u.n(t);r.a},c3e1:function(e,n,u){"use strict";u.r(n);var t=u("fea5"),r=u("944f");for(var a in r)"default"!==a&&function(e){u.d(n,e,(function(){return r[e]}))}(a);u("9f10");var i,o=u("f0c5"),c=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"40b2df2c",null,!1,t["a"],i);n["default"]=c.exports},f2f4:function(e,n,u){"use strict";(function(e){u("5149");t(u("66fd"));var n=t(u("c3e1"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,u("543d")["createPage"])},fea5:function(e,n,u){"use strict";var t;u.d(n,"b",(function(){return r})),u.d(n,"c",(function(){return a})),u.d(n,"a",(function(){return t}));var r=function(){var e=this,n=e.$createElement;e._self._c},a=[]}},[["f2f4","common/runtime","common/vendor"]]]);