<template>
  <aside class="sidebar">
    <div class="category-picker">
      <div class="category" @click="curCategoryId = null">
        <div class="category__name">
          {{ category.name }}
        </div>
        <div class="category__count">
          {{ category.productsCount }}
        </div>
      </div>
      <div
        class="category subcategory"
        :class="{ 'category--selected': curCategoryId === subcategory.id }"
        v-for="subcategory in category.subcategories"
        :key="subcategory.id"
        @click="curCategoryId = subcategory.id"
      >
        <div class="category__name">
          {{ subcategory.name }}
        </div>
        <div class="category__count">
          {{ subcategory.productsCount }}
        </div>
      </div>
    </div>

    <div class="price-picker">
      <div class="price-picker__title">Цена</div>
      <div class="price-picker__body">
        <div class="price-picker__input price-picker__input--left">
          <input
            type="number"
            name=""
            id=""
            class="price-picker__field"
            v-model="curMinPrice"
            @change="handleMinPriceChange"
          />
        </div>

        <div class="price-picker__divider"></div>

        <div class="price-picker__input price-picker__input--right">
          <input
            type="number"
            name=""
            id=""
            class="price-picker__field"
            v-model="curMaxPrice"
            @change="handleMaxPriceChange"
          />
        </div>
      </div>
    </div>

    <attributes-list
      :attribute="{
        name: 'Бренд',
        values: [
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
        ],
      }"
      class="brand-picker"
    ></attributes-list>
    <attributes-list
      :attribute="{
        name: 'Размер',
        values: [
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
          'Атрибут',
        ],
      }"
    ></attributes-list>
  </aside>
</template>

<script>
import AttributesList from "./AttributesList.vue";
export default {
  components: { AttributesList },
  data() {
    return {
      category: {
        id: 1,
        name: "Категория 1",
        productsCount: 3,
        subcategories: [
          { id: 1, name: "Категория 1", productsCount: 3 },
          { id: 2, name: "Категория 1", productsCount: 3 },
          { id: 3, name: "Категория 1", productsCount: 3 },
        ],
      },
      curCategoryId: null,
      curMinPrice: 0,
      maxPrice: this.$store.getters.maxPrice,
      curMaxPrice: this.$store.getters.maxPrice,
      minPrice: 0,
    };
  },
  methods: {
    handleMinPriceChange() {
      if (
        isNaN(this.curMinPrice) ||
        this.curMinPrice === "" ||
        +this.curMinPrice < +this.minPrice
      ) {
        this.curMinPrice = this.minPrice;
      }
      if (this.curMinPrice > this.curMaxPrice) {
        this.curMinPrice = +this.curMaxPrice;
      }
    },
    handleMaxPriceChange() {
      if (
        isNaN(this.curMaxPrice) ||
        this.curMaxPrice === "" ||
        +this.curMaxPrice > +this.maxPrice
      ) {
        this.curMaxPrice = this.maxPrice;
      }
      if (this.curMaxPrice < this.curMinPrice) {
        this.curMaxPrice = +this.curMinPrice;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 240px;
  max-width: 280px;
  font-family: PTsans, Arial, sans-serif;
  width: 100%;
  @include _1000 {
    flex-shrink: 1;
  }
  @include _840 {
    display: none;
  }
}
.category-picker {
  font-size: 15px;
  width: 100%;
  margin-bottom: 28px;
}
.category {
  padding: 7px 8px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;

  &--selected {
    background-color: $color-font-bg;
  }

  &__count {
    color: $color-font-second;
  }

  &:not(.category--selected):hover {
    color: $color-brand;
  }
}
.price-picker {
  margin-bottom: 28px;
  &__title {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    margin-bottom: 16px;
  }

  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__divider {
    height: 1px;
    width: 10px;
    background-color: $color-border;
  }

  &__input {
    position: relative;
    width: 40%;
    max-width: 120px;
    &::before {
      position: absolute;
      left: 8px;
      top: 12px;
      width: 12px;
      font-size: 13px;
      color: $color-font-second;
    }
    &--left::before {
      content: "от";
    }
    &--right::before {
      content: "до";
    }
  }

  &__field {
    border: 1px solid $color-border;
    width: 100%;
    padding: 10px 0 10px 26px;
    font-size: 15px;
    border-radius: 4px;

    &:focus {
      border-color: $color-border-active;
    }
  }
}
.subcategory {
  padding-left: 32px;
}
.brand-picker {
  margin-bottom: 28px;
}
</style>
