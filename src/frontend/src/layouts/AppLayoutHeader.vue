<template>
  <header class="header">
    <div class="header__logo">
      <a href="#" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </a>
    </div>

    <div class="header__cart">
      <a href="cart.html">{{ orderPrice }} ₽</a>
    </div>

    <div class="header__user">
      <template v-if="user">
        <a href="user-data.html">
          <img
            src="@/assets/img/users/user5.jpg"
            :alt="user"
            width="32"
            height="32"
          />
          <span>{{ user }}</span>
        </a>
        <a href="#logout" class="header__logout"><span>Выйти</span></a>
      </template>

      <a v-else href="#login" class="header__login"><span>Войти</span></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",
  props: {
    orderPrice: {
      type: Number,
      required: true,
    },
    user: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
