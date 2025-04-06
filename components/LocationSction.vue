<template>
  <div class="container-fluid" id="location">
    <header data-aos="fade-out" data-aos-duration="1000" style="display: flex; justify-content: start;left: 10px;position: relative;">
      <h3 style="font-size: 30px;left: 10px;position: relative;">location</h3>
      <img
        style="width: 30px; height: 30px; position: relative; top: 10px;left: 10px;"
        src="/public/img/location-pin.png"
      />
    </header>
    <iframe
    data-aos="fade-out" data-aos-duration="1400"
      src="https://maps.google.com/maps?q=egypt%20Cairo%20university%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    >
    </iframe>
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";
export default {
  //@click="$router.push({ name: 'id', params: { id: 1 } })"
  async mounted() {
    const element = "null";
    VanillaTilt.init(element.value, { max: 20, speed: 400 });
  },
};
</script>

<style></style>
