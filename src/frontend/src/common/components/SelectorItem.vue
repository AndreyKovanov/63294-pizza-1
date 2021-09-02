<template>
  <label>
    <input
      type="radio"
      :name="inputName"
      :value="value"
      class="visually-hidden"
      :checked="isChecked"
      @change="$emit('change', value)"
    />
    <b>{{ label }}</b>
    <span v-if="description">{{ description }}</span>
  </label>
</template>

<script>
export default {
  name: "SelectorItem",
  props: {
    inputName: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isChecked: {
      type: Boolean,
    },
  },
};
</script>
