<template>
  <div class="app-layout-default">
    <AppLayoutHeader :user="user" :orderPrice="orderPrice" />

    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
  },
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
