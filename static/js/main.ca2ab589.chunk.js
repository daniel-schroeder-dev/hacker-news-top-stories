(this["webpackJsonphn-top-stories"]=this["webpackJsonphn-top-stories"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),s=n.n(c),i=(n(11),n(1)),o=n.n(i),l=n(5),u=n(2);n(13);var m=function(e){return r.a.createElement("div",{className:"loading-icon-container"},r.a.createElement("div",{className:"loading-icon"}),r.a.createElement("div",{className:"loading-icon"}),r.a.createElement("div",{className:"loading-icon"}))};n(14);var p=function(e){return r.a.createElement("li",{className:"card"},r.a.createElement("div",{className:"card__item-number"},r.a.createElement("span",{className:"card__item-number__number"},e.number)),r.a.createElement("a",{className:"card__article-title-link",href:e.url},e.title)," ",r.a.createElement("span",{className:"card__article-title-by"},"by")," ",r.a.createElement("span",{className:"card__article-title-author"},e.by))};n(15);var f=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!0),i=Object(u.a)(s,2),f=i[0],h=i[1],d=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",t="https://hacker-news.firebaseio.com/v0/item/",e.next=4,fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");case 4:return n=e.sent,e.next=7,n.json();case 7:return a=(a=e.sent).slice(0,20).map((function(e){return fetch("".concat(t).concat(e,".json?print=pretty"))})),e.next=11,Promise.all(a);case 11:return r=e.sent,e.next=14,Promise.all(r.map((function(e){return e.json()})));case 14:return c=e.sent,e.abrupt("return",c);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d().then((function(e){setTimeout((function(){c(e),h(!1)}),2e3)}))}),[]),r.a.createElement("main",{className:"app"},f&&r.a.createElement(m,null),r.a.createElement("div",{className:"app__articles-container",style:{opacity:f?0:1}},r.a.createElement("h1",null,"Top 20 Articles from Hacker News"),n.length?n.map((function(e,t){return r.a.createElement(p,{key:e.id,by:e.by,title:e.title,number:t+1,url:e.url})})):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.ca2ab589.chunk.js.map