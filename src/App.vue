<template>
  <div id="app">
    <ProductForm/>
    <ProductList/>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'App',
  components: {
    ProductForm,
    ProductList,
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  display: grid;
  grid-template-columns: 364px 1fr;
  background-color: #E5E5E5;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  color: #3F3F3F;
  height: 100vh;
}

@media (max-width: 760px) {
  #app {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 520px 1fr;
  }
}
</style>
