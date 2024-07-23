<template>
  <form class="search" :class="{ 'search--focused': inFocus }">
    <img src="../../assets/icons/search.svg" alt="Поиск" class="search__logo" />
    <input
      v-model="text"
      type="text"
      class="search__field"
      :placeholder="placeholder"
      @focus="inFocus = true"
      @blur="inFocus = false"
      :style="{ fontSize: fontSize + 'px' }"
    />
    <input
      v-if="text"
      type="button"
      value=""
      class="search__reset"
      @click="clearField"
    />
    <input
      v-if="text && submitBtn"
      type="submit"
      value="Найти"
      class="search__submit"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      inFocus: false,
    };
  },
  props: {
    placeholder: String,
    fontSize: Number,
    submitBtn: Boolean,
  },
  methods: {
    clearField() {
      this.text = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid $color-border;
  border-radius: 0.6em;
  height: 3em;
  flex-grow: 1;
  display: flex;
  align-items: center;
  transition: border-color 0.2s;

  &--focused {
    border-color: $color-border-active;
  }

  &__logo {
    margin-left: 20px;
    margin-right: 12px;
  }

  &__field {
    flex-grow: 1;
    margin-right: 8px;
  }

  &__submit {
    font: bold 14px PTsans;
    background-color: $color-border-active;
    color: $color-white;
    border-radius: 8px;
    height: 38px;
    padding: 0 16px;
    margin-right: 4px;
    transition: background-color 0.2s;

    &:hover {
      background-color: $color-brand;
    }
  }

  &__reset {
    background-image: url("@/assets/icons/reset-light.svg");
    background-size: contain;
    height: 24px;
    width: 24px;
    margin-right: 8px;
    transition: background-image 0.2s;

    &:hover {
      background-image: url("@/assets/icons/reset-dark.svg");
    }
  }
}
</style>
