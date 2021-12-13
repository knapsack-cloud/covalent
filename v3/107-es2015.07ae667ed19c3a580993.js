(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{fVCe:function(n,e,t){"use strict";t.r(e),t.d(e,"MarkdownDemoModule",function(){return y});var o=t("SVse"),a=t("UBqq"),s=t("iInd"),r=t("8Y7J"),c=t("MJ5V"),d=t("H4p7");let i=(()=>{class n{constructor(){this.basicMarkdown="\n    # Heading (H1)\n\n    ## Sub Heading (H2)\n\n    ### Steps (H3)\n\n    ###List Items\n\n    - One\n    - Two\n    - Three\n        * 4 extra spaces for nested lists\n            * Another 4 spaces for a nested list\n\n    Emphasis, aka italics, with *asterisks* or _underscores_.\n\n    Strong emphasis, aka bold, with **asterisks** or __underscores__.\n\n    Combined emphasis with **asterisks and _underscores_**.\n  ",this.blockquoteMarkdown="\n    > Blockquotes are very handy in email to emulate reply text.\n    > This line is part of the same quote.\n\n    Quote break.\n\n    > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure\n    this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n  ",this.dividerMarkdown="\n    Three or more...\n\n    ---\n\n    Hyphens\n\n    ***\n\n    Asterisks\n\n    ___\n\n    Underscores\n  ",this.codeblockMarkdown='\n    `this is an inline code snippet`\n\n    ```javascript\n    var s = "JavaScript syntax highlighting";\n    alert(s);\n    ```\n\n    ```python\n    s = "Python syntax highlighting"\n    print s\n    ```\n  ',this.linksMarkdown="\n    [I'm an inline-style link](https://teradata.github.io/)\n\n    [I'm a reference-style link case does not matter][Teradata Github Landing]\n\n    [teradata github Landing]: https://teradata.github.io/\n\n    Inline image:\n    ![alt text here](assets/icons/teradata-dark.svg)\n\n    Reference-style image:\n    ![alt text][logo]\n\n    [logo]: assets/icons/teradata-dark.svg \"Teradata Labs\"\n  "}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Ib({type:n,selectors:[["markdown-demo-basic"]],decls:29,vars:5,template:function(n,e){1&n&&(r.Ub(0,"h2"),r.Oc(1,"Basic Markdown"),r.Tb(),r.Ub(2,"td-markdown"),r.Oc(3),r.Tb(),r.Ub(4,"h2"),r.Oc(5,"Blockquotes"),r.Tb(),r.Ub(6,"td-markdown"),r.Oc(7),r.Tb(),r.Ub(8,"h2"),r.Oc(9,"Dividers"),r.Tb(),r.Ub(10,"td-markdown"),r.Oc(11),r.Tb(),r.Ub(12,"h2"),r.Oc(13,"Code Blocks"),r.Tb(),r.Ub(14,"p"),r.Oc(15,"Inline has `back-ticks` around it."),r.Tb(),r.Ub(16,"p"),r.Oc(17," Blocks of code are either fenced by lines with three back-ticks "),r.Ub(18,"code"),r.Oc(19,"```"),r.Tb(),r.Oc(20," , or are indented with four spaces.\n"),r.Tb(),r.Ub(21,"td-markdown"),r.Oc(22),r.Tb(),r.Ub(23,"h2"),r.Oc(24,"Links & Images"),r.Tb(),r.Ub(25,"p"),r.Oc(26,"There are two ways to create links. Inline & reference:"),r.Tb(),r.Ub(27,"td-markdown"),r.Oc(28),r.Tb()),2&n&&(r.Cb(3),r.Pc(e.basicMarkdown),r.Cb(4),r.Pc(e.blockquoteMarkdown),r.Cb(4),r.Pc(e.dividerMarkdown),r.Cb(11),r.Pc(e.codeblockMarkdown),r.Cb(6),r.Pc(e.linksMarkdown))},directives:[d.a],styles:[""]}),n})();var b=t("PDjf"),m=t("Dxy4");let u=(()=>{class n{constructor(){this.markdown="\n    * [Heading 1](#heading-1)\n    * [Heading 2](#heading-2)\n\n    # Heading 1\n\n    ## Heading 2"}jumpToH1(){this.anchor="heading-1"}jumpToH2(){this.anchor="heading-2"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Ib({type:n,selectors:[["markdown-demo-anchor-jumping"]],decls:8,vars:2,consts:[[3,"anchor"],["mat-button","","color","accent",1,"text-upper",3,"click"]],template:function(n,e){1&n&&(r.Ub(0,"mat-card-content"),r.Ub(1,"td-markdown",0),r.Oc(2),r.Tb(),r.Tb(),r.Ub(3,"mat-card-actions"),r.Ub(4,"button",1),r.cc("click",function(){return e.jumpToH1()}),r.Oc(5,"Jump to heading 1"),r.Tb(),r.Ub(6,"button",1),r.cc("click",function(){return e.jumpToH2()}),r.Oc(7,"Jump to heading 2"),r.Tb(),r.Tb()),2&n&&(r.Cb(1),r.mc("anchor",e.anchor),r.Cb(1),r.Pc(e.markdown))},directives:[b.c,d.a,b.b,m.b],styles:[""]}),n})(),l=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Ib({type:n,selectors:[["markdown-demo-hosted-url"]],decls:4,vars:0,consts:[["hostedUrl","https://github.com/Teradata/covalent/blob/develop/README.md"]],template:function(n,e){1&n&&(r.Ub(0,"td-markdown",0),r.Oc(1," * [Relative path with a hostedUrl provided](docs/GETTING_STARTED.md)\n"),r.Tb(),r.Ub(2,"td-markdown"),r.Oc(3,"* [Relative path without a hostedUrl provided](docs/GETTING_STARTED.md)"),r.Tb())},directives:[d.a],styles:[""]}),n})(),h=(()=>{class n{constructor(){this.videoMarkdown="\n## Embed YouTube Videos\n\nUse this custom embed syntax and you can embed YouTube videos with ease\n```![youtube URL here]```\n\nThis works with any of these base URLs (with or without the 'https://www.' portion):\n* youtube.com\n* youtu.be\n\n## Example\n\n\n\n### Short syntax\n(youtu.be/dQw4w9WgXcQ)\n\n![youtu.be/dQw4w9WgXcQ]\n\n### Watch link syntax\n(https://www.youtube.com/watch?v=dQw4w9WgXcQ&start=10)\n\n![https://www.youtube.com/watch?v=dQw4w9WgXcQ&start=10]\n\n### Embed link syntax\n(www.youtube.com/embed/dQw4w9WgXcQ?start=20)\n\n![www.youtube.com/embed/dQw4w9WgXcQ?start=20]\n\n### Playlist embedding\n(https://youtube.com/playlist?list=PLXIU9mpT9-03zDjIdMvJRmcANfW644x3F)\n\n![https://youtube.com/playlist?list=PLXIU9mpT9-03zDjIdMvJRmcANfW644x3F&autoplay=1]\n  "}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Ib({type:n,selectors:[["markdown-demo-youtube"]],decls:4,vars:1,template:function(n,e){1&n&&(r.Ub(0,"h2"),r.Oc(1,"Embed videos directly"),r.Tb(),r.Ub(2,"td-markdown"),r.Oc(3),r.Tb()),2&n&&(r.Cb(3),r.Pc(e.videoMarkdown))},directives:[d.a],styles:[""]}),n})();const w=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Ib({type:n,selectors:[["markdown-demo"]],decls:8,vars:8,consts:[[3,"demoId","demoTitle"]],template:function(n,e){1&n&&(r.Ub(0,"demo-component",0),r.Pb(1,"markdown-demo-basic"),r.Tb(),r.Ub(2,"demo-component",0),r.Pb(3,"markdown-demo-anchor-jumping"),r.Tb(),r.Ub(4,"demo-component",0),r.Pb(5,"markdown-demo-hosted-url"),r.Tb(),r.Ub(6,"demo-component",0),r.Pb(7,"markdown-demo-youtube"),r.Tb()),2&n&&(r.mc("demoId","markdown-demo-basic")("demoTitle","Basic"),r.Cb(2),r.mc("demoId","markdown-demo-anchor-jumping")("demoTitle","Anchor Jumping"),r.Cb(2),r.mc("demoId","markdown-demo-hosted-url")("demoTitle","Hosted URL For Generating Absolute URLs"),r.Cb(2),r.mc("demoId","markdown-demo-youtube")("demoTitle","YouTube video embedding"))},directives:[c.a,i,u,l,h],styles:[""]}),n})()}];let p=(()=>{class n{}return n.\u0275mod=r.Mb({type:n}),n.\u0275inj=r.Lb({factory:function(e){return new(e||n)},imports:[[s.g.forChild(w)],s.g]}),n})();var k=t("Krbs");let y=(()=>{class n{}return n.\u0275mod=r.Mb({type:n}),n.\u0275inj=r.Lb({factory:function(e){return new(e||n)},imports:[[k.a,p,a.a,o.c,m.c,b.e]]}),n})()}}]);