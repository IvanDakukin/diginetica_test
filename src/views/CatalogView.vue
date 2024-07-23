<template>
  <div>
    <Header></Header>
    <main class="main">
      <Sidebar></Sidebar>
      <catalog-grid></catalog-grid>
    </main>
  </div>
</template>

<script>
import Header from "@/components/catalog/HeaderComponent.vue";
import Sidebar from "@/components/catalog/SidebarComponent.vue";
import CatalogGrid from "@/components/catalog/CatalogGrid.vue";
export default {
  name: "CatalogView",
  components: {
    Header,
    Sidebar,
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
