_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"97Is":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("uNx/")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),u=t("nOHt"),i=t("vNVm"),s={};function f(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",l=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,h=e.replace,_=e.shallow,b=e.scroll,y=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var E=c.Children.only(v),g=E&&"object"===typeof E&&E.ref,m=(0,i.useIntersection)({rootMargin:"200px"}),w=r(m,2),L=w[0],M=w[1],N=c.default.useCallback((function(e){L(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,L]);(0,c.useEffect)((function(){var e=M&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof y?y:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(t,d,p,{locale:r})}),[p,d,M,y,n,t]);var j={ref:N,onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,t,d,p,h,_,b,y)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};if(e.passHref||"a"===E.type&&!("href"in E.props)){var x="undefined"!==typeof y?y:t&&t.locale,O=(0,a.getDomainLocale)(p,x,t&&t.locales,t&&t.domainLocales);j.href=O||(0,a.addBasePath)((0,a.addLocale)(p,x,t&&t.defaultLocale))}return c.default.cloneElement(E,j)};n.default=l},d42c:function(e,n,t){e.exports={not_found:"__404_not_found__1EElt"}},"uNx/":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var r=t("nKUr"),o=t("YFqc"),c=t.n(o),a=t("d42c"),u=t.n(a);function i(){return Object(r.jsxs)("div",{className:u.a.not_found,children:[Object(r.jsxs)("p",{children:["Your request is"," ",Object(r.jsx)("b",{children:"not found"})]}),Object(r.jsx)(c.a,{href:"/",children:"Back to Home"})]})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,o=(0,c.useRef)(),s=(0,c.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||l||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,l]);return(0,c.useEffect)((function(){u||l||(0,a.default)((function(){return d(!0)}))}),[l]),[p,l]};var c=t("q1tI"),a=o(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var i=new Map}},[["97Is",0,2,1]]]);