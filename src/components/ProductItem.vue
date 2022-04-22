<template>
  <div class="product">
    <img :src="product.url" alt="">
    <div class="title">
      {{product.title}}
    </div>
    <div class="description">
      {{product.description}}
    </div>
    <div class="price">
      {{product.price + ' руб.'}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  animation: 1s show ease;
  transition: 0.4s;
  cursor: pointer;
  margin: 16px 0 0 16px;
  width: 332px;
  height: 423px;
  background-color: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  font-weight: 600;
  img {
    border-radius: 4px;
    width: 332px;
    height: 200px;
  }
  .title {
    margin: 16px;
    height: 25px;
    font-size: 20px;
    line-height: 25px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .description {
    margin: 16px;
    height: 80px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    overflow-x: auto;
    overflow-y: auto;
  }
  .price {
    margin: 16px;
    margin-bottom: 24px;
    height: 30px;
    font-size: 24px;
    line-height: 30px;
    overflow-y: auto;
  }
}
.product:hover {
  transform: scale(1.03);
}
@keyframes show {
  from { opacity: 0; }
  to { opacity: 1; }
}

</style>
