(function(){"use strict";var t={523:function(t,e,r){var i=r(144),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("ProductForm"),r("ProductList")],1)},s=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"formTitle"},[t._v(" Добaвление товара ")]),r("form",{staticClass:"form"},[r("div",[r("div",{staticClass:"required text"},[t._v(" Наименование товара ")]),r("label",{attrs:{for:"titleInput"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],class:{error:t.errors.title},attrs:{id:"titleInput",type:"text",placeholder:"Введите наименование товара"},domProps:{value:t.title},on:{blur:function(){return t.checkInput("title")},input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t.errors.title?r("div",{staticClass:"errorText"},[t._v(" Поле является обязательным ")]):r("div",{staticClass:"hidden"},[t._v(" hidden element ")]),r("div",{staticClass:"text"},[t._v(" Описание товара ")]),r("label",{attrs:{for:"descriptionInput"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{id:"descriptionInput",rows:"6",placeholder:"Введите описание товара"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),r("div",{staticClass:"required text"},[t._v(" Ссылка на изображение товара ")]),r("label",{attrs:{for:"urlInput"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],class:{error:t.errors.url},attrs:{id:"urlInput",type:"text",placeholder:"Введите ссылку"},domProps:{value:t.url},on:{blur:function(){return t.checkInput("url")},input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t.errors.url?r("div",{staticClass:"errorText"},[t._v(" Поле является обязательным ")]):r("div",{staticClass:"hidden"},[t._v(" hidden element ")]),r("div",{staticClass:"required text"},[t._v(" Цена товара ")]),r("label",{attrs:{for:"priceInput"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],class:{error:t.errors.price},attrs:{id:"priceInput",type:"text",placeholder:"Введите цену"},domProps:{value:t.price},on:{blur:function(){return t.checkInput("price")},input:[function(e){e.target.composing||(t.price=e.target.value)},t.onInputMask]}})]),t.errors.price?r("div",{staticClass:"errorText"},[t._v(" Поле является обязательным ")]):r("div",{staticClass:"hidden"},[t._v(" hidden element ")]),r("div",[r("button",{attrs:{disabled:t.hasErrors},on:{click:t.onSubmit}},[t._v("Добавить товар")])])])])])},c=[],l=r(629),u={data:()=>({errors:{title:null,url:null,price:null},title:"",url:"",price:"",description:""}),computed:{hasErrors(){return Object.values(this.errors).reduce(((t,e)=>!0===t||(null===e||e)),!1)}},methods:{...(0,l.OI)(["addProduct"]),onSubmit(t){t.preventDefault(),this.addProduct({id:Date.now(),title:this.title,url:this.url,price:this.price,description:this.description})},onInputMask(t){if(Number.isNaN(+t.data)||" "===t.data)this.price=this.price.substring(0,this.price.length-1);else{const t=this.price.replace(/\s/g,"");this.price=t.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g," ")}},checkInput(t){this[t]||(this.errors[t]=!0)}},watch:{price(t){this.errors.price=!t},title(t){this.errors.title=!t},url(t){this.errors.url=!t}}},a=u,d=r(736),p=(0,d.Z)(a,n,c,!1,null,"ab4f5966",null),m=p.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer"},[i("div",{staticClass:"sort"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSort,expression:"selectedSort"}],attrs:{id:"selectID"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedSort=e.target.multiple?r:r[0]},t.onSortChange]}},[i("option",[t._v("По умолчанию")]),i("option",[t._v("По убыванию")]),i("option",[t._v("По возрастанию")]),i("option",[t._v("По наименованию")])])]),t.loaded?i("div",{staticClass:"list",class:{removing:t.removing,adding:t.adding}},t._l(t.$store.getters.getProducts,(function(e,r){return i("ProductItem",{key:r,attrs:{product:e,position:r,isAfterRemovingItem:null!==t.removingItemNumber&&r>t.removingItemNumber},on:{deleteProduct:t.deleteProduct}})})),1):i("div",{staticClass:"loader"},[i("img",{attrs:{src:r(512),alt:""}})])])},h=[],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product",class:{removing:t.removing,adding:t.adding,fade:t.isAfterRemovingItem}},[i("button",{on:{click:t.onDeleteButton}},[i("img",{attrs:{src:r(214),alt:""}})]),i("img",{attrs:{src:t.product.url,alt:""}}),i("div",{staticClass:"title"},[t._v(" "+t._s(t.product.title)+" ")]),i("div",{staticClass:"description"},[t._v(" "+t._s(t.product.description)+" ")]),i("div",{staticClass:"price"},[t._v(" "+t._s(t.product.price+" руб.")+" ")])])},f=[],A={data:()=>({removing:!1,adding:!0}),props:{product:{type:Object,required:!0},position:{type:Number,required:!0},isAfterRemovingItem:{type:Boolean,required:!0}},methods:{...(0,l.OI)(["deleteProduct"]),onDeleteButton(){this.removing=!0,this.$emit("deleteProduct",this.position),setTimeout((()=>{this.deleteProduct(this.product.id),this.removing=!1}),300)}},mounted(){setTimeout((()=>{this.adding=!1}),700)}},b=A,_=(0,d.Z)(b,g,f,!1,null,"1ae24cad",null),P=_.exports,C={data:()=>({loaded:!1,selectedSort:"По умолчанию",removing:!1,adding:!1,removingItemNumber:null}),components:{ProductItem:P},methods:{...(0,l.nv)(["fetchProducts"]),...(0,l.OI)(["setSortingMethod"]),onSortChange(){this.removing=!0,setTimeout((()=>{this.removing=!1,this.adding=!0,this.setSortingMethod(this.selectedSort),setTimeout((()=>{this.adding=!1}),500)}),500)},deleteProduct(t){this.removingItemNumber=t,setTimeout((()=>{this.removingItemNumber=null}),600)}},mounted(){this.fetchProducts(this).then((()=>{setTimeout((()=>{this.loaded=!0}),1e3)}))}},I=C,S=(0,d.Z)(I,v,h,!1,null,"6b1b4032",null),x=S.exports,N={name:"App",components:{ProductForm:m,ProductList:x}},O=N,w=(0,d.Z)(O,o,s,!1,null,null,null),y=w.exports,k=r(669),E=r.n(k),M={state:{products:[],sortingMethod:"По умолчанию"},getters:{getProducts(t){const e=JSON.parse(JSON.stringify(t.products));return"По умолчанию"===t.sortingMethod?e:"По убыванию"===t.sortingMethod?(e.sort(((t,e)=>e.price.split(" ").join("")-t.price.split(" ").join(""))),e):"По возрастанию"===t.sortingMethod?(e.sort(((t,e)=>t.price.split(" ").join("")-e.price.split(" ").join(""))),e):"По наименованию"===t.sortingMethod?(e.sort(((t,e)=>t.title<e.title?-1:t.title===e.title?0:1)),e):t.products}},mutations:{setProducts(t,e){const r="При отсутствии элементов загружаются 8 карточек. На загрузке стоит задержка в 1 сек для показа лоадера.";t.products=e.map((t=>({id:t.id,url:t.url,title:t.price?t.title:`Product №${t.id}`,description:t.price?t.description:r,price:t.price?t.price:`${Math.floor(9*Math.random()+1)} 000`})))},setSortingMethod(t,e){t.sortingMethod=e},addProduct(t,e){t.products.push(e),localStorage.products=JSON.stringify(t.products)},deleteProduct(t,e){t.products=t.products.filter((t=>t.id!==e)),localStorage.products=JSON.stringify(t.products)}},actions:{fetchProducts(t){return localStorage.products&&JSON.parse(localStorage.products).length?new Promise((e=>{t.commit("setProducts",JSON.parse(localStorage.products)),e()})):E().get("https://jsonplaceholder.typicode.com/photos?_limit=8").then((e=>{t.commit("setProducts",e.data),localStorage.products=JSON.stringify(t.getters.getProducts)}))}}};i.Z.use(l.ZP);var T=new l.ZP.Store({modules:{productListModule:M}});i.Z.config.productionTip=!1,new i.Z({store:T,render:t=>t(y)}).$mount("#app")},512:function(t,e,r){t.exports=r.p+"img/loader.7ee54469.svg"},214:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACRSURBVHgB7VPBEUAwELzTAB1QghJSAh3QAR0oRQd0oBRKoIKzZ2IYwyTj5WFndi7Z3Oby2DBdICIDCl/kkZlLegJMCdjf6K2enTW2Qgcu5AcBazVWWEx4Su/lEslQ0n3iYCfODl9oa77f0oCG3NMKpa4Deonf+EnjBBqP/phsurbvgzREKC0dkbqD9izItNHNCuVHPAbfDS58AAAAAElFTkSuQmCC"}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,i,o,s){if(!i){var n=1/0;for(a=0;a<t.length;a++){i=t[a][0],o=t[a][1],s=t[a][2];for(var c=!0,l=0;l<i.length;l++)(!1&s||n>=s)&&Object.keys(r.O).every((function(t){return r.O[t](i[l])}))?i.splice(l--,1):(c=!1,s<n&&(n=s));if(c){t.splice(a--,1);var u=o();void 0!==u&&(e=u)}}return e}s=s||0;for(var a=t.length;a>0&&t[a-1][2]>s;a--)t[a]=t[a-1];t[a]=[i,o,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/product-list-test-case/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,s,n=i[0],c=i[1],l=i[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var a=l(r)}for(e&&e(i);u<n.length;u++)s=n[u],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(a)},i=self["webpackChunkproduct_list_test_case"]=self["webpackChunkproduct_list_test_case"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(523)}));i=r.O(i)})();
//# sourceMappingURL=app.76f9eb0b.js.map