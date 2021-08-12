<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="$emit('decrease', name)"
      :disabled="value === 0"
    >
      <span class="visually-hidden">Меньше</span>
    </button>

    <input type="text" name="counter" class="counter__input" :value="value" />

    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="$emit('increase', name)"
      :disabled="value === 3"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
