(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1530],{4113:function(e,s,t){Promise.resolve().then(t.t.bind(t,9571,23)),Promise.resolve().then(t.bind(t,5668)),Promise.resolve().then(t.bind(t,6747))},487:function(e,s,t){"use strict";t.d(s,{wW:function(){return l}});var a=t(5650);function l(){return(0,a.useCallback)(function(e,...s){var t,a;return null===(a=(t=window).plausible)||void 0===a?void 0:a.call(t,e,s[0])},[])}t(9283),t(4472)},1038:function(e,s,t){"use strict";t.d(s,{default:function(){return l.a}});var a=t(6180),l=t.n(a)},6180:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{default:function(){return c},getImageProps:function(){return r}});let a=t(8324),l=t(5771),n=t(9571),i=a._(t(5898));function r(e){let{props:s}=(0,l.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[280,560,387,774,400,800,510,1020,556,1112,596,1192,720,1440,750,1500,1024,2048,1080,2160,1216,2432],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(s))void 0===t&&delete s[e];return{props:s}}let c=n.Image},5668:function(e,s,t){"use strict";t.d(s,{Search:function(){return D}});var a,l,n=t(3516),i=t(5650);let r={stroke:2,size:24,searchPattern:"",category:"All",color:"currentColor",style:"outline"},c=(0,i.createContext)({dispatch:()=>{},...r}),o=(e,s)=>{switch(s.type){case"SET_STROKE":return{...e,stroke:s.payload};case"SET_SIZE":return{...e,size:s.payload};case"SET_SEARCH_PATTERN":return{...e,searchPattern:s.payload};case"SET_CATEGORY":return{...e,category:s.payload};case"SET_COLOR":return{...e,color:s.payload};case"SET_STYLE":return{...e,style:s.payload};default:return e}};(a=l||(l={})).SET_STROKE="SET_STROKE",a.SET_SIZE="SET_SIZE",a.SET_SEARCH_PATTERN="SET_SEARCH_PATTERN",a.SET_CATEGORY="SET_CATEGORY",a.SET_COLOR="SET_COLOR",a.SET_STYLE="SET_STYLE";var d=t(1882);function u(e){let{iconsCount:s}=e,{searchPattern:t,dispatch:a,style:r}=(0,i.useContext)(c);return(0,n.jsx)("div",{className:"icon-search-wrap",children:(0,n.jsx)("label",{className:"icon-search",children:(0,n.jsxs)("div",{className:"row gx-4 items-center",children:[(0,n.jsx)("div",{className:"col-auto d-flex",children:(0,n.jsx)(d.J,{name:"search",className:"icon-search-icon"})}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("input",{value:t,type:"text",className:"icon-search-input",placeholder:"Search ".concat(s," ").concat(r," icons"),onChange:e=>a({type:l.SET_SEARCH_PATTERN,payload:e.target.value})})})]})})})}var m=t(2445),h=t(1102),x=t(8289),v=t(794),g=t(6297),j=t(4189);let p=(e,s)=>{},f=()=>{let{category:e,style:s,dispatch:t}=(0,i.useContext)(c),a=[{name:"All",count:{outline:h.FG.map(e=>e.count.outline).reduce((e,s)=>e+s,0),filled:h.FG.map(e=>e.count.filled).reduce((e,s)=>e+s,0)}},...h.FG].map(e=>({...e,count:e.count[s]})).filter(e=>0!==e.count);return(0,n.jsx)("div",{children:a&&(0,n.jsxs)("div",{className:"row items-center",children:[(0,n.jsx)("div",{className:"col-4 font-medium",children:"Category:"}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("select",{"aria-label":"Category select",value:e,className:"form-select w-100 rounded-full",onChange:e=>{t({type:l.SET_CATEGORY,payload:e.target.value});let s=document.getElementById("search");s&&window.scrollY>s.offsetTop&&s.scrollIntoView({behavior:"smooth"}),p("category",e.target.value)},children:a.map(e=>(0,n.jsx)("option",{value:e.name,children:e.name},e.name))})})]})})},N=()=>{let{stroke:e,dispatch:s}=(0,i.useContext)(c);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col font-medium",children:"Stroke:"}),(0,n.jsx)("div",{className:"col text-muted text-right",children:e})]}),(0,n.jsx)("div",{children:(0,n.jsx)(g.A,{min:"1",max:"2",step:"0.25",value:e,label:"Stroke slider",onChange:e=>{s({type:l.SET_STROKE,payload:+e.target.value}),p("stroke",e.target.value)}})})]})},y=()=>{let{size:e,dispatch:s}=(0,i.useContext)(c);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col font-medium",children:"Size:"}),(0,n.jsx)("div",{className:"col text-muted text-right",children:e})]}),(0,n.jsx)("div",{children:(0,n.jsx)(g.A,{min:"16",max:"48",step:"4",value:e,label:"Size slider",onChange:e=>{s({type:l.SET_SIZE,payload:+e.target.value}),p("size",e.target.value)}})})]})},w=()=>{let{style:e,dispatch:s}=(0,i.useContext)(c);return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"row items-center",children:[(0,n.jsx)("div",{className:"col-4 font-medium",children:"Style:"}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(m.Z,{availableStyles:["outline","filled"],style:e,setStyle:e=>{s({type:l.SET_STYLE,payload:e}),p("style",e)},className:"w-100"})})]})})},b=()=>(0,n.jsx)(v.default,{href:"/emails",className:"icon-banner ratio-1x1",style:{backgroundImage:"url(/img/emails/banner-icons.png)"}}),S=()=>{let{color:e,dispatch:s}=(0,i.useContext)(c),[t,a]=(0,i.useState)(e);return(0,i.useEffect)(()=>{s({type:l.SET_COLOR,payload:t}),s({type:l.SET_COLOR,payload:t})},[t]),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"row items-center",children:[(0,n.jsx)("div",{className:"col-4 font-medium",children:"Color:"}),(0,n.jsx)("div",{className:"col-8",children:(0,n.jsx)(x.z,{color:e,setColor:a})})]})})},C=()=>{let{style:e,dispatch:s}=(0,i.useContext)(c),t=()=>{s({type:l.SET_STROKE,payload:2}),s({type:l.SET_SIZE,payload:24}),s({type:l.SET_COLOR,payload:"currentColor"}),s({type:l.SET_STYLE,payload:"outline"}),s({type:l.SET_CATEGORY,payload:"All"})};return(0,n.jsxs)("div",{className:"lg:mb-8 sticky-top",children:[(0,n.jsxs)("div",{className:"bg-secondary p-4 py-3 rounded-lg font-h6",children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsxs)("div",{className:"row items-center",children:[(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("h2",{className:"h4 m-0",children:"Customize icons"})}),(0,n.jsx)("div",{className:"col-auto d-none md:d-flex",children:(0,n.jsx)("div",{className:"tooltip","data-title":"Reset settings to default values",children:(0,n.jsx)(j.z,{action:!0,onClick:()=>t(),"aria-label":"Reset setting to default values",icon:(0,n.jsx)(d.J,{name:"reload"})})})})]})}),(0,n.jsxs)("div",{className:"space-y",children:[(0,n.jsx)(w,{}),(0,n.jsx)(y,{}),"outline"==e&&(0,n.jsx)(N,{}),(0,n.jsx)(S,{}),(0,n.jsx)(f,{})]})]}),(0,n.jsx)("div",{className:"d-none lg-d-block mt-6",children:(0,n.jsx)(b,{})})]})};var E=t(8193),k=t(8164),T=t(487),_=t(6913),A=t(4746),R=t(2526),O=t(469),z=t(8967),L=t(389),M=t(3372),P=t(903),Z=t(5015);let W=e=>{let{icon:s,stroke:t,color:a,defaultStyle:l}=e,r=(0,P.Z)(),[c,o]=(0,i.useState)(l),u=Object.keys(s.styles),h=[{name:"Icon"+(0,L.Mh)(s.name)+("filled"===c?"Filled":""),tooltip:"Copy React name"},{name:(0,L.ir)(s.styles[c].unicode),tooltip:"Copy HTML char"},{name:s.styles[c].unicode,tooltip:"Copy hex"}],x=(0,M.wF)(s.styles[c].svg,t);x=x.replace(/currentColor/g,a);let v=(e,s)=>{e.preventDefault(),r.copy(s);let t=e.currentTarget,a=t.getAttribute("data-title")||"";t.setAttribute("data-title","Copied!"),setTimeout(()=>{t.setAttribute("data-title",a)},3e3)};return(0,n.jsxs)("div",{className:"row g-5",children:[(0,n.jsxs)("div",{className:"col-12 sm:col-auto",children:[(0,n.jsx)("div",{className:"icon-preview",style:{"--icon-stroke":t,"--icon-color":"".concat(a)},children:(0,n.jsx)(z.e,{svg:s.styles[c].svg})}),u.length>1&&(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)(m.Z,{availableStyles:u,style:c,setStyle:o,className:"w-100"})})]}),(0,n.jsxs)("div",{className:"col d-flex flex-column",children:[(0,n.jsx)("h2",{className:"h2 m-0 mb-2",children:(0,n.jsx)("a",{href:"icons/icon/".concat(s.name),className:"tooltip",onClick:e=>v(e,s.name),"data-title":"Copy icon name",children:s.name})}),(0,n.jsx)("div",{className:"mb-3",children:(0,n.jsx)("div",{className:"list-inline-dots font-h5",children:h.map(e=>(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"icons/icon/".concat(s.name),onClick:s=>v(s,e.name),className:"tooltip link-muted","data-title":e.tooltip,children:e.name})},e.name))})}),(0,n.jsx)("div",{className:"badges-list",children:s.tags.map(e=>(0,n.jsx)("span",{className:"badge badge-sm",children:e},e))}),(0,n.jsxs)("div",{className:"row row mt-auto",children:[(0,n.jsx)("div",{className:"col"}),(0,n.jsx)("div",{className:"col-12 md:col-auto",children:(0,n.jsxs)("div",{className:"btn-list flex-column md:flex-row",children:[(0,n.jsx)(j.z,{onClick:()=>(0,L.Sv)(x,"".concat(s.name,".svg")),icon:(0,n.jsx)(d.J,{name:"download"}),children:"SVG"}),(0,n.jsx)(j.z,{onClick:()=>(0,L.LG)(x,"".concat(s.name,".png")),icon:(0,n.jsx)(d.J,{name:"download"}),children:"PNG"}),(0,n.jsx)(Z.ButtonCopy,{copy:x,children:"Copy SVG"})]})})]})]})]})};var F=t(2689),I=t(9891),J=t(7427);let V=e=>"filled"===e?"Filled":"Outline",G=e=>{let{category:s,query:t,style:a}=e,l=null;return(l="All"!==s&&""!==t?'Search results for "'.concat(t,'" in category ').concat(s):"All"!==s?"".concat(V(a)," icons in category ").concat(s):""!==t?'Search results for "'.concat(t,'"'):"".concat(V(a)," icons"))?(0,n.jsx)("h3",{className:"icons-header mb-5 select-none",children:l}):null},Y=e=>{let{icons:s,query:t}=e,{next:a,prev:l,jump:r,currentData:o,currentPage:d,maxPage:u}=(0,k.Z)(s,105),{stroke:m,size:h,category:x,color:v,style:g}=(0,i.useContext)(c),j=o();return(0,i.useEffect)(()=>{r(1)},[u]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{"data-aos-id-icons":!0,children:[(0,n.jsx)(G,{category:x,query:t,style:g}),(0,n.jsx)("div",{className:"icon-items",style:{"--icon-color":"".concat(v),"--icon-size":"".concat(h,"px"),"--icon-stroke":"".concat(m)},children:j.length>0?(0,n.jsxs)(n.Fragment,{children:[j.filter(e=>e.styles[g]).map(e=>(0,n.jsx)(E.D,{content:(0,n.jsx)(W,{icon:e,stroke:m,color:v,defaultStyle:g}),footer:(0,n.jsx)("a",{className:"d-block text-center",href:"icons/icon/".concat(e.name),children:"See more icon variants"}),showAd:!0,children:(0,n.jsx)(B,{name:e.name,svg:e.styles[g].svg})},e.name)),[...Array(6)].map((e,s)=>(0,n.jsx)("div",{},s))]}):(0,n.jsxs)("div",{className:"text-center py-6 text-muted",children:["Sorry, we don't have any icon to match your query.",(0,n.jsx)("br",{}),"Perhaps you would like to"," ",(0,n.jsx)("a",{href:I.PR,target:"_blank",rel:"nofollow",children:"suggest a new icon"}),"?"]})})]}),u>1?(0,n.jsx)("div",{className:"pt-6",children:(0,n.jsx)(F.t,{currentPage:d,next:a,prev:l,jump:r,maxPage:u})}):(0,n.jsx)(n.Fragment,{})]})},B=e=>{let{name:s,svg:t}=e,{toggleModal:a}=(0,i.useContext)(E.t),l=(0,T.wW)();return(0,n.jsxs)("a",{href:"icons/icon/".concat(s),className:"icon-item",onClick:e=>{e.preventDefault(),a(),l("open-icon-modal",{props:{icon:s}})},children:[(0,n.jsx)(z.e,{className:"icon-item-icon",svg:t},s),(0,n.jsx)("span",{className:"icon-item-text",children:s})]},s)},H={keys:[{name:"name",weight:1},{name:"nameNoHyphens",getFn:e=>e.name.replace("-"," "),weight:1},{name:"nameReversed",getFn:e=>e.name.split("-").reverse().join(" "),weight:.9},{name:"tags",weight:.4}],includeScore:!0,includeMatches:!0,threshold:.45};function D(){let[e,s]=(0,i.useState)(h.T2),[t,a]=(0,i.useReducer)(o,r),[m,x]=(0,i.useState)(!1),v=(0,_.Z)(t.searchPattern,300);return(0,i.useEffect)(()=>{let e=h.T2;e=e.filter(e=>"Other"===t.category?""===e.category:"All"===t.category||e.category===t.category),v&&(e=new O.Z(e,H).search(v.trim()).map(e=>e.item)),s(()=>e.filter(e=>e.styles[t.style]))},[v,t.category,t.style]),(0,i.useEffect)(()=>{let e=new URLSearchParams(document.location.search).get("category");a({type:l.SET_CATEGORY,payload:e&&(h.hY.includes(e)||"Other"===e)?e:"All"})},[]),(0,n.jsx)(c.Provider,{value:{...t,dispatch:a},children:(0,n.jsx)(A.$,{divider:"wave",className:"pt-6",id:"search",children:(0,n.jsx)(R.W,{wide:!0,children:(0,n.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-12 xl:g-6 grid-icons",children:[(0,n.jsx)("div",{className:"lg:g-col-end-13 lg:g-col-start-5 xl:g-col-start-4 sticky-top",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(u,{iconsCount:e.length})}),(0,n.jsx)("div",{className:"col-auto lg:d-none",children:(0,n.jsx)(j.z,{onClick:()=>x(!m),size:"lg","aria-label":"Customize icons",icon:(0,n.jsx)(d.J,{name:"palette"})})})]})}),(0,n.jsx)("div",{className:(0,J.W)("lg:g-col-end-4 lg:g-row-start-1 lg:g-col-end-5 lg:g-col-start-1 lg:g-row-end-3 xl:g-col-end-4 lg:d-block",m?"d-block":"d-none"),children:(0,n.jsx)(C,{})}),(0,n.jsx)("div",{className:"lg:g-col-end-13 lg:g-row-start-2 lg:g-row-end-2 lg:g-col-start-5 lg:g-col-start-4  xl:g-col-start-4",children:e&&(0,n.jsx)(Y,{query:v,icons:e})})]})})})})}},5596:function(e,s,t){"use strict";t.d(s,{Ad:function(){return o}});var a=t(3516),l=t(5435),n=t(7427),i=t(5650),r=t(1038),c=t(794);function o(e){let{className:s,horizontal:t,hideOur:o=!1}=e,d=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(d.current&&l.my){d.current.innerHTML="";let e=document.createElement("script");e.async=!0,e.src="//cdn.carbonads.com/carbon.js?serve=CWYDCKQE&placement=tabler-iconsio",e.id="_carbonads_js",e.onload=()=>{d.current.classList.add("rklm-wrap")},d.current.appendChild(e)}},[]),(0,a.jsxs)("div",{className:(0,n.W)("rklm",s,t&&"rklm-horizontal"),children:[!o&&(0,a.jsxs)("div",{className:"rklm-wrap",children:[(0,a.jsx)(c.default,{href:"/emails",className:"rklm-img",children:(0,a.jsx)(r.default,{src:"/img/emails/banner-carbon.png",alt:"Tabler Emails",height:"100",width:"130","data-no-statview":"no"})}),(0,a.jsx)(c.default,{href:"/emails",className:"carbon-text",children:"54 eye-catching, customizable and responsive email templates."})]}),(0,a.jsx)("div",{ref:d})]})}},5015:function(e,s,t){"use strict";t.d(s,{ButtonCopy:function(){return o}});var a=t(3516),l=t(7427),n=t(1882),i=t(903),r=t(5650),c=t(4189);function o(e){let{copy:s,className:t,children:o,primary:d=!0,icon:u,...m}=e,h=(0,i.Z)(),[x,v]=(0,r.useState)(!1),g=e=>(e.preventDefault(),h.copy(s),v(!0),setTimeout(()=>{v(!1)},3e3),!1),j=u||(0,a.jsx)(n.J,{name:"clipboard"});return(0,a.jsx)(c.z,{color:d?"primary":void 0,className:(0,l.W)(t,{"btn-green":x}),onClick:e=>g(e),icon:x?(0,a.jsx)(n.J,{name:"check"}):j,...m,children:o})}},8289:function(e,s,t){"use strict";t.d(s,{z:function(){return r}});var a=t(3516),l=t(6913),n=t(7427),i=t(5650);function r(e){let{className:s,color:t,setColor:r}=e,[c,o]=(0,i.useState)({value:t,isValid:!0}),d=(0,l.Z)(t,10);return(0,i.useEffect)(()=>{c.isValid&&r(c.value)},[c,r]),(0,i.useEffect)(()=>{o({value:t,isValid:!0})},[d,o]),(0,a.jsxs)("div",{className:(0,n.W)("input-colorpicker",s),children:[(0,a.jsx)("input",{"aria-label":"Color picker",className:"input-colorpicker-preview",type:"color",value:t,onChange:e=>r(e.target.value)}),(0,a.jsx)("input",{"aria-label":"Color input",type:"text",className:"input-colorpicker-hex",value:c.value,pattern:"^#([A-Fa-f0-9]{6})$",maxLength:7,required:!0,onChange:e=>{o({value:e.target.value,isValid:e.target.validity.valid})}})]})}},2300:function(e,s,t){"use strict";t.d(s,{Link:function(){return r}});var a=t(3516),l=t(794),n=t(8007),i=t(7427);function r(e){let{href:s,children:t,className:r,prefetch:c=!1,exact:o=!1,onClick:d=()=>{},...u}=e,m=(0,n.usePathname)()||"";return(0,a.jsx)(l.default,{href:s,className:(0,i.W)(r,[(o?m===s:m.startsWith(s))?"active":""]),onClick:d,...u,children:t})}},2490:function(e,s,t){"use strict";t.d(s,{Slider:function(){return o}});var a=t(3516),l=t(5650),n=t(8843),i=t(1882),r=t(7427);let c={gap:0,perView:1,type:"carousel",autoplay:7e3,animationDuration:1e3};function o(e){let{slides:s=[],style:t={},background:o=!1,autoplay:d=!0}=e,u=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=new n.Z(u.current,{...c,autoplay:!!d&&7e3}).mount();return()=>e.destroy()},[d]),(0,a.jsxs)("div",{ref:u,className:(0,r.W)("glide",{"glide--background":o}),style:t,children:[(0,a.jsx)("div",{className:"glide__track","data-glide-el":"track",children:(0,a.jsx)("ul",{className:"glide__slides",children:s.map((e,s)=>(0,a.jsx)("li",{className:"glide__slide slider",children:e},s))})}),(0,a.jsxs)("div",{className:"glide__arrows","data-glide-el":"controls",children:[(0,a.jsx)("button",{className:"glide__arrow glide__arrow--prev","data-glide-dir":"<","aria-label":"Previous slide",children:(0,a.jsx)(i.J,{name:"chevron-left"})}),(0,a.jsx)("button",{className:"glide__arrow glide__arrow--next","data-glide-dir":">","aria-label":"Next slide",children:(0,a.jsx)(i.J,{name:"chevron-right"})})]})]})}},2445:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var a=t(3516),l=t(1882),n=t(7427);let i={outline:{name:"Outline",icon:(0,a.jsx)(l.J,{name:"star"})},filled:{name:"Filled",icon:(0,a.jsx)(l.J,{name:"star-filled"})}};function r(e){let{availableStyles:s,style:t,setStyle:l,className:r}=e;return(0,a.jsx)("div",{className:(0,n.W)("style-switcher",r),children:Object.entries(i).filter(e=>{let[t,a]=e;return s.includes(t)}).map(e=>{let[s,i]=e;return(0,a.jsx)("button",{className:(0,n.W)("style-switcher-button",{active:s===t}),onClick:()=>l(s),children:(0,a.jsx)("span",{children:i.name})},s)})})}},6747:function(e,s,t){"use strict";t.d(s,{HeroIcons:function(){return h}});var a=t(3516),l=t(9891),n=t(1882),i=t(2490),r=t(2526),c=t(4189),o=t(2300),d=t(5650),u=t(2445);let m=()=>{let[e,s]=(0,d.useState)(2),[t,l]=(0,d.useState)("outline");return(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Slider,{slides:["ghost","lego","star","ballon","heart"].map(s=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:(0,a.jsx)(n.J,{name:s,filled:"filled"===t,className:"mx-auto w-8",style:{width:"320px",strokeWidth:e}})},s)})),autoplay:!1}),(0,a.jsx)("div",{className:"text-center mt-6",children:(0,a.jsx)(u.Z,{availableStyles:["outline","filled"],style:t,setStyle:e=>l(e)})})]})};function h(){return(0,a.jsx)("header",{className:"hero",children:(0,a.jsx)(r.W,{wide:!0,children:(0,a.jsx)("div",{className:"hero-gradient",children:(0,a.jsxs)("div",{className:"row items-center xl:g-6",children:[(0,a.jsxs)("div",{className:"lg:col-6 text-center lg:text-left","data-aos":"fade-up",children:[(0,a.jsx)("div",{className:"hero-subheader",children:"Tabler Icons"}),(0,a.jsxs)("div",{className:"xl:pr-7",children:[(0,a.jsxs)("h1",{className:"hero-title",children:["Over ",l.hI," pixel-perfect icons for web design"]}),(0,a.jsx)("p",{className:"hero-description mt-4",children:"Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful."})]}),(0,a.jsx)("div",{className:"mt-5 lg:mt-6",children:(0,a.jsxs)("div",{className:"row g-2 items-center",children:[(0,a.jsx)("div",{className:"col-12 text-muted",children:"Available for:"}),(0,a.jsx)("div",{className:"col-12",children:(0,a.jsxs)("div",{className:"row g-3 items-center justify-center lg:justify-start",children:[l.Kc.slice(0,8).map(e=>(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsx)(o.Link,{href:e.url,children:(0,a.jsx)("img",{src:"/packages/logo-".concat(e.img,".svg"),alt:"".concat(e.name," Tabler Icons package"),width:40,height:40})})},e.name)),(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsx)(o.Link,{href:"/icons/packages",className:"link-muted",children:"and more…"})})]})})]})}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsxs)("div",{className:"row justify-center lg:justify-start g-3",children:[(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsxs)(c.z,{color:"accent",href:l.h3,className:"lg:btn-lg lemonsqueezy-button",target:"_blank",icon:(0,a.jsx)(n.J,{name:"download"}),children:["Download v",l._C]})}),(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsx)(c.z,{href:l.ee,className:"lg:btn-lg",target:"_blank",rel:"noreferrer",icon:(0,a.jsx)(n.J,{name:"brand-github"}),children:"Source code"})}),(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsx)(o.Link,{href:"/icons/changelog",className:"btn lg:btn-lg btn-link",children:(0,a.jsx)("div",{className:"btn-link",children:"Changelog"})})})]})})]}),(0,a.jsx)("div",{className:"d-none lg:d-block lg:col-6 lg:order-first","data-aos":"fade-up",children:(0,a.jsx)("div",{className:"hero-img-side",children:(0,a.jsx)(m,{})})})]})})})})}},8193:function(e,s,t){"use strict";t.d(s,{t:function(){return d},D:function(){return u}});var a=t(3516),l=t(1882),n=t(5650),i=t(9252),r=t(5596);let c=e=>{let{title:s,content:t,footer:c,image:o,showAd:u,onModalClose:m}=e,{showModal:h,toggleModal:x}=(0,n.useContext)(d),v=(0,n.createRef)(),g=(0,n.useCallback)(e=>{"Escape"===e.key&&(m&&m(),x())},[m,x]),j=(0,n.useCallback)(e=>{e.preventDefault(),m&&m(),x()},[m,x]);return(0,n.useEffect)(()=>{let e;return h&&(document.addEventListener("keydown",g,!1),e=setTimeout(()=>{var e;null===(e=v.current)||void 0===e||e.classList.add("visible")},1)),()=>{document.removeEventListener("keydown",g,!1),clearTimeout(e)}}),h?(0,i.createPortal)((0,a.jsx)("div",{ref:v,className:"modal-backdrop",tabIndex:-1,role:"dialog",onClick:j,children:(0,a.jsxs)("div",{className:"modal",onClick:e=>e.stopPropagation(),children:[(0,a.jsx)("a",{href:"#",className:"modal-close","data-dismiss":"modal","aria-label":"Close modal",onClick:j,children:(0,a.jsx)(l.J,{name:"x"})}),(0,a.jsxs)("div",{className:"modal-body",children:[s&&(0,a.jsx)("h3",{className:"modal-title",children:s}),o&&(0,a.jsx)("div",{className:"modal-image",children:o}),t]}),c&&(0,a.jsx)("div",{className:"modal-footer",children:c}),u&&(0,a.jsx)("div",{className:"modal-ad ads",children:(0,a.jsx)(r.Ad,{horizontal:!0})})]})}),document.body):(0,a.jsx)(a.Fragment,{})};var o=()=>{let[e,s]=(0,n.useState)(!1);return{showModal:e,toggleModal:()=>{s(!e)},openModal:()=>{s(!0)},closeModal:()=>{s(!1)}}};let d=(0,n.createContext)({showModal:!1,toggleModal:()=>{},openModal:()=>{},closeModal:()=>{}}),u=e=>{let{title:s,children:t,content:l,footer:n,image:i,showAd:r,onModalClose:u}=e,m=o();return(0,a.jsxs)(d.Provider,{value:m,children:[(0,a.jsx)(c,{title:s,content:l,footer:n,showAd:r,image:i,onModalClose:u}),t]})}},903:function(e,s,t){"use strict";var a=t(5650);s.Z=function(){let{timeout:e=2e3}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[s,t]=a.useState(null),[l,n]=a.useState(!1),[i,r]=a.useState(null),c=s=>{i&&clearTimeout(i),r(setTimeout(()=>n(!1),e)),n(s)};return{copy:e=>{"clipboard"in navigator?navigator.clipboard.writeText(e).then(()=>c(!0)).catch(e=>t(e)):t(Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{n(!1),t(null),i&&clearTimeout(i)},error:s,copied:l}}},6913:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var a=t(5650);function l(e,s){let[t,l]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=setTimeout(()=>l(e),s||500);return()=>{clearTimeout(t)}},[e,s]),t}},2526:function(e,s,t){"use strict";t.d(s,{W:function(){return n}});var a=t(3516),l=t(7427);function n(e){let{children:s,className:t,wide:n}=e;return(0,a.jsx)("div",{className:(0,l.W)("container",n?"container-wide":"",t),children:s})}},4746:function(e,s,t){"use strict";t.d(s,{$:function(){return i}});var a=t(3516),l=t(7427);function n(e){let{type:s}=e;if("wave"===s)return(0,a.jsx)("svg",{className:"section-divider section-divider-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 80",children:(0,a.jsx)("path",{d:"M1920,80 L0,80 L0,0 C0,0 387,59 960,59 C1533,59 1920,0 1920,0 L1920,80 Z"})});if("bubbles"===s)return(0,a.jsx)("svg",{className:"section-divider section-divider-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",children:(0,a.jsx)("path",{d:"M51 103c114 0 89-27 191-32s149 21 223 21 110-12 213-38 255-6 430 38c27.85 7.002 70 19 92 28H0v-17h51Zm1096-55c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20ZM377 18c13.776 0 25 11.224 25 25s-11.224 25-25 25-25-11.224-25-25 11.224-25 25-25ZM317 0c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11Z"})});if("skew"===s)return(0,a.jsx)("svg",{className:"section-divider section-divider-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 48",children:(0,a.jsx)("path",{d:"M0 48v10h1200V0z"})});if("skew-2"===s)return(0,a.jsx)("svg",{className:"section-divider section-divider-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 48",children:(0,a.jsx)("path",{d:"M1200 48v10H0V0z"})});if("skew-double"===s)return(0,a.jsxs)("svg",{className:"section-divider section-divider-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 48",children:[(0,a.jsx)("path",{d:"M1200 48v10H0V0z"}),(0,a.jsx)("path",{d:"M0 58v10h1200V10z",opacity:".5"})]});if("wave-fancy"===s)return(0,a.jsx)("svg",{className:"section-divider section-divider-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 34",children:(0,a.jsx)("path",{d:"M0 34h1200V0S929.487 24.5 726.977 24.5C524.467 24.5 363.459 0 187.951 0 12.442 0 0 34 0 34Z"})});if("wave-light"===s)return(0,a.jsx)("svg",{className:"section-divider section-divider-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 20",children:(0,a.jsx)("path",{d:"M0 20h1200V0C602.083 43.333 0 0 0 0v20Z"})});return(0,a.jsxs)("svg",{className:"section-divider",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 24 150 28",preserveAspectRatio:"none",children:[(0,a.jsx)("path",{className:"wave-1",d:"M-110 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}),(0,a.jsx)("path",{className:"wave-2",d:"M-110 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}),(0,a.jsx)("path",{className:"wave-3",d:"M-110 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})]})}function i(e){let{children:s,className:t,secondary:i,brand:r,divider:c,...o}=e;return(0,a.jsxs)("div",{className:(0,l.W)("section",{"section-secondary":i,"section-brand":r},t),...o,children:[c&&(0,a.jsx)(n,{type:c}),s]})}},6297:function(e,s,t){"use strict";t.d(s,{A:function(){return n}});var a=t(3516),l=t(7427);let n=e=>{let{label:s,...t}=e,n=+(t.max||100),i=+(t.min||0),r="".concat((Number(t.value)-i)/(n-i)*100,"%");return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("input",{"aria-label":s,type:"range",className:(0,l.W)("form-range",t.className),...t,style:{"--slider-width":r}})})}},5435:function(e,s,t){"use strict";t.d(s,{my:function(){return l}});var a=t(4472);let l=!0;a.env.TABLER_LOCAL}},function(e){e.O(0,[9571,1811,6746,1046,469,1882,8929,9891,4481,4824,6561,1744],function(){return e(e.s=4113)}),_N_E=e.O()}]);