<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <SelectorItem
          v-for="doughItem in doughList"
          :key="doughItem.id"
          inputName="dough"
          class="dough__input"
          :class="`dough__input--${doughItem.value}`"
          :value="doughItem.value"
          :label="doughItem.name"
          :description="doughItem.description"
          :isChecked="doughItem.value === currentDough.value"
          @change="$emit('changeDough', doughItem)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectorItem from "@/common/components/SelectorItem";

export default {
  name: "BuilderDoughSelector",
  components: {
    SelectorItem,
  },
  props: {
    doughList: {
      type: Array,
      required: true,
    },
    currentDough: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixins/mixins";

.dough__input {
  position: relative;

  margin-right: 8%;
  margin-bottom: 20px;
  padding-left: 50px;

  cursor: pointer;

  ::v-deep b {
    @include r-s16-h19;

    &::before {
      @include p_center-v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  ::v-deep span {
    @include l-s11-h13;

    display: block;
  }

  &--light {
    ::v-deep b {
      &::before {
        background-image: url("~@/assets/img/dough-light.svg");
      }
    }
  }

  &--large {
    ::v-deep b {
      &::before {
        background-image: url("~@/assets/img/dough-large.svg");
      }
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
