<template>
  <label class="radio">
    <input
      type="radio"
      :name="inputName"
      :value="value"
      :checked="isChecked"
      @change="$emit('change', value)"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
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
    isChecked: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixins/mixins";

.radio {
  cursor: pointer;

  span {
    @include r-s16-h19;

    position: relative;

    padding-left: 28px;

    &:before {
      @include p_center-v;

      display: block;

      box-sizing: border-box;
      width: 20px;
      height: 20px;

      content: "";
      transition: 0.3s;

      border: 1px solid $purple-400;
      border-radius: 50%;
      background-color: $white;
    }
  }

  &:hover {
    input:not(:checked):not(:disabled) + span {
      &:before {
        border-color: $purple-800;
      }
    }
  }

  input {
    display: none;

    &:checked + span {
      &:before {
        border: 6px solid $green-500;
      }
    }

    &:disabled {
      & + span {
        &:before {
          border-color: $purple-400;
          background-color: $silver-200;
        }
      }

      &:checked + span {
        &:before {
          border: 6px solid $purple-400;
        }
      }
    }
  }
}
</style>
