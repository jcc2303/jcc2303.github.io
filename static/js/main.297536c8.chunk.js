(this["webpackJsonpjcc2303.github.io"]=this["webpackJsonpjcc2303.github.io"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),s=a.n(i),l=(a(52),a(53),a(42)),c=a(6),o=a(2),u=a(3),m=a(5),p=a(4),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:""})}}]),a}(r.a.Component),h=a(36),g=a.n(h),f=a(12),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={window:{height:0,width:0}},n.updateDimensions=n.updateDimensions.bind(Object(f.a)(n)),n}return Object(u.a)(a,[{key:"updateDimensions",value:function(){return this.setState({window:{height:window.innerHeight,width:window.innerWidth}})}},{key:"componentDidMount",value:function(){return this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e={width:"100%",height:this.state.window.height,backgroundImage:"url(images/background.jpg)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"};return r.a.createElement("header",{id:"home",className:"bg-fixed",style:e},this.props.children)}}]),a}(r.a.Component),b=a(1),v=a.n(b),E=v.a.shape({address:v.a.string.isRequired,postalCode:v.a.string.isRequired,city:v.a.string.isRequired,countryCode:v.a.string.isRequired,region:v.a.string.isRequired}).isRequired,O=v.a.shape({network:v.a.string.isRequired,username:v.a.string.isRequired,url:v.a.string.isRequired}).isRequired,x=v.a.arrayOf(O).isRequired,j=v.a.arrayOf(v.a.string).isRequired,w=(v.a.shape({modal:v.a.string.isRequired,thumb:v.a.string.isRequired}).isRequired,v.a.shape({title:v.a.string.isRequired,description:j})),k=(v.a.arrayOf(w).isRequired,v.a.object.isRequired,v.a.shape({name:v.a.string.isRequired,label:v.a.string.isRequired,picture:v.a.string.isRequired,email:v.a.string.isRequired,phone:v.a.string.isRequired,website:v.a.string.isRequired,summary:j,location:E,profiles:x}).isRequired,v.a.shape({company:v.a.string.isRequired,position:v.a.string.isRequired,website:v.a.string.isRequired,startDate:v.a.string.isRequired,endDate:v.a.string,summary:v.a.string.isRequired,highlights:j})),N=(v.a.arrayOf(k).isRequired,v.a.shape({organization:v.a.string.isRequired,position:v.a.string.isRequired,website:v.a.string.isRequired,startDate:v.a.string.isRequired,endDate:v.a.string.isRequired,summary:v.a.string.isRequired,highlights:j})),R=(v.a.arrayOf(N).isRequired,v.a.shape({institution:v.a.string.isRequired,area:v.a.string.isRequired,studyType:v.a.string.isRequired,startDate:v.a.string.isRequired,endDate:v.a.string.isRequired,gpa:v.a.string,summary:v.a.string.isRequired,courses:j})),q=(v.a.arrayOf(R).isRequired,v.a.shape({title:v.a.string.isRequired,date:v.a.string.isRequired,awarder:v.a.string.isRequired,summary:v.a.string.isRequired})),C=(v.a.arrayOf(q).isRequired,v.a.shape({name:v.a.string.isRequired,publisher:v.a.string.isRequired,category:v.a.string.isRequired,releaseDate:v.a.string.isRequired,website:v.a.string.isRequired,summary:v.a.string.isRequired,keywords:j})),S=(v.a.arrayOf(C).isRequired,v.a.shape({title:v.a.string.isRequired,description:v.a.string.isRequired,keywords:j})),z=(v.a.arrayOf(S).isRequired,v.a.shape({name:v.a.string.isRequired,level:v.a.string.isRequired})),D=(v.a.arrayOf(z).isRequired,v.a.shape({name:v.a.string.isRequired,keywords:j})),F=(v.a.arrayOf(D).isRequired,v.a.shape({name:v.a.string.isRequired,position:v.a.string.isRequired,company:v.a.string.isRequired,reference:v.a.string.isRequired})),T=(v.a.arrayOf(F).isRequired,a(37)),M=a.n(T);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var J=r.a.createElement("path",{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}),L=function(e){var t=e.svgRef,a=e.title,n=A(e,["svgRef","title"]);return r.a.createElement("svg",P({viewBox:"0 0 448 512",ref:t},n),a?r.a.createElement("title",null,a):null,J)},H=r.a.forwardRef((function(e,t){return r.a.createElement(L,P({svgRef:t},e))}));a.p;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var W=r.a.createElement("path",{fill:"currentColor",d:"M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"}),_=function(e){var t=e.svgRef,a=e.title,n=I(e,["svgRef","title"]);return r.a.createElement("svg",B({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"window-close",className:"svg-inline--fa fa-window-close fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),a?r.a.createElement("title",null,a):null,W)},V=r.a.forwardRef((function(e,t){return r.a.createElement(_,B({svgRef:t},e))}));a.p;function Y(e){var t=e.link,a=e.name,n=e.className;return r.a.createElement("li",{className:n},r.a.createElement("a",{href:"#".concat(t)},a))}var G=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).isOpen=!1,e}return Object(u.a)(a,[{key:"handleMenu",value:function(){return this.isOpen=!this.isOpen,this.setState({isOpen:!this.isOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",{id:"nav-wrap",className:"fixed right-0 left-0 bg-orange-900 text-white "},r.a.createElement("div",{className:"sm:hidden"},r.a.createElement("div",{className:" p-2 flex justify-between"},r.a.createElement("img",{className:"object-contain h-6",src:M.a,alt:"mylogo"}),r.a.createElement("button",{onClick:function(){return e.handleMenu()},type:"button",className:"text-gray-500 hover:text-white focus:text-white"},this.isOpen?r.a.createElement(V,{className:"h-6 w-6 fill-current"}):r.a.createElement(H,{className:"h-6 w-6 fill-current"}))),r.a.createElement("ul",{id:"nav",className:this.isOpen?"block px-4 text-font-semibold":"hidden"},Object.keys(this.props.navigation).map(function(e,t){var a=this.props.navigation[e];return r.a.createElement(Y,{key:t,link:e,name:a,className:"px-3 py-1 text-sm uppercase hover:bg-gray-700 rounded-md w-full"})}.bind(this)))),r.a.createElement("ul",{id:"nav",className:"hidden flex items-center px-4 sm:flex justify-between "},Object.keys(this.props.navigation).map(function(e,t){var a=this.props.navigation[e];return r.a.createElement(Y,{key:t,link:e,name:a,className:"px-3 py-1 text-sm uppercase"})}.bind(this))))}}]),a}(r.a.Component);var $=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{className:""},this.props.profiles.map((function(e,t){var a=function(e){var t=e.replace(/ /g,"-");return r.a.createElement("i",{className:t})}(e.network.toLowerCase());return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.url},a))})))}}]),a}(r.a.Component),K=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"px-8 py-48 text-center"},r.a.createElement("h1",{className:"mt-6 text-6xl font-bold font-sans text-orange-700 leading-10 text-shadow"},this.props.basics.name),r.a.createElement($,{profiles:this.props.basics.profiles}))}}]),a}(r.a.Component),Q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("p",{className:""},r.a.createElement("a",{className:"",href:"#about"},r.a.createElement("i",{className:""})))}}]),a}(r.a.Component),U=a(38),X=a.n(U),Z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"about",className:"bg-gray-500 text-white full-width"},r.a.createElement("div",{className:"sm:flex"},r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("img",{name:"meimage",className:"w-48 rounded-lg shadow-xl",src:this.props.content.picture,alt:this.props.content.name}),r.a.createElement("h1",{className:"mt-6 text-lg font-bold text-gray-900 leading-tight"},"Let's enjoy together")),r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("h2",{className:"mt-6 text-lg font-bold text-gray-900 leading-tight"},"About Me"),this.props.content.summary.map((function(e,t){return r.a.createElement("p",{key:t,className:"mt-6 text-gray-900"},e)})),r.a.createElement("div",{className:"px-8 py-12 flex"},r.a.createElement("div",{className:""},r.a.createElement("h2",{className:"mt-6 text-lg font-bold text-gray-900 leading-tight"},"Contact Details"),r.a.createElement("p",{className:""},r.a.createElement("span",{className:"text-orange-300"},this.props.content.location.city),r.a.createElement("span",{className:"mx-3 text-orange-300"},this.props.content.location.countryCode),r.a.createElement("br",null),r.a.createElement("a",{className:"text-orange-800",href:"skype:".concat(this.props.content.phone)},r.a.createElement("span",null,this.props.content.phone)),r.a.createElement("br",null),r.a.createElement("a",{className:"text-orange-900",href:"mailto:".concat(this.props.content.email)},r.a.createElement("span",null,this.props.content.email)))),r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("a",{href:"/#",className:"inline-block px-4 py-2 rounded-lg bg-orange-600 text-white uppercase",onClick:this.props.generatePDF},"Download Resume"))))))}}]),a}(r.a.Component),ee=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mt-5 text-sm text-gray-500 tracking-tight"},this.props.points.map((function(e,t){return r.a.createElement("p",{key:t,className:""},r.a.createElement("span",{className:""},"\u2022 "),e)})))}}]),a}(r.a.Component);a(45);var te=function(e){return e},ae=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.entry,t=e.startDate,a=e.endDate,n=e.website,i=e.image,s=e.company,l=e.position,c=e.summary,o=e.highlights,u=e.stack,m=te(t),p=te(a);return r.a.createElement("div",{className:"m-3 p-6 bg-white border rounded-lg overflow-hidden"},r.a.createElement("a",{className:"dark-link",href:n},r.a.createElement("img",{src:i,alt:""}),r.a.createElement("h4",{className:"text-lg font-bold text-orange-400 leading-tight"},s)),r.a.createElement("div",{className:"font-semibold flex justify-between"},r.a.createElement("p",null,l),r.a.createElement("p",{className:"text-gray-500 text-sm uppercase"},r.a.createElement("em",{className:""},m)," - ",r.a.createElement("em",{className:""},p||"current"))),r.a.createElement("div",{className:"p-3"},r.a.createElement("p",{className:"text-gray-700 text-sm "},c),r.a.createElement(ee,{points:o})),r.a.createElement("div",{className:"flex p-3"},u.map((function(e,t){return r.a.createElement("p",{key:t,className:"m-1 p-1 rounded-md bg-gray-600 text-white text-sm "},e)}))))}}]),a}(r.a.Component),ne=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.content.length;return r.a.createElement("section",{id:"work",className:"px-8 py-12"},r.a.createElement("div",null,r.a.createElement("h1",{className:"mt-6 text-lg font-bold text-gray-900 leading-tight"},r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:""},this.props.content.map((function(t,a){return r.a.createElement(ae,{key:a,index:a,total:e,entry:t})}))))}}]),a}(r.a.Component),re=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=te(this.props.entry.startDate),t=te(this.props.entry.endDate);return r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("h3",{className:"mt-6 text-lg font-bold text-gray-900 leading-tight"},this.props.entry.institution),r.a.createElement("p",{className:""},this.props.entry.area,r.a.createElement("span",null," \u2022 "),r.a.createElement("span",{className:""},this.props.entry.summary),r.a.createElement("span",null," \u2022 "),r.a.createElement("em",{className:""},e," - ",t)))}}]),a}(r.a.Component),ie=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"education"},r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("h1",{className:"mt-6 text-lg font-bold text-gray-900 leading-tight"},"Education")),r.a.createElement("div",{className:"px-8 py-12"},this.props.content.map((function(e,t){return r.a.createElement(re,{key:t,entry:e})}))))}}]),a}(r.a.Component),se=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={style:{background:"#313131"}},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this&&this.state.style;return r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("h3",{className:"mt-6 text-lg font-bold text-gray-900 leading-tight"},this.props.title),r.a.createElement("p",{className:""},this.props.description),r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("ul",null,this.props.keywords.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("span",{className:"bar-expand percentage90",style:e}),r.a.createElement("em",null,t))})))))}}]),a}(r.a.Component),le=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"skill",className:"px-8 py-12"},r.a.createElement("div",null,r.a.createElement("h1",{className:"mt-6 text-lg font-bold text-gray-900 leading-tight"},r.a.createElement("span",null,"Skills"))),r.a.createElement("div",{className:""},this.props.content.skills.map((function(e,t){return r.a.createElement(se,{key:t,title:e.title,description:e.description,keywords:e.keywords})}))))}}]),a}(r.a.Component),ce=function(e){return function e(t,a){if(!t)return a;var n=Math.floor(Math.random()*t),r=JSON.parse(JSON.stringify(a)),i=a[t];return r[t]=a[n],r[n]=i,e(t-1,r)}(e.length-1,e)},oe=a(39),ue=a.n(oe),me=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(ue.a,{isOpen:this.props.isOpen,onRequestClose:this.props.onRequestClose,style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)"}},ariaHideApp:!1},r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("h5",{className:"mt-6 text-lg font-bold text-gray-900 leading-tight"},this.props.entry.name),r.a.createElement("p",null,this.props.entry.summary),r.a.createElement("span",null,this.props.entry.keywords.join(", "))),r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("a",{href:this.props.entry.website||"#/",target:"_blank",rel:"noopener noreferrer"},"Open"),r.a.createElement("a",{href:"#/",onClick:this.props.onRequestClose},"Close")))}}]),a}(r.a.Component),pe=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={modalOpen:!1},n.handleOpenModal=n.handleOpenModal.bind(Object(f.a)(n)),n.handleCloseModal=n.handleCloseModal.bind(Object(f.a)(n)),n}return Object(u.a)(a,[{key:"handleOpenModal",value:function(){return this.setState({modalOpen:!0})}},{key:"handleCloseModal",value:function(){return this.setState({modalOpen:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"h-20 w-1/3 px-2 py-3 bg-gray-400 border rounded-lg overflow-hidden justify-center hover:bg-green-400"},r.a.createElement("div",{className:"px-2 py-3",onClick:this.handleOpenModal},r.a.createElement("h5",{className:"text-lg font-bold text-gray-900 leading-tight"},this.props.entry.name),r.a.createElement("p",null,this.props.entry.category)),r.a.createElement(me,{entry:this.props.entry,isOpen:this.state.modalOpen,onRequestClose:this.handleCloseModal}))}}]),a}(r.a.Component),de=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=ce(this.props.content).slice(0,8);return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("h1",{className:"mt-12 text-lg font-bold text-gray-900 leading-tight"},"Portfolio"),r.a.createElement("div",{id:"portfolio-wrapper",className:"flex-wrap flex justify-between py-12"},e.map((function(e,t){return r.a.createElement(pe,{key:t,index:t,entry:e})})))))}}]),a}(r.a.Component),he=a(44),ge=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mt-0 p-20 sm:p-40 pt-0"},r.a.createElement("blockquote",null,r.a.createElement("p",{className:"text-green-700 text-lg    "},this.props.entry.reference),r.a.createElement("cite",{className:"text-bold"},this.props.entry.name,r.a.createElement("span",{className:"block"},"".concat(this.props.entry.position,", ").concat(this.props.entry.company)))))}}]),a}(r.a.Component),fe=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e={autoplay:!0,decorators:[],framePadding:"10px",cellSpacing:30,wrapAround:!0};return r.a.createElement("section",{id:"testimonials"},r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("h1",{className:"mt-6 text-lg font-bold text-gray-900 leading-tight"},"References")),r.a.createElement("div",{className:"px-8 py-12"},r.a.createElement("div",{className:""},r.a.createElement(he.a,{autoplay:e.autoplay,decorators:e.decorators,wrapAround:e.wrapAround},this.props.content.map((function(e,t){return r.a.createElement(ge,{key:t,entry:e})}))))))}}]),a}(r.a.Component),ye=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:""},r.a.createElement("div",{className:""},r.a.createElement($,{ulClass:"social-links",profiles:this.props.content.profiles}),r.a.createElement("ul",{className:""},r.a.createElement("li",null,"This site is developed in React.js by\xa0",r.a.createElement("a",{href:"https://jcc2303.github.io",title:"Javier Cabrera",target:"_blank",rel:"noopener noreferrer"},"Javier Cabrera")," from the original design of Ceevee from\xa0",r.a.createElement("a",{href:"http://www.tecla5.com/",title:"Styleshout",target:"_blank",rel:"noopener noreferrer"},"Tecla5")))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:""})))))}}]),a}(r.a.Component);var be=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t={skills:this.props.skills,languages:this.props.languages};return r.a.createElement("div",null,r.a.createElement(Z,{content:this.props.basics,generatePDF:function(){return function(e){var t=e.basics,a=t.name,n=t.label,r=t.email,i=t.phone,s=t.website,l=t.summary,c=new X.a("p","pt","a4"),o=20,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=o+10+e;return t+20>c.internal.pageSize.height?(c.addPage(),o=20):o=t},m=window.document.getElementsByName("meimage")[0];c.setFillColor(100,100,100),c.rect(c.internal.pageSize.width-20-30,22,30,30,"F"),c.addImage(m,"JPEG",c.internal.pageSize.width-20-30-2,20,30,30,"monkey"),c.setFontSize(22).setTextColor(255,0,0).setFont("times").setFontType("italic").text(a,c.internal.pageSize.width-20-30-10,35,null,null,"right"),c.setTextColor(10,10,10).setFontSize(10).text(n,c.internal.pageSize.width-20-30-10,50,null,null,"right").text(r,20,u()).text(i,20,u()).text(s,20,u()),c.setFontType("italic").text("About",20,u(10)),c.line(20,o+2,c.internal.pageSize.width-20,o+2).text(c.splitTextToSize(l,c.internal.pageSize.width-40),20,u(10)),u(20),c.setFontSize(10).setFont("times").setFontType("italic").text("Education",20,u()),c.line(20,o+2,c.internal.pageSize.width-20,o+2),u(),e.education.map((function(e){var t=e.institution,a=e.area,n=e.startDate,r=e.endDate;c.setFontSize(10).setFont("times").setFontType("bold").text(t+" "+a,30,u(5)).setFontType("italic").text("".concat(n," - ").concat(r),c.internal.pageSize.width-20,o,null,null,"right")})),u(10),c.text("Skills",20,u()),c.line(20,o+2,c.internal.pageSize.width-20,o+2),u(),e.skills.map((function(e){var t=e.title,a=e.description,n=e.keywords,r=void 0===n?[]:n;c.setFontSize(10).setFont("times").setFontType("bold").text(t,30,u(5)).setFontType("italic").text("".concat(a),125,o),c.text(r.join(" | "),c.internal.pageSize.width-20,o,null,null,"right")})),u(10),c.setFontType("italic").text("Experience",20,u()),c.line(20,o+2,c.internal.pageSize.width-20,o+2),u(),e.work.map((function(e){var t=e.company,a=e.position,n=e.startDate,r=e.endDate,i=void 0===r?"current":r,s=e.highlights;c.setFontSize(10).setFont("times").setFontType("bold").text(t,30,u(5)).setFontType("italic").text(a,30,u()).text("".concat(n," - ").concat(i),c.internal.pageSize.width-20,o,null,null,"right"),s.map((function(e){c.text(e,40,u())}))})),c.save("resume.pdf")}(e.props)}}),r.a.createElement(ne,{content:this.props.work}),r.a.createElement(ie,{content:this.props.education}),r.a.createElement(le,{content:t}),r.a.createElement(de,{content:this.props.portfolio}),r.a.createElement(fe,{content:this.props.references}),r.a.createElement(ye,{content:this.props.basics}))}}]),a}(r.a.Component),ve=a(41),Ee=a.n(ve),Oe=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={resume:!1},n}return Object(u.a)(a,[{key:"convertYamlToJson",value:function(e){return Ee.a.load(e)}},{key:"componentDidMount",value:function(){return g.a.get(this.props.config.resumePath).end(function(e,t){return e||this.setState({resume:this.convertYamlToJson(t.text)})}.bind(this))}},{key:"onLoad",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null,r.a.createElement(G,{navigation:this.props.config.navigation}),r.a.createElement(K,{basics:this.state.resume.basics}),r.a.createElement(Q,null)),r.a.createElement(be,{basics:this.state.resume.basics,work:this.state.resume.work,education:this.state.resume.education,skills:this.state.resume.skills,languages:this.state.resume.languages,portfolio:this.state.resume.projects,references:this.state.resume.references}))}},{key:"beforeLoad",value:function(){return r.a.createElement(d,null)}},{key:"render",value:function(){return this.state.resume?this.onLoad():this.beforeLoad()}}]),a}(r.a.Component),xe=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:""},"404: It appears you have lost your way",r.a.createElement("br",null),r.a.createElement("span",null,"Return to safety ",r.a.createElement("a",{href:"/"},"here.")))}}]),a}(r.a.Component);var je=function(e){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(c.c,null,r.a.createElement(c.a,{render:function(t){return r.a.createElement(Oe,Object.assign({},t,{config:e}))}}),r.a.createElement(c.a,{path:"*",component:xe}))))}({resumePath:-1===["localhost","127.0.0.1"].indexOf(window.location.hostname)?(console.log("prod",window.location.hostname),"/resume.yaml"):(console.log("dev",window.location.hostname),"/public/resume.yaml"),navigation:{home:"Home",about:"About",work:"Work",education:"Education",skill:"Skills",portfolio:"Portfolio",testimonials:"References"}});var we=function(){return r.a.createElement("div",{className:"text-align-center antialiased text-gray-900"},je)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,a){e.exports=a.p+"static/media/logo.1d72ad51.svg"},47:function(e,t,a){e.exports=a(100)},52:function(e,t,a){},53:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.297536c8.chunk.js.map