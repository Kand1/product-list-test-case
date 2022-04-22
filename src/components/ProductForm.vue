<template>
  <div>
    <div class="formTitle">
      Добaвление товара
    </div>
    <form class="form">
      <div>
        <div class="title text">
          Наименование товара
        </div>
        <label class="titleInput" for="titleInput">
          <input id="titleInput" type="text" placeholder="Введите наименование товара">
        </label>
        <div class="description text">
          Описание товара
        </div>
        <label class="descriptionInput" for="descriptionInput">
          <textarea id="descriptionInput" rows="6" placeholder="Введите описание товара"/>
        </label>
        <div class="photo text">
          Ссылка на изображение товара
        </div>
        <label class="photoInput" for="titleInput">
          <input id="titleInput" type="text" placeholder="Введите ссылку">
        </label>
        <div class="price text">
          Цена товара
        </div>
        <label class="priceInput" for="titleInput">
          <input id="titleInput" type="text" placeholder="Введите цену">
        </label>
        <div>
          <button disabled>Добавить товар</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.form {
  box-sizing: border-box;
  padding: 8px 24px 24px 24px;
  margin-left: 32px;
  height: 440px;
  width: 332px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  .text {
    margin-bottom: 4px;
    margin-top: 16px;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
  }
  input, textarea {
    box-sizing: border-box;
    padding: 10px 16px;
    width: 100%;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
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
    border: none;
  }
  button {
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
  button:disabled {
    background-color: #EEEEEE;
    color: #B4B4B4;
  }
  textarea {
    resize: none;
  }
}
.formTitle {
  margin: 32px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}
@media (max-width: 740px) {
  .form {
    margin: auto;
  }
  .formTitle {
    display: flex;
    justify-content: center;
  }
}
</style>
