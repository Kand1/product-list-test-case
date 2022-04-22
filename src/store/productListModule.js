import axios from 'axios';

export default {
  state: {
    products: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, payLoad) {
      state.products = payLoad.map((el) => ({
        id: el.id,
        url: el.url,
        title: `Product №${el.id}`,
        description: el.title,
        price: `${Math.floor(Math.random() * 9 + 1)} 000`,
      }));
    },
  },
  actions: {
    fetchProducts(context) {
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=7')
        .then((response) => context.commit('setProducts', response.data));
    },
  },
};
