<template>
  <v-banner style="background-color: #f9fbe7">
    <v-row>
      <v-col cols="12" style="text-align: center">
        <h2 data-aos="fade-out" data-aos-duration="1700">
          discover populer orders
        </h2>
        <p data-aos="fade-out" data-aos-duration="1900" class="subtitle-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
        </p>
      </v-col>

      <v-col cols="6" lg="6" id="matrial" style="">
        <v-row data-aos="fade-right" data-aos-duration="1100">
          <v-col cols="3" align-center>
            <img
              width="50px"
              src="/public/img/recipe-flour.png"
            />
          </v-col>
          <v-col cols="8">
            <v-row data-aos="fade-right" data-aos-duration="1200">
              <h3>flour</h3>
            </v-row>
            <v-row>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              </p>
            </v-row>
          </v-col>
        </v-row>

        <v-row data-aos="fade-right" data-aos-duration="1300">
          <v-col cols="3" align-center>
            <img
              width="50px"
              src="/public/img/recipe-cheese.png"
            />
          </v-col>
          <v-col cols="8">
            <v-row>
              <h3>cheese</h3>
            </v-row>
            <v-row data-aos="fade-right" data-aos-duration="1400">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              </p>
            </v-row>
          </v-col>
        </v-row>
        <v-row data-aos="fade-right" data-aos-duration="1500">
          <v-col cols="3" align-center>
            <img
              width="50px"
              src="/public/img/recipe-meat.png"
            />
          </v-col>
          <v-col cols="8">
            <v-row>
              <h3>meat</h3>
            </v-row>
            <v-row data-aos="fade-right" data-aos-duration="1600">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              </p>
            </v-row>
          </v-col>
        </v-row>
        <v-row data-aos="fade-right" data-aos-duration="1600">
          <v-col cols="3" align-center>
            <img
              width="50px"
              
              src="/public/img/home-mushroom.png"
            />
          </v-col>
          <v-col cols="8">
            <v-row>
              <h3>mushroom</h3>
            </v-row>
            <v-row>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              </p>
            </v-row>
          </v-col>
        </v-row>
        <v-row data-aos="fade-right" data-aos-duration="1700">
          <v-col cols="3" align-center>
            <img
              width="50px"
              src="/public/img/recipe-sauces.png"
            />
          </v-col>
          <v-col cols="8">
            <v-row>
              <h3>sauces</h3>
            </v-row>
            <v-row>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              </p>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <img
        id="imgbanner"
        data-tilt
        data-tilt-reset="false"
        data-aos="fade-left"
        data-aos-duration="1000"
        style=""
        src="/public/img/recipe-img.png"
      />
    </v-row>
  </v-banner>
</template>

<script>
import VanillaTilt from "vanilla-tilt";
export default {
  async mounted() {
    const element = "null";
    VanillaTilt.init(element.value, { max: 20, speed: 400 });
  },
};
</script>

<style scoped>
#matrial img {
    margin-inline: 50%
  }
#imgbanner {
  margin-inline: auto;
  left: 50%;
  width: 400px;
}
#matrial {
  left: 100px;
  position: relative;
  top: 20px;
}
/*/tablet/*/
@media (max-width: 991px) {
  #imgbanner {
    width: 250px;
    left: 5px;
    position: relative;
  }
  #matrial {
    left: 50px;
    position: relative;
  }
  #matrial img {
    margin-inline: 30%
  }
}
/*/mobile/*/
@media (max-width: 500px) {
}
</style>
