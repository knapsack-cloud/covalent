(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{C8DH:function(e,t,o){"use strict";o.r(t),o.d(t,"HighlightDemoModule",function(){return y});var n=o("SVse"),s=o("XkJo"),c=o("iInd"),i=o("8Y7J"),r=o("MJ5V"),l=o("0UeP"),d=o("P3Mj");let a=(()=>{class e{constructor(){this.html="\n  <div>\n    <h1>hello world!</h1>\n    <span>Some additional text here</span>\n  </div>\n  "}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["highlight-demo-html"]],decls:2,vars:1,consts:[["codeLang","html"]],template:function(e,t){1&e&&(i.Ub(0,"td-highlight",0),i.Oc(1),i.Tb()),2&e&&(i.Cb(1),i.Qc(" ",t.html,"\n"))},directives:[d.a],styles:[""]}),e})(),h=(()=>{class e{constructor(){this.code="\n  import { Injectable } from '@angular/core';\n  import { Observable, Subject } from 'rxjs';\n\n  @Injectable()\n  export class Service {\n\n    private _sources: {[key : string]: Subject<any>} = {};\n    private _observables: {[key: string]: Observable<any>} = {};\n\n    constructor() { }\n\n    public register(name) : Observable<any> {\n      this._sources[name] = new Subject<any>();\n      this._observables[name] = this._sources[name].asObservable();\n      return this._observables[name];\n    }\n\n    public emit(name: string): void {\n      if (this._sources[name]) {\n        this._sources[name].next(null);\n      }\n    }\n  }\n  "}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["highlight-demo-ts"]],decls:2,vars:1,consts:[["codeLang","typescript"]],template:function(e,t){1&e&&(i.Ub(0,"td-highlight",0),i.Oc(1),i.Tb()),2&e&&(i.Cb(1),i.Qc(" ",t.code,"\n"))},directives:[d.a],styles:[""]}),e})(),m=(()=>{class e{constructor(){this.css="\n  .flex-container {\n    display: flex;\n  }\n  ",this.tooltipsConfig={copy:"Copy text",copied:"Text copied"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["highlight-demo-copy-code"]],decls:2,vars:3,consts:[["codeLang","css",3,"copyCodeToClipboard","copyCodeTooltips"]],template:function(e,t){1&e&&(i.Ub(0,"td-highlight",0),i.Oc(1),i.Tb()),2&e&&(i.mc("copyCodeToClipboard",!0)("copyCodeTooltips",t.tooltipsConfig),i.Cb(1),i.Qc(" ",t.css,"\n"))},directives:[d.a],styles:[""]}),e})();const p=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["highlight-demo"]],decls:8,vars:8,consts:[[3,"demoId","demoTitle"]],template:function(e,t){1&e&&(i.Ub(0,"demo-component",0),i.Pb(1,"highlight-demo-css"),i.Tb(),i.Ub(2,"demo-component",0),i.Pb(3,"highlight-demo-html"),i.Tb(),i.Ub(4,"demo-component",0),i.Pb(5,"highlight-demo-ts"),i.Tb(),i.Ub(6,"demo-component",0),i.Pb(7,"highlight-demo-copy-code"),i.Tb()),2&e&&(i.mc("demoId","highlight-demo-css")("demoTitle","CSS"),i.Cb(2),i.mc("demoId","highlight-demo-html")("demoTitle","HTML"),i.Cb(2),i.mc("demoId","highlight-demo-ts")("demoTitle","TypeScript"),i.Cb(2),i.mc("demoId","highlight-demo-copy-code")("demoTitle","CopyCode"))},directives:[r.a,l.a,a,h,m],styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[c.g.forChild(p)],c.g]}),e})();var u=o("Krbs"),g=o("KymJ");let y=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[g.a,u.a,b,s.a,n.c]]}),e})()}}]);