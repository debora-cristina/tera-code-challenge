(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["book"],{"0a06":function(t,e,o){"use strict";var r=o("c532"),n=o("30b5"),i=o("f6b4"),s=o("5270"),a=o("4a7b");function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[s,void 0],o=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)o=o.then(e.shift(),e.shift());return o},c.prototype.getUri=function(t){return t=a(this.defaults,t),n(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,o){return this.request(a(o||{},{method:t,url:e,data:(o||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,o,r){return this.request(a(r||{},{method:t,url:e,data:o}))}})),t.exports=c},"0df6":function(t,e,o){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},1093:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[o("b-row",{attrs:{"no-gutters":""}},[o("b-col",{attrs:{md:"6"}},[o("b-card-img",{staticClass:"rounded-0",attrs:{src:t.book.cover_picture,alt:"Image"}})],1),o("b-col",{attrs:{md:"6"}},[o("b-card-body",{attrs:{title:t.book.name}},[o("b-card-text",[t._v(" "+t._s(t.book.description)+" ")])],1)],1)],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"back"},[o("a",{attrs:{href:"/"}},[t._v(" Voltar")])])}],i={name:"bookDetails",data:function(){return{book:{}}},methods:{},mounted:function(){this.book=this.$route.params.book}},s=i,a=(o("2bae"),o("2877")),c=Object(a["a"])(s,r,n,!1,null,null,null);e["default"]=c.exports},"158e":function(t,e,o){"use strict";o("ada5")},"1d2b":function(t,e,o){"use strict";t.exports=function(t,e){return function(){for(var o=new Array(arguments.length),r=0;r<o.length;r++)o[r]=arguments[r];return t.apply(e,o)}}},2444:function(t,e,o){"use strict";(function(e){var r=o("c532"),n=o("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function a(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=o("b50d")),t}var c={adapter:a(),transformRequest:[function(t,e){return n(e,"Accept"),n(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){c.headers[t]=r.merge(i)})),t.exports=c}).call(this,o("4362"))},2532:function(t,e,o){"use strict";var r=o("23e7"),n=o("5a34"),i=o("1d80"),s=o("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(i(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,o){"use strict";var r=o("6eeb"),n=o("825a"),i=o("d039"),s=o("ad6d"),a="toString",c=RegExp.prototype,u=c[a],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=a;(l||f)&&r(RegExp.prototype,a,(function(){var t=n(this),e=String(t.source),o=t.flags,r=String(void 0===o&&t instanceof RegExp&&!("flags"in c)?s.call(t):o);return"/"+e+"/"+r}),{unsafe:!0})},"2bae":function(t,e,o){"use strict";o("928b")},"2d83":function(t,e,o){"use strict";var r=o("387f");t.exports=function(t,e,o,n,i){var s=new Error(t);return r(s,e,o,n,i)}},"2e67":function(t,e,o){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,o){"use strict";var r=o("c532");function n(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,o){if(!e)return t;var i;if(o)i=o(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))})))})),i=s.join("&")}if(i){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},"387f":function(t,e,o){"use strict";t.exports=function(t,e,o,r,n){return t.config=e,o&&(t.code=o),t.request=r,t.response=n,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,o){"use strict";var r=o("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function n(t){var r=t;return e&&(o.setAttribute("href",r),r=o.href),o.setAttribute("href",r),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return t=n(window.location.href),function(e){var o=r.isString(e)?n(e):e;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},"3ca3":function(t,e,o){"use strict";var r=o("6547").charAt,n=o("69f3"),i=o("7dd0"),s="String Iterator",a=n.set,c=n.getterFor(s);i(String,"String",(function(t){a(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),o=e.string,n=e.index;return n>=o.length?{value:void 0,done:!0}:(t=r(o,n),e.index+=t.length,{value:t,done:!1})}))},"44e7":function(t,e,o){var r=o("861d"),n=o("c6b6"),i=o("b622"),s=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==n(t))}},"467f":function(t,e,o){"use strict";var r=o("2d83");t.exports=function(t,e,o){var n=o.config.validateStatus;o.status&&n&&!n(o.status)?e(r("Request failed with status code "+o.status,o.config,null,o.request,o)):t(o)}},"4a7b":function(t,e,o){"use strict";var r=o("c532");t.exports=function(t,e){e=e||{};var o={},n=["url","method","data"],i=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function u(n){r.isUndefined(e[n])?r.isUndefined(t[n])||(o[n]=c(void 0,t[n])):o[n]=c(t[n],e[n])}r.forEach(n,(function(t){r.isUndefined(e[t])||(o[t]=c(void 0,e[t]))})),r.forEach(i,u),r.forEach(s,(function(n){r.isUndefined(e[n])?r.isUndefined(t[n])||(o[n]=c(void 0,t[n])):o[n]=c(void 0,e[n])})),r.forEach(a,(function(r){r in e?o[r]=c(t[r],e[r]):r in t&&(o[r]=c(void 0,t[r]))}));var l=n.concat(i).concat(s).concat(a),f=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===l.indexOf(t)}));return r.forEach(f,u),o}},"4df4":function(t,e,o){"use strict";var r=o("0366"),n=o("7b0b"),i=o("9bdd"),s=o("e95a"),a=o("50c4"),c=o("8418"),u=o("35a1");t.exports=function(t){var e,o,l,f,d,h,p=n(t),b="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,k=void 0!==v,g=u(p),y=0;if(k&&(v=r(v,m>2?arguments[2]:void 0,2)),void 0==g||b==Array&&s(g))for(e=a(p.length),o=new b(e);e>y;y++)h=k?v(p[y],y):p[y],c(o,y,h);else for(f=g.call(p),d=f.next,o=new b;!(l=d.call(f)).done;y++)h=k?i(f,v,[l.value,y],!0):l.value,c(o,y,h);return o.length=y,o}},5270:function(t,e,o){"use strict";var r=o("c532"),n=o("c401"),i=o("2e67"),s=o("2444");function a(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){a(t),t.headers=t.headers||{},t.data=n(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||s.adapter;return e(t).then((function(e){return a(t),e.data=n(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(a(t),e&&e.response&&(e.response.data=n(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"5a34":function(t,e,o){var r=o("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5f02":function(t,e,o){"use strict";t.exports=function(t){return"object"===typeof t&&!0===t.isAxiosError}},"64de":function(t,e,o){"use strict";o("c435")},6547:function(t,e,o){var r=o("a691"),n=o("1d80"),i=function(t){return function(e,o){var i,s,a=String(n(e)),c=r(o),u=a.length;return c<0||c>=u?t?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):i:t?a.slice(c,c+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"7a77":function(t,e,o){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,o){"use strict";var r=o("c532");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,o,n,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(o)&&a.push("expires="+new Date(o).toGMTString()),r.isString(n)&&a.push("path="+n),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(t,e,o){"use strict";var r=o("d925"),n=o("e683");t.exports=function(t,e){return t&&!r(e)?n(t,e):e}},"8df4":function(t,e,o){"use strict";var r=o("7a77");function n(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var o=this;t((function(t){o.reason||(o.reason=new r(t),e(o.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t,e=new n((function(e){t=e}));return{token:e,cancel:t}},t.exports=n},"928b":function(t,e,o){},"99af":function(t,e,o){"use strict";var r=o("23e7"),n=o("d039"),i=o("e8b5"),s=o("861d"),a=o("7b0b"),c=o("50c4"),u=o("8418"),l=o("65f0"),f=o("1dde"),d=o("b622"),h=o("2d00"),p=d("isConcatSpreadable"),b=9007199254740991,m="Maximum allowed index exceeded",v=h>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),k=f("concat"),g=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},y=!v||!k;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,o,r,n,i,s=a(this),f=l(s,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?s:arguments[e],g(i)){if(n=c(i.length),d+n>b)throw TypeError(m);for(o=0;o<n;o++,d++)o in i&&u(f,d,i[o])}else{if(d>=b)throw TypeError(m);u(f,d++,i)}return f.length=d,f}})},"9bdd":function(t,e,o){var r=o("825a"),n=o("2a62");t.exports=function(t,e,o,i){try{return i?e(r(o)[0],o[1]):e(o)}catch(s){throw n(t),s}}},"9c4f":function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return i}));var r=o("2b0e"),n="https://backend-tera.herokuapp.com";function i(t){t&&t.response&&t.response.data?r["default"].toasted.global.defaultError({msg:t.response.data}):"string"===typeof t?r["default"].toasted.global.defaultError({msg:t}):r["default"].toasted.global.defaultError()}},"9d1e":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"books-list"},[t.user?o("span",{staticClass:"login",on:{click:t.logout}},[t._v(" [Sair]"),o("strong",[t._v(t._s(t.user))])]):t._e(),o("div",{staticClass:"filters mt-2"},[o("div",{class:t.showSelectCategory?"filter-name-category":"filter-name"},[o("b-input",{attrs:{type:"text",placeholder:"Procure por um livro"},model:{value:t.filterName,callback:function(e){t.filterName=e},expression:"filterName"}})],1),o("div",{staticClass:"filter-select",class:t.showSelectCategory?"filter-select-category":"filter-select"},[o("b-select",{attrs:{type:"text",options:t.items},model:{value:t.filterSelected,callback:function(e){t.filterSelected=e},expression:"filterSelected"}})],1),o("div",{class:{"filter-category":t.showSelectCategory}},[t.showSelectCategory?o("b-select",{attrs:{type:"text",options:t.categories},model:{value:t.categorySelected,callback:function(e){t.categorySelected=e},expression:"categorySelected"}}):t._e()],1)]),o("div",{staticClass:"col-sm-12"},[o("paginate",{staticClass:"page-link-books",attrs:{name:"books",list:t.filter,per:t.numberBooks,tag:"div"}},[o("p",{staticClass:"mt-2"},[t._v("Total: "+t._s(t.books.length))]),o("b-row",{attrs:{cols:t.cols[0],"cols-sm":t.cols[1],"cols-md":t.cols[2],"cols-lg":t.cols[3],"cols-xl":t.cols[4]}},t._l(t.paginated("books"),(function(e){return o("b-col",{key:e._id,staticClass:"mb-2 mt-2",attrs:{col:"","no-gutters":""}},[o("BookItem",{attrs:{book:e},on:{update:t.updateBooks,logged:t.getBooks}})],1)})),1)],1),o("div",{staticClass:"paginate"},[o("paginate-links",{attrs:{for:"books","show-step-links":!0,"step-links":{next:">",prev:"<"},classes:{ul:"pagination","ul > li":"page-item","ul > li ":"page-link-books"}}})],1)],1),o("a",{staticClass:"float",attrs:{href:"/books"}},[o("b-icon",{staticClass:"my-float",attrs:{icon:"plus",scale:"2"}})],1)])},n=[],i=(o("99af"),o("4de4"),o("c740"),o("d81d"),o("a434"),o("5530")),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"books-items"},[o("div",{staticClass:"book-image"},[o("figure",{on:{click:t.toBook}},[o("img",{attrs:{src:t.book.cover_picture,alt:"book",height:"200",width:"150"}})])]),o("b-row",[o("b-col",{attrs:{cols:"9"}},[o("strong",[t._v(t._s(t.book.name))])]),o("b-col",[o("b-icon",{attrs:{icon:t.iconLike},on:{click:t.onLikeChange}})],1)],1),o("div",{staticClass:"books-content",on:{click:t.toBook}},[o("small",[t._v(t._s(t.book.author))])]),o("small",{on:{click:t.toBook}},[t._v(t._s(t.book.category))]),o("br"),o("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Digite seu nome:",centered:""},on:{hidden:t.resetModal},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.cancel;return[o("b-button",{attrs:{hide:t.userExists,size:"sm",variant:"success",hidden:t.userExists},on:{click:function(e){return t.handleSubmit()}}},[t._v(" OK ")]),o("b-button",{attrs:{hidden:!t.userExists,size:"sm",variant:"success"},on:{click:function(e){return t.handleSubmit()}}},[t._v(" Logar ")]),o("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return r()}}},[t._v(" Cancelar ")])]}}]),model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[o("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[o("b-form-group",{attrs:{label:"Nome","label-for":"name-input","invalid-feedback":"Nome é obrigatório",state:t.nameState}},[o("b-form-input",{attrs:{id:"name-input",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),o("div",{staticClass:"validation-text"},[o("span",{attrs:{hidden:!this.userExists}},[t._v("*Nome já existente")])])],1)],1)])],1)},a=[],c=(o("b0c0"),o("2f62")),u=o("bc3a"),l=o.n(u),f=o("9c4f"),d={props:["book","edit"],data:function(){return{iconLike:"heart",like:!1,name:null,nameState:null,modalShow:!1,userExists:!1}},computed:Object(c["b"])(["booksLiked","user"]),methods:{toBook:function(){this.$router.push({name:"book-details",params:{id:this.book._id,book:this.book}})},onLikeChange:function(){this.book.like=!this.book.like,this.$emit("update",this.book),null===this.user?this.modalShow=!0:this.book.like?this.$store.commit("setBooksLiked",this.book):this.$store.commit("removeBooksLiked",this.book),this.book.like?this.iconLike="heart-fill":this.iconLike="heart"},handleSubmit:function(){var t=this;this.checkFormValidity()&&(this.$store.commit("setUser",this.name),this.$store.commit("setBooksLiked",this.book),this.$emit("update",this.book),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing")})))},checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.nameState=t,t},resetModal:function(){this.name="",this.nameState=null,this.userExists=!1},handleOk:function(t){t.preventDefault(),this.handleSubmit()},checkUserExists:function(){var t=this;l.a.get("".concat(f["a"],"/books/users/").concat(this.name)).then((function(e){null!==e.data?t.userExists=!0:t.userExists=!1})).catch((function(t){return t}))},verifyLikes:function(){this.book.like?this.iconLike="heart-fill":this.iconLike="heart"}},mounted:function(){this.verifyLikes()},watch:{book:function(){this.book.like?this.iconLike="heart-fill":this.iconLike="heart"},name:function(){this.checkUserExists()}}},h=d,p=(o("d5f8"),o("2877")),b=Object(p["a"])(h,s,a,!1,null,null,null),m=b.exports;o("caad"),o("2532");function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function k(t){if(Array.isArray(t))return v(t)}o("a4d3"),o("e01a"),o("d28b"),o("a630"),o("d3b7"),o("3ca3"),o("ddb0");function g(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}o("fb6a"),o("25f0");function y(t,e){if(t){if("string"===typeof t)return v(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?v(t,e):void 0}}function x(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(t){return k(t)||g(t)||y(t)||x()}var w={findByName:function(t,e){return S(t).filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},bestAvaliation:function(t){return S(t).sort((function(t,e){return t.users_who_liked.length>e.users_who_liked.length?-1:t.users_who_liked.length<e.users_who_liked.length?1:0}))},orderByStock:function(t){return S(t).filter((function(t){return t.stock>0}))},orderByName:function(t){return S(t).sort((function(t,e){return t.name<e.name?-1:t.name>e.name?1:0}))},orderByCategory:function(t,e){return S(t).filter((function(t){return t.category===e}))},orderByMyLikes:function(t){return t}},C={name:"BooksList",components:{BookItem:m},data:function(){return{books:[],cols:1,paginate:["books"],numberBooks:8,filterName:"",categorySelected:null,items:[{value:null,text:"Filtro"},{value:"0",text:"Melhores Avaliados"},{value:"1",text:"Em estoque"},{value:"2",text:"Ordem Alfabética"},{value:"3",text:"Livros Curtidos"},{value:"4",text:"Categoria"}],filterSelected:null,categories:[],showSelectCategory:!1}},methods:{getCategories:function(){var t=this;l.a.get("".concat(f["a"],"/categories")).then((function(e){t.categories=e.data.map((function(t){return{value:t,text:t}}))})).catch((function(t){return t}))},getBooks:function(){var t=this;l.a.get("".concat(f["a"],"/books")).then((function(e){t.books=e.data,t.getLikes()})).catch((function(t){return t}))},logout:function(){this.getBooks(),this.$store.commit("setUser",null),this.$store.state.booksLiked=[],sessionStorage.clear()},getLikes:function(){var t=this;this.$store.state.booksLiked=[],this.books.map((function(e,o){e.users_who_liked.map((function(r){r===t.user?(t.books[o].like=!0,t.$store.commit("setBooksLiked",e)):t.books[o].like=!1}))}))},updateBooks:function(t){var e=this;this.books.map((function(o,r){if(o._id===t._id&&null!==e.user){e.books[r]=t;var n=e.books[r].users_who_liked.filter((function(t){return t===e.user}));if(0===n.length&&t.like)e.books[r].users_who_liked.push(e.user);else if(0!==n.length){var i=t.users_who_liked.findIndex((function(t){return t===e.user}));e.books[r].users_who_liked.splice(i,1)}l.a.put("".concat(f["a"],"/books/").concat(o._id),e.books[r]).then((function(t){return e.getBooks(),t})).catch((function(t){return t}))}}))},setSize:function(){1==this.books.length?this.cols=[1,1,1,1,1]:"xs"===this.$mq?(this.cols=[1,1,2,4,4],this.numberBooks=8):"Z0"===this.$mq?(this.cols=[1,1,3,4,4],this.numberBooks=8):"s"===this.$mq?(this.cols=[1,3,3,4,4],this.numberBooks=8):"Z2"===this.$mq?(this.cols=[1,2,3,3,4],this.numberBooks=8):"md"===this.$mq?(this.cols=[1,2,3,4,4],this.numberBooks=8):"lg"===this.$mq||"Z3"===this.$mq?(this.cols=[1,2,3,3,4],this.numberBooks=8):"xl"===this.$mq&&(this.cols=[1,2,3,4,5],this.numberBooks=10)},verifyPages:function(){this.filter.length<8?this.numberBooks=this.filter.length:this.setSize()}},computed:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["booksLiked","user"])),{},{filter:function(){return""!==this.filterName?w.findByName(this.books,this.filterName):"0"===this.filterSelected?w.bestAvaliation(this.books):"1"===this.filterSelected?w.orderByStock(this.books):"2"===this.filterSelected?w.orderByName(this.books):"3"===this.filterSelected?w.orderByMyLikes(this.booksLiked):"4"===this.filterSelected?(this.getCategories(),null!==this.categorySelected?w.orderByCategory(this.books,this.categorySelected):(this.$forceUpdate(),this.books)):(this.$forceUpdate(),this.books)}}),mounted:function(){this.getBooks(),this.setSize()},watch:{filterName:function(){this.verifyPages()},filterSelected:function(){this.verifyPages(),"4"===this.filterSelected?this.showSelectCategory=!0:this.showSelectCategory=!1}}},_=C,E=(o("64de"),Object(p["a"])(_,r,n,!1,null,null,null));e["default"]=E.exports},a630:function(t,e,o){var r=o("23e7"),n=o("4df4"),i=o("1c7e"),s=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:n})},ab13:function(t,e,o){var r=o("b622"),n=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(o){try{return e[n]=!1,"/./"[t](e)}catch(r){}}return!1}},ad6d:function(t,e,o){"use strict";var r=o("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ada5:function(t,e,o){},af8f:function(t,e,o){},b50d:function(t,e,o){"use strict";var r=o("c532"),n=o("467f"),i=o("7aac"),s=o("30b5"),a=o("83b9"),c=o("c345"),u=o("3934"),l=o("2d83");t.exports=function(t){return new Promise((function(e,o){var f=t.data,d=t.headers;r.isFormData(f)&&delete d["Content-Type"];var h=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",b=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";d.Authorization="Basic "+btoa(p+":"+b)}var m=a(t.baseURL,t.url);if(h.open(t.method.toUpperCase(),s(m,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?c(h.getAllResponseHeaders()):null,i=t.responseType&&"text"!==t.responseType?h.response:h.responseText,s={data:i,status:h.status,statusText:h.statusText,headers:r,config:t,request:h};n(e,o,s),h=null}},h.onabort=function(){h&&(o(l("Request aborted",t,"ECONNABORTED",h)),h=null)},h.onerror=function(){o(l("Network Error",t,null,h)),h=null},h.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),o(l(e,t,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var v=(t.withCredentials||u(m))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;v&&(d[t.xsrfHeaderName]=v)}if("setRequestHeader"in h&&r.forEach(d,(function(t,e){"undefined"===typeof f&&"content-type"===e.toLowerCase()?delete d[e]:h.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),t.responseType)try{h.responseType=t.responseType}catch(k){if("json"!==t.responseType)throw k}"function"===typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){h&&(h.abort(),o(t),h=null)})),f||(f=null),h.send(f)}))}},bc3a:function(t,e,o){t.exports=o("cee4")},c345:function(t,e,o){"use strict";var r=o("c532"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,o,i,s={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),o=r.trim(t.substr(i+1)),e){if(s[e]&&n.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([o]):s[e]?s[e]+", "+o:o}})),s):s}},c401:function(t,e,o){"use strict";var r=o("c532");t.exports=function(t,e,o){return r.forEach(o,(function(o){t=o(t,e)})),t}},c435:function(t,e,o){},c532:function(t,e,o){"use strict";var r=o("1d2b"),n=Object.prototype.toString;function i(t){return"[object Array]"===n.call(t)}function s(t){return"undefined"===typeof t}function a(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function c(t){return"[object ArrayBuffer]"===n.call(t)}function u(t){return"undefined"!==typeof FormData&&t instanceof FormData}function l(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function f(t){return"string"===typeof t}function d(t){return"number"===typeof t}function h(t){return null!==t&&"object"===typeof t}function p(t){if("[object Object]"!==n.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function b(t){return"[object Date]"===n.call(t)}function m(t){return"[object File]"===n.call(t)}function v(t){return"[object Blob]"===n.call(t)}function k(t){return"[object Function]"===n.call(t)}function g(t){return h(t)&&k(t.pipe)}function y(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function x(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function S(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function w(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var o=0,r=t.length;o<r;o++)e.call(null,t[o],o,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function C(){var t={};function e(e,o){p(t[o])&&p(e)?t[o]=C(t[o],e):p(e)?t[o]=C({},e):i(e)?t[o]=e.slice():t[o]=e}for(var o=0,r=arguments.length;o<r;o++)w(arguments[o],e);return t}function _(t,e,o){return w(e,(function(e,n){t[n]=o&&"function"===typeof e?r(e,o):e})),t}function E(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:i,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:l,isString:f,isNumber:d,isObject:h,isPlainObject:p,isUndefined:s,isDate:b,isFile:m,isBlob:v,isFunction:k,isStream:g,isURLSearchParams:y,isStandardBrowserEnv:S,forEach:w,merge:C,extend:_,trim:x,stripBOM:E}},c8af:function(t,e,o){"use strict";var r=o("c532");t.exports=function(t,e){r.forEach(t,(function(o,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=o,delete t[r])}))}},caad:function(t,e,o){"use strict";var r=o("23e7"),n=o("4d64").includes,i=o("44d2"),s=o("ae40"),a=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!a},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},cee4:function(t,e,o){"use strict";var r=o("c532"),n=o("1d2b"),i=o("0a06"),s=o("4a7b"),a=o("2444");function c(t){var e=new i(t),o=n(i.prototype.request,e);return r.extend(o,i.prototype,e),r.extend(o,e),o}var u=c(a);u.Axios=i,u.create=function(t){return c(s(u.defaults,t))},u.Cancel=o("7a77"),u.CancelToken=o("8df4"),u.isCancel=o("2e67"),u.all=function(t){return Promise.all(t)},u.spread=o("0df6"),u.isAxiosError=o("5f02"),t.exports=u,t.exports.default=u},d28b:function(t,e,o){var r=o("746f");r("iterator")},d2aa:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book"},[t._m(0),o("div",{staticClass:"book-form"},[o("div",{staticClass:"form-modal"},[o("b-form",{on:{submit:t.onSubmit}},[o("label",{attrs:{for:"book-name"}},[t._v("Nome")]),o("b-input",{attrs:{type:"text",id:"book-name"},on:{change:t.onNameChange},model:{value:t.book.name,callback:function(e){t.$set(t.book,"name",e)},expression:"book.name"}}),o("div",{staticClass:"validation-text"},[o("span",{attrs:{hidden:void 0===this.errors.name}},[t._v("*Campo Nome é obrigatório")])]),o("label",{attrs:{for:"book-autor"}},[t._v("Autor")]),o("b-input",{attrs:{type:"text",id:"book-autor"},model:{value:t.book.author,callback:function(e){t.$set(t.book,"author",e)},expression:"book.author"}}),o("div",{staticClass:"validation-text"},[o("span",{attrs:{hidden:void 0===this.errors.author}},[t._v("*Campo Autor é obrigatório")])]),o("label",{attrs:{for:"book-categoria"}},[t._v("Categoria")]),o("b-input",{attrs:{type:"text",id:"book-categoria"},model:{value:t.book.category,callback:function(e){t.$set(t.book,"category",e)},expression:"book.category"}}),o("div",{staticClass:"validation-text"},[o("span",{attrs:{hidden:void 0===this.errors.category}},[t._v("*Campo Categoria é obrigatório")])]),o("label",{attrs:{for:"book-quantidade"}},[t._v("Quantidade em estoque")]),o("b-input",{attrs:{type:"number",id:"book-quantidade"},model:{value:t.book.stock,callback:function(e){t.$set(t.book,"stock",e)},expression:"book.stock"}}),o("label",{attrs:{for:"book-url"}},[t._v("Url da capa")]),o("b-input",{attrs:{type:"text",id:"book-url"},model:{value:t.book.cover_picture,callback:function(e){t.$set(t.book,"cover_picture",e)},expression:"book.cover_picture"}}),o("div",{staticClass:"validation-text"},[o("span",{attrs:{hidden:void 0===this.errors.cover_picture}},[t._v("*Campo Url da capa é obrigatório")])]),o("label",{attrs:{for:"book-description"}},[t._v("Descrição")]),o("b-textarea",{attrs:{id:"book-description"},model:{value:t.book.description,callback:function(e){t.$set(t.book,"description",e)},expression:"book.description"}}),o("div",{staticClass:"validation-text"},[o("span",{attrs:{hidden:void 0===this.errors.description}},[t._v("*Campo Descrição é obrigatório")])])],1),o("div",{staticClass:"button-add"},[o("b-button",{staticClass:"mt-4 ml-2",attrs:{type:"button",hidden:t.bookExists},on:{click:t.onSubmit}},[t._v("Adicionar")])],1),o("div",{staticClass:"buttons-container",attrs:{hidden:!t.bookExists}},[o("b-button",{staticClass:"mt-4",attrs:{type:"button",align:"right"},on:{click:t.onUpdate}},[t._v("Atualizar")]),o("b-button",{staticClass:"mt-4 ml-2",attrs:{type:"button"},on:{click:t.onDelete}},[t._v("Excluir")])],1)],1)])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"back"},[o("a",{attrs:{href:"/"}},[t._v(" Voltar")])])}],i=(o("a4d3"),o("e01a"),o("99af"),o("b0c0"),o("bc3a")),s=o.n(i),a=o("9c4f"),c={name:"book",data:function(){return{book:{name:"",author:"",description:"",category:"",cover_picture:""},bookExists:!1,errors:{},confirmDelete:""}},methods:{checkForm:function(t){if(""!==this.book.name&&""!==this.book.author&&""!==this.book.description&&""!==this.book.category&&""!==this.book.cover_picture)return!0;this.errors={},""===this.book.name&&(this.errors.name="Preencha o nome"),""===this.book.author&&(this.errors.author="Preencha o autor"),""===this.book.description&&(this.errors.description="Preencha o autor"),""===this.book.category&&(this.errors.category="Preencha a categoria"),""===this.book.cover_picture&&(this.errors.cover_picture="Preencha com a imagem"),""===this.book.stock&&(this.book.stock=0),t.preventDefault()},onSubmit:function(t){var e=this;this.checkForm(t)&&s.a.post("".concat(a["a"],"/books"),this.book).then((function(){e.$toasted.global.defaultSuccess(),e.errors={},e.book={}})).catch(a["b"])},onNameChange:function(){var t=this;s.a.get("".concat(a["a"],"/books/").concat(this.book.name)).then((function(e){null!==e.data?(t.book=e.data,t.errors={},t.bookExists=!0):(t.bookExists=!1,t.book.description="",t.book.author="",t.book.description="",t.book.category="",t.book.cover_picture="",t.book.stock="")})).catch((function(t){return t}))},onDelete:function(){var t=this;this.$bvModal.msgBoxConfirm("Deletar o livro ".concat(this.book.name,"?")).then((function(){s.a.delete("".concat(a["a"],"/books/").concat(t.book._id)).then((function(){t.book={},t.$toasted.global.defaultSuccess()})).catch(a["b"])})).catch((function(t){return t}))},onUpdate:function(){var t=this;s.a.put("".concat(a["a"],"/books/").concat(this.book._id),this.book).then((function(){t.$toasted.global.defaultSuccess(),t.book={},t.errors={}})).catch(a["b"])}},watch:{"book.name":function(){this.bookExists=!1,this.onNameChange()}}},u=c,l=(o("158e"),o("2877")),f=Object(l["a"])(u,r,n,!1,null,null,null);e["default"]=f.exports},d5f8:function(t,e,o){"use strict";o("af8f")},d81d:function(t,e,o){"use strict";var r=o("23e7"),n=o("b727").map,i=o("1dde"),s=o("ae40"),a=i("map"),c=s("map");r({target:"Array",proto:!0,forced:!a||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},d925:function(t,e,o){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},ddb0:function(t,e,o){var r=o("da84"),n=o("fdbc"),i=o("e260"),s=o("9112"),a=o("b622"),c=a("iterator"),u=a("toStringTag"),l=i.values;for(var f in n){var d=r[f],h=d&&d.prototype;if(h){if(h[c]!==l)try{s(h,c,l)}catch(b){h[c]=l}if(h[u]||s(h,u,f),n[f])for(var p in i)if(h[p]!==i[p])try{s(h,p,i[p])}catch(b){h[p]=i[p]}}}},e01a:function(t,e,o){"use strict";var r=o("23e7"),n=o("83ab"),i=o("da84"),s=o("5135"),a=o("861d"),c=o("9bf2").f,u=o("e893"),l=i.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var h=d.prototype=l.prototype;h.constructor=d;var p=h.toString,b="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(s(f,t))return"";var o=b?e.slice(7,-1):e.replace(m,"$1");return""===o?void 0:o}}),r({global:!0,forced:!0},{Symbol:d})}},e683:function(t,e,o){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b4:function(t,e,o){"use strict";var r=o("c532");function n(){this.handlers=[]}n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=n},fb6a:function(t,e,o){"use strict";var r=o("23e7"),n=o("861d"),i=o("e8b5"),s=o("23cb"),a=o("50c4"),c=o("fc6a"),u=o("8418"),l=o("b622"),f=o("1dde"),d=o("ae40"),h=f("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),b=l("species"),m=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!h||!p},{slice:function(t,e){var o,r,l,f=c(this),d=a(f.length),h=s(t,d),p=s(void 0===e?d:e,d);if(i(f)&&(o=f.constructor,"function"!=typeof o||o!==Array&&!i(o.prototype)?n(o)&&(o=o[b],null===o&&(o=void 0)):o=void 0,o===Array||void 0===o))return m.call(f,h,p);for(r=new(void 0===o?Array:o)(v(p-h,0)),l=0;h<p;h++,l++)h in f&&u(r,l,f[h]);return r.length=l,r}})}}]);
//# sourceMappingURL=book.ab0521f7.js.map