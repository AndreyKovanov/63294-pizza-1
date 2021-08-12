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
          <div class="pizza__filling pizza__filling--ananas"></div>
          <div class="pizza__filling pizza__filling--bacon"></div>
          <div class="pizza__filling pizza__filling--cheddar"></div>
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
  },
};
</script>

<style></style>
