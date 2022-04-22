import Vue from 'vue';
import Vuex from 'vuex';
import productListModule from '@/store/productListModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    productListModule,
  },
});
