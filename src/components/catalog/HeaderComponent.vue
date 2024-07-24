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
      :submit-btn="true"
      class="header__search"
    ></search-field>
    <div class="header__search--mobile">
      <img
        src="../../assets/icons/back-arrow.svg"
        alt="Назад"
        class="header__back"
      />
      <search-field-mobile placeholder=""></search-field-mobile>
    </div>
    <div class="header__category">Название категории</div>
    <nav class="nav">
      <router-link to="" class="nav__link">Информация о компании</router-link>
      <router-link to="" class="nav__link">Контакты</router-link>
      <router-link to="" class="nav__link">Полезные ссылки</router-link>
    </nav>
  </header>
</template>

<script>
import SearchField from "../general/SearchField.vue";
import SearchFieldMobile from "../general/SearchFieldMobile.vue";
export default {
  components: {
    SearchField,
    SearchFieldMobile,
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

  &__search {
    font-size: 16px;
    @include _1200 {
      font-size: 14px;
    }
    @include _840 {
      display: none;
    }

    &--mobile {
      display: none;
      @include _840 {
        display: flex;
        width: 100%;
      }
    }
  }

  &__back {
    margin-right: 16px;
  }

  &__category {
    display: none;
    @include _840 {
      display: block;
      padding: 12px 24px;
      font-size: 22px;
    }
  }

  &__branding {
    display: flex;
    gap: 8px;
    @include _840 {
      display: none;
    }
  }

  &__title {
    padding: 15px 24px;
    border: 1px solid $color-border-active;
    border-radius: 8px;
    font-weight: 500;
    @include _1200 {
      padding: 15px 18px;
    }
    @include _1000 {
      display: none;
    }
  }
  @include _1000 {
    gap: 15px;
  }

  @include _840 {
    display: block;
    font-family: PTsans;
  }
}
.logo {
  display: flex;
  padding: 15px 24px;
  gap: 11px;
  &__text {
    font-size: 16px;
  }
  @include _840 {
    display: none;
  }
}
.nav {
  display: flex;
  gap: 20px;
  align-items: center;
  @include _840 {
    display: none;
  }

  &__link {
    text-decoration: none;
    color: $color-font-main;
    transition: color 0.2s;
    text-align: center;

    &:hover {
      color: $color-font-hover;
    }

    @include _1200 {
      font-size: 12px;
    }
  }
}
</style>
