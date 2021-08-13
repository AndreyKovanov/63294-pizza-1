<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
      />
    </label>

    <div class="content__constructor">
      <div
        class="pizza"
        :class="`pizza--foundation--${currentDough}-${currentSauce}`"
      >
        <div class="pizza__wrapper">
          <div
            v-for="ingredientItem in choosenIngredientList"
            :key="ingredientItem.id"
            class="pizza__filling"
            :class="`pizza__filling--${ingredientItem.value}${ingredientItem.countClass}`"
          ></div>
        </div>
      </div>
    </div>

    <div class="content__result">
      <p>Итого: 0 ₽</p>
      <button type="button" class="button" disabled>Готовьте!</button>
    </div>
  </div>
</template>

<script>
import { getCountClass } from "@/common/helpers";

export default {
  name: "BuilderPizzaView",
  props: {
    currentSauce: {
      type: String,
      required: true,
    },
    currentSize: {
      type: String,
      required: true,
    },
    currentDough: {
      type: String,
      required: true,
    },
    currentIngredients: {
      type: Object,
      required: true,
    },
    doughList: {
      type: Array,
      required: true,
    },
    sizeList: {
      type: Array,
      required: true,
    },
    sauceList: {
      type: Array,
      required: true,
    },
    ingredientList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    choosenIngredientList() {
      return this.ingredientList
        .filter((ingredient) => this.currentIngredients[ingredient.value] > 0)
        .map((ingredient) => ({
          ...ingredient,
          countClass: getCountClass(this.currentIngredients[ingredient.value]),
        }));
    },
  },
};
</script>

<style></style>
