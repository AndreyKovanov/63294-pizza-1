<template>
  <div id="app">
    <!-- <div class="main">
      <div class="main__wrapper">
        <div class="main__header">
          <img
            src="@/assets/img/logo.svg"
            width="300"
            height="47"
            alt="V!U!E! Pizza"
          />
        </div>
        <h1>Добро пожаловать!</h1>
        <p>
          Это проект V!U!E! Pizza для обучения на профессиональном
          онлайн‑курсе<br />
          <b>«Vue.js для опытных разработчиков».</b>
        </p>
      </div>
    </div> -->

    <PizzaConstructor />
  </div>
</template>

<script>
import PizzaConstructor from "@/views/Index";

export default {
  name: "App",
  components: {
    PizzaConstructor,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
