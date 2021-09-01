<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        :value="pizzaName"
        @input="pizzaName = $event.target.value"
      />
    </label>

    <AppDrop @drop="addIngredient" class="content__constructor">
      <div
        class="pizza"
        :class="`pizza--foundation--${currentDough.value}-${currentSauce.value}`"
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
    </AppDrop>

    <div class="content__result">
      <p>Итого: {{ pizzaPrice }} ₽</p>
      <button
        type="button"
        class="button"
        :disabled="isSubmittDisabled"
        @click="startCooking"
      >
        Готовьте!
      </button>
    </div>
  </div>
</template>

<script>
import { getCountClass } from "@/common/helpers";
import AppDrop from "@/common/components/AppDrop";

export default {
  name: "BuilderPizzaView",
  components: {
    AppDrop,
  },
  props: {
    currentSauce: {
      type: Object,
      required: true,
    },
    currentSize: {
      type: Object,
      required: true,
    },
    currentDough: {
      type: Object,
      required: true,
    },
    currentIngredients: {
      type: Object,
      required: true,
    },
    ingredientList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return { pizzaName: "" };
  },
  computed: {
    choosenIngredientList() {
      return this.ingredientList
        .filter((ingredient) => this.currentIngredients[ingredient.value] > 0)
        .map((ingredient) => ({
          ...ingredient,
          countClass: getCountClass(this.currentIngredients[ingredient.value]),
          count: this.currentIngredients[ingredient.value],
        }));
    },
    pizzaPrice() {
      const ingredientSum = this.ingredientList.reduce(
        (sum, currentIngredient) =>
          sum +
          currentIngredient.price *
            this.currentIngredients[currentIngredient.value],
        0
      );

      return (
        (ingredientSum + this.currentDough.price + this.currentSauce.price) *
        this.currentSize.multiplier
      );
    },
    isSubmittDisabled() {
      return this.choosenIngredientList.length === 0 || !this.pizzaName;
    },
  },
  methods: {
    startCooking() {
      this.$emit("addPizza", {
        name: this.pizzaName,
        price: this.pizzaPrice,
        ingredients: this.choosenIngredientList,
        sauce: this.currentSauce,
        size: this.currentSize,
        dough: this.currentDough,
      });
    },
    addIngredient(ingredientName) {
      this.$emit("updateIngredients", {
        ...this.currentIngredients,
        [ingredientName]: this.currentIngredients[ingredientName] + 1,
      });
    },
  },
};
</script>

<style></style>
