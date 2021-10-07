<template>
  <div id="app">
    <AppLayout :user="user" :orderPrice="orderPrice">
      <router-view @addPizza="currentOrder.push($event)" />
    </AppLayout>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: "Василий Ложкин",
      currentOrder: [],
    };
  },
  computed: {
    orderPrice() {
      return this.currentOrder.reduce(
        (sum, currentItem) => sum + currentItem.price,
        0
      );
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
