<template>
  <v-banner style="background-color: #f9fbe7" id="about">
    <v-row>
      <img data-aos="fade-left" data-aos-duration="1000"
        width="300px"
        style="margin-inline: auto; left: 50%"
        src="/public/img/about-img.png"
      />

      <v-col cols="6" lg="6">
        <div data-aos="fade-left" data-aos-duration="1000">
          <p
            style="display: flex; flex-flow: wrap; width: 400px"
            class="text-h3"
            id="pragraf"
          >
            learn more about our hiestory
          </p>
          <br />

          <h4
            style="opacity: 0.6; display: flex; flex-flow: wrap; width: 300px"
            id="header"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            illum fugit laboriosam esse id atque ipsa excepturi, tempora
            accusantium hic sunt,
          </h4>
          <br />
          <v-btn id="btn" variant elevation="5" style="border-radius: 50px"
            >shop Now</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-banner>
</template>

<script>
export default {};
</script>

<style scoped></style>
