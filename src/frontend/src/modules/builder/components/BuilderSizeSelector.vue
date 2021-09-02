<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <SelectorItem
          v-for="sizeItem in sizeList"
          :key="sizeItem.id"
          inputName="diameter"
          class="diameter__input"
          :class="`diameter__input--${sizeItem.value}`"
          :value="sizeItem.value"
          :label="sizeItem.name"
          :isChecked="sizeItem.value === currentSize.value"
          @change="$emit('changeSize', sizeItem)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectorItem from "@/common/components/SelectorItem";

export default {
  name: "BuilderSizeSelector",
  components: {
    SelectorItem,
  },
  props: {
    sizeList: {
      type: Array,
      required: true,
    },
    currentSize: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixins/mixins";

.diameter__input {
  margin-right: 8.7%;
  margin-bottom: 20px;
  padding-top: 7px;
  padding-bottom: 6px;

  cursor: pointer;

  ::v-deep b {
    @include r-s16-h19;

    position: relative;

    padding-left: 46px;

    &::before {
      @include p_center_v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-color: $green-100;
      background-image: url("~@/assets/img/diameter.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &--small {
    ::v-deep b::before {
      background-size: 18px;
    }
  }

  &--normal {
    ::v-deep b::before {
      background-size: 29px;
    }
  }

  &--big {
    ::v-deep b::before {
      background-size: 100%;
    }
  }

  &:hover {
    ::v-deep b::before {
      box-shadow: $shadow-regular;
    }
  }

  ::v-deep input {
    &:checked + b::before {
      box-shadow: $shadow-large;
    }
  }
}
</style>
