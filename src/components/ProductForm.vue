<template>
  <div>
    <div class="formTitle">
      Добaвление товара
    </div>
    <form class="form">
      <div>
        <div class="required text">
          Наименование товара
        </div>
        <label for="titleInput">
          <input id="titleInput"
                 type="text"
                 placeholder="Введите наименование товара"
                 v-model="title"
                 @blur="() => checkInput('title')"
                 v-bind:class="{ error: errors.title}"
          >
        </label>
        <div class="errorText" v-if="errors.title">
          Поле является обязательным
        </div>
        <div class="hidden" v-else>
          hidden element
        </div>
        <div class="text">
          Описание товара
        </div>
        <label for="descriptionInput">
          <textarea id="descriptionInput"
                    rows="6"
                    placeholder="Введите описание товара"
                    v-model="description"
          />
        </label>
        <div class="required text">
          Ссылка на изображение товара
        </div>
        <label for="urlInput">
          <input id="urlInput"
                 type="text"
                 placeholder="Введите ссылку"
                 v-model="url"
                 @blur="() => checkInput('url')"
                 v-bind:class="{ error: errors.url}"
          >
        </label>
        <div class="errorText" v-if="errors.url">
          Поле является обязательным
        </div>
        <div class="hidden" v-else>
          hidden element
        </div>
        <div class="required text">
          Цена товара
        </div>
        <label for="priceInput">
          <input id="priceInput"
                 type="text"
                 placeholder="Введите цену"
                 v-model="price"
                 @blur="() => checkInput('price')"
                 @input="onInputMask"
                 v-bind:class="{ error: errors.price}"
          >
        </label>
        <div class="errorText" v-if="errors.price">
          Поле является обязательным
        </div>
        <div class="hidden" v-else>
          hidden element
        </div>
        <div>
          <button @click="onSubmit" :disabled="hasErrors">Добавить товар</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    errors: {
      title: null,
      url: null,
      price: null,
    },
    title: '',
    url: '',
    price: '',
    description: '',
  }),
  computed: {
    hasErrors() {
      return Object.values(this.errors).reduce((prev, cur) => {
        if (prev === true) {
          return true;
        }
        if (cur === null) {
          return true;
        }
        return cur;
      }, false);
    },
  },
  methods: {
    ...mapMutations(['addProduct']),
    onSubmit(e) {
      e.preventDefault();
      this.addProduct({
        id: Date.now(),
        title: this.title,
        url: this.url,
        price: this.price,
        description: this.description,
      });
    },
    onInputMask(e) {
      if (Number.isNaN(+e.data) || e.data === ' ') {
        this.price = this.price.substring(0, this.price.length - 1);
      } else {
        const priceInt = this.price.replace(/\s/g, '');
        this.price = priceInt.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
      }
    },
    checkInput(el) {
      if (!this[el]) {
        this.errors[el] = true;
      }
    },
  },
  watch: {
    price(newValue) {
      this.errors.price = !newValue;
    },
    title(newValue) {
      this.errors.title = !newValue;
    },
    url(newValue) {
      this.errors.url = !newValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  box-sizing: border-box;
  padding: 22px 24px 24px 24px;
  margin-top: 16px;
  margin-left: 32px;
  height: 440px;
  width: 332px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  .text {
    margin-bottom: 4px;
    margin-top: 2px;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
  }
  .errorText {
    animation: 0.5s show ease;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #FF8484;
    margin-top: 4px;
  }
  @keyframes show {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .error {
    transition: 0.4s;
    border: #FF8484 solid 1px;
  }
  .hidden {
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    visibility: hidden;
    margin-top: 4px;
  }
  .required:after {
    content: ' *';
    color: #FF8484;
  }
  input, textarea {
    box-sizing: border-box;
    padding: 10px 16px;
    width: 100%;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: transparent solid 1px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #3F3F3F;
  }
  input::placeholder, textarea::placeholder {
    color: #B4B4B4;
  }

  input:focus, textarea:focus {
    outline: 0;
    outline-offset: 0;
    border: #B4B4B4 solid 1px;
  }
  button {
    transition: 0.5s;
    cursor: pointer;
    box-sizing: border-box;
    margin-top: 24px;
    width: 100%;
    background: #7BAE73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #FFFFFF;
    border: none;
    height: 36px;
  }
  button:hover {
    transition: 0.3s;
    background: #6B9E63;
  }
  button:active {
    transition: 0.3s;
    background: #5B8E53;
  }
  button:disabled {
    transition: 0.5s;
    cursor: default;
    background-color: #EEEEEE;
    color: #B4B4B4;
  }
  textarea {
    resize: none;
  }
}
.formTitle {
  margin: 40px;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}
@media (max-width: 760px) {
  .form {
    margin: auto;
  }
  .formTitle {
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
  }
}
</style>
