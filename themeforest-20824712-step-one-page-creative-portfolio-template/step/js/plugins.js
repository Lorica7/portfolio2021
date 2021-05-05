/*-----
animatedHeader ----- */

jQuery(document).ready(function(s){function e(){a(s(".cd-headline.letters").find("b")),n(s(".cd-headline"))}function a(e){e.each(function(){var e=s(this),a=e.text().split(""),n=e.hasClass("is-visible");for(i in a)e.parents(".rotate-2").length>0&&(a[i]="<em>"+a[i]+"</em>"),a[i]=n?'<i class="in">'+a[i]+"</i>":"<i>"+a[i]+"</i>";var t=a.join("");e.html(t).css("opacity",1)})}function n(i){var e=h;i.each(function(){var i=s(this);if(i.hasClass("loading-bar"))e=u,setTimeout(function(){i.find(".cd-words-wrapper").addClass("is-loading")},p);else if(i.hasClass("clip")){var a=i.find(".cd-words-wrapper"),n=a.width()+10;a.css("width",n)}else if(!i.hasClass("type")){var d=i.find(".cd-words-wrapper b"),l=0;d.each(function(){var i=s(this).width();i>l&&(l=i)}),i.find(".cd-words-wrapper").css("width",l)}setTimeout(function(){t(i.find(".is-visible").eq(0))},e)})}function t(s){var i=o(s);if(s.parents(".cd-headline").hasClass("type")){var e=s.parent(".cd-words-wrapper");e.addClass("selected").removeClass("waiting"),setTimeout(function(){e.removeClass("selected"),s.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},m),setTimeout(function(){d(i,C)},w)}else if(s.parents(".cd-headline").hasClass("letters")){var a=s.children("i").length>=i.children("i").length?!0:!1;l(s.find("i").eq(0),s,a,f),r(i.find("i").eq(0),i,a,f)}else s.parents(".cd-headline").hasClass("clip")?s.parents(".cd-words-wrapper").animate({width:"2px"},v,function(){c(s,i),d(i)}):s.parents(".cd-headline").hasClass("loading-bar")?(s.parents(".cd-words-wrapper").removeClass("is-loading"),c(s,i),setTimeout(function(){t(i)},u),setTimeout(function(){s.parents(".cd-words-wrapper").addClass("is-loading")},p)):(c(s,i),setTimeout(function(){t(i)},h))}function d(s,i){s.parents(".cd-headline").hasClass("type")?(r(s.find("i").eq(0),s,!1,i),s.addClass("is-visible").removeClass("is-hidden")):s.parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},v,function(){setTimeout(function(){t(s)},T)})}function l(i,e,a,n){if(i.removeClass("in").addClass("out"),i.is(":last-child")?a&&setTimeout(function(){t(o(e))},h):setTimeout(function(){l(i.next(),e,a,n)},n),i.is(":last-child")&&s("html").hasClass("no-csstransitions")){var d=o(e);c(e,d)}}function r(s,i,e,a){s.addClass("in").removeClass("out"),s.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout(function(){i.parents(".cd-words-wrapper").addClass("waiting")},200),e||setTimeout(function(){t(i)},h)):setTimeout(function(){r(s.next(),i,e,a)},a)}function o(s){return s.is(":last-child")?s.parent().children().eq(0):s.next()}function c(s,i){s.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}var h=2500,u=3800,p=u-3e3,f=50,C=150,m=500,w=m+800,v=600,T=1500;e()});




/*-----
jquery.easeScroll ----- */

