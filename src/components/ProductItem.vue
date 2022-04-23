<template>
  <div class="product"
       v-bind:class="{removing, adding, fade: isAfterRemovingItem}"
  >
    <button @click="onDeleteButton">
      <img src="@/assets/Vector.png" alt="">
    </button>
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
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    removing: false,
    adding: true,
  }),
  props: {
    product: {
      type: Object,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    isAfterRemovingItem: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['deleteProduct']),
    onDeleteButton() {
      this.removing = true;
      this.$emit('deleteProduct', this.position);
      setTimeout(() => {
        this.deleteProduct(this.product.id);
        this.removing = false;
      }, 300);
    },
  },
  mounted() {
    setTimeout(() => {
      this.adding = false;
    }, 700);
  },
};
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  transition: 0.4s;
  cursor: pointer;
  margin-top: 16px;
  width: 332px;
  height: 423px;
  background-color: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  font-weight: 600;
  button {
    transition: 0.3s;
    position: absolute;
    top: -8px;
    right: -8px;
    border: none;
    width: 32px;
    height: 32px;
    background: #FF8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    visibility: hidden;
    img {
      height: 16px;
      width: 13px;
    }
  }
  button:hover {
    transition: 0.3s;
    background: #EF7474;
  }
  button:active {
    transition: 0.3s;
    background: #DF6464;
  }
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
  button {
    visibility: visible;
    animation: 0.6s show ease;
    cursor: pointer;
  }
}
.adding {
  animation: 0.7s show ease;
}
.removing {
  animation: 0.3s delete ease;
}
.fade {
  animation: 0.6s fade ease;
}
@keyframes show {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes delete {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes fade {
  0% {
    opacity: 1;
   }
  50% {
    opacity: 0;
    }
  100% {
    opacity: 1;
     }
}
</style>
