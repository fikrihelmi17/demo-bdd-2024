_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{ZC4z:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),r=n("o0o1"),c=n.n(r),i=n("HaE+"),o=n("rePB"),s=n("1OyB"),l=n("vuIU"),u=n("JX7q"),_=n("Ji7U"),d=n("md7G"),h=n("foSv"),p=n("g4pe"),b=n.n(p),g=n("q1tI"),f=n.n(g),w=n("UiDi"),j=n.n(w),O=n("Zi+9"),y=n.n(O),v=n("4Yaq"),N=n("buME"),m=n("4G/G");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var T=function(e){Object(_.a)(n,e);var t=S(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={title:"",body:"",tags:[],isFetching:!1},a.contentEditable=f.a.createRef(),a.handleTitleChange=a.handleTitleChange.bind(Object(u.a)(a)),a.handleTagsChange=a.handleTagsChange.bind(Object(u.a)(a)),a.handleBodyChange=a.handleBodyChange.bind(Object(u.a)(a)),a.handleSaveNote=a.handleSaveNote.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleTitleChange",value:function(e){var t=e.target;this.setState((function(e){return x(x({},e),{},{title:t.value})}))}},{key:"handleTagsChange",value:function(e){var t=e.target;this.setState((function(e){return x(x({},e),{},{tags:t.value.split(",").map((function(e){return e.trim()})).filter((function(e){return""!==e}))})}))}},{key:"handleBodyChange",value:function(e){var t=e.target;this.setState((function(e){return x(x({},e),{},{body:t.value})}))}},{key:"handleSaveNote",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.title,a=t.body,r=t.tags,this.setState((function(e){return x(x({},e),{},{isFetching:!0})})),e.prev=2,e.next=5,Object(m.a)("".concat(Object(N.a)(),"notes"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,body:a,tags:r})});case 5:window&&(window.location.href="/"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),window&&alert(e.t0.message),this.setState((function(e){return x(x({},e),{},{isFetching:!1})}));case 12:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleDiscardNote",value:function(){window&&(window.location.href="/")}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.body,r=e.isFetching;return Object(a.jsxs)("div",{children:[Object(a.jsx)(b.a,{children:Object(a.jsx)("title",{children:"Add New Notes"})}),Object(a.jsx)(v.a,{}),Object(a.jsx)("main",{className:y.a.new_page,children:Object(a.jsxs)("section",{className:y.a.new_page__content,children:[Object(a.jsxs)("header",{className:y.a.new_page__header,children:[Object(a.jsx)("input",{className:y.a.new_page__title,value:t,onChange:this.handleTitleChange,type:"text",autoComplete:"off",placeholder:"Note title"}),Object(a.jsx)("input",{className:y.a.new_page__tags,placeholder:"Tag 1, Tag 2, Tag 3",type:"text",autoComplete:"off",onChange:this.handleTagsChange})]}),Object(a.jsx)(j.a,{className:y.a.new_page__body,html:n,innerRef:this.contentEditable,disabled:!1,onChange:this.handleBodyChange}),Object(a.jsxs)("div",{className:y.a.new_page__action,children:[Object(a.jsx)("button",{disabled:r,className:y.a.update_button,type:"button",onClick:this.handleSaveNote,children:"Save Note"}),Object(a.jsx)("button",{className:y.a.delete_button,type:"button",onClick:this.handleDiscardNote,children:"Discard"})]})]})})]})}}]),n}(g.Component);t.default=T},"Zi+9":function(e,t,n){e.exports={new_page:"New_new_page__ZrM1D",new_page__content:"New_new_page__content__2muL5",new_page__header:"New_new_page__header__3wilU",new_page__title:"New_new_page__title__26E2P",new_page__tags:"New_new_page__tags__2tmXb",new_page__body:"New_new_page__body__2sbAG",new_page__action:"New_new_page__action__17Dar",update_button:"New_update_button__3cfHB",delete_button:"New_delete_button__2gOWt"}},uVOm:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/new",function(){return n("ZC4z")}])}},[["uVOm",0,2,1,3]]]);