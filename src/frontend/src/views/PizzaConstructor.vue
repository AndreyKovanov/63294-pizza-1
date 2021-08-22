<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>

      <BuilderDoughSelector
        :doughList="dough"
        :currentDough="currentDough"
        @changeDough="currentDough = $event"
      />
      <BuilderSizeSelector
        :sizeList="sizes"
        :currentSize="currentSize"
        @changeSize="currentSize = $event"
      />

      <BuilderIngredientsSelector
        :sauceList="sauces"
        :ingredientList="ingredients"
        :currentIngredients="currentIngredients"
        :currentSauce="currentSauce"
        @updateIngredients="currentIngredients = $event"
        @changeSauce="currentSauce = $event"
      />

      <BuilderPizzaView
        :currentSauce="currentSauce"
        :currentSize="currentSize"
        :currentDough="currentDough"
        :currentIngredients="currentIngredients"
        :ingredientList="ingredients"
      />
    </div>
  </form>
</template>

<script>
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import pizzaData from "@/static/pizza.json";
import {
  normalizeDough,
  normalizeSizes,
  normalizeSauces,
  normalizeIngredients,
  getCurrentItems,
} from "@/common/helpers";

export default {
  name: "PizzaConstructor",
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
  },
  data() {
    const { dough, sizes, sauces, ingredients } = pizzaData;
    const normalizedDough = normalizeDough(dough);
    const normalizedSized = normalizeSizes(sizes);
    const normalizedSauces = normalizeSauces(sauces);

    return {
      dough: normalizedDough,
      sizes: normalizedSized,
      sauces: normalizedSauces,
      ingredients: normalizeIngredients(ingredients),
      currentIngredients: getCurrentItems(ingredients),
      currentDough: normalizedDough[0],
      currentSize: normalizedSized[1],
      currentSauce: normalizedSauces[0],
    };
  },
};
</script>

<style lang="scss" scoped>
/* @import "~@/assets/scss/blocks/diameter.scss";
  @import "~@/assets/scss/blocks/dough.scss";
  @import "~@/assets/scss/blocks/filling.scss";
  @import "~@/assets/scss/blocks/ingredients.scss";
  @import "~@/assets/scss/blocks/pizza.scss"; */
</style>
