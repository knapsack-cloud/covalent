!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{Lx23:function(t,o,c){"use strict";c.r(o),c.d(o,"SideSheetDemoModule",function(){return J});var i=c("SVse"),s=c("Jin3"),a=c("iInd"),r=c("8Y7J"),d=c("MJ5V"),u=c("Dxy4"),l=["example"];function m(e,t){1&e&&r.Oc(0,"It works from a TemplateRef!")}var p,f,b,h,v,y,w=((b=function(){function t(n){e(this,t),this.sideSheet=n}return n(t,[{key:"toggleSideSheet",value:function(){this.sideSheet.open(this.template)}}]),t}()).\u0275fac=function(e){return new(e||b)(r.Ob(s.a))},b.\u0275cmp=r.Ib({type:b,selectors:[["side-sheet-demo-basic"]],viewQuery:function(e,t){var n;1&e&&r.Sc(l,!0),2&e&&r.zc(n=r.dc())&&(t.template=n.first)},decls:6,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"],["example",""]],template:function(e,t){1&e&&(r.Ub(0,"p"),r.Oc(1,"Open some dialog content from a TemplateRef"),r.Tb(),r.Ub(2,"button",0),r.cc("click",function(){return t.toggleSideSheet()}),r.Oc(3,"Open"),r.Tb(),r.Mc(4,m,1,0,"ng-template",null,1,r.Nc))},directives:[u.b],encapsulation:2}),b),g=((f=function t(){e(this,t)}).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=r.Ib({type:f,selectors:[["example"]],decls:1,vars:0,template:function(e,t){1&e&&r.Oc(0,"it works from a component")},encapsulation:2}),f),S=((p=function(){function t(n){e(this,t),this.sideSheet=n}return n(t,[{key:"toggleSideSheet",value:function(){this.sideSheet.open(g)}}]),t}()).\u0275fac=function(e){return new(e||p)(r.Ob(s.a))},p.\u0275cmp=r.Ib({type:p,selectors:[["side-sheet-demo-advanced"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(r.Ub(0,"p"),r.Oc(1,"Open some dialog content from a Component"),r.Tb(),r.Ub(2,"button",0),r.cc("click",function(){return t.toggleSideSheet()}),r.Oc(3,"Open"),r.Tb())},directives:[u.b],encapsulation:2}),p),O=[{path:"",component:(h=function t(){e(this,t)},h.\u0275fac=function(e){return new(e||h)},h.\u0275cmp=r.Ib({type:h,selectors:[["sidesheet-demo"]],decls:4,vars:4,consts:[[3,"demoId","demoTitle"]],template:function(e,t){1&e&&(r.Ub(0,"demo-component",0),r.Pb(1,"side-sheet-demo-basic"),r.Tb(),r.Ub(2,"demo-component",0),r.Pb(3,"side-sheet-demo-advanced"),r.Tb()),2&e&&(r.mc("demoId","side-sheet-demo-basic")("demoTitle","Basic"),r.Cb(2),r.mc("demoId","side-sheet-demo-advanced")("demoTitle","Advanced"))},directives:[d.a,w,S],styles:[""]}),h)}],T=((v=function t(){e(this,t)}).\u0275mod=r.Mb({type:v}),v.\u0275inj=r.Lb({factory:function(e){return new(e||v)},imports:[[a.g.forChild(O)],a.g]}),v),k=c("Krbs"),I=c("Tj54"),U=c("q7Ft"),x=c("l0rg"),J=((y=function t(){e(this,t)}).\u0275mod=r.Mb({type:y}),y.\u0275inj=r.Lb({factory:function(e){return new(e||y)},imports:[[k.a,T,s.b,i.c,I.b,U.d,u.c,x.b]]}),y)}}])}();