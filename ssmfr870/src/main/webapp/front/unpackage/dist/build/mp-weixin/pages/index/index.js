(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"250b":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=o(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){l=!0,u=n},f:function(){try{a||null==e.return||e.return()}finally{if(l)throw u}}}}function o(n,t){if(n){if("string"===typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(n,t):void 0}}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function l(n,t,e,i,r,u,o){try{var a=n[u](o),l=a.value}catch(c){return void e(c)}a.done?t(l):Promise.resolve(l).then(i,r)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(i,r){var u=n.apply(t,e);function o(n){l(u,i,r,o,a,"next",n)}function a(n){l(u,i,r,o,a,"throw",n)}o(void 0)}))}}e("fe61");var s=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("cc6b"))}.bind(null,e)).catch(e.oe)},f={components:{uniIcons:s},data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],yonghutongzhilist:[],fuwurenyuantongzhilist:[],homehuodonglist:[],news:[]}},onShow:function(){var n=this;return c(i.default.mark((function t(){var e,r,o,a,l;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,n.$api.page("config",{page:1,limit:5});case 3:r=t.sent,o=u(r.data.list);try{for(o.s();!(a=o.n()).done;)l=a.value,l.name.indexOf("picture")>=0&&l.value&&""!=l.value&&null!=l.value&&e.push({img:l.value})}catch(i){o.e(i)}finally{o.f()}return e&&(n.swiperList=e),t.next=9,n.$api.list("news",{page:1,limit:3});case 9:return r=t.sent,n.news=r.data.list,t.next=13,n.$api.recommend("yonghutongzhi",1,4);case 13:return r=t.sent,n.yonghutongzhilist=r.data.list,t.next=17,n.$api.recommend("fuwurenyuantongzhi",1,4);case 17:return r=t.sent,n.fuwurenyuantongzhilist=r.data.list,t.next=21,n.$api.list("huodong",{page:1,limit:6});case 21:r=t.sent,n.homehuodonglist=r.data.list;case 23:case"end":return t.stop()}}),t)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=f}).call(this,e("543d")["default"])},2912:function(n,t,e){},"70d6":function(n,t,e){"use strict";var i=e("2912"),r=e.n(i);r.a},"7e59":function(n,t,e){"use strict";(function(n){e("5149");i(e("66fd"));var t=i(e("d956"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},8053:function(n,t,e){"use strict";e.r(t);var i=e("250b"),r=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=r.a},d956:function(n,t,e){"use strict";e.r(t);var i=e("fe5c"),r=e("8053");for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e("70d6");var o,a=e("f0c5"),l=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=l.exports},fe5c:function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return i}));var r=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.yonghutongzhilist,(function(t,e){var i=n.__get_orig(t),r=t.tupian?t.tupian.split(","):null;return{$orig:i,g0:r}}))),i=null,r=n.__map(n.fuwurenyuantongzhilist,(function(t,e){var i=n.__get_orig(t),r=t.tupian?t.tupian.split(","):null;return{$orig:i,g2:r}})),u=null,o=n.__map(n.homehuodonglist,(function(t,e){var i=n.__get_orig(t),r=t.tupian?t.tupian.split(","):null;return{$orig:i,g4:r}})),a=null;n.$mp.data=Object.assign({},{$root:{l0:e,l1:i,l2:r,l3:u,l4:o,l5:a}})},u=[]}},[["7e59","common/runtime","common/vendor"]]]);