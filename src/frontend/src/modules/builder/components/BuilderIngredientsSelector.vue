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
            :isChecked="sauceItem.value === 'tomato'"
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
              <span
                class="filling"
                :class="`filling--${ingredientItem.value}`"
                >{{ ingredientItem.name }}</span
              >

              <ItemCounter :value="0" class="ingredients__counter" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter";
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderIngredientsSelector",
  components: {
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
  },
};
</script>

<style></style>
