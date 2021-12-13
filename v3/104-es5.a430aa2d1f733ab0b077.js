!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"6ut1":function(t,o,i){"use strict";i.r(o),i.d(o,"LoadingDemoModule",function(){return q});var a=i("SVse"),c=i("qeof"),r=i("iInd"),l=i("8Y7J"),d=i("MJ5V"),s=i("80CR"),u=i("Dxy4");function b(e,t){1&e&&(l.Ub(0,"div"),l.Ub(1,"div",3),l.Oc(2,"loading content..."),l.Tb(),l.Tb())}var m,g=((m=function(){function t(n){e(this,t),this._loadingService=n,this.overlayStarSyntax=!1}return n(t,[{key:"toggleOverlayStarSyntax",value:function(){this.overlayStarSyntax=!this.overlayStarSyntax,this.overlayStarSyntax?this._loadingService.register("overlayStarSyntax"):this._loadingService.resolve("overlayStarSyntax")}}]),t}()).\u0275fac=function(e){return new(e||m)(l.Ob(c.d))},m.\u0275cmp=l.Ib({type:m,selectors:[["loading-demo-basic"]],decls:4,vars:5,consts:[[4,"tdLoading","tdLoadingMode","tdLoadingType","tdLoadingStrategy","tdLoadingColor"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(e,t){1&e&&(l.Mc(0,b,3,0,"div",0),l.Ub(1,"div",1),l.Ub(2,"button",2),l.cc("click",function(){return t.toggleOverlayStarSyntax()}),l.Oc(3," Toggle Loader "),l.Tb(),l.Tb()),2&e&&l.mc("tdLoading","overlayStarSyntax")("tdLoadingMode","indeterminate")("tdLoadingType","circle")("tdLoadingStrategy","overlay")("tdLoadingColor","accent")},directives:[s.a,u.b],styles:[""]}),m);function v(e,t){1&e&&(l.Ub(0,"div",3),l.Oc(1,"loading content..."),l.Tb())}var f,p=((f=function(){function t(){e(this,t),this.loading=!1}return n(t,[{key:"toggle",value:function(){this.loading=!this.loading}}]),t}()).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=l.Ib({type:f,selectors:[["loading-demo-replace"]],decls:4,vars:1,consts:[["tdLoading","",3,"tdLoadingUntil"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(e,t){1&e&&(l.Mc(0,v,2,0,"ng-template",0),l.Ub(1,"div",1),l.Ub(2,"button",2),l.cc("click",function(){return t.toggle()}),l.Oc(3,"Toggle Loader"),l.Tb(),l.Tb()),2&e&&l.mc("tdLoadingUntil",!t.loading)},directives:[s.a,u.b],styles:[""]}),f),y=i("2Vo4");function h(e,t){if(1&e&&(l.Ub(0,"div"),l.Ub(1,"div",3),l.Oc(2),l.Tb(),l.Tb()),2&e){var n=t.$implicit;l.Cb(2),l.Qc(" ",n.name," ")}}var T,S,L=((S=function(){function t(){e(this,t),this._subject=new y.a({name:"I am here!"}),this.observable$=this._subject.asObservable()}return n(t,[{key:"toggle",value:function(){var e=this;this._subject=new y.a(void 0),this.observable$=this._subject.asObservable(),setTimeout(function(){e._subject.next({name:"I am here!"})},1e3)}}]),t}()).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=l.Ib({type:S,selectors:[["loading-demo-observable"]],decls:5,vars:3,consts:[[4,"tdLoading","tdLoadingUntil"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(e,t){1&e&&(l.Mc(0,h,3,1,"div",0),l.hc(1,"async"),l.Ub(2,"div",1),l.Ub(3,"button",2),l.cc("click",function(){return t.toggle()}),l.Oc(4,"Toggle Loader"),l.Tb(),l.Tb()),2&e&&l.mc("tdLoadingUntil",l.ic(1,1,t.observable$))},directives:[s.a,u.b],pipes:[a.b],styles:[""]}),S),U=((T=function(){function t(n){e(this,t),this._loadingService=n,this._loadingService.create({name:"customFullscreenDemo",mode:c.b.Indeterminate,type:c.c.Linear,color:"accent"})}return n(t,[{key:"toggleDefaultFullscreenDemo",value:function(){var e=this;this._loadingService.register(),setTimeout(function(){return e._loadingService.resolve()},1500)}},{key:"toggleCustomFullscreenDemo",value:function(){var e=this;this._loadingService.register("customFullscreenDemo"),setTimeout(function(){return e._loadingService.resolve("customFullscreenDemo")},1500)}}]),t}()).\u0275fac=function(e){return new(e||T)(l.Ob(c.d))},T.\u0275cmp=l.Ib({type:T,selectors:[["loading-demo-fullscreen"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary",1,"text-upper",3,"click"]],template:function(e,t){1&e&&(l.Ub(0,"button",0),l.cc("click",function(){return t.toggleDefaultFullscreenDemo()}),l.Oc(1," Toggle default fullscreen Loader\n"),l.Tb(),l.Ub(2,"button",0),l.cc("click",function(){return t.toggleCustomFullscreenDemo()}),l.Oc(3," Toggle custom Fullscreen Loader\n"),l.Tb())},directives:[u.b],styles:["button[_ngcontent-%COMP%]{margin-right:1em}"]}),T),w=i("SqCe"),O=i("UhP/"),x=i("Tj54"),C=i("BSbQ");function I(e,t){1&e&&(l.Ub(0,"mat-icon",1),l.Oc(1,"settings_backup_restore"),l.Tb())}function k(e,t){1&e&&l.Pb(0,"mat-divider")}function _(e,t){if(1&e&&(l.Ub(0,"mat-list-item"),l.Ub(1,"div",1),l.Mc(2,I,2,0,"ng-template",2),l.Tb(),l.Ub(3,"h3",3),l.Oc(4),l.Tb(),l.Tb(),l.Mc(5,k,1,0,"mat-divider",4)),2&e){var n=t.$implicit,o=t.last;l.Cb(2),l.mc("tdLoadingUntil",!n.value),l.Cb(2),l.Pc(n.label),l.Cb(1),l.mc("ngIf",!o)}}var M,F,D,j,P=((M=function t(){e(this,t),this.itemList=[{label:"Light",value:!0},{label:"Console",value:!1},{label:"T.V.",value:!0}]}).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=l.Ib({type:M,selectors:[["loading-demo-icon"]],decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],["matListAvatar",""],["tdLoading","","tdLoadingStrategy","overlay",3,"tdLoadingUntil"],["matLine",""],[4,"ngIf"]],template:function(e,t){1&e&&(l.Ub(0,"mat-list"),l.Mc(1,_,6,3,"ng-template",0),l.Tb()),2&e&&(l.Cb(1),l.mc("ngForOf",t.itemList))},directives:[w.a,a.m,w.d,w.b,s.a,O.j,a.n,x.a,C.a],styles:[""]}),M),$=[{path:"",component:(F=function t(){e(this,t)},F.\u0275fac=function(e){return new(e||F)},F.\u0275cmp=l.Ib({type:F,selectors:[["loading-demo"]],decls:10,vars:10,consts:[[3,"demoId","demoTitle"]],template:function(e,t){1&e&&(l.Ub(0,"demo-component",0),l.Pb(1,"loading-demo-basic"),l.Tb(),l.Ub(2,"demo-component",0),l.Pb(3,"loading-demo-replace"),l.Tb(),l.Ub(4,"demo-component",0),l.Pb(5,"loading-demo-observable"),l.Tb(),l.Ub(6,"demo-component",0),l.Pb(7,"loading-demo-fullscreen"),l.Tb(),l.Ub(8,"demo-component",0),l.Pb(9,"loading-demo-icon"),l.Tb()),2&e&&(l.mc("demoId","loading-demo-basic")("demoTitle","Basic"),l.Cb(2),l.mc("demoId","loading-demo-replace")("demoTitle","Template Until Syntax"),l.Cb(2),l.mc("demoId","loading-demo-observable")("demoTitle","Until Syntax Using Observables"),l.Cb(2),l.mc("demoId","loading-demo-fullscreen")("demoTitle","Fullscreen"),l.Cb(2),l.mc("demoId","loading-demo-icon")("demoTitle","Icon"))},directives:[d.a,g,p,L,U,P],styles:[""]}),F)}],J=((D=function t(){e(this,t)}).\u0275mod=l.Mb({type:D}),D.\u0275inj=l.Lb({factory:function(e){return new(e||D)},imports:[[r.g.forChild($)],r.g]}),D),V=i("Krbs"),q=((j=function t(){e(this,t)}).\u0275mod=l.Mb({type:j}),j.\u0275inj=l.Lb({factory:function(e){return new(e||j)},imports:[[V.a,J,c.a,a.c,u.c,x.b,w.e]]}),j)}}])}();