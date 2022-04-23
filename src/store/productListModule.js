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
      const descr0 = 'При отсутствии элементов, загружаются 8 карточек. На загрузке стоит задержка в 1 сек для показа лоадера.';
      state.products = payLoad.map((el) => ({
        id: el.id,
        url: el.url,
        // Везде проверка по полю price, потому что с api приходят объекты без него
        // и по нему можно отследить первичную инициализацию.
        title: el.price ? el.title : `Product №${el.id}`,
        description: el.price ? el.description : descr0,
        price: el.price ? el.price : `${Math.floor(Math.random() * 9 + 1)} 000`,
      }));
    },
    addProduct(state, payLoad) {
      state.products.push(payLoad);
      localStorage.products = JSON.stringify(state.products);
    },
    deleteProduct(state, payLoad) {
      setTimeout(() => {
        state.products = state.products.filter((el) => (el.id !== payLoad));
        localStorage.products = JSON.stringify(state.products);
      }, 700);
    },
  },
  actions: {
    fetchProducts(context) {
      if (!JSON.parse(localStorage.products)?.length) {
        return axios.get('https://jsonplaceholder.typicode.com/photos?_limit=8')
          .then((response) => {
            context.commit('setProducts', response.data);
            localStorage.products = JSON.stringify(context.getters.getProducts);
          });
      }
      return new Promise((res) => {
        context.commit('setProducts', JSON.parse(localStorage.products));
        res();
      });
    },
  },
};
