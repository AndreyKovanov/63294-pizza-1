<template>
  <div>
    <AppLayoutHeader :user="user" />

    <main class="content">
      <PizzaConstructor />
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
