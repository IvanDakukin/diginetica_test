<template>
  <div>
    <Header></Header>
    <main class="main">
      <catalog-grid></catalog-grid>
    </main>
  </div>
</template>

<script>
import Header from "@/components/catalog/HeaderComponent.vue";
import CatalogGrid from "@/components/catalog/CatalogGrid.vue";
export default {
  name: "CatalogView",
  components: {
    Header,
    CatalogGrid,
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  margin-top: 24px;
  gap: 36px;
}
</style>
