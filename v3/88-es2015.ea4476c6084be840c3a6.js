(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{THbC:function(e,a,t){"use strict";t.r(a),t.d(a,"DialogsDemoModule",function(){return O});var o=t("SVse"),c=t("Dxy4"),n=t("Tj54"),l=t("PWEM"),r=t("iInd"),s=t("8Y7J"),i=t("MJ5V"),b=t("q2QG");let d=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=s.Ib({type:e,selectors:[["draggable-dialog"]],decls:7,vars:0,consts:[["mat-icon-button","",1,"drag-handle"]],template:function(e,a){1&e&&(s.Ub(0,"h2"),s.Oc(1,"Draggable dialog"),s.Tb(),s.Ub(2,"p"),s.Oc(3,"Draggable via the drag handle"),s.Tb(),s.Ub(4,"button",0),s.Ub(5,"mat-icon"),s.Oc(6,"drag_handle"),s.Tb(),s.Tb())},directives:[c.b,n.a],encapsulation:2}),e})(),g=(()=>{class e{constructor(e){this._dialogService=e}openDraggableDialog(){this._dialogService.openDraggable({component:d,dragHandleSelectors:[".drag-handle"],draggableClass:"custom-class"})}}return e.\u0275fac=function(a){return new(a||e)(s.Ob(l.c))},e.\u0275cmp=s.Ib({type:e,selectors:[["dialogs-demo-draggable"]],decls:2,vars:0,consts:[["mat-button","","color","accent",1,"text-upper","push-right-sm",3,"click"]],template:function(e,a){1&e&&(s.Ub(0,"button",0),s.cc("click",function(){return a.openDraggableDialog()}),s.Oc(1," Open Draggable Dialog\n"),s.Tb())},directives:[c.b],styles:[""]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=s.Ib({type:e,selectors:[["draggable-resizable-dialog"]],decls:9,vars:0,consts:[["mat-icon-button","",1,"drag-handle"]],template:function(e,a){1&e&&(s.Ub(0,"h2"),s.Oc(1,"Draggable resizable dialog"),s.Tb(),s.Ub(2,"p"),s.Oc(3,"Draggable via the drag handle"),s.Tb(),s.Ub(4,"button",0),s.Ub(5,"mat-icon"),s.Oc(6,"drag_handle"),s.Tb(),s.Tb(),s.Ub(7,"p"),s.Oc(8,"Resizable via the corners"),s.Tb())},directives:[c.b,n.a],encapsulation:2}),e})(),m=(()=>{class e{constructor(e,a,t){this._dialogService=e,this._document=a,this._renderer2=t}openDraggableResizableDialog(){const{matDialogRef:e,dragRefSubject:a}=this._dialogService.openDraggable({component:u,dragHandleSelectors:[".drag-handle"]});let t;a.subscribe(a=>{t=new l.b(this._document,this._renderer2,e,a)}),e.afterClosed().subscribe(()=>t.detach())}}return e.\u0275fac=function(a){return new(a||e)(s.Ob(l.c),s.Ob(o.d),s.Ob(s.F))},e.\u0275cmp=s.Ib({type:e,selectors:[["dialogs-demo-draggable-resizable"]],decls:2,vars:0,consts:[["mat-button","","color","accent",1,"text-upper","push-right-sm",3,"click"]],template:function(e,a){1&e&&(s.Ub(0,"button",0),s.cc("click",function(){return a.openDraggableResizableDialog()}),s.Oc(1," Open Draggable Resizable Dialog\n"),s.Tb())},directives:[c.b],styles:[""]}),e})();var p=t("KxEj");let h=(()=>{class e{constructor(){this.closed=new s.n}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=s.Ib({type:e,selectors:[["draggable-resizable-window-dialog"]],outputs:{closed:"closed"},decls:8,vars:5,consts:[[3,"title","toolbarColor","closeLabel","closed"]],template:function(e,a){1&e&&(s.Ub(0,"td-window-dialog",0),s.cc("closed",function(){return a.closed.emit()}),s.Ub(1,"div"),s.Ub(2,"p"),s.Oc(3,"Comes with a handy toolbar"),s.Tb(),s.Ub(4,"p"),s.Oc(5,"Draggable via the toolbar"),s.Tb(),s.Ub(6,"p"),s.Oc(7,"Resizable via the corners"),s.Tb(),s.Tb(),s.Tb()),2&e&&(s.mc("title","Draggable resizable window dialog")("toolbarColor","accent")("closeLabel","Close"),s.Cb(1),s.Jc("padding",1,"em"))},directives:[p.a],encapsulation:2}),e})(),f=(()=>{class e{constructor(e,a,t){this._dialogService=e,this._document=a,this._renderer2=t}openDraggableResizableWindowDialog(){const{matDialogRef:e,dragRefSubject:a}=this._dialogService.openDraggable({component:h,dragHandleSelectors:["mat-toolbar"],config:{panelClass:["td-window-dialog"]}});let t;e.componentInstance.closed.subscribe(()=>e.close()),a.subscribe(a=>{t=new l.b(this._document,this._renderer2,e,a)}),e.afterClosed().subscribe(()=>t.detach())}}return e.\u0275fac=function(a){return new(a||e)(s.Ob(l.c),s.Ob(o.d),s.Ob(s.F))},e.\u0275cmp=s.Ib({type:e,selectors:[["dialogs-demo-draggable-resizable-window"]],decls:2,vars:0,consts:[["mat-button","","color","accent",1,"text-upper","push-right-sm",3,"click"]],template:function(e,a){1&e&&(s.Ub(0,"button",0),s.cc("click",function(){return a.openDraggableResizableWindowDialog()}),s.Oc(1," Open Draggable Resizable Window Dialog\n"),s.Tb())},directives:[c.b],styles:[""]}),e})();const w=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=s.Ib({type:e,selectors:[["dialogs-demo"]],decls:8,vars:8,consts:[[3,"demoId","demoTitle"]],template:function(e,a){1&e&&(s.Ub(0,"demo-component",0),s.Pb(1,"dialogs-demo-basic"),s.Tb(),s.Ub(2,"demo-component",0),s.Pb(3,"dialogs-demo-draggable"),s.Tb(),s.Ub(4,"demo-component",0),s.Pb(5,"dialogs-demo-draggable-resizable"),s.Tb(),s.Ub(6,"demo-component",0),s.Pb(7,"dialogs-demo-draggable-resizable-window"),s.Tb()),2&e&&(s.mc("demoId","dialogs-demo-basic")("demoTitle","Basic"),s.Cb(2),s.mc("demoId","dialogs-demo-draggable")("demoTitle","Draggable"),s.Cb(2),s.mc("demoId","dialogs-demo-draggable-resizable")("demoTitle","Draggable And Resizable"),s.Cb(2),s.mc("demoId","dialogs-demo-draggable-resizable-window")("demoTitle","Draggable Resizable Window Dialog"))},directives:[i.a,b.a,g,m,f],styles:[""]}),e})()}];let D=(()=>{class e{}return e.\u0275mod=s.Mb({type:e}),e.\u0275inj=s.Lb({factory:function(a){return new(a||e)},imports:[[r.g.forChild(w)],r.g]}),e})();var v=t("Krbs"),T=t("TnKn");let O=(()=>{class e{}return e.\u0275mod=s.Mb({type:e}),e.\u0275inj=s.Lb({factory:function(a){return new(a||e)},imports:[[T.a,v.a,D,l.a,o.c,c.c,n.b]]}),e})()}}]);