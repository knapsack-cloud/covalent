!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{hrRY:function(t,i,o){"use strict";o.r(i),o.d(i,"ChipsDemoModule",function(){return D});var c,s,r=o("SVse"),a=o("9X6E"),d=o("iInd"),l=o("8Y7J"),p=o("MJ5V"),h=o("Bpzi"),u=o("s7LF"),m=o("jMqV"),f=((s=function(){function t(){e(this,t),this.strings=["stepper","expansion-panel","markdown","highlight","loading"],this.stringsModel=this.strings.slice(0,2),this.disabled=!1,this.chipAddition=!0,this.chipRemoval=!0,this.before=!1}return n(t,[{key:"filterStrings",value:function(e){var t=this;this.filteredStrings=this.strings.filter(function(t){return!!e&&t.toLowerCase().indexOf(e.toLowerCase())>-1}).filter(function(e){return!t.stringsModel||t.stringsModel.indexOf(e)<0})}}]),t}()).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=l.Ib({type:s,selectors:[["chips-demo-with-requireMatch-attribute"]],decls:14,vars:10,consts:[["placeholder","Type here","requireMatch","",3,"chipAddition","chipRemoval","items","ngModel","disabled","inputPosition","ngModelChange","inputChange"],["layout","center center","flex","","layout-wrap","",1,"pad-top","pad-bottom-sm"],[1,"pad"],["color","accent",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(l.Ub(0,"td-chips",0),l.cc("ngModelChange",function(e){return t.stringsModel=e})("inputChange",function(e){return t.filterStrings(e)}),l.Tb(),l.Ub(1,"div",1),l.Ub(2,"span",2),l.Ub(3,"mat-slide-toggle",3),l.cc("ngModelChange",function(e){return t.disabled=e}),l.Oc(4,"Disabled"),l.Tb(),l.Tb(),l.Ub(5,"span",2),l.Ub(6,"mat-slide-toggle",3),l.cc("ngModelChange",function(e){return t.chipAddition=e}),l.Oc(7,"Chip addition"),l.Tb(),l.Tb(),l.Ub(8,"span",2),l.Ub(9,"mat-slide-toggle",3),l.cc("ngModelChange",function(e){return t.chipRemoval=e}),l.Oc(10,"Chip removal"),l.Tb(),l.Tb(),l.Ub(11,"span",2),l.Ub(12,"mat-slide-toggle",3),l.cc("ngModelChange",function(e){return t.before=e}),l.Oc(13,"Input Position Before"),l.Tb(),l.Tb(),l.Tb()),2&e&&(l.mc("chipAddition",t.chipAddition)("chipRemoval",t.chipRemoval)("items",t.filteredStrings)("ngModel",t.stringsModel)("disabled",t.disabled)("inputPosition",t.before?"before":"after"),l.Cb(3),l.mc("ngModel",t.disabled),l.Cb(3),l.mc("ngModel",t.chipAddition),l.Cb(3),l.mc("ngModel",t.chipRemoval),l.Cb(3),l.mc("ngModel",t.before))},directives:[h.c,u.m,u.p,m.a],styles:[""]}),s),b=((c=function t(){e(this,t),this.strings=["stepper","expansion-panel","markdown","highlight","loading","media","chips","http","json-formatter","pipes","need more?"],this.stackedStringsModel=this.strings.slice(0,2)}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=l.Ib({type:c,selectors:[["chips-demo-with-required-attribute"]],decls:1,vars:1,consts:[["placeholder","Enter any string","required","",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(l.Ub(0,"td-chips",0),l.cc("ngModelChange",function(e){return t.stackedStringsModel=e}),l.Tb()),2&e&&l.mc("ngModel",t.stackedStringsModel)},directives:[h.c,u.r,u.m,u.p],styles:[""]}),c),g=o("Tj54");function M(e,t){if(1&e&&(l.Ub(0,"mat-icon"),l.Oc(1,"location_city"),l.Tb(),l.Ub(2,"span",3),l.Oc(3),l.Tb()),2&e){var n=t.chip;l.Cb(3),l.Rc("",n.city,", (Pop: ",n.population,")")}}function v(e,t){if(1&e&&(l.Ub(0,"div",4),l.Ub(1,"mat-icon"),l.Oc(2,"location_city"),l.Tb(),l.Oc(3),l.Tb()),2&e){var n=t.option;l.Cb(3),l.Qc(" ",n.city," ")}}var y,C=((y=function(){function t(){e(this,t),this.objects=[{id:1,city:"San Diego",population:"4M"},{id:2,city:"San Franscisco",population:"6M"},{id:3,city:"Los Angeles",population:"5M"},{id:4,city:"Austin",population:"3M"},{id:5,city:"New York City",population:"10M"}],this.objectsModel=this.objects.slice(0,2)}return n(t,[{key:"ngOnInit",value:function(){this.filterObjects("")}},{key:"filterObjects",value:function(e){var t=this;this.filteredObjects=this.objects.filter(function(t){return!!e&&t.city.toLowerCase().indexOf(e.toLowerCase())>-1}).filter(function(e){return!t.objectsModel||t.objectsModel.indexOf(e)<0})}}]),t}()).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=l.Ib({type:y,selectors:[["chips-demo-with-objects"]],decls:3,vars:2,consts:[["color","accent","placeholder","Type here","requireMatch","",3,"items","ngModel","ngModelChange","inputChange"],["td-chip",""],["td-autocomplete-option",""],[1,"text-truncate"],["layout","row","layout-align","start center"]],template:function(e,t){1&e&&(l.Ub(0,"td-chips",0),l.cc("ngModelChange",function(e){return t.objectsModel=e})("inputChange",function(e){return t.filterObjects(e)}),l.Mc(1,M,4,2,"ng-template",1),l.Mc(2,v,4,1,"ng-template",2),l.Tb()),2&e&&l.mc("items",t.filteredObjects)("ngModel",t.objectsModel)},directives:[h.c,u.m,u.p,h.b,h.a,g.a],styles:[""]}),y),w=o("BTe0");function T(e,t){if(1&e&&(l.Ub(0,"div",3),l.Oc(1),l.Tb(),l.Ub(2,"span",4),l.Oc(3),l.Tb()),2&e){var n=t.chip;l.Cb(1),l.Pc(n.substring(0,1).toUpperCase()),l.Cb(2),l.Pc(n)}}function k(e,t){1&e&&l.Pb(0,"mat-progress-bar",5),2&e&&l.Jc("height",2,"px")}var U,O,S,j,A,I,P,x,q=((A=function(){function t(){e(this,t),this.filteringAsync=!1,this.strings=["stepper","expansion-panel","markdown","highlight","loading","media","chips","http","json-formatter","pipes","need more?"],this.asyncModel=this.strings.slice(0,2)}return n(t,[{key:"filterAsync",value:function(e){var t=this;this.filteredAsync=void 0,e&&(this.filteringAsync=!0,setTimeout(function(){t.filteredAsync=t.strings.filter(function(t){return t.toLowerCase().indexOf(e.toLowerCase())>-1}).filter(function(e){return!t.asyncModel||t.asyncModel.indexOf(e)<0}),t.filteringAsync=!1},2e3))}}]),t}()).\u0275fac=function(e){return new(e||A)},A.\u0275cmp=l.Ib({type:A,selectors:[["chips-demo-with-chip-avatar"]],decls:3,vars:4,consts:[["placeholder","Type here","requireMatch","",3,"items","debounce","ngModel","ngModelChange","inputChange"],["td-chip",""],["mode","indeterminate",3,"height",4,"ngIf"],["td-chip-avatar","",1,"tc-grey-100","bgc-teal-700"],[1,"text-truncate"],["mode","indeterminate"]],template:function(e,t){1&e&&(l.Ub(0,"td-chips",0),l.cc("ngModelChange",function(e){return t.asyncModel=e})("inputChange",function(e){return t.filterAsync(e)}),l.Mc(1,T,4,2,"ng-template",1),l.Mc(2,k,1,2,"mat-progress-bar",2),l.Tb()),2&e&&(l.mc("items",t.filteredAsync)("debounce",500)("ngModel",t.asyncModel),l.Cb(2),l.mc("ngIf",t.filteringAsync))},directives:[h.c,u.m,u.p,h.b,r.n,w.a],styles:[""]}),A),L=((j=function(){function t(){e(this,t),this.strings=["stepper","expansion-panel","markdown","highlight","loading","media","chips","http","json-formatter","pipes","need more?"],this.stackedStringsModel=this.strings.slice(0,2)}return n(t,[{key:"filterStackedStrings",value:function(e){this.filteredStackedStrings=this.strings.filter(function(t){return!!e&&t.toLowerCase().indexOf(e.toLowerCase())>-1})}}]),t}()).\u0275fac=function(e){return new(e||j)},j.\u0275cmp=l.Ib({type:j,selectors:[["chips-demo-as-stacked-chips"]],decls:1,vars:2,consts:[["placeholder","Enter any string","inputPosition","before","stacked","","requireMatch","",3,"items","ngModel","ngModelChange","inputChange"]],template:function(e,t){1&e&&(l.Ub(0,"td-chips",0),l.cc("ngModelChange",function(e){return t.stackedStringsModel=e})("inputChange",function(e){return t.filterStackedStrings(e)}),l.Tb()),2&e&&l.mc("items",t.filteredStackedStrings)("ngModel",t.stackedStringsModel)},directives:[h.c,u.m,u.p],styles:[""]}),j),R=((S=function t(){e(this,t)}).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=l.Ib({type:S,selectors:[["chips-demo-as-custom-chips"]],decls:1,vars:0,consts:[["color","warn","placeholder","Enter any string"]],template:function(e,t){1&e&&l.Pb(0,"td-chips",0)},directives:[h.c],styles:[""]}),S),E=((O=function t(){e(this,t),this.compareWith=function(e,t){return e.toUpperCase()===t.toUpperCase()}}).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=l.Ib({type:O,selectors:[["chips-demo-with-compareWith-function"]],decls:1,vars:1,consts:[["placeholder","Type here",3,"compareWith"]],template:function(e,t){1&e&&l.Pb(0,"td-chips",0),2&e&&l.mc("compareWith",t.compareWith)},directives:[h.c],styles:[""]}),O),B=((U=function(){function t(){e(this,t),this.event="Event:",this.strings=["stepper","expansion-panel","markdown","highlight","loading"],this.stringsModel=this.strings.slice(0,2)}return n(t,[{key:"filterStrings",value:function(e){var t=this;this.filteredStrings=this.strings.filter(function(t){return!!e&&t.toLowerCase().indexOf(e.toLowerCase())>-1}).filter(function(e){return!t.stringsModel||t.stringsModel.indexOf(e)<0})}},{key:"handleChipBlur",value:function(e){this.event="Event: Blur event emitted for '".concat(e,"'")}},{key:"handleChipFocus",value:function(e){this.event="Event: Focus event emitted for '".concat(e,"'")}},{key:"handleAdd",value:function(e){this.event="Event: Add event emitted for '".concat(e,"'")}},{key:"handleRemove",value:function(e){this.event="Event: Remove event emitted for '".concat(e,"'")}},{key:"logTime",get:function(){return(new Date).toISOString().split("T")[1].split(".")[0]}}]),t}()).\u0275fac=function(e){return new(e||U)},U.\u0275cmp=l.Ib({type:U,selectors:[["chips-demo-for-chip-events"]],decls:3,vars:3,consts:[["placeholder","Type here","requireMatch","",3,"items","ngModel","ngModelChange","add","remove","inputChange","chipBlur","chipFocus"]],template:function(e,t){1&e&&(l.Ub(0,"span"),l.Oc(1),l.Tb(),l.Ub(2,"td-chips",0),l.cc("ngModelChange",function(e){return t.stringsModel=e})("add",function(e){return t.handleAdd(e)})("remove",function(e){return t.handleRemove(e)})("inputChange",function(e){return t.filterStrings(e)})("chipBlur",function(e){return t.handleChipBlur(e)})("chipFocus",function(e){return t.handleChipFocus(e)}),l.Tb()),2&e&&(l.Cb(1),l.Pc(t.event),l.Cb(1),l.mc("items",t.filteredStrings)("ngModel",t.stringsModel))},directives:[h.c,u.m,u.p],styles:[""]}),U),F=[{path:"",component:(I=function t(){e(this,t)},I.\u0275fac=function(e){return new(e||I)},I.\u0275cmp=l.Ib({type:I,selectors:[["chips-demo"]],decls:16,vars:16,consts:[[3,"demoId","demoTitle"]],template:function(e,t){1&e&&(l.Ub(0,"demo-component",0),l.Pb(1,"chips-demo-with-requireMatch-attribute"),l.Tb(),l.Ub(2,"demo-component",0),l.Pb(3,"chips-demo-with-required-attribute"),l.Tb(),l.Ub(4,"demo-component",0),l.Pb(5,"chips-demo-with-objects"),l.Tb(),l.Ub(6,"demo-component",0),l.Pb(7,"chips-demo-with-chip-avatar"),l.Tb(),l.Ub(8,"demo-component",0),l.Pb(9,"chips-demo-as-stacked-chips"),l.Tb(),l.Ub(10,"demo-component",0),l.Pb(11,"chips-demo-as-custom-chips"),l.Tb(),l.Ub(12,"demo-component",0),l.Pb(13,"chips-demo-with-compareWith-function"),l.Tb(),l.Ub(14,"demo-component",0),l.Pb(15,"chips-demo-for-chip-events"),l.Tb()),2&e&&(l.mc("demoId","chips-demo-with-requireMatch-attribute")("demoTitle","Configurable Autocomplete"),l.Cb(2),l.mc("demoId","chips-demo-with-required-attribute")("demoTitle","Required Attribute"),l.Cb(2),l.mc("demoId","chips-demo-with-objects")("demoTitle","Autocomplete From Object"),l.Cb(2),l.mc("demoId","chips-demo-with-chip-avatar")("demoTitle","Chips With Avatars"),l.Cb(2),l.mc("demoId","chips-demo-as-stacked-chips")("demoTitle","Stacked Chips"),l.Cb(2),l.mc("demoId","chips-demo-as-custom-chips")("demoTitle","Custom Chips"),l.Cb(2),l.mc("demoId","chips-demo-with-compareWith-function")("demoTitle","Unique Values"),l.Cb(2),l.mc("demoId","chips-demo-for-chip-events")("demoTitle","Events"))},directives:[p.a,f,b,C,q,L,R,E,B],styles:[""]}),I)}],W=((P=function t(){e(this,t)}).\u0275mod=l.Mb({type:P}),P.\u0275inj=l.Lb({factory:function(e){return new(e||P)},imports:[[d.g.forChild(F)],d.g]}),P),J=o("Krbs"),D=((x=function t(){e(this,t)}).\u0275mod=l.Mb({type:x}),x.\u0275inj=l.Lb({factory:function(e){return new(e||x)},imports:[[J.a,W,a.a,r.c,u.i,m.b,w.b,g.b]]}),x)}}])}();