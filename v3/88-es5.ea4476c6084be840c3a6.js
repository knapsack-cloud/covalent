!function(){function e(e,a){for(var n=0;n<a.length;n++){var o=a[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(a,n,o){return n&&e(a.prototype,n),o&&e(a,o),a}function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{THbC:function(e,o,t){"use strict";t.r(o),t.d(o,"DialogsDemoModule",function(){return P});var i,c,r,l,s,b,d,g,u,m=t("SVse"),p=t("Dxy4"),f=t("Tj54"),h=t("PWEM"),w=t("iInd"),D=t("8Y7J"),v=t("MJ5V"),T=t("q2QG"),y=((l=function e(){n(this,e)}).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=D.Ib({type:l,selectors:[["draggable-dialog"]],decls:7,vars:0,consts:[["mat-icon-button","",1,"drag-handle"]],template:function(e,a){1&e&&(D.Ub(0,"h2"),D.Oc(1,"Draggable dialog"),D.Tb(),D.Ub(2,"p"),D.Oc(3,"Draggable via the drag handle"),D.Tb(),D.Ub(4,"button",0),D.Ub(5,"mat-icon"),D.Oc(6,"drag_handle"),D.Tb(),D.Tb())},directives:[p.b,f.a],encapsulation:2}),l),O=((r=function(){function e(a){n(this,e),this._dialogService=a}return a(e,[{key:"openDraggableDialog",value:function(){this._dialogService.openDraggable({component:y,dragHandleSelectors:[".drag-handle"],draggableClass:"custom-class"})}}]),e}()).\u0275fac=function(e){return new(e||r)(D.Ob(h.c))},r.\u0275cmp=D.Ib({type:r,selectors:[["dialogs-demo-draggable"]],decls:2,vars:0,consts:[["mat-button","","color","accent",1,"text-upper","push-right-sm",3,"click"]],template:function(e,a){1&e&&(D.Ub(0,"button",0),D.cc("click",function(){return a.openDraggableDialog()}),D.Oc(1," Open Draggable Dialog\n"),D.Tb())},directives:[p.b],styles:[""]}),r),U=((c=function e(){n(this,e)}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=D.Ib({type:c,selectors:[["draggable-resizable-dialog"]],decls:9,vars:0,consts:[["mat-icon-button","",1,"drag-handle"]],template:function(e,a){1&e&&(D.Ub(0,"h2"),D.Oc(1,"Draggable resizable dialog"),D.Tb(),D.Ub(2,"p"),D.Oc(3,"Draggable via the drag handle"),D.Tb(),D.Ub(4,"button",0),D.Ub(5,"mat-icon"),D.Oc(6,"drag_handle"),D.Tb(),D.Tb(),D.Ub(7,"p"),D.Oc(8,"Resizable via the corners"),D.Tb())},directives:[p.b,f.a],encapsulation:2}),c),z=((i=function(){function e(a,o,t){n(this,e),this._dialogService=a,this._document=o,this._renderer2=t}return a(e,[{key:"openDraggableResizableDialog",value:function(){var e,a=this,n=this._dialogService.openDraggable({component:U,dragHandleSelectors:[".drag-handle"]}),o=n.matDialogRef;n.dragRefSubject.subscribe(function(n){e=new h.b(a._document,a._renderer2,o,n)}),o.afterClosed().subscribe(function(){return e.detach()})}}]),e}()).\u0275fac=function(e){return new(e||i)(D.Ob(h.c),D.Ob(m.d),D.Ob(D.F))},i.\u0275cmp=D.Ib({type:i,selectors:[["dialogs-demo-draggable-resizable"]],decls:2,vars:0,consts:[["mat-button","","color","accent",1,"text-upper","push-right-sm",3,"click"]],template:function(e,a){1&e&&(D.Ub(0,"button",0),D.cc("click",function(){return a.openDraggableResizableDialog()}),D.Oc(1," Open Draggable Resizable Dialog\n"),D.Tb())},directives:[p.b],styles:[""]}),i),_=t("KxEj"),C=((b=function e(){n(this,e),this.closed=new D.n}).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=D.Ib({type:b,selectors:[["draggable-resizable-window-dialog"]],outputs:{closed:"closed"},decls:8,vars:5,consts:[[3,"title","toolbarColor","closeLabel","closed"]],template:function(e,a){1&e&&(D.Ub(0,"td-window-dialog",0),D.cc("closed",function(){return a.closed.emit()}),D.Ub(1,"div"),D.Ub(2,"p"),D.Oc(3,"Comes with a handy toolbar"),D.Tb(),D.Ub(4,"p"),D.Oc(5,"Draggable via the toolbar"),D.Tb(),D.Ub(6,"p"),D.Oc(7,"Resizable via the corners"),D.Tb(),D.Tb(),D.Tb()),2&e&&(D.mc("title","Draggable resizable window dialog")("toolbarColor","accent")("closeLabel","Close"),D.Cb(1),D.Jc("padding",1,"em"))},directives:[_.a],encapsulation:2}),b),I=((s=function(){function e(a,o,t){n(this,e),this._dialogService=a,this._document=o,this._renderer2=t}return a(e,[{key:"openDraggableResizableWindowDialog",value:function(){var e,a=this,n=this._dialogService.openDraggable({component:C,dragHandleSelectors:["mat-toolbar"],config:{panelClass:["td-window-dialog"]}}),o=n.matDialogRef,t=n.dragRefSubject;o.componentInstance.closed.subscribe(function(){return o.close()}),t.subscribe(function(n){e=new h.b(a._document,a._renderer2,o,n)}),o.afterClosed().subscribe(function(){return e.detach()})}}]),e}()).\u0275fac=function(e){return new(e||s)(D.Ob(h.c),D.Ob(m.d),D.Ob(D.F))},s.\u0275cmp=D.Ib({type:s,selectors:[["dialogs-demo-draggable-resizable-window"]],decls:2,vars:0,consts:[["mat-button","","color","accent",1,"text-upper","push-right-sm",3,"click"]],template:function(e,a){1&e&&(D.Ub(0,"button",0),D.cc("click",function(){return a.openDraggableResizableWindowDialog()}),D.Oc(1," Open Draggable Resizable Window Dialog\n"),D.Tb())},directives:[p.b],styles:[""]}),s),R=[{path:"",component:(d=function e(){n(this,e)},d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=D.Ib({type:d,selectors:[["dialogs-demo"]],decls:8,vars:8,consts:[[3,"demoId","demoTitle"]],template:function(e,a){1&e&&(D.Ub(0,"demo-component",0),D.Pb(1,"dialogs-demo-basic"),D.Tb(),D.Ub(2,"demo-component",0),D.Pb(3,"dialogs-demo-draggable"),D.Tb(),D.Ub(4,"demo-component",0),D.Pb(5,"dialogs-demo-draggable-resizable"),D.Tb(),D.Ub(6,"demo-component",0),D.Pb(7,"dialogs-demo-draggable-resizable-window"),D.Tb()),2&e&&(D.mc("demoId","dialogs-demo-basic")("demoTitle","Basic"),D.Cb(2),D.mc("demoId","dialogs-demo-draggable")("demoTitle","Draggable"),D.Cb(2),D.mc("demoId","dialogs-demo-draggable-resizable")("demoTitle","Draggable And Resizable"),D.Cb(2),D.mc("demoId","dialogs-demo-draggable-resizable-window")("demoTitle","Draggable Resizable Window Dialog"))},directives:[v.a,T.a,O,z,I],styles:[""]}),d)}],k=((g=function e(){n(this,e)}).\u0275mod=D.Mb({type:g}),g.\u0275inj=D.Lb({factory:function(e){return new(e||g)},imports:[[w.g.forChild(R)],w.g]}),g),S=t("Krbs"),j=t("TnKn"),P=((u=function e(){n(this,e)}).\u0275mod=D.Mb({type:u}),u.\u0275inj=D.Lb({factory:function(e){return new(e||u)},imports:[[j.a,S.a,k,h.a,m.c,p.c,f.b]]}),u)}}])}();