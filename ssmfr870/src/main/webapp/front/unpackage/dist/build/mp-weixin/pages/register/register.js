(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"01fc":function(e,n,r){"use strict";r.r(n);var t=r("7a08"),u=r("148b");for(var a in u)"default"!==a&&function(e){r.d(n,e,(function(){return u[e]}))}(a);r("6b42");var i,o=r("f0c5"),s=Object(o["a"])(u["default"],t["b"],t["c"],!1,null,"3e39588c",null,!1,t["a"],i);n["default"]=s.exports},"148b":function(e,n,r){"use strict";r.r(n);var t=r("6929"),u=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);n["default"]=u.a},6929:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=u(r("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,t,u,a,i){try{var o=e[a](i),s=o.value}catch(l){return void r(l)}o.done?n(s):Promise.resolve(s).then(t,u)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(t,u){var i=e.apply(n,r);function o(e){a(i,t,u,o,s,"next",e)}function s(e){a(i,t,u,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,fuwurenyuanxingbieOptions:[],fuwurenyuanxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var n=this;return i(t.default.mark((function r(){var u;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:[],u=e.getStorageSync("loginTable"),n.tableName=u,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),"fuwurenyuan"==n.tableName&&(n.fuwurenyuanxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.fuwurenyuanxingbieOptions[0]),n.styleChange();case 6:case"end":return r.stop()}}),r)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},fuwurenyuanxingbieChange:function(e){this.fuwurenyuanxingbieIndex=e.target.value,this.ruleForm.xingbie=this.fuwurenyuanxingbieOptions[this.fuwurenyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.zhanghao||"yonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(e.ruleForm.xingming||"yonghu"!=e.tableName){n.next=9;break}return e.$utils.msg("姓名不能为空"),n.abrupt("return");case 9:if("yonghu"!=e.tableName||!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=12;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){n.next=15;break}return e.$utils.msg("身份证应输入身份证格式"),n.abrupt("return");case 15:if("yonghu"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=18;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 18:if("yonghu"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=21;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 21:if(e.ruleForm.zhanghao||"fuwurenyuan"!=e.tableName){n.next=24;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 24:if(e.ruleForm.mima||"fuwurenyuan"!=e.tableName){n.next=27;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 27:if(e.ruleForm.xingming||"fuwurenyuan"!=e.tableName){n.next=30;break}return e.$utils.msg("姓名不能为空"),n.abrupt("return");case 30:if("fuwurenyuan"!=e.tableName||!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){n.next=33;break}return e.$utils.msg("身份证应输入身份证格式"),n.abrupt("return");case 33:if("fuwurenyuan"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=36;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 36:if("fuwurenyuan"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=39;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 39:return n.next=41,e.$api.register("".concat(e.tableName),e.ruleForm);case 41:e.$utils.msgBack("注册成功");case 43:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,r("543d")["default"])},"6b42":function(e,n,r){"use strict";var t=r("b1f9"),u=r.n(t);u.a},7389:function(e,n,r){"use strict";(function(e){r("5149");t(r("66fd"));var n=t(r("01fc"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"7a08":function(e,n,r){"use strict";var t;r.d(n,"b",(function(){return u})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return t}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},b1f9:function(e,n,r){}},[["7389","common/runtime","common/vendor"]]]);