<template>
  <div class="catalog-grid">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  data() {
    return {
      products: this.$store.state.products,
    };
  },
  components: {
    ProductCard,
  },
};
</script>

<style lang="scss" scoped>
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 24px 24px;
}
</style>
