<template>
  <div>
    <AppLayoutHeader :user="user" :orderPrice="orderPrice" />

    <main class="content">
      <PizzaConstructor @addPizza="currentOrder.push($event)" />
    </main>
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import PizzaConstructor from "@/views/PizzaConstructor";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    PizzaConstructor,
  },
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

<style lang="scss" scoped></style>
