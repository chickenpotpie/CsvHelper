(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{32:function(e,t,n){"use strict";n.r(t);var o=n(16),a=n.n(o),r=n(17),c=n.n(r),i=n(18),s=n.n(i),l=n(19),u=n.n(l),h=n(66),d=n.n(h),v=n(20),m=n.n(v),p=n(67),f=n.n(p),b=n(0),g=n.n(b),y=n(21),E=n(13),k=n(148),w=n.n(k),O=n(151),I=n.n(O),T=(n(138),!1);function L(e){if(!0!==T){T=!0,I.a.configure({languages:["cs"]});var t=new w.a.Renderer;t.blockquote=function(e){return'<div class="content"><blockquote>'.concat(e,"</blockquote></div>")},t.code=function(e,t){return this.options.highlight&&(e=this.options.highlight(e,t)||e),'<div class="columns"><div class="column" style="overflow-x: auto"><pre><code class="'.concat(t,'">').concat(e,"</code></pre></div></div>")},t.heading=function(e,t){return"<h".concat(t,' id="').concat(function(e){return e.toLowerCase().match(/[\w]+/g).map(function(e){return encodeURIComponent(e)}).join("-")}(e),'" class="title is-').concat(t,'"><span>').concat(e,"</span></h").concat(t,">")},t.link=function(t,n,o){return e&&(t="".concat(e).concat(t)),'<a href="'.concat(t,'" target="').concat((/^[\/#].*/.test(t),"_self"),'">').concat(o,"</a>")},t.list=function(e,t){return t?'<div class="content"><ol>'.concat(e,"</ol></div>"):'<div class="content"><ul>'.concat(e,"</ul></div>")},t.paragraph=function(e){return function(e){return'<div class="columns"><div class="column">'.concat(e,"</div></div>")}("<p>".concat(e,"</p>"))},t.table=function(e,t){var n=e.replace(/<\/?tr>|<\/?th>|&nbsp;|\s/gi,"").length>0?"":"has-empty-head";return'\n\t\t\t<table class="table '.concat(n,'">\n\t\t\t\t<thead>').concat(e,"</thead>\n\t\t\t\t<tbody>").concat(t,"</tbody>\n\t\t\t</table>\n\t\t")},w.a.setOptions({renderer:t,highlight:function(e,t,n){I.a;return t?I.a.highlight(t,e,!0).value:I.a.highlightAuto(e).value}})}}var R=function(e){function t(e){var n;return a()(this,t),n=s()(this,u()(t).call(this,e)),f()(d()(n),"handleDivObserved",function(){n.registerAnchorEventListeners(),n.scroll()}),f()(d()(n),"handleAnchorClick",function(e){var t=n.props,o=t.history,a=t.basePath,r=e.currentTarget.getAttribute("href");r.startsWith(a)&&(r=r.replace(a,"")),"/"===r[0]&&(e.preventDefault(),o.push(r))}),n.divRef=Object(b.createRef)(),L(n.props.basePath),n}return m()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.intersectionObserver=new IntersectionObserver(this.handleDivObserved),this.intersectionObserver.observe(this.divRef.current)}},{key:"componentDidUpdate",value:function(e){e.data!==this.props.data&&(this.removeAnchorEventListeners(),this.registerAnchorEventListeners()),e.location!==this.props.location&&this.scroll()}},{key:"componentWillUnmount",value:function(){this.removeAnchorEventListeners()}},{key:"registerAnchorEventListeners",value:function(){this.anchors=this.divRef.current.getElementsByTagName("a");var e=!0,t=!1,n=void 0;try{for(var o,a=this.anchors[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){o.value.addEventListener("click",this.handleAnchorClick)}}catch(r){t=!0,n=r}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}},{key:"removeAnchorEventListeners",value:function(){var e=!0,t=!1,n=void 0;try{for(var o,a=this.anchors[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){o.value.removeEventListener("click",this.handleAnchorClick)}}catch(r){t=!0,n=r}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}},{key:"scroll",value:function(){var e=this.props.location.hash.slice(1);e?document.getElementById(e).scrollIntoView():window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.data,o=w()(n);return g.a.createElement("div",{ref:this.divRef,className:t,dangerouslySetInnerHTML:{__html:o}})}}]),t}(b.Component),S=Object(y.withSiteData)(Object(y.withRouteData)(Object(E.o)(R))),A=n(68),D=n.n(A),N=n(12),C=n(39),B=n(147),j=n(338),F=n.n(j),W=function(e){function t(){var e,n;a()(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return n=s()(this,(e=u()(t)).call.apply(e,[this].concat(r))),f()(d()(n),"state",{openTocItems:[]}),f()(d()(n),"handleItemToggleClick",function(e){var t=-1===n.state.openTocItems.indexOf(e.path)?[].concat(D()(n.state.openTocItems),[e.path]):D()(n.state.openTocItems).filter(function(t){return t!==e.path});n.setState({openTocItems:t})}),n}return m()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.setDefaultOpenTocItems()}},{key:"setDefaultOpenTocItems",value:function(){var e=this.props.toc,t=[];this.updateOpenTocItemsForRoute(e,t),this.setState({openTocItems:t})}},{key:"updateOpenTocItemsForRoute",value:function(e,t){var n=this;this.props.location.pathname.startsWith("/".concat(e.path,"/"))&&t.push(e.path),e.children&&e.children.forEach(function(e){return n.updateOpenTocItemsForRoute(e,t)})}},{key:"renderTocItems",value:function(e,t){var n=this,o=this.props.location.pathname,a=this.state.openTocItems;return g.a.createElement(b.Fragment,null,e.map(function(e,r){return g.a.createElement(b.Fragment,{key:r},g.a.createElement("div",{className:F()("toc-item",{"is-current":o==="/".concat(e.path)}),style:{paddingLeft:20*t+10}},e.children&&g.a.createElement("a",{className:"toc-item-toggle",onClick:n.handleItemToggleClick.bind(n,e)},g.a.createElement("span",{className:"icon"},a.includes(e.path)&&g.a.createElement(C.a,{icon:B.b}),!a.includes(e.path)&&g.a.createElement(C.a,{icon:B.a}))),g.a.createElement(N.Link,{className:"toc-item-name",to:"/".concat(e.path)},e.title)),a.includes(e.path)&&g.a.createElement(b.Fragment,null,e.children&&n.renderTocItems(e.children,t+1)))}))}},{key:"render",value:function(){var e=this.props.toc;return g.a.createElement(b.Fragment,null,e&&g.a.createElement("div",{className:"toc"},this.renderTocItems(e.children,0)))}}]),t}(b.Component),x=Object(E.o)(Object(y.withRouteData)(W)),M=function(e){function t(){var e,n;a()(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return n=s()(this,(e=u()(t)).call.apply(e,[this].concat(r))),f()(d()(n),"state",{sidebarBottom:0}),f()(d()(n),"handleWindowScroll",function(){n.updateSidebarBottom()}),n}return m()(t,e),c()(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleWindowScroll),this.intersectionObserver=new IntersectionObserver(this.updateSidebarBottom),this.footerEl=document.querySelector("#root > footer.footer"),this.intersectionObserver.observe(this.footerEl)}},{key:"componentWillUnmount",value:function(){var e;window.removeEventListener("scroll",this.handleWindowScroll),null===(e=this.intersectionObserver)||void 0===e||e.unobserve(this.footerEl),delete this.intersectionObserver}},{key:"updateSidebarBottom",value:function(){var e;if(null===(e=this.intersectionObserver)||void 0===e||e.unobserve(this.footerEl),delete this.intersectionObserver,this.footerEl){var t=window.innerHeight-this.footerEl.getBoundingClientRect().top,n=Math.max(0,t);this.setState({sidebarBottom:n})}}},{key:"render",value:function(){var e=this.state.sidebarBottom;return g.a.createElement("div",{className:"documentation container is-fluid"},g.a.createElement("div",{className:"columns"},g.a.createElement("div",{className:"column container-right"},g.a.createElement("div",{className:"sidebar",style:{bottom:e}},g.a.createElement(x,null))),g.a.createElement("div",{className:"column container-content"},g.a.createElement(S,null),g.a.createElement("br",null))))}}]),t}(b.Component);t.default=Object(y.withRouteData)(M)}}]);