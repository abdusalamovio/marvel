"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[912],{425:(e,a,s)=>{s.d(a,{A:()=>t});const r=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var c=s(579);const t=()=>(0,c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"error"})},394:(e,a,s)=>{s.r(a),s.d(a,{default:()=>f});const r=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var c=s(43),t=s(897),n=s(502),i=s(425),l=s(579);const o=e=>{let{char:a}=e;const{name:s,description:r,thumbnail:c,homepage:t,wiki:n}=a,i={objectFit:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c?"contain":"cover"};return(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{className:"randomchar__img",style:i,src:c,alt:"Random character"}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:s}),(0,l.jsx)("p",{className:"randomchar__descr",children:r}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:t,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:n,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"wiki"})})]})]})]})},h=()=>{const[e,a]=(0,c.useState)(null),{loading:s,error:h,clearError:d,getCharacter:m}=(0,t.A)();(0,c.useEffect)((()=>{u();const e=setInterval(u,6e4);return()=>{clearInterval(e)}}),[]);const u=()=>{d();const e=Math.floor(400*Math.random()+1011e3);m(e).then(_)},_=e=>{a(e)},j=h?(0,l.jsx)(i.A,{}):null,x=s?(0,l.jsx)(n.A,{}):null,p=s||h||!e?null:(0,l.jsx)(o,{char:e});return(0,l.jsxs)("div",{className:"randomchar",children:[x,j,p,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{onClick:u,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{className:"randomchar__decoration",src:r,alt:"mjolnir"})]})]})},d=e=>{const[a,s]=(0,c.useState)([]),[r,o]=(0,c.useState)(!1),[h,d]=(0,c.useState)(210),[m,u]=(0,c.useState)(!1),{loading:_,error:j,getAllCharacters:x}=(0,t.A)();(0,c.useEffect)((()=>{p(h,!0)}),[]);const p=(e,a)=>{o(!a),x(e).then(b)},b=e=>{s((a=>[...a,...e])),o(!1),d((e=>e+9)),u(e.length<9)},v=(0,c.useRef)([]),g=e=>{v.current.forEach((e=>e.classList.remove("char__item_selected"))),v.current[e].classList.add("char__item_selected"),v.current[e].focus()},N=(a=>{const s=a.map(((a,s)=>{const r={objectFit:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a.thumbnail?"unset":"cover"};return(0,l.jsxs)("li",{className:"char__item",ref:e=>v.current[s]=e,tabIndex:0,onClick:()=>{e.onCharSelected(a.id),g(s)},onKeyDown:r=>{" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(a.id),g(s))},children:[(0,l.jsx)("img",{style:r,src:a.thumbnail,alt:a.name}),(0,l.jsx)("div",{className:"char__name",children:a.name})]},s)}));return(0,l.jsx)("ul",{className:"char__grid",children:s})})(a),f=j?(0,l.jsx)(i.A,{}):null,k=_&&!r?(0,l.jsx)(n.A,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[f,k,N,(0,l.jsx)("button",{className:"button button__main button__long",onClick:()=>p(h),style:{display:m?"none":"block"},disabled:r,children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},m=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,l.jsxs)("div",{className:"skeleton",children:[(0,l.jsxs)("div",{className:"pulse skeleton__header",children:[(0,l.jsx)("div",{className:"pulse skeleton__circle"}),(0,l.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"})]})]}),u=e=>{let{char:a}=e;const{name:s,description:r,thumbnail:c,homepage:t,wiki:n,comics:i}=a,o={objectFit:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c?"contain":"cover"};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{style:o,src:c,alt:s}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:s}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:t,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:n,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:r}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map(((e,a)=>{if(!(a>9))return(0,l.jsx)("li",{className:"char__comics-item",children:e.name},a)}))]})]})},_=e=>{let{charId:a}=e;const[s,r]=(0,c.useState)(null),{loading:o,error:h,clearError:d,getCharacter:_}=(0,t.A)();(0,c.useEffect)((()=>{j()}),[a]);const j=()=>{a&&(d(),_(a).then(x))},x=e=>{r(e)},p=s||o||h?null:(0,l.jsx)(m,{}),b=h?(0,l.jsx)(i.A,{}):null,v=o?(0,l.jsx)(n.A,{}):null,g=o||h||!s?null:(0,l.jsx)(u,{char:s});return(0,l.jsxs)("div",{className:"char__info",children:[p,b,v,g]})};var j=s(224),x=s(892),p=s(899);const b=()=>{const[e,a]=(0,c.useState)(null),{loading:s,error:r,clearError:n,getCharacterByName:o}=(0,t.A)(),h=e=>{a(e)},d=r?(0,l.jsx)("div",{className:"char__search-critical-error",children:(0,l.jsx)(i.A,{})}):null,m=e?e.length>0?(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",e[0].name," page?"]}),(0,l.jsx)(j.N_,{to:"/characters/".concat(e[0].id),className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"To page"})})]}):(0,l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,l.jsxs)("div",{className:"char__search-form",children:[(0,l.jsx)(x.l1,{initialValues:{charName:""},validationSchema:p.Ik({charName:p.Yj().required("This field is required")}),onSubmit:e=>{let{charName:a}=e;var s;s=a,n(),o(s).then(h)},children:(0,l.jsxs)(x.lV,{children:[(0,l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsx)(x.D0,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,l.jsx)("button",{className:"button button__main",disabled:s,type:"submit",children:(0,l.jsx)("div",{className:"inner",children:"find"})})]}),(0,l.jsx)(x.Kw,{className:"char__search-error",component:"div",name:"charName"})]})}),m,d]})},v=s.p+"static/media/vision.067d4ae1936d64a577ce.png";class g extends c.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){console.log(e,a),this.setState({error:!0})}render(){return this.state.error?(0,l.jsx)(i.A,{}):this.props.children}}const N=g,f=()=>{const[e,a]=(0,c.useState)(null);return(0,l.jsxs)("main",{children:[(0,l.jsx)(N,{children:(0,l.jsx)(h,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(N,{children:(0,l.jsx)(d,{onCharSelected:e=>{a(e)}})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(N,{children:(0,l.jsx)(_,{charId:e})}),(0,l.jsx)(N,{children:(0,l.jsx)(b,{})})]})]}),(0,l.jsx)("img",{className:"bg-decoration",src:v,alt:"vision"})]})}},897:(e,a,s)=>{s.d(a,{A:()=>c});var r=s(43);const c=()=>{const{loading:e,error:a,request:s,clearError:c}=(()=>{const[e,a]=(0,r.useState)(!1),[s,c]=(0,r.useState)(null);return{loading:e,error:s,request:(0,r.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a(!0);try{const c=await fetch(e,{method:s,body:r,headers:t});if(!c.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(c.status));const n=await c.json();return a(!1),n}catch(n){throw a(!1),c(n.message),n}}),[]),clearError:(0,r.useCallback)((()=>{c(null)}),[])}})(),t="https://gateway.marvel.com:443/v1/public/",n="apikey=2da0ae7cb2e706a9e1d763264bff59b1",i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var a;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:e,error:a,clearError:c,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await s("".concat(t,"characters?limit=9&offset=").concat(e,"&").concat(n))).data.results.map(i)},getCharacter:async e=>{const a=await s("".concat(t,"characters/").concat(e,"?&").concat(n));return i(a.data.results[0])},getCharacterByName:async e=>(await s("".concat(t,"characters?name=").concat(e,"&").concat(n))).data.results.map(i),getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await s("".concat(t,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(n))).data.results.map(l)},getComic:async e=>{const a=await s("".concat(t,"comics/").concat(e,"?").concat(n));return l(a.data.results[0])}}}}}]);
//# sourceMappingURL=912.5213b480.chunk.js.map