<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <SelectorItem
          v-for="sizeItem in sizeList"
          :key="sizeItem.id"
          inputName="diameter"
          :value="sizeItem.value"
          :label="sizeItem.name"
          :isChecked="sizeItem.value === 'normal'"
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
  },
};
</script>

<style></style>
