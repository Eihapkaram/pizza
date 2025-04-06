<template>
  <div>
    <br />
    <BannerHome />
    <br />
    <br />
    <SectionTo />
    <br />
    <SectionSlider />
    <SctionThre />
    <CardSction />
    <br />
    <LocationSction />
    <BannerOrder />
    <FooterSCtion />
  </div>
</template>
<script>
import { mystore1 } from "~/stores/count";
import { mapActions } from "pinia";
export default {
  methods: {
    ...mapActions(mystore1, ["getanimeall"]),
  },
  async mounted() {
    await this.getanimeall();
  },
};
</script>