$.fn.easeScroll=function(e){!function(){function t(){g.keyboardSupport&&!0&&l("keydown",r)}function a(){if(document.body){var e=document.body,a=document.documentElement,o=window.innerHeight,r=e.scrollHeight;if(k=document.compatMode.indexOf("CSS")>=0?a:e,m=e,t(),S=!0,top!=self)b=!0;else if(r>o&&(e.offsetHeight<=o||a.offsetHeight<=o)){var n=!1;if(a.style.height="auto",setTimeout(function(){n||a.scrollHeight==document.height||(n=!0,setTimeout(function(){a.style.height=document.height+"px",n=!1},100))},10),k.offsetHeight<=o){var i=document.createElement("div");i.style.clear="both",e.appendChild(i)}}g.fixedBackground||v||(e.style.backgroundAttachment="scroll",a.style.backgroundAttachment="scroll")}}function o(e,t,a,o){if(o||(o=1e3),u(t,a),1!=g.accelerationMax){var r=+new Date-T;if(r<g.accelerationDelta){var n=(1+30/r)/2;n>1&&(n=Math.min(n,g.accelerationMax),t*=n,a*=n)}T=+new Date}if(H.push({x:t,y:a,lastX:0>t?.99:-.99,lastY:0>a?.99:-.99,start:+new Date}),!M){var i=e===document.body,l=function(){for(var r=+new Date,n=0,c=0,u=0;u<H.length;u++){var s=H[u],d=r-s.start,f=d>=g.animationTime,m=f?1:d/g.animationTime;g.pulseAlgorithm&&(m=p(m));var h=s.x*m-s.lastX>>0,w=s.y*m-s.lastY>>0;n+=h,c+=w,s.lastX+=h,s.lastY+=w,f&&(H.splice(u,1),u--)}i?window.scrollBy(n,c):(n&&(e.scrollLeft+=n),c&&(e.scrollTop+=c)),t||a||(H=[]),H.length?N(l,e,o/g.frameRate+1):M=!1};N(l,e,0),M=!0}}function r(e){var t=e.target,a=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==D.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||a)return!0;if(c(t,"button")&&e.keyCode===D.spacebar)return!0;var r=0,n=0,l=i(m),u=l.clientHeight;switch(l==document.body&&(u=window.innerHeight),e.keyCode){case D.up:n=-g.arrowScroll;break;case D.down:n=g.arrowScroll;break;case D.spacebar:n=-(e.shiftKey?1:-1)*u*.9;break;case D.pageup:n=.9*-u;break;case D.pagedown:n=.9*u;break;case D.home:n=-l.scrollTop;break;case D.end:var s=l.scrollHeight-l.scrollTop-u;n=s>0?s+10:0;break;case D.left:r=-g.arrowScroll;break;case D.right:r=g.arrowScroll;break;default:return!0}o(l,r,n),e.preventDefault()}function n(e,t){for(var a=e.length;a--;)z[C(e[a])]=t;return t}function i(e){var t=[],a=k.scrollHeight;do{var o=z[C(e)];if(o)return n(t,o);if(t.push(e),a===e.scrollHeight){if(!b||k.clientHeight+10<a)return n(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return n(t,e)}while(e=e.parentNode)}function l(e,t,a){window.addEventListener(e,t,a||!1)}function c(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function u(e,t){e=e>0?1:-1,t=t>0?1:-1,(y.x!==e||y.y!==t)&&(y.x=e,y.y=t,H=[],T=0)}function s(e){if(e){e=Math.abs(e),x.push(e),x.shift(),clearTimeout(A);var t=x[0]==x[1]&&x[1]==x[2],a=d(x[0],120)&&d(x[1],120)&&d(x[2],120);return!(t||a)}}function d(e,t){return Math.floor(e/t)==e/t}function f(e){var t,a,o;return e*=g.pulseScale,1>e?t=e-(1-Math.exp(-e)):(a=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=a+o*(1-a)),t*g.pulseNormalize}function p(e){return e>=1?1:0>=e?0:(1==g.pulseNormalize&&(g.pulseNormalize/=f(1)),f(e))}var m,h=$.extend({frameRate:60,animationTime:1e3,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0},e),w={frameRate:h.frameRate,animationTime:h.animationTime,stepSize:h.stepSize,pulseAlgorithm:h.pulseAlgorithm,pulseScale:h.pulseScale,pulseNormalize:h.pulseNormalize,accelerationDelta:h.accelerationDelta,accelerationMax:h.accelerationMax,keyboardSupport:h.keyboardSupport,arrowScroll:h.arrowScroll,touchpadSupport:h.touchpadSupport,fixedBackground:h.fixedBackground,excluded:""},g=w,v=!1,b=!1,y={x:0,y:0},S=!1,k=document.documentElement,x=[120,120,120],D={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},g=w,H=[],M=!1,T=+new Date,z={};setInterval(function(){z={}},1e4);var A,C=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),N=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,a){window.setTimeout(e,a||1e3/60)},B=/chrome|iPad/i.test(window.navigator.userAgent);"onmousewheel"in document&&B&&(l("mousedown",function(e){m=e.target}),l("mousewheel",function(e){S||a();var t=e.target,r=i(t);if(!r||e.defaultPrevented||c(m,"embed")||c(t,"embed")&&/\.pdf/i.test(t.src))return!0;var n=e.wheelDeltaX||0,l=e.wheelDeltaY||0;return n||l||(l=e.wheelDelta||0),!(g.touchpadSupport||!s(l))||(Math.abs(n)>1.2&&(n*=g.stepSize/120),Math.abs(l)>1.2&&(l*=g.stepSize/120),o(r,-n,-l),void e.preventDefault())}),l("load",a))}()};


// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
