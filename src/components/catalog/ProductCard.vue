<template>
  <div class="card">
    <div class="card__header">
      <div class="card__hit" v-if="product.isHit">
        Хит продаж
        <img src="../../assets/icons/hit.svg" alt="Хит" />
      </div>
      <div class="card__discount" v-if="product.discountPercent !== 0">
        {{ product.discountPercent }}%
      </div>
    </div>
    <div class="card__brand">Бренд</div>
    <router-link to="" class="card__title">{{ product.name }}</router-link>
    <div class="card__price price" v-if="product.available">
      <div class="price__discount">{{ product.discountPrice }} ₽</div>
      <div class="price__full">{{ product.fullPrice }} ₽</div>
    </div>
    <div
      class="card__button"
      :class="{ 'card__button--available': product.available }"
    >
      {{ buttonText }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonText: this.product.available ? "Купить" : "Сообщить о поступлении",
    };
  },
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  min-height: 380px;
  position: relative;

  &__header {
    height: 200px;
    background: #f8f8fa url("../../assets/icons/product-pic.svg") no-repeat
      center;
    position: relative;
    margin-bottom: 16px;
  }

  &:hover &__header {
    background-size: 80px 80px;
  }

  &:hover &__title {
    color: $color-font-hover;
  }

  &__hit {
    background-color: $color-white;
    border-radius: 4px;
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 8px;
  }

  &__discount {
    color: $color-white;
    background-color: $color-brand;
    padding: 6px 10px;
    font-weight: bold;
    position: absolute;
    left: 12px;
    bottom: 12px;
    border-radius: 4px;
  }

  &__brand {
    margin-bottom: 8px;
    color: $color-font-second;
  }

  &__title {
    margin-bottom: 16px;
    text-decoration: none;
    color: $color-font-main;
    transition: color 0.2s;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__price {
    margin-bottom: 16px;
  }

  &__button {
    border-radius: 4px;
    border: 1px solid $color-font-second;
    color: $color-font-second;
    font-weight: bold;
    padding: 12px 16px;
    line-height: 100%;
    transition: all 0.2s;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    &:hover {
      color: $color-font-main;
      border-color: $color-font-main;
    }
    &--available {
      color: $color-brand;
      border-color: $color-brand;
      min-width: 25%;
      width: 75px;
      margin-top: 0;
      &:hover {
        background-color: $color-brand;
        color: $color-white;
        border-color: $color-brand;
      }
    }
  }
}
.price {
  display: flex;
  align-items: center;
  line-height: 100%;
  &__discount {
    font-weight: bold;
    font-size: 16px;
    margin-right: 8px;
  }
  &__full {
    font-size: 12px;
    color: $color-font-second;
    text-decoration: line-through;
  }
}
</style>
