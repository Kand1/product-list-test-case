<template>
  <div class="outer">
    <div class="list" v-if="loaded">
      <ProductItem v-for="(product, i) in $store.getters.getProducts"
                   v-bind:product="product"
                   v-bind:id="i"
                   v-bind:key="i"
      />
    </div>
    <div class="loader" v-else>
      <img src="@/assets/loader.svg" alt=""/>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { mapActions } from 'vuex';

export default {
  data: () => ({
    loaded: false,
  }),
  components: {
    ProductItem,
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  mounted() {
    this.fetchProducts(this).then(() => {
      setTimeout(() => {
        this.loaded = true;
      }, 1000);
    });
  },
};
</script>

<style lang="scss" scoped>
.list {
  margin-top: 67px;
  margin-right: 32px;
  height: calc(100vh - 67px);
  display: grid;
  grid-template-columns: repeat(auto-fill, 332px);
  grid-gap: 1rem;
  justify-content: space-around;
  overflow-y: scroll;
  background-color: #E5E5E5;
  -ms-overflow-style: none;
}
.list::-webkit-scrollbar { width: 0; }
.loader {
  display: flex;
  justify-content: center;
  margin-top: 190px;
}

.outer {
  width: 100%;
  background-color: #E5E5E5;
}

@media (max-width: 740px) {
  .loader {
  margin-top: 40px;
  }
}
</style>
