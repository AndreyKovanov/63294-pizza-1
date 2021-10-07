<template>
  <component :is="layout" :user="user" :orderPrice="orderPrice">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "AppLayoutDefault";

export default {
  name: "AppLayout",
  props: {
    orderPrice: {
      type: Number,
      required: true,
    },
    user: {
      type: String,
    },
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
