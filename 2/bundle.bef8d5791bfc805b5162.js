!function(){var t={10:function(t,e,n){"use strict";var i=n(537),a=n.n(i),s=n(645),r=n.n(s)()(a());r.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]),e.Z=r},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,a,s){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var l=0;l<this.length;l++){var o=this[l][0];null!=o&&(r[o]=!0)}for(var c=0;c<t.length;c++){var m=[].concat(t[c]);i&&r[m[0]]||(void 0!==s&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=s),n&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=n):m[2]=n),a&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=a):m[4]="".concat(a)),e.push(m))}},e}},537:function(t){"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(a," */");return[e].concat([s]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",a="minute",s="hour",r="day",l="week",o="month",c="quarter",m="year",d="date",f="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},g={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+p(i,2,"0")+":"+p(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(i,o),s=n-a<0,r=e.clone().add(i+(s?-1:1),o);return+(-(i+(n-a)/(s?a-r:r-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:m,w:l,d:r,D:d,h:s,m:a,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=_;var w=function(t){return t instanceof C},b=function t(e,n,i){var a;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(a=s),n&&(y[s]=n,a=s);var r=e.split("-");if(!a&&r.length>1)return t(r[0])}else{var l=e.name;y[l]=e,a=l}return!i&&a&&(v=a),a||!i&&v},M=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new C(n)},$=g;$.l=b,$.i=w,$.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var C=function(){function _(t){this.$L=b(t.locale,null,!0),this.parse(t)}var p=_.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(u);if(i){var a=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return $},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return M(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<M(t)},p.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,c=!!$.u(e)||e,f=$.p(t),u=function(t,e){var i=$.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(r)},h=function(t,e){return $.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},_=this.$W,p=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case m:return c?u(1,0):u(31,11);case o:return c?u(1,p):u(0,p+1);case l:var y=this.$locale().weekStart||0,w=(_<y?_+7:_)-y;return u(c?g-w:g+(6-w),p);case r:case d:return h(v+"Hours",0);case s:return h(v+"Minutes",1);case a:return h(v+"Seconds",2);case i:return h(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var l,c=$.p(t),f="set"+(this.$u?"UTC":""),u=(l={},l[r]=f+"Date",l[d]=f+"Date",l[o]=f+"Month",l[m]=f+"FullYear",l[s]=f+"Hours",l[a]=f+"Minutes",l[i]=f+"Seconds",l[n]=f+"Milliseconds",l)[c],h=c===r?this.$D+(e-this.$W):e;if(c===o||c===m){var _=this.clone().set(d,1);_.$d[u](h),_.init(),this.$d=_.set(d,Math.min(this.$D,_.daysInMonth())).$d}else u&&this.$d[u](h);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[$.p(t)]()},p.add=function(n,c){var d,f=this;n=Number(n);var u=$.p(c),h=function(t){var e=M(f);return $.w(e.date(e.date()+Math.round(t*n)),f)};if(u===o)return this.set(o,this.$M+n);if(u===m)return this.set(m,this.$y+n);if(u===r)return h(1);if(u===l)return h(7);var _=(d={},d[a]=t,d[s]=e,d[i]=1e3,d)[u]||1,p=this.$d.getTime()+n*_;return $.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=$.z(this),s=this.$H,r=this.$m,l=this.$M,o=n.weekdays,c=n.months,m=function(t,n,a,s){return t&&(t[n]||t(e,i))||a[n].slice(0,s)},d=function(t){return $.s(s%12||12,t,"0")},u=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:$.s(l+1,2,"0"),MMM:m(n.monthsShort,l,c,3),MMMM:m(c,l),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:m(n.weekdaysMin,this.$W,o,2),ddd:m(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:$.s(s,2,"0"),h:d(1),hh:d(2),a:u(s,r,!0),A:u(s,r,!1),m:String(r),mm:$.s(r,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:a};return i.replace(h,(function(t,e){return e||_[t]||a.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,d,f){var u,h=$.p(d),_=M(n),p=(_.utcOffset()-this.utcOffset())*t,g=this-_,v=$.m(this,_);return v=(u={},u[m]=v/12,u[o]=v,u[c]=v/3,u[l]=(g-p)/6048e5,u[r]=(g-p)/864e5,u[s]=g/e,u[a]=g/t,u[i]=g/1e3,u)[h]||g,f?v:$.a(v)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return $.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},_}(),D=C.prototype;return M.prototype=D,[["$ms",n],["$s",i],["$m",a],["$H",s],["$W",r],["$M",o],["$y",m],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,C,M),t.$i=!0),M},M.locale=b,M.isDayjs=w,M.unix=function(t){return M(1e3*t)},M.en=y[v],M.Ls=y,M.p={},M}()},379:function(t){"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var s={},r=[],l=0;l<t.length;l++){var o=t[l],c=i.base?o[0]+i.base:o[0],m=s[c]||0,d="".concat(c," ").concat(m);s[c]=m+1;var f=n(d),u={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var h=a(u,i);i.byIndex=l,e.splice(l,0,{identifier:d,updater:h,references:1})}r.push(d)}return r}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var s=i(t=t||[],a=a||{});return function(t){t=t||[];for(var r=0;r<s.length;r++){var l=n(s[r]);e[l].references--}for(var o=i(t,a),c=0;c<s.length;c++){var m=n(s[c]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}s=o}}},569:function(t){"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={id:i,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.nc=void 0,function(){"use strict";class t{#t=new Set;addObserver(t){this.#t.add(t)}removeObserver(t){this.#t.delete(t)}_notify(t,e){this.#t.forEach((n=>n(t,e)))}}let e=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");function i(){const t=new Date(2e3,0,1),e=new Date;return new Date(t.getTime()+Math.random()*(e.getTime()-t.getTime()))}const a=t=>t[Math.floor(Math.random()*t.length)],s=["smile","sleeping","puke","angry"],r=["Now is the winter of our discontent","Made glorious summer by this sun of York","And all the clouds that lour'd upon our house","In the deep bosom of the ocean buried.","Now are our brows bound with victorious wreaths;","Our bruised arms hung up for monuments;","Our stern alarums changed to merry meetings","Our dreadful marches to delightful measures."],l=["Sonny Carney","Inaaya Vincent","Libby Patel","Aled Dillon","Justin Stafford","Amie Cantrell","Romeo Gordon","Sian Hull","Noel Conley","Herbie Fuentes"],o=function(t){const n=[];for(let t=0;t<20;t++){const t={id:e(),comment:a(r),emotion:a(s),author:a(l),date:i()};n.push(t)}return n}();function c(){const t=new Date(1950,0,1),e=new Date;return new Date(t.getTime()+Math.random()*(e.getTime()-t.getTime()))}const m=(t,e)=>{const n=Math.ceil(Math.min(t,e)),i=Math.floor(Math.max(t,e)),a=Math.random()*(i-n+1)+n;return Math.floor(a)};function d(){const t=Math.floor(7*Math.random()),e=[];for(;e.length<t;){let t=o[m(0,o.length-1)].id;e.includes(t)?t=o[m(0,o.length-1)].id:e.push(t)}return e}const f=[{id:e(),comments:d(),filmInfo:{title:"The Dance of Life",alternativeTitle:"",description:'Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…',totalRating:8.3,poster:"the-dance-of-life.jpg",ageRating:12,director:"Anthony Mann",writers:["Minnie Graham","Martin Lee"],actors:["Peter Sullivan","Phillip Taylor","Beverly Ruiz"],genre:["Drama"],duration:96,release:{date:c(),releaseCountry:"Nepal"}},userDetails:{watchlist:!0,alreadyWatched:!1,watchingDate:"",favorite:!1}},{id:e(),comments:d(),filmInfo:{title:"Sagebrush Trail",alternativeTitle:"",description:"Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…",totalRating:3.2,poster:"sagebrush-trail.jpg",ageRating:12,director:"John Banks",writers:["Jimmy Cunningham","Robert Collins","John King"],actors:["Tiffany Kelley","Richard Carr","Jonathan Harrison","Kenneth Chavez","Katherine Phillips"],genre:["Drama"],duration:103,release:{date:c(),releaseCountry:"Brazil"}},userDetails:{watchlist:!1,alreadyWatched:!1,watchingDate:"",favorite:!1}},{id:e(),comments:d(),filmInfo:{title:"The Man with the Golden Arm",alternativeTitle:"",description:"Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…",totalRating:9,poster:"the-man-with-the-golden-arm.jpg",ageRating:16,director:"William Sanders",writers:["Donna Brown"],actors:["Miguel Smith","Richard Garcia","Mary Waters"],genre:["Drama"],duration:122,release:{date:c(),releaseCountry:"Panama"}},userDetails:{watchlist:!1,alreadyWatched:!0,watchingDate:c(),favorite:!1}},{id:e(),comments:d(),filmInfo:{title:"Santa Claus Conquers the Martians",alternativeTitle:"",description:'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…',totalRating:2.3,poster:"santa-claus-conquers-the-martians.jpg",ageRating:16,director:"Michelle Miller",writers:["Susan Moran","Eric Nguyen"],actors:["Kathleen Ingram","Rebecca Carter","Ruth Silva","Margaret Palmer"],genre:["Drama"],duration:109,release:{date:c(),releaseCountry:"Estonia"}},userDetails:{watchlist:!1,alreadyWatched:!0,watchingDate:c(),favorite:!0}},{id:e(),comments:d(),filmInfo:{title:"Popeye the Sailor Meets Sindbad the Sailor",alternativeTitle:"",description:'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…',totalRating:6.3,poster:"popeye-meets-sinbad.png",ageRating:3,director:"Anthony Hunter",writers:["Timothy Cooper","Eric Russell","Kimberly Hicks"],actors:[],genre:["Drama"],duration:40,release:{date:c(),releaseCountry:"Guatemala"}},userDetails:{watchlist:!1,alreadyWatched:!1,watchingDate:c(),favorite:!1}}];var u=n(379),h=n.n(u),_=n(795),p=n.n(_),g=n(569),v=n.n(g),y=n(565),w=n.n(y),b=n(216),M=n.n(b),$=n(589),C=n.n($),D=n(10),S={};S.styleTagTransform=C(),S.setAttributes=w(),S.insert=v().bind(null,"head"),S.domAPI=p(),S.insertStyleElement=M(),h()(D.Z,S),D.Z&&D.Z.locals&&D.Z.locals;const k="shake";class A{#e=null;constructor(){if(new.target===A)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(t){this.element.classList.add(k),setTimeout((()=>{this.element.classList.remove(k),t?.()}),600)}}function x(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";if(!(t instanceof A))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function j(t){if(null!==t){if(!(t instanceof A))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}class T extends A{get template(){return'<section class="films">\n\n\n    \x3c!--\n    <section class="films-list films-list--extra">\n      <h2 class="films-list__title">Top rated</h2>\n\n      <div class="films-list__container">\n        <article class="film-card">\n          <a class="film-card__link">\n            <h3 class="film-card__title">The Man with the Golden Arm</h3>\n            <p class="film-card__rating">9.0</p>\n            <p class="film-card__info">\n              <span class="film-card__year">1955</span>\n              <span class="film-card__duration">1h 59m</span>\n              <span class="film-card__genre">Drama</span>\n            </p>\n            <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">\n            <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>\n            <span class="film-card__comments">18 comments</span>\n          </a>\n          <div class="film-card__controls">\n            <button\n              class="film-card__controls-item film-card__controls-item--add-to-watchlist"\n              type="button">Add to watchlist</button>\n            <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>\n            <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>\n          </div>\n        </article>\n\n        <article class="film-card">\n          <a class="film-card__link">\n            <h3 class="film-card__title">The Great Flamarion</h3>\n            <p class="film-card__rating">8.9</p>\n            <p class="film-card__info">\n              <span class="film-card__year">1945</span>\n              <span class="film-card__duration">1h 18m</span>\n              <span class="film-card__genre">Mystery</span>\n            </p>\n            <img src="./images/posters/the-great-flamarion.jpg" alt="" class="film-card__poster">\n            <p class="film-card__description">The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…</p>\n            <span class="film-card__comments">12 comments</span>\n          </a>\n          <div class="film-card__controls">\n            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>\n            <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>\n            <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>\n          </div>\n        </article>\n      </div>\n    </section>\n\n    <section class="films-list films-list--extra">\n      <h2 class="films-list__title">Most commented</h2>\n\n      <div class="films-list__container">\n        <article class="film-card">\n          <a class="film-card__link">\n            <h3 class="film-card__title">Santa Claus Conquers the Martians</h3>\n            <p class="film-card__rating">2.3</p>\n            <p class="film-card__info">\n              <span class="film-card__year">1964</span>\n              <span class="film-card__duration">1h 21m</span>\n              <span class="film-card__genre">Comedy</span>\n            </p>\n            <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" class="film-card__poster">\n            <p class="film-card__description">The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…</p>\n            <span class="film-card__comments">465 comments</span>\n          </a>\n          <div class="film-card__controls">\n            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>\n            <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>\n            <button class="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>\n          </div>\n        </article>\n\n        <article class="film-card">\n          <a class="film-card__link">\n            <h3 class="film-card__title">Made for Each Other</h3>\n            <p class="film-card__rating">5.8</p>\n            <p class="film-card__info">\n              <span class="film-card__year">1939</span>\n              <span class="film-card__duration">1h 32m</span>\n              <span class="film-card__genre">Comedy</span>\n            </p>\n            <img src="./images/posters/made-for-each-other.png" alt="" class="film-card__poster">\n            <p class="film-card__description">John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…</p>\n            <span class="film-card__comments">56 comments</span>\n          </a>\n          <div class="film-card__controls">\n            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>\n            <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>\n            <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>\n          </div>\n        </article>\n      </div>\n    </section> --\x3e\n  </section>'}}class E extends A{get template(){return'<section class="header__profile profile">\n    <p class="profile__rating">Movie Buff</p>\n    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">\n  </section>'}}class B extends A{get template(){return'<nav class="main-navigation">\n    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>\n    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>\n    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>\n    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>\n  </nav>'}}class O extends A{get template(){return'<ul class="sort">\n    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>\n    <li><a href="#" class="sort__button">Sort by date</a></li>\n    <li><a href="#" class="sort__button">Sort by rating</a></li>\n  </ul>'}}const I="YYYY",H="DD MMM YYYY",R="YYYY/MM/DD HH:mm",N={HOURS:24,MINUTES:60};var L=n(484),Y=n.n(L);function F(t){const e=t%N.MINUTES;let n=(t-e)/N.MINUTES;return n=n>0?`${n}h`:"",`${n} ${e}m`}class P extends A{#n=null;#i=null;constructor(t){let{film:e,onDetailsClick:n}=t;super(),this.#n=e,this.#i=n,this.element.addEventListener("click",this.#a)}get template(){return function(t){let{comments:e,filmInfo:n,userDetails:i}=t;return`<article class="film-card">\n          <a class="film-card__link">\n            <h3 class="film-card__title">${n.title}</h3>\n            <p class="film-card__rating">${n.totalRating.toFixed(1)}</p>\n            <p class="film-card__info">\n              <span class="film-card__year">${Y()(n.release.date).format(I)}</span>\n              <span class="film-card__duration">${F(n.duration)}</span>\n              <span class="film-card__genre">${n.genre}</span>\n            </p>\n            <img src="./images/posters/${n.poster}" alt="" class="film-card__poster">\n            <p class="film-card__description">${n.description}</p>\n            <span class="film-card__comments">${e.length} comments</span>\n          </a>\n          <div class="film-card__controls">\n            <button class=" ${i.watchlist?"film-card__controls-item--active":""} film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>\n            <button class=" ${i.alreadyWatched?"film-card__controls-item--active":""} film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>\n            <button class=" ${i.favorite?"film-card__controls-item--active":""} film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>\n          </div>\n        </article>`}(this.#n)}#a=t=>{t.preventDefault(),this.#i?.(t.target)}}class W{#s=null;#r=null;#n=null;#i=null;constructor(t){let{container:e,onDetailsClick:n}=t;this.#s=e,this.#i=n}init(t){const e=this.#r;this.#n=t,this.#r=new P({film:this.#n,onDetailsClick:this.#i}),null!==e?(function(t,e){if(!(t instanceof A&&e instanceof A))throw new Error("Can replace only components");const n=t.element,i=e.element,a=i.parentElement;if(null===a)throw new Error("Parent element doesn't exist");a.replaceChild(n,i)}(this.#r,e),j(e)):x(this.#r,this.#s)}}class U extends A{get template(){return'<div class="films-list__container">\n\n      </div>'}}class J extends A{get template(){return'<button class="films-list__show-more">Show more</button>'}}class V extends A{get template(){return'<section class="films-list">\n      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>\n\n    </section>'}}function G(t){return t.join(", ")}class K extends A{#n=null;#l=null;constructor(t){let{film:e,commentsData:n}=t;super(),this.#n=e,this.#l=n,this.element.querySelector(".film-details__close-btn").addEventListener("click",this.#o)}get template(){return function(t,e){let{comments:n,filmInfo:i,userDetails:a}=t;return`<section class="film-details">\n  <div class="film-details__inner">\n    <div class="film-details__top-container">\n      <div class="film-details__close">\n        <button class="film-details__close-btn" type="button">close</button>\n      </div>\n      <div class="film-details__info-wrap">\n        <div class="film-details__poster">\n          <img\n            class="film-details__poster-img"\n            src="./images/posters/${i.poster}" alt="${i.title}">\n\n          <p class="film-details__age">${i.ageRating}+</p>\n        </div>\n\n        <div class="film-details__info">\n          <div class="film-details__info-head">\n            <div class="film-details__title-wrap">\n              <h3 class="film-details__title">${i.title}</h3>\n              <p class="film-details__title-original">${i.alternativeTitle}</p>\n            </div>\n\n            <div class="film-details__rating">\n              <p class="film-details__total-rating">${i.totalRating.toFixed(1)}</p>\n            </div>\n          </div>\n\n          <table class="film-details__table">\n            <tbody><tr class="film-details__row">\n              <td class="film-details__term">Director</td>\n              <td class="film-details__cell">${i.director}</td>\n            </tr>\n            <tr class="film-details__row">\n              <td class="film-details__term">Writers</td>\n              <td class="film-details__cell">${G(i.writers)}</td>\n            </tr>\n            <tr class="film-details__row">\n              <td class="film-details__term">Actors</td>\n              <td class="film-details__cell">${G(i.actors)}</td>\n            </tr>\n            <tr class="film-details__row">\n              <td class="film-details__term">Release Date</td>\n              <td class="film-details__cell">${Y()(i.release.date).format(H)}</td>\n            </tr>\n            <tr class="film-details__row">\n              <td class="film-details__term">Duration</td>\n              <td class="film-details__cell">${F(i.duration)}</td>\n            </tr>\n            <tr class="film-details__row">\n              <td class="film-details__term">Country</td>\n              <td class="film-details__cell">${i.release.releaseCountry}</td>\n            </tr>\n            <tr class="film-details__row">\n              <td class="film-details__term">Genres</td>\n              <td class="film-details__cell">\n                ${s=i.genre,s.map((t=>`<span class="film-details__genre">${t}</span>`)).join("")}</td>\n            </tr>\n          </tbody></table>\n\n          <p class="film-details__film-description">\n            ${i.description}\n          </p>\n        </div>\n      </div>\n\n      <section class="film-details__controls">\n        <button type="button"\n          class="film-details__control-button\n          film-details__control-button--watchlist\n          ${a.watchlist?"film-details__control-button--active":""}" id="watchlist" name="watchlist">Add to watchlist</button>\n        <button type="button"\n          class="film-details__control-button\n          film-details__control-button--watched\n          ${a.alreadyWatched?"film-details__control-button--active":""}" id="watched" name="watched">Already watched</button>\n        <button type="button"\n          class="film-details__control-button\n          film-details__control-button--favorite\n          ${a.favorite?"film-details__control-button--active":""}" id="favorite" name="favorite">Add to favorites</button>\n      </section>\n    </div>\n\n    <div class="film-details__bottom-container">\n      <section class="film-details__comments-wrap">\n        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${n?n.length:"0"}</span></h3>\n\n        <ul class="film-details__comments-list">\n          ${function(t,e){return t.map((t=>{const n=e.find((e=>e.id===t));return`<li class="film-details__comment">\n            <span class="film-details__comment-emoji">\n              <img src="./images/emoji/${n.emotion}.png" width="55" height="55" alt="emoji-smile">\n            </span>\n            <div>\n              <p class="film-details__comment-text">${n.comment}</p>\n              <p class="film-details__comment-info">\n                <span class="film-details__comment-author">${n.author}</span>\n                <span class="film-details__comment-day">${Y()(n.date).format(R)}</span>\n                <button class="film-details__comment-delete">Delete</button>\n              </p>\n            </div>\n          </li>`})).join("")}(n,e)}\n        </ul>\n\n        <form class="film-details__new-comment" action="" method="get">\n          <div class="film-details__add-emoji-label"></div>\n\n          <label class="film-details__comment-label">\n            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>\n          </label>\n\n          <div class="film-details__emoji-list">\n            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">\n            <label class="film-details__emoji-label" for="emoji-smile">\n              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">\n            </label>\n\n            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">\n            <label class="film-details__emoji-label" for="emoji-sleeping">\n              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">\n            </label>\n\n            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">\n            <label class="film-details__emoji-label" for="emoji-puke">\n              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">\n            </label>\n\n            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">\n            <label class="film-details__emoji-label" for="emoji-angry">\n              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">\n            </label>\n          </div>\n        </form>\n      </section>\n    </div>\n  </div>\n</section>`;var s}(this.#n,this.#l)}destroy(){j(this)}#o=t=>{"BUTTON"===t.target.nodeName&&(t.preventDefault(),this.destroy())}}const q=document.querySelector("header"),Z=document.querySelector("main"),z=document.querySelector("body"),X=new class extends t{#c=[];get films(){return this.#c}init(){this.#c=f}},Q=new class extends t{#m=[];get comments(){return this.#m}init(){this.#m=o}},tt=new class{#d=null;#f=null;#u=null;#h=null;#_=null;#p=new E;#g=new B;#v=new O;#y=new T;#w=new Map;#b=new U;#M=new J;#$=new V;constructor(t){let{header:e,container:n,body:i,filmsModel:a,commentsModel:s}=t;this.#d=e,this.#f=n,this.#u=i,this.#h=a,this.#_=s}get films(){return this.#h.films}init(){this.#C()}#C(){this.#D(),this.#S(),this.#k(),this.#A(),this.films.forEach((t=>this.#x(t))),this.#j()}#x(t){const e=new W({container:this.#b.element,onDetailsClick:this.#T});e.init(t),this.#w.set(t.id,e)}#A(){x(this.#y,this.#f),x(this.#$,this.#y.element),x(this.#b,this.#$.element)}#D(){x(this.#p,this.#d)}#S(){x(this.#g,this.#f)}#k(){x(this.#v,this.#f)}#j(){x(this.#M,this.#$.element)}#E(t){x(t,this.#u)}#T=t=>{if("IMG"!==t.nodeName)return;const e=t.parentNode.children[0].innerText,n=this.films.find((t=>t.filmInfo.title===e));x(new K({film:n,commentsData:this.#_.comments}),this.#u)}}({header:q,container:Z,body:z,filmsModel:X,commentsModel:Q});X.init(),Q.init(),tt.init()}()}();
//# sourceMappingURL=bundle.bef8d5791bfc805b5162.js.map