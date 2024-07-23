<template>
  <header class="header">
    <div class="header__branding">
      <div class="logo">
        <img src="../../assets/icons/logo.svg" alt="Логотип" />
        <div class="logo-text">Логотип</div>
      </div>
      <div class="header__title">Каталог</div>
    </div>
    <search-field
      placeholder="Поиск по 100 000 товаров"
      :font-size="16"
      :submit-btn="true"
    ></search-field>
    <nav class="nav">
      <router-link to="" class="nav__link">Информация о компании</router-link>
      <router-link to="" class="nav__link">Контакты</router-link>
      <router-link to="" class="nav__link">Полезные ссылки</router-link>
    </nav>
  </header>
</template>

<script>
import SearchField from "../general/SearchField.vue";
export default {
  components: {
    SearchField,
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-family: inter;
  display: flex;
  gap: 24px;
  align-items: center;
  height: 72px;

  &__branding {
    display: flex;
    gap: 8px;
  }

  &__title {
    padding: 15px 24px;
    border: 1px solid $color-border-active;
    border-radius: 8px;
    font-weight: 500;
  }
}
.logo {
  display: flex;
  padding: 15px 24px;
  gap: 11px;
  &__text {
    font-size: 16px;
  }
}
.nav {
  display: flex;
  gap: 20px;

  &__link {
    text-decoration: none;
    color: $color-font-main;
    transition: color 0.2s;

    &:hover {
      color: $color-font-hover;
    }
  }
}
</style>
