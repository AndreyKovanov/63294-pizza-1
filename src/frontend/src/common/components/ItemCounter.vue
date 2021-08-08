<template>
  <div class="counter">
    <button type="button" class="counter__button counter__button--minus">
      <span class="visually-hidden">Меньше</span>
    </button>

    <input type="text" name="counter" class="counter__input" :value="value" />

    <button type="button" class="counter__button counter__button--plus">
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
