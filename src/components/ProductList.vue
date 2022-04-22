<template>
  <div class="list">
    <ProductItem v-for="product in $store.getters.getProducts"
                 v-bind:product="product"
                 v-bind:key="product.id"
    />
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },

  mounted() {
    this.$store.dispatch('fetchProducts');
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
//.list::after {
//  content: '';
//  flex: 0 0 360px;
//}
//
//@media (max-width: 740px) {
//  list {
//    justify-content: center;
//  }
//}
</style>
