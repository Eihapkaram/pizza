<template>
  <div>wlcome{{ this.$route.params.id }}</div>
  {{ state }}
</template>

<script>
export default {
  data() {
    return {
      state: false,
    };
  },
  mounted() {
    useSeoMeta({
      discrption: "about",
      title: "about1",
      keywords: "wood",
    });
  },
};
</script>

<style></style>
