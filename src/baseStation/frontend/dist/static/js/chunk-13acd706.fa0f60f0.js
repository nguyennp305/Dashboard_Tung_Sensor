(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13acd706"],{"03cd":function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function i(){var e=document.documentElement;return"requestFullscreen"in e||"mozRequestFullScreen"in e&&document.mozFullScreenEnabled||"msRequestFullscreen"in e&&document.msFullscreenEnabled||"webkitRequestFullScreen"in e}function r(){return!!(document.fullscreen||document.mozFullScreen||document.fullscreenElement||document.msFullscreenElement||document.webkitIsFullScreen)}function s(e){e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():console.log("Fullscreen API is not supported.")}function a(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():console.log("Fullscreen API is not supported.")}function o(e){document.addEventListener("fullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),document.addEventListener("webkitfullscreenchange",e)}function l(e){document.removeEventListener("fullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e),document.removeEventListener("webkitfullscreenchange",e)}function c(){var e={},t=!1,n=0,i=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);n<i;n++){var r=arguments[n];!function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=c(!0,e[i],n[i]):e[i]=n[i])}(r)}return e}t.b=i,t.c=r,t.g=s,t.d=a,t.f=o,t.e=l,t.a=c},function(e,t,n){"use strict";function i(){return n.i(o.c)()}function r(e,t,n){c&&(void 0===n?i()?a():s(e,t):n?s(e,t):a())}function s(){function e(){var t=i();t||(n.i(o.e)(e),s.classList.remove(r.fullscreenClass),r.wrap&&(a.parentNode.insertBefore(s,a),a.parentNode.removeChild(a))),r.callback&&r.callback(t)}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,r=arguments[1];if(c&&!i()){r=n.i(o.a)(!0,{},l,r),t===document.body&&(r.wrap=!1);var s=t,a=void 0;r.wrap&&(a=document.createElement("div"),a.style["overflow-y"]="auto",a.style.background=r.background,a.style.width="100%",a.style.height="100%",s.parentNode.insertBefore(a,s),a.appendChild(s),r.exitOnClickWrapper&&a.addEventListener("click",(function(e){e.target===this&&n.i(o.d)()}))),s.classList.add(r.fullscreenClass),n.i(o.f)(e),n.i(o.g)(r.wrap?a:s)}}function a(){c&&i()&&n.i(o.d)()}var o=n(0),l={wrap:!0,exitOnClickWrapper:!0,background:"#333",callback:function(){},fullscreenClass:"fullscreen"},c=n.i(o.b)();t.a={getState:i,support:c,toggle:r,enter:s,exit:a}},function(e,t,n){var i=n(5)(n(4),n(6),null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=n.n(i),s=n(1),a=n(0);t.default={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.name||"fullscreen";e.component(i,n.i(a.a)(r.a,{name:i})),e.prototype["$"+i]=s.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default={props:{exitOnClickWrapper:{type:Boolean,default:!0},background:{type:String,default:"#333"},fullscreenClass:{type:String,default:"fullscreen"},fullscreen:{type:Boolean,default:!1},pageOnly:{type:Boolean,default:!1}},data:function(){return{support:!1,isFullscreen:!1}},computed:{isPageOnly:function(){return this.pageOnly||!this.support},wrapperClass:function(){var e=[];return this.isFullscreen&&e.push(this.fullscreenClass),e},wrapperStyle:function(){var e={};return this.isFullscreen&&(e={background:this.background,"overflow-y":"auto",width:"100%",height:"100%"},this.isPageOnly&&(e.position="fixed !important",e["z-index"]="100000 !important",e.left="0",e.top="0",e.width="100% !important",e.height="100% !important")),e}},methods:{toggle:function(e){void 0===e?this.getState()?this.exit():this.enter():e?this.enter():this.exit()},enter:function(){this.isPageOnly?(this.isFullscreen=!0,this.onChangeFullScreen()):(n.i(i.f)(this.fullScreenCallback),n.i(i.g)(this.$el))},exit:function(){this.getState()&&(this.isPageOnly?(this.isFullscreen=!1,this.onChangeFullScreen()):n.i(i.d)())},getState:function(){return this.isPageOnly?this.isFullscreen:n.i(i.c)()},shadeClick:function(e){e.target===this.$el&&this.exitOnClickWrapper&&this.exit()},fullScreenCallback:function(){this.isFullscreen=n.i(i.c)(),this.isFullscreen||n.i(i.e)(this.fullScreenCallback),this.onChangeFullScreen()},onChangeFullScreen:function(){this.$emit("change",this.isFullscreen),this.$emit("update:fullscreen",this.isFullscreen)}},watch:{fullscreen:function(e){e!==n.i(i.c)()&&(e?this.enter():this.exit())}},created:function(){this.support=n.i(i.b)()}}},function(e,t){e.exports=function(e,t,n,i){var r,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,s=e.default);var o="function"==typeof s?s.options:s;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),i){var l=Object.create(o.computed||null);Object.keys(i).forEach((function(e){var t=i[e];l[e]=function(){return t}})),o.computed=l}return{esModule:r,exports:s,options:o}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.wrapperClass,style:e.wrapperStyle,on:{click:function(t){return e.shadeClick(t)}}},[e._t("default")],2)},staticRenderFns:[]}}])}))},"0e8f":function(e,t,n){"use strict";n("20f6");var i=n("e8f2");t["a"]=Object(i["a"])("flex")},4348:function(e,t,n){"use strict";n("bcbf")},"615b":function(e,t,n){},7277:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard"},[n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:"","v-if":e.measurements}},e._l(e.measurements,(function(e){return n("v-flex",{key:e,attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[n("location"!==e?"data-card":"data-map",{attrs:{name:e}})],1)})),1)],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:"primary",dark:""}},[n("v-responsive",{attrs:{"aspect-ratio":1}},[n("v-card-title",[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[e.measurement?n("v-icon",{attrs:{large:"",left:"",color:"secondary"}},[e._v("\n          "+e._s(e.measurement.icon)+"\n        ")]):e._e(),n("v-toolbar-title",{staticClass:"white--text"},[e._v(e._s(e._f("capitalise")(e.name)))]),n("v-spacer"),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.visualisation,expression:"visualisation"}],attrs:{icon:"",color:"accent"},on:{click:function(t){return t.stopPropagation(),e.toggle(t)}}},[n("v-icon",[e._v(e._s(e.fullscreenIcon))])],1),n("v-switch",{staticClass:"mt-4",attrs:{color:"accent"},model:{value:e.visualisation,callback:function(t){e.visualisation=t},expression:"visualisation"}})],1)],1),e.visualisation?n("v-card-text",{staticClass:"text-center"},[e.measurements?n("div",[n("fullscreen",{ref:"fullscreen",on:{change:e.fullscreenChange}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.fullscreen,expression:"fullscreen"}],staticClass:"fullGraphButton",attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.toggle(t)}}},[n("v-icon",{attrs:{large:""}},[e._v(e._s(e.fullscreenIcon))])],1),e.fullscreen?n("GChart",{style:{height:"100vh"},attrs:{type:"LineChart",data:[["Time","Value"]].concat(e.measurements),options:e.chartOptions}}):e._e()],1),e.fullscreen?e._e():n("GChart",{style:{height:"100%"},attrs:{type:"LineChart",data:[["Time","Value"]].concat(e.measurements),options:e.chartOptions}})],1):n("v-progress-circular",{attrs:{indeterminate:"",color:"accent"}})],1):n("v-card-text",{staticClass:"text-center align-center"},[e.measurement?n("div",{staticClass:"display-1 font-weight-black "},[e._v(e._s(e.measurement.value)+" "+e._s(e.measurement.unit))]):n("v-progress-circular",{attrs:{indeterminate:"",color:"accent"}})],1)],1)],1)},a=[],o=(n("28a5"),n("7f7f"),n("cb43")),l=n("03cd"),c=n.n(l),u=n("2b0e");u["a"].use(c.a);var h={components:{GChart:o["GChart"]},props:{name:{type:String,required:!0,default:""}},data:function(){return{icon:null,title:null,value:null,unit:null,visualisation:!1,gChartData:!1,chartOptions:{hAxis:{title:"Time",titleTextStyle:{color:"#333"}},vAxis:{title:this.name},colors:[this.$vuetify.theme.themes.light.primary.base,this.$vuetify.theme.themes.light.secondary],backgroundColor:this.$vuetify.theme.themes.light.accent,legend:"none"},fullscreen:!1,fullscreenIcon:"mdi-fullscreen"}},computed:{measurement:function(){return this.$store.getters.mostRecentMeasurement(this.name)},measurements:function(){return this.$store.getters.gChartForMeasurements(this.name)},chartTitle:function(){return"".concat(this.$options.filters.capitalise(this.name)," (").concat(this.unit,")")}},watch:{chartTitle:function(){this.chartOptions.vAxis.title=this.chartTitle}},methods:{toggle:function(){this.$refs["fullscreen"].toggle()},fullscreenChange:function(e){this.fullscreenIcon=e?"mdi-fullscreen-exit":"mdi-fullscreen",this.fullscreen=e}},filters:{capitalise:function(e){return e?(e=e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "),e):""}}},d=h,p=(n("4348"),n("2877")),f=n("6544"),v=n.n(f),m=n("8336"),g=n("b0af"),b=n("99d9"),y=n("132d"),C=n("490a"),w=n("6b53"),O=n("2fa4"),k=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),x=(n("ec29"),n("9d01"),n("6b54"),n("c37a")),S=n("5607"),_=u["a"].extend({name:"rippleable",directives:{ripple:S["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),j=n("8547"),F=n("58df");function V(e){e.preventDefault()}var E=Object(F["a"])(x["a"],_,j["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return e.valueComparator(n,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=x["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:V},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:V},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!e.valueComparator(n,t)})),n.length===i&&n.push(t)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(n,t)?null:t:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),P=n("c3f0"),$=n("0789"),A=n("80d2");function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(k["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=E.extend({name:"v-switch",directives:{Touch:P["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return B(B({},x["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",B(B({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",B({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",B({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement($["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(C["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===A["r"].left&&this.isActive||e.keyCode===A["r"].right&&!this.isActive)&&this.onChange()}}}),L=n("71d9"),T=Object(A["g"])("v-toolbar__title"),z=Object(A["g"])("v-toolbar__items"),I=(L["a"],Object(p["a"])(d,s,a,!1,null,null,null)),M=I.exports;v()(I,{VBtn:m["a"],VCard:g["a"],VCardText:b["b"],VCardTitle:b["c"],VIcon:y["a"],VProgressCircular:C["a"],VResponsive:w["a"],VSpacer:O["a"],VSwitch:R,VToolbar:L["a"],VToolbarTitle:T});var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{color:"primary",dark:""}},[n("v-responsive",{attrs:{"aspect-ratio":1}},[e.position?n("GmapMap",{staticStyle:{height:"100%"},attrs:{center:e.position,zoom:12,"map-type-id":"terrain"}}):e._e()],1)],1)},N=[],G={props:["name"],computed:{position:function(){var e=this.$store.getters.mostRecentMeasurement(this.name);return console.log("pos",e),!!(e.value&&e.value.length>1)&&{lat:e.value[0],lng:e.value[1]}}}},W=G,K=Object(p["a"])(W,q,N,!1,null,null,null),J=K.exports;v()(K,{VCard:g["a"],VResponsive:w["a"]});var H={name:"dashboard",components:{DataCard:M,DataMap:J},data:function(){return{measurements:this.$store.getters.measurementNames}}},U=H,Q=n("a523"),X=n("0e8f"),Y=n("a722"),Z=Object(p["a"])(U,i,r,!1,null,null,null);t["default"]=Z.exports;v()(Z,{VContainer:Q["a"],VFlex:X["a"],VLayout:Y["a"]})},8547:function(e,t,n){"use strict";var i=n("2b0e"),r=n("80d2");t["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:r["h"]}}})},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var i=n("b0af"),r=n("80d2"),s=Object(r["g"])("v-card__actions"),a=Object(r["g"])("v-card__subtitle"),o=Object(r["g"])("v-card__text"),l=Object(r["g"])("v-card__title");i["a"]},"9d01":function(e,t,n){},a722:function(e,t,n){"use strict";n("20f6");var i=n("e8f2");t["a"]=Object(i["a"])("layout")},b0af:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var i=n("ade3"),r=(n("c5f6"),n("615b"),n("10d2")),s=n("297c"),a=n("1c87"),o=n("58df");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t["a"]=Object(o["a"])(s["a"],a["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return c(c({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var e=c({},r["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=s["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),n=t.tag,i=t.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(n,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},bcbf:function(e,t,n){},ec29:function(e,t,n){}}]);
//# sourceMappingURL=chunk-13acd706.fa0f60f0.js.map