(function(){"use strict";var t={2523:function(t,e,r){r(6992),r(8674),r(9601),r(7727);var i=r(144),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("ProductForm"),r("ProductList")],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"formTitle"},[t._v(" Добaвление товара ")]),r("form",{staticClass:"form"},[r("div",[r("div",{staticClass:"required text"},[t._v(" Наименование товара ")]),r("label",{attrs:{for:"titleInput"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],class:{error:t.errors.title},attrs:{id:"titleInput",type:"text",placeholder:"Введите наименование товара"},domProps:{value:t.title},on:{blur:function(){return t.checkInput("title")},input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t.errors.title?r("div",{staticClass:"errorText"},[t._v(" Поле является обязательным ")]):r("div",{staticClass:"hidden"},[t._v(" hidden element ")]),r("div",{staticClass:"text"},[t._v(" Описание товара ")]),r("label",{attrs:{for:"descriptionInput"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{id:"descriptionInput",rows:"6",placeholder:"Введите описание товара"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),r("div",{staticClass:"required text"},[t._v(" Ссылка на изображение товара ")]),r("label",{attrs:{for:"urlInput"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],class:{error:t.errors.url},attrs:{id:"urlInput",type:"text",placeholder:"Введите ссылку"},domProps:{value:t.url},on:{blur:function(){return t.checkInput("url")},input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t.errors.url?r("div",{staticClass:"errorText"},[t._v(" Поле является обязательным ")]):r("div",{staticClass:"hidden"},[t._v(" hidden element ")]),r("div",{staticClass:"required text"},[t._v(" Цена товара ")]),r("label",{attrs:{for:"priceInput"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],class:{error:t.errors.price},attrs:{id:"priceInput",type:"text",placeholder:"Введите цену"},domProps:{value:t.price},on:{blur:function(){return t.checkInput("price")},input:[function(e){e.target.composing||(t.price=e.target.value)},t.onInputMask]}})]),t.errors.price?r("div",{staticClass:"errorText"},[t._v(" Поле является обязательным ")]):r("div",{staticClass:"hidden"},[t._v(" hidden element ")]),r("div",[r("button",{attrs:{disabled:t.hasErrors},on:{click:t.onSubmit}},[t._v("Добавить товар")])])])])])},u=[],c=r(3019),l=(r(1539),r(2479),r(2526),r(1817),r(4048),r(9653),r(4916),r(5306),r(9714),r(629)),a={data:function(){return{errors:{title:null,url:null,price:null},title:"",url:"",price:"",description:""}},computed:{hasErrors:function(){return Object.values(this.errors).reduce((function(t,e){return!0===t||(null===e||e)}),!1)}},methods:(0,c.Z)((0,c.Z)({},(0,l.OI)(["addProduct"])),{},{onSubmit:function(t){t.preventDefault(),this.addProduct({id:Date.now(),title:this.title,url:this.url,price:this.price,description:this.description})},onInputMask:function(t){if(Number.isNaN(+t.data)||" "===t.data)this.price=this.price.substring(0,this.price.length-1);else{var e=this.price.replace(/\s/g,"");this.price=e.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g," ")}},checkInput:function(t){this[t]||(this.errors[t]=!0)}}),watch:{price:function(t){this.errors.price=!t},title:function(t){this.errors.title=!t},url:function(t){this.errors.url=!t}}},d=a,p=r(3736),f=(0,p.Z)(d,s,u,!1,null,"ab4f5966",null),v=f.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer"},[i("div",{staticClass:"sort"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSort,expression:"selectedSort"}],attrs:{id:"selectID"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedSort=e.target.multiple?r:r[0]},t.onSortChange]}},[i("option",[t._v("По умолчанию")]),i("option",[t._v("По убыванию")]),i("option",[t._v("По возрастанию")]),i("option",[t._v("По наименованию")])])]),t.loaded?i("div",{staticClass:"list",class:{removing:t.removing,adding:t.adding}},t._l(t.$store.getters.getProducts,(function(e,r){return i("ProductItem",{key:r,attrs:{product:e,position:r,isAfterRemovingItem:null!==t.removingItemNumber&&r>t.removingItemNumber},on:{deleteProduct:t.deleteProduct}})})),1):i("div",{staticClass:"loader"},[i("img",{attrs:{src:r(3512),alt:""}})])])},g=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product",class:{removing:t.removing,adding:t.adding,fade:t.isAfterRemovingItem}},[i("button",{on:{click:t.onDeleteButton}},[i("img",{attrs:{src:r(9214),alt:""}})]),i("img",{attrs:{src:t.product.url,alt:""}}),i("div",{staticClass:"title"},[t._v(" "+t._s(t.product.title)+" ")]),i("div",{staticClass:"description"},[t._v(" "+t._s(t.product.description)+" ")]),i("div",{staticClass:"price"},[t._v(" "+t._s(t.product.price+" руб.")+" ")])])},A=[],b={data:function(){return{removing:!1,adding:!0}},props:{product:{type:Object,required:!0},position:{type:Number,required:!0},isAfterRemovingItem:{type:Boolean,required:!0}},methods:(0,c.Z)((0,c.Z)({},(0,l.OI)(["deleteProduct"])),{},{onDeleteButton:function(){var t=this;this.removing=!0,this.$emit("deleteProduct",this.position),setTimeout((function(){t.deleteProduct(t.product.id),t.removing=!1}),300)}}),mounted:function(){var t=this;setTimeout((function(){t.adding=!1}),700)}},_=b,P=(0,p.Z)(_,h,A,!1,null,"1ae24cad",null),C=P.exports,I={data:function(){return{loaded:!1,selectedSort:"По умолчанию",removing:!1,adding:!1,removingItemNumber:null}},components:{ProductItem:C},methods:(0,c.Z)((0,c.Z)((0,c.Z)({},(0,l.nv)(["fetchProducts"])),(0,l.OI)(["setSortingMethod"])),{},{onSortChange:function(){var t=this;this.removing=!0,setTimeout((function(){t.removing=!1,t.adding=!0,t.setSortingMethod(t.selectedSort),setTimeout((function(){t.adding=!1}),500)}),500)},deleteProduct:function(t){var e=this;this.removingItemNumber=t,setTimeout((function(){e.removingItemNumber=null}),600)}}),mounted:function(){var t=this;this.fetchProducts(this).then((function(){setTimeout((function(){t.loaded=!0}),1e3)}))}},S=I,x=(0,p.Z)(S,m,g,!1,null,"6b1b4032",null),N=x.exports,O={name:"App",components:{ProductForm:v,ProductList:N}},w=O,y=(0,p.Z)(w,o,n,!1,null,null,null),Z=y.exports,k=(r(8862),r(2707),r(9600),r(3123),r(1249),r(7327),r(9669)),E=r.n(k),M={state:{products:[],sortingMethod:"По умолчанию"},getters:{getProducts:function(t){var e=JSON.parse(JSON.stringify(t.products));return"По умолчанию"===t.sortingMethod?e:"По убыванию"===t.sortingMethod?(e.sort((function(t,e){return e.price.split(" ").join("")-t.price.split(" ").join("")})),e):"По возрастанию"===t.sortingMethod?(e.sort((function(t,e){return t.price.split(" ").join("")-e.price.split(" ").join("")})),e):"По наименованию"===t.sortingMethod?(e.sort((function(t,e){return t.title<e.title?-1:t.title===e.title?0:1})),e):t.products}},mutations:{setProducts:function(t,e){var r="При отсутствии элементов загружаются 8 карточек. На загрузке стоит задержка в 1 сек для показа лоадера.";t.products=e.map((function(t){return{id:t.id,url:t.url,title:t.price?t.title:"Product №".concat(t.id),description:t.price?t.description:r,price:t.price?t.price:"".concat(Math.floor(9*Math.random()+1)," 000")}}))},setSortingMethod:function(t,e){t.sortingMethod=e},addProduct:function(t,e){t.products.push(e),localStorage.products=JSON.stringify(t.products)},deleteProduct:function(t,e){t.products=t.products.filter((function(t){return t.id!==e})),localStorage.products=JSON.stringify(t.products)}},actions:{fetchProducts:function(t){return localStorage.products&&JSON.parse(localStorage.products).length?new Promise((function(e){t.commit("setProducts",JSON.parse(localStorage.products)),e()})):E().get("https://jsonplaceholder.typicode.com/photos?_limit=8").then((function(e){t.commit("setProducts",e.data),localStorage.products=JSON.stringify(t.getters.getProducts)}))}}};i.Z.use(l.ZP);var T=new l.ZP.Store({modules:{productListModule:M}});i.Z.config.productionTip=!1,new i.Z({store:T,render:function(t){return t(Z)}}).$mount("#app")},3512:function(t,e,r){t.exports=r.p+"img/loader.7ee54469.svg"},9214:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACRSURBVHgB7VPBEUAwELzTAB1QghJSAh3QAR0oRQd0oBRKoIKzZ2IYwyTj5WFndi7Z3Oby2DBdICIDCl/kkZlLegJMCdjf6K2enTW2Qgcu5AcBazVWWEx4Su/lEslQ0n3iYCfODl9oa77f0oCG3NMKpa4Deonf+EnjBBqP/phsurbvgzREKC0dkbqD9izItNHNCuVHPAbfDS58AAAAAElFTkSuQmCC"}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,i,o,n){if(!i){var s=1/0;for(a=0;a<t.length;a++){i=t[a][0],o=t[a][1],n=t[a][2];for(var u=!0,c=0;c<i.length;c++)(!1&n||s>=n)&&Object.keys(r.O).every((function(t){return r.O[t](i[c])}))?i.splice(c--,1):(u=!1,n<s&&(s=n));if(u){t.splice(a--,1);var l=o();void 0!==l&&(e=l)}}return e}n=n||0;for(var a=t.length;a>0&&t[a-1][2]>n;a--)t[a]=t[a-1];t[a]=[i,o,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/product-list-test-case/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,n,s=i[0],u=i[1],c=i[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var a=c(r)}for(e&&e(i);l<s.length;l++)n=s[l],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(a)},i=self["webpackChunkproduct_list_test_case"]=self["webpackChunkproduct_list_test_case"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(2523)}));i=r.O(i)})();
//# sourceMappingURL=app-legacy.8df4a0d8.js.map