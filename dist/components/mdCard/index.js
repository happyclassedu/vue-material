!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()}(this,function(){return function(t){function e(d){if(n[d])return n[d].exports;var o=n[d]={exports:{},id:d,loaded:!1};return t[d].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}({0:function(t,e,n){t.exports=n(6)},6:function(t,e,n){"use strict";function d(t){return t&&t.__esModule?t:{"default":t}}function o(t){t.component("md-card",t.extend(i["default"])),t.component("md-card-media",t.extend(s["default"])),t.component("md-card-media-cover",t.extend(u["default"])),t.component("md-card-media-actions",t.extend(l["default"])),t.component("md-card-header",t.extend(p["default"])),t.component("md-card-header-text",t.extend(x["default"])),t.component("md-card-content",t.extend(y["default"])),t.component("md-card-actions",t.extend(g["default"])),t.component("md-card-area",t.extend(b["default"])),t.component("md-card-expand",t.extend(E["default"])),t.material.styles.push(F["default"])}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o;var r=n(99),i=d(r),a=n(106),s=d(a),c=n(108),u=d(c),f=n(107),l=d(f),m=n(104),p=d(m),h=n(105),x=d(h),v=n(102),y=d(v),R=n(100),g=d(R),_=n(101),b=d(_),M=n(103),E=d(M),C=n(80),F=d(C)},30:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{mdWithHover:Boolean},computed:{classes:function(){return{"md-with-hover":this.mdWithHover}}}}},31:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{mdInset:Boolean},computed:{classes:function(){return{"md-inset":this.mdInset}}}}},32:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={methods:{setContentMargin:function(){this.content.style.marginTop=-this.content.offsetHeight+"px"},toggle:function(){this.$refs.expand.classList.toggle("md-active")},onWindowResize:function(){window.requestAnimationFrame(this.setContentMargin)}},mounted:function(){this.trigger=this.$el.querySelector("[md-expand-trigger]"),this.content=this.$el.querySelector(".md-card-content"),this.content&&(this.setContentMargin(),this.trigger.addEventListener("click",this.toggle),window.addEventListener("resize",this.onWindowResize))},destroyed:function(){this.content&&(this.trigger.removeEventListener("click",this.toggle),window.removeEventListener("resize",this.onWindowResize))}}},33:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={mounted:function(){this.parentClasses=this.$parent.$el.classList,this.parentClasses.contains("md-card-header")&&(this.insideParent=!0,this.parentClasses.add("md-card-header-flex"))},destroyed:function(){this.parentClasses.remove("md-card-header-flex")}}},34:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{mdRatio:String,mdMedium:Boolean,mdBig:Boolean},computed:{classes:function n(){var n={"md-16-9":"16:9"===this.mdRatio||"16/9"===this.mdRatio,"md-4-3":"4:3"===this.mdRatio||"4/3"===this.mdRatio,"md-1-1":"1:1"===this.mdRatio||"1/1"===this.mdRatio};return(this.mdMedium||this.mdBig)&&(n={"md-medium":this.mdMedium,"md-big":this.mdBig}),n}}}},35:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n=document.createElement("canvas");t.onload=function(){var t=0,d=void 0,o=void 0,r=void 0,i=void 0,a=void 0,s=void 0,c=void 0;n.width=this.width,n.height=this.height,d=n.getContext("2d"),d.drawImage(this,0,0),o=d.getImageData(0,0,n.width,n.height),r=o.data;for(var u=0,f=r.length;u<f;u+=4)i=r[u],a=r[u+1],s=r[u+2],c=Math.floor((i+a+s)/3),t+=c;e(Math.floor(t/(this.width*this.height)))}};e["default"]={props:{mdTextScrim:Boolean,mdSolid:Boolean},data:function(){return{backdropBg:{}}},computed:{classes:function(){return{"md-text-scrim":this.mdTextScrim,"md-solid":this.mdSolid}},styles:function(){return{background:this.backdropBg}}},methods:{applyScrimColor:function(t){this.$refs.backdrop&&(this.backdropBg="linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, "+t/2+") 66%, rgba(0, 0, 0, "+t+") 100%)")},applySolidColor:function(t){var e=this.$el.querySelector(".md-card-area");e&&(e.style.background="rgba(0, 0, 0, "+t+")")}},mounted:function(){var t=this,e=this.$el.querySelector("img");e&&(this.mdTextScrim||this.mdSolid)&&n(e,function(e){var n=256,d=(100*Math.abs(n-e)/n+15)/100;d>=.7&&(d=.7),t.mdTextScrim?t.applyScrimColor(d):t.mdSolid&&t.applySolidColor(d)})}}},67:function(t,e){},80:function(t,e){t.exports=".THEME_NAME .md-card,.THEME_NAME.md-card{background-color:BACKGROUND-COLOR-A100}.THEME_NAME .md-card .md-icon-button .md-icon,.THEME_NAME.md-card .md-icon-button .md-icon{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME .md-card>.md-card-area:after,.THEME_NAME.md-card>.md-card-area:after{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME .md-card .md-card-media-cover.md-text-scrim .md-backdrop,.THEME_NAME.md-card .md-card-media-cover.md-text-scrim .md-backdrop{background:linear-gradient(to bottom, BACKGROUND-CONTRAST-0.0 20%, BACKGROUND-CONTRAST-0.275 66%, BACKGROUND-CONTRAST-0.55 100%)}.THEME_NAME .md-card .md-card-media-cover.md-solid .md-card-area,.THEME_NAME.md-card .md-card-media-cover.md-solid .md-card-area{background-color:BACKGROUND-CONTRAST-0.4}.THEME_NAME .md-card .md-card-expand .md-card-actions,.THEME_NAME.md-card .md-card-expand .md-card-actions{background-color:BACKGROUND-COLOR-A100}\n"},99:function(t,e,n){var d,o;n(67),d=n(30);var r=n(148);o=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(o=d=d["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=d},100:function(t,e,n){var d,o,r=n(154);o=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(o=d=d["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=d},101:function(t,e,n){var d,o;d=n(31);var r=n(143);o=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(o=d=d["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=d},102:function(t,e,n){var d,o,r=n(131);o=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(o=d=d["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=d},103:function(t,e,n){var d,o;d=n(32);var r=n(161);o=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(o=d=d["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=d},104:function(t,e,n){var d,o,r=n(140);o=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(o=d=d["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=d},105:function(t,e,n){var d,o;d=n(33);var r=n(144);o=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(o=d=d["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=d},106:function(t,e,n){var d,o;d=n(34);var r=n(150);o=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(o=d=d["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=d},107:function(t,e,n){var d,o,r=n(157);o=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(o=d=d["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=d},108:function(t,e,n){var d,o;d=n(35);var r=n(136);o=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(o=d=d["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=d},131:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"md-card-content"},[_t("default")])},staticRenderFns:[]}},136:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"md-card-media-cover","class":classes},[_t("default")," ",mdTextScrim?_h("div",{ref:"backdrop",staticClass:"md-backdrop",style:styles}):_e()])},staticRenderFns:[]}},140:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"md-card-header"},[_t("default")])},staticRenderFns:[]}},143:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"md-card-area","class":classes},[_t("default")])},staticRenderFns:[]}},144:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"md-card-header-text"},[_t("default")])},staticRenderFns:[]}},148:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"md-card","class":classes},[_t("default")])},staticRenderFns:[]}},150:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"md-card-media","class":classes},[_t("default")])},staticRenderFns:[]}},154:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"md-card-actions"},[_t("default")])},staticRenderFns:[]}},157:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"md-card-media-actions"},[_t("default")])},staticRenderFns:[]}},161:function(module,exports){module.exports={render:function(){with(this)return _h("div",{ref:"expand",staticClass:"md-card-expand"},[_t("default")])},staticRenderFns:[]}}})});