<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <SelectorItem
          v-for="doughItem in doughList"
          :key="doughItem.id"
          inputName="dough"
          :value="doughItem.value"
          :label="doughItem.name"
          :description="doughItem.description"
          :isChecked="doughItem.value === currentDough"
          @change="$emit('changeDough', $event)"
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
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
