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
  transition: 0.4s;
  cursor: pointer;
  margin: 16px 0 0 16px;
  width: 332px;
  height: 423px;
  background-color: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  img {
    border-radius: 4px;
    width: 332px;
    height: 200px;
  }
  .title {
    margin: 16px;
  }
  .description {
    font-weight: 400;
    margin: 16px;
    height: 96px;
  }
  .price {
    margin: 16px;
    margin-bottom: 24px;
  }
}

.product:hover {
  transform: scale(1.02);
}

</style>
