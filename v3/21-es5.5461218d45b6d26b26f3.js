!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,a=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return r(this,n)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"Ck+y":function(t,e,n){var a=n("ProS"),o=n("+TT/");n("Nlvd"),n("wD15");var r=n("eT+N");if(!r.isSupported)throw new Error("Sorry your browser not support wordCloud");a.registerLayout(function(t,e){t.eachSeriesByType("wordCloud",function(n){var i=o.getLayoutRect(n.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),s=n.getData(),c=document.createElement("canvas");c.width=i.width,c.height=i.height;var l=c.getContext("2d"),d=n.get("maskImage");if(d)try{l.drawImage(d,0,0,c.width,c.height),function(t){for(var e=t.getContext("2d"),n=e.getImageData(0,0,t.width,t.height),a=e.createImageData(n),o=0,r=0,i=0;i<n.data.length;i+=4)n.data[i+3]>128&&(o+=c=n.data[i]+n.data[i+1]+n.data[i+2],++r);var s=o/r;for(i=0;i<n.data.length;i+=4){var c=n.data[i]+n.data[i+1]+n.data[i+2];n.data[i+3]<128||c>s?(a.data[i]=0,a.data[i+1]=0,a.data[i+2]=0,a.data[i+3]=0):(a.data[i]=255,a.data[i+1]=255,a.data[i+2]=255,a.data[i+3]=255)}e.putImageData(a,0,0)}(c)}catch(w){console.error("Invalid mask image"),console.error(w.toString())}var u=n.get("sizeRange"),f=n.get("rotationRange"),h=s.getDataExtent("value"),m=Math.PI/180,g=n.get("gridSize");function p(t){var e=t.detail.item;t.detail.drawn&&n.layoutInstance.ondraw&&(t.detail.drawn.gx+=i.x/g,t.detail.drawn.gy+=i.y/g,n.layoutInstance.ondraw(e[0],e[1],e[2],t.detail.drawn))}r(c,{list:s.mapArray("value",function(t,e){var n=s.getItemModel(e);return[s.getName(e),n.get("textStyle.normal.textSize",!0)||a.number.linearMap(t,h,u),e]}).sort(function(t,e){return e[1]-t[1]}),fontFamily:n.get("textStyle.normal.fontFamily")||n.get("textStyle.emphasis.fontFamily")||t.get("textStyle.fontFamily"),fontWeight:n.get("textStyle.normal.fontWeight")||n.get("textStyle.emphasis.fontWeight")||t.get("textStyle.fontWeight"),gridSize:g,ellipticity:i.height/i.width,minRotation:f[0]*m,maxRotation:f[1]*m,clearCanvas:!d,rotateRatio:1,rotationStep:n.get("rotationStep")*m,drawOutOfBound:n.get("drawOutOfBound"),shuffle:!1,shape:n.get("shape")}),c.addEventListener("wordclouddrawn",p),n.layoutInstance&&n.layoutInstance.dispose(),n.layoutInstance={ondraw:null,dispose:function(){c.removeEventListener("wordclouddrawn",p),c.addEventListener("wordclouddrawn",function(t){t.preventDefault()})}}})}),a.registerPreprocessor(function(t){var e=(t||{}).series;!a.util.isArray(e)&&(e=e?[e]:[]);var n=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function o(t){t&&a.util.each(n,function(e){t.hasOwnProperty(e)&&(t["text"+a.format.capitalFirst(e)]=t[e])})}a.util.each(e,function(t){if(t&&"wordCloud"===t.type){var e=t.textStyle||{};o(e.normal),o(e.emphasis)}})})},Nlvd:function(t,e,n){var a=n("hi0g"),o=n("ProS");o.extendSeriesModel({type:"series.wordCloud",visualColorAccessPath:"textStyle.normal.color",optionUpdated:function(){var t=this.option;t.gridSize=Math.max(Math.floor(t.gridSize),4)},getInitialData:function(t,e){var n=a(["value"],t.data),r=new o.List(n,this);return r.initData(t.data),r},defaultOption:{maskImage:null,shape:"circle",left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,textStyle:{normal:{fontWeight:"normal"}}}})},"Z+aH":function(e,r,i){"use strict";i.d(r,"a",function(){return d});var s=i("8Y7J"),c=i("rDig"),l=["td-wordCloud",""],d=function(){var e=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(i,e);var r=o(i);function i(e){return t(this,i),r.call(this,"wordCloud",e)}return n(i,[{key:"getConfig",value:function(){return{shape:this.shape,left:this.left,top:this.top,width:this.width,height:this.height,right:this.right,bottom:this.bottom,sizeRange:this.sizeRange,rotationRange:this.rotationRange,rotationStep:this.rotationStep,gridSize:this.gridSize,drawOutOfBound:this.drawOutOfBound,textStyle:this.textStyle}}}]),i}(c.c);return e.\u0275fac=function(t){return new(t||e)(s.Ob(c.b))},e.\u0275cmp=s.Ib({type:e,selectors:[["td-chart-series","td-wordCloud",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",shape:"shape",left:"left",top:"top",width:"width",height:"height",right:"right",bottom:"bottom",sizeRange:"sizeRange",rotationRange:"rotationRange",rotationStep:"rotationStep",gridSize:"gridSize",drawOutOfBound:"drawOutOfBound",textStyle:"textStyle"},features:[s.Bb([{provide:c.c,useExisting:Object(s.V)(function(){return e})}]),s.zb],attrs:l,decls:0,vars:0,template:function(t,e){},encapsulation:2,changeDetection:0}),e}()},dKCn:function(e,n,a){"use strict";a.d(n,"a",function(){return s});var o,r=a("SVse"),i=(a("h6EL"),a("Z+aH"),a("8Y7J")),s=((o=function e(){t(this,e)}).\u0275mod=i.Mb({type:o}),o.\u0275inj=i.Lb({factory:function(t){return new(t||o)},imports:[[r.c]]}),o)},"eT+N":function(t,e,n){"use strict";var a,o,r,i,s;window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",function(n){if("string"==typeof n.data&&n.data.substr(0,e.length)===e){n.stopImmediatePropagation();var a=parseInt(n.data.substr(e.length),36);t[a]&&(t[a](),t[a]=void 0)}},!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(n){var a=t.length;return t.push(n),window.postMessage(e+a.toString(36),"*"),a}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}),o=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!(e.getImageData&&e.fillText&&Array.prototype.some&&Array.prototype.push)}(),r=function(){if(o){for(var t,e,n=document.createElement("canvas").getContext("2d"),a=20;a;){if(n.font=a.toString(10)+"px sans-serif",n.measureText("\uff37").width===t&&n.measureText("m").width===e)return a+1;t=n.measureText("\uff37").width,e=n.measureText("m").width,a--}return 0}}(),i=function(t){for(var e,n,a=t.length;a;e=Math.floor(Math.random()*a),n=t[--a],t[a]=t[e],t[e]=n);return t},(s=function(t,e){if(o){Array.isArray(t)||(t=[t]),t.forEach(function(e,n){if("string"==typeof e){if(t[n]=document.getElementById(e),!t[n])throw"The element id specified is not found."}else if(!e.tagName&&!e.appendChild)throw"You must pass valid HTML elements, or ID of the element."});var n={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "\u5fae\u8edf\u6b63\u9ed1\u9ad4", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var a in e)a in n&&(n[a]=e[a]);if("function"!=typeof n.weightFactor){var s=n.weightFactor;n.weightFactor=function(t){return t*s}}if("function"!=typeof n.shape)switch(n.shape){case"circle":default:n.shape="circle";break;case"cardioid":n.shape=function(t){return 1-Math.sin(t)};break;case"diamond":case"square":n.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"triangle-forward":n.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":n.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":n.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":n.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}n.gridSize=Math.max(Math.floor(n.gridSize),4);var c,l,d,u,f,h,m,g=n.gridSize,p=g-n.maskGapWidth,w=Math.abs(n.maxRotation-n.minRotation),v=Math.min(n.maxRotation,n.minRotation),y=n.rotationStep;switch(n.color){case"random-dark":m=function(){return D(10,50)};break;case"random-light":m=function(){return D(50,90)};break;default:"function"==typeof n.color&&(m=n.color)}var x=null;"function"==typeof n.classes&&(x=n.classes);var M,b=!1,S=[],C=function(t){var e,n,a=t.currentTarget,o=a.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,n=t.touches[0].clientY):(e=t.clientX,n=t.clientY);var r=n-o.top,i=Math.floor((e-o.left)*(a.width/o.width||1)/g),s=Math.floor(r*(a.height/o.height||1)/g);return S[i][s]},I=function(t){var e=C(t);M!==e&&(M=e,e?n.hover(e.item,e.dimension,t):n.hover(void 0,void 0,t))},T=function(t){var e=C(t);e&&(n.click(e.item,e.dimension,t),t.preventDefault())},E=[],R=function(t){if(E[t])return E[t];var e=8*t,a=e,o=[];for(0===t&&o.push([u[0],u[1],0]);a--;){var r=1;"circle"!==n.shape&&(r=n.shape(a/e*2*Math.PI)),o.push([u[0]+t*r*Math.cos(-a/e*2*Math.PI),u[1]+t*r*Math.sin(-a/e*2*Math.PI)*n.ellipticity,a/e*2*Math.PI])}return E[t]=o,o},k=function(){return n.abortThreshold>0&&(new Date).getTime()-h>n.abortThreshold},O=function(e,n,a,o,r){e>=l||n>=d||e<0||n<0||(c[e][n]=!1,a&&t[0].getContext("2d").fillRect(e*g,n*g,p,p),b&&(S[e][n]={item:r,dimension:o}))},P=function(e,n,a){if(n)return!t.some(function(t){var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!0,n,a||{}),!t.dispatchEvent(o)},this);t.forEach(function(t){var o=document.createEvent("CustomEvent");o.initCustomEvent(e,!0,n,a||{}),t.dispatchEvent(o)},this)};!function(){var e=t[0];if(e.getContext)l=Math.ceil(e.width/g),d=Math.ceil(e.height/g);else{var a=e.getBoundingClientRect();l=Math.ceil(a.width/g),d=Math.ceil(a.height/g)}if(P("wordcloudstart",!0)){var o,s,p,C,E;if(u=n.origin?[n.origin[0]/g,n.origin[1]/g]:[l/2,d/2],f=Math.floor(Math.sqrt(l*l+d*d)),c=[],!e.getContext||n.clearCanvas)for(t.forEach(function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=n.backgroundColor,e.clearRect(0,0,l*(g+1),d*(g+1)),e.fillRect(0,0,l*(g+1),d*(g+1))}else t.textContent="",t.style.backgroundColor=n.backgroundColor,t.style.position="relative"}),o=l;o--;)for(c[o]=[],s=d;s--;)c[o][s]=!0;else{var D=document.createElement("canvas").getContext("2d");D.fillStyle=n.backgroundColor,D.fillRect(0,0,1,1);var z,L,F=D.getImageData(0,0,1,1).data,W=e.getContext("2d").getImageData(0,0,l*g,d*g).data;for(o=l;o--;)for(c[o]=[],s=d;s--;){L=g;t:for(;L--;)for(z=g;z--;)for(p=4;p--;)if(W[4*((s*g+L)*l*g+(o*g+z))+p]!==F[p]){c[o][s]=!1;break t}!1!==c[o][s]&&(c[o][s]=!0)}W=D=F=void 0}if(n.hover||n.click){for(b=!0,o=l+1;o--;)S[o]=[];n.hover&&e.addEventListener("mousemove",I),n.click&&(e.addEventListener("click",T),e.addEventListener("touchstart",T),e.addEventListener("touchend",function(t){t.preventDefault()}),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",I),e.removeEventListener("click",T),M=void 0})}p=0,0!==n.wait?(C=window.setTimeout,E=window.clearTimeout):(C=window.setImmediate,E=window.clearImmediate);var B=function(e,n){t.forEach(function(t){t.removeEventListener(e,n)},this)},A=function t(){B("wordcloudstart",t),E(_)};!function(e,n){t.forEach(function(t){t.addEventListener("wordcloudstart",n)},this)}(0,A);var _=C(function e(){if(p>=n.list.length)return E(_),P("wordcloudstop",!1),void B("wordcloudstart",A);h=(new Date).getTime();var a=function(e){var a,o,s;Array.isArray(e)?(a=e[0],o=e[1]):(a=e.word,o=e.weight,s=e.attributes);var u,h,p,M=0===n.rotateRatio||Math.random()>n.rotateRatio?0:0===w?v:v+Math.round(Math.random()*w/y)*y,S=function(t,e,a){var o=n.weightFactor(e);if(o<=n.minSize)return!1;var i=1;o<r&&(i=function(){for(var t=2;t*o<r;)t+=2;return t}());var s=document.createElement("canvas"),c=s.getContext("2d",{willReadFrequently:!0});c.font=n.fontWeight+" "+(o*i).toString(10)+"px "+n.fontFamily;var l=c.measureText(t).width/i,d=Math.max(o*i,c.measureText("m").width,c.measureText("\uff37").width)/i,u=l+2*d,f=3*d,h=Math.ceil(u/g),m=Math.ceil(f/g);u=h*g,f=m*g;var p=-l/2,w=.4*-d,v=Math.ceil((u*Math.abs(Math.sin(a))+f*Math.abs(Math.cos(a)))/g),y=Math.ceil((u*Math.abs(Math.cos(a))+f*Math.abs(Math.sin(a)))/g),x=y*g,M=v*g;s.setAttribute("width",x),s.setAttribute("height",M),c.scale(1/i,1/i),c.translate(x*i/2,M*i/2),c.rotate(-a),c.font=n.fontWeight+" "+(o*i).toString(10)+"px "+n.fontFamily,c.fillStyle="#000",c.textBaseline="middle",c.fillText(t,p*i,(w+.5*o)*i);var b=c.getImageData(0,0,x,M).data;if(k())return!1;for(var S,C,I,T=[],E=y,R=[v/2,y/2,v/2,y/2];E--;)for(S=v;S--;){I=g;t:for(;I--;)for(C=g;C--;)if(b[4*((S*g+I)*x+(E*g+C))+3]){T.push([E,S]),E<R[3]&&(R[3]=E),E>R[1]&&(R[1]=E),S<R[0]&&(R[0]=S),S>R[2]&&(R[2]=S);break t}}return{mu:i,occupied:T,bounds:R,gw:y,gh:v,fillTextOffsetX:p,fillTextOffsetY:w,fillTextWidth:l,fillTextHeight:d,fontSize:o}}(a,o,M);if(!S)return!1;if(k())return!1;if(!n.drawOutOfBound){var C=S.bounds;if(C[1]-C[3]+1>l||C[2]-C[0]+1>d)return!1}for(var I=f+1;I--;){var T=R(f-I);n.shuffle&&(T=[].concat(T),i(T));for(var E=0;E<T.length;E++){var P=(u=T[E],!!function(t,e,a,o,r){for(var i=r.length;i--;){var s=t+r[i][0],u=e+r[i][1];if(s>=l||u>=d||s<0||u<0){if(!n.drawOutOfBound)return!1}else if(!c[s][u])return!1}return!0}(h=Math.floor(u[0]-S.gw/2),p=Math.floor(u[1]-S.gh/2),0,0,S.occupied)&&(function(e,a,o,r,i,s,c,l,d){var u,f,h=o.fontSize;u=m?m(r,i,h,s,c):n.color,f=x?x(r,i,h,s,c):n.classes,t.forEach(function(t){if(t.getContext){var i=t.getContext("2d"),s=o.mu;i.save(),i.scale(1/s,1/s),i.font=n.fontWeight+" "+(h*s).toString(10)+"px "+n.fontFamily,i.fillStyle=u,i.translate((e+o.gw/2)*g*s,(a+o.gh/2)*g*s),0!==l&&i.rotate(-l),i.textBaseline="middle",i.fillText(r,o.fillTextOffsetX*s,(o.fillTextOffsetY+.5*h)*s),i.restore()}else{var c=document.createElement("span"),m="";m="rotate("+-l/Math.PI*180+"deg) ",1!==o.mu&&(m+="translateX(-"+o.fillTextWidth/4+"px) scale("+1/o.mu+")");var p={position:"absolute",display:"block",font:n.fontWeight+" "+h*o.mu+"px "+n.fontFamily,left:(e+o.gw/2)*g+o.fillTextOffsetX+"px",top:(a+o.gh/2)*g+o.fillTextOffsetY+"px",width:o.fillTextWidth+"px",height:o.fillTextHeight+"px",lineHeight:h+"px",whiteSpace:"nowrap",transform:m,webkitTransform:m,msTransform:m,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var w in u&&(p.color=u),c.textContent=r,p)c.style[w]=p[w];if(d)for(var v in d)c.setAttribute(v,d[v]);f&&(c.className+=f),t.appendChild(c)}})}(h,p,S,a,o,f-I,u[2],M,s),function(e,a,o,r,i,s){var c,u,f=i.occupied,h=n.drawMask;if(h&&((c=t[0].getContext("2d")).save(),c.fillStyle=n.maskColor),b){var m=i.bounds;u={x:(e+m[3])*g,y:(a+m[0])*g,w:(m[1]-m[3]+1)*g,h:(m[2]-m[0]+1)*g}}for(var p=f.length;p--;){var w=e+f[p][0],v=a+f[p][1];w>=l||v>=d||w<0||v<0||O(w,v,h,u,s)}h&&c.restore()}(h,p,0,0,S,e),{gx:h,gy:p,rot:M,info:S}));if(P)return P}}return null}(n.list[p]),o=!P("wordclouddrawn",!0,{item:n.list[p],drawn:a});if(k()||o)return E(_),n.abort(),P("wordcloudabort",!1),P("wordcloudstop",!1),void B("wordcloudstart",A);p++,_=C(e,n.wait)},n.wait)}}()}function D(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}}).isSupported=o,s.minFontSize=r,void 0===(a=(function(){return s}).apply(e,[]))||(t.exports=a)},h6EL:function(t,e,n){t.exports=n("Ck+y")},psNt:function(e,a,o){"use strict";o.d(a,"a",function(){return m});var r=o("mrSG"),i=o("rDig"),s=o("MpVW"),c=o("8Y7J"),l=o("cvES"),d=o("cpAi"),u=o("Z+aH"),f=function(){return[8,30]},h=function(t){return[t,30]},m=function(){var e=function(){function e(n,a){t(this,e),this._cdr=n,this.themeSelector=a,this.themes=Object(i.e)(),this.words=["Covalent","Teradata","Angular","TypeScript","JavaScript","Protractor","Karma","Ruby","Rails","Ruby on Rails","Java","Scala","RSpec","Cucumber","JUnit","Elixir","Twitter Bootstrap","HTML","CSS","SASS","PHP"],this.words2=["Engineering","Applied Science","Engineering Science","Innovation","Tech","Technological","Computing","Informatics","Biotechnology","Science","Telematics","Industry","Research","Information","Development","Cyber","Energy","Techs","Technicians","Computerization","Techno"],this.componentExampleRandomWords=this.generateRandomWords(this.words2),this.config={tooltip:{},series:[{type:"wordCloud",shape:"triangle",sizeRange:[8,50],rotationRange:[-30,30],color:this.randomColor,data:this.generateRandomWords(this.words)}]}}return n(e,[{key:"ngOnInit",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.selectedTheme=this.themeSelector.selected,this._cdr.markForCheck();case 1:case"end":return t.stop()}},t,this)}))}},{key:"randomColor",value:function(){return"rgb("+[Math.round(160*Math.random()),Math.round(160*Math.random()),Math.round(160*Math.random())].join(",")+")"}},{key:"generateRandomWords",value:function(t){return Array.apply(void 0,Array(30)).map(function(){return{name:t[Math.floor(Math.random()*t.length)],value:Math.floor(100*Math.random()),textStyle:{normal:{fontFamily:"sans-serif",fontWeight:"bold"}}}})}},{key:"selectChartTheme",value:function(t){this.themeSelector.select(t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Ob(c.h),c.Ob(s.a))},e.\u0275cmp=c.Ib({type:e,selectors:[["wordcloud-demo-basic"]],decls:3,vars:10,consts:[[3,"trigger"],["td-wordCloud","","shape","star",3,"sizeRange","rotationRange","color","data"]],template:function(t,e){1&t&&(c.Ub(0,"td-chart"),c.Pb(1,"td-chart-tooltip",0),c.Pb(2,"td-chart-series",1),c.Tb()),2&t&&(c.Jc("height",500,"px"),c.Cb(1),c.mc("trigger","item"),c.Cb(1),c.mc("sizeRange",c.pc(7,f))("rotationRange",c.qc(8,h,-30))("color",e.randomColor)("data",e.componentExampleRandomWords))},directives:[l.a,d.a,u.a],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0}),e}()},tE1T:function(e,n,a){"use strict";a.d(n,"a",function(){return l});var o=a("SVse"),r=a("rDig"),i=a("Qk+/"),s=a("dKCn"),c=a("8Y7J"),l=function(){var e=function e(){t(this,e)};return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[r.a,i.a,s.a,o.c]]}),e}()},wD15:function(t,e,n){var a=n("ProS");a.extendChartView({type:"wordCloud",render:function(t,e,n){var o=this.group;o.removeAll();var r=t.getData(),i=t.get("gridSize");t.layoutInstance.ondraw=function(t,e,n,s){var c=r.getItemModel(n),l=c.getModel("textStyle.normal"),d=c.getModel("textStyle.emphasis"),u=new a.graphic.Text({style:a.graphic.setTextStyle({},l,{x:s.info.fillTextOffsetX,y:s.info.fillTextOffsetY+.5*e,text:t,textBaseline:"middle",textFill:r.getItemVisual(n,"color"),fontSize:e}),scale:[1/s.info.mu,1/s.info.mu],position:[(s.gx+s.info.gw/2)*i,(s.gy+s.info.gh/2)*i],rotation:s.rot});o.add(u),r.setItemGraphicEl(n,u),a.graphic.setHoverStyle(u,a.graphic.setTextStyle({},d,null,{forMerge:!0},!0))},this._model=t},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}})}}])}();