<template>
  <div class="outer">
    <div class="sort">
      <select @change="onSortChange" v-model="selectedSort" id="selectID">
        <option>По умолчанию</option>
        <option>По убыванию</option>
        <option>По возрастанию</option>
        <option>По наименованию</option>
      </select>
    </div>
    <div class="list" v-if="loaded" v-bind:class="{removing, adding}">
      <ProductItem v-for="(product, i) in $store.getters.getProducts"
                   v-bind:product="product"
                   v-bind:position="i"
                   v-bind:key="i"
                   v-bind:isAfterRemovingItem="removingItemNumber === null ?
                    false : i > removingItemNumber"
                   @deleteProduct="deleteProduct"
      />
    </div>
    <div class="loader" v-else>
      <img src="@/assets/loader.svg" alt=""/>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { mapActions, mapMutations } from 'vuex';

export default {
  data: () => ({
    loaded: false,
    selectedSort: 'По умолчанию',
    removing: false,
    adding: false,
    removingItemNumber: null,
  }),
  components: {
    ProductItem,
  },
  methods: {
    ...mapActions(['fetchProducts']),
    ...mapMutations(['setSortingMethod']),
    onSortChange() {
      this.removing = true;
      setTimeout(() => {
        this.removing = false;
        this.adding = true;
        this.setSortingMethod(this.selectedSort);
        setTimeout(() => {
          this.adding = false;
        }, 500);
      }, 500);
    },
    deleteProduct(i) {
      this.removingItemNumber = i;
      setTimeout(() => {
        this.removingItemNumber = null;
      }, 600);
    },
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
  margin-right: 32px;
  margin-left: 16px;
  height: calc(100vh - 75px);
  display: grid;
  grid-template-columns: repeat(auto-fill, 348px);
  grid-template-rows: repeat(auto-fill, 423px);
  grid-gap: 16px;
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
.sort {
  display: flex;
  justify-content: flex-end;
  select {
    cursor: pointer;
    margin: 31px 31px 8px 0;
    height: 36px;
    width: 140px;
    background: #FFFEFB;
    border: transparent solid 1px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
  }
  select:active {
    border: transparent solid 1px;
  }
  select:focus {
    border: transparent solid 1px;
    outline: none;
  }
}
.outer {
  width: 100%;
  background-color: #E5E5E5;
}

@media (max-width: 760px) {
  .loader {
  margin-top: 40px;
  }
  .sort {
    justify-content: center;
    select {
      margin: 24px auto 0 auto;
    }
  }
  .list {
    margin: 8px;
    margin-left: 24px;
  }
}

.adding {
  animation: 0.5s show ease;
}
.removing {
  animation: 0.55s delete ease;
}
@keyframes show {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes delete {
  from { opacity: 1; }
  to { opacity: 0; }
}

</style>
