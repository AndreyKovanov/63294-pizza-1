<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <RadioButton
            v-for="sauceItem in sauceList"
            :key="sauceItem.id"
            class="ingredients__input"
            inputName="sauce"
            :value="sauceItem.value"
            :label="sauceItem.name"
            :isChecked="sauceItem.value === currentSauce.value"
            @change="$emit('changeSauce', sauceItem)"
          />
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              v-for="ingredientItem in ingredientList"
              :key="ingredientItem.id"
              class="ingredients__item"
            >
              <AppDrag
                :transfer-data="ingredientItem.value"
                :isDraggable="currentIngredients[ingredientItem.value] < 3"
              >
                <span
                  class="filling"
                  :class="`filling--${ingredientItem.value}`"
                  >{{ ingredientItem.name }}</span
                >
              </AppDrag>

              <ItemCounter
                :value="currentIngredients[ingredientItem.value]"
                :name="ingredientItem.value"
                @decrease="decreaseIngredientCount"
                @increase="increaseIngredientCount"
                class="ingredients__counter"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppDrag from "@/common/components/AppDrag";
import ItemCounter from "@/common/components/ItemCounter";
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    AppDrag,
    ItemCounter,
    RadioButton,
  },
  props: {
    sauceList: {
      type: Array,
      required: true,
    },
    ingredientList: {
      type: Array,
      required: true,
    },
    currentIngredients: {
      type: Object,
      required: true,
    },
    currentSauce: {
      type: Object,
      required: true,
    },
  },
  methods: {
    decreaseIngredientCount(ingredientName) {
      this.$emit("updateIngredients", {
        ...this.currentIngredients,
        [ingredientName]: this.currentIngredients[ingredientName] - 1,
      });
    },
    increaseIngredientCount(ingredientName) {
      this.$emit("updateIngredients", {
        ...this.currentIngredients,
        [ingredientName]: this.currentIngredients[ingredientName] + 1,
      });
    },
  },
};
</script>

<style></style>
