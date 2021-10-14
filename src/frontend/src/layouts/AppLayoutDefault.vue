<template>
  <div class="app-layout-default">
    <AppLayoutHeader :orderPrice="orderPrice" />

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
  },
};
</script>
