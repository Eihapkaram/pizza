<template>
  <v-container style="width: 100%">
    <v-row style="text-align: center">
      <v-col style="margin-left: auto; position: relative" cols="12" lg="12"
        ><h3 style="font-size: medium">pizza</h3>
        <img src="/public/img/logo-pizza.svg" />
        <br />
        <v-row
          style="
            margin-left: auto;
            position: relative;
            display: flex;
            flex-flow: row nowrap;
            left: -10%;
          "
        >
          <v-col cols="5"
            ><h3 style="font-size: medium">social</h3>
            <v-row
              style="margin-top: 20px; position: relative; left: 40%; gap: 20px"
            >
              <v-icon style="cursor: pointer;">mdi-facebook</v-icon>
              <v-icon style="cursor: pointer;">mdi-instagram</v-icon>
              <v-icon style="cursor: pointer;">mdi-twitter</v-icon>
            </v-row>
          </v-col>

          <v-col
            cols="4"
            style="margin-top: 20px; position: relative; left: 20px"
            ><h3 style="font-size: medium">subscribe for Discounts</h3>
            <v-btn elevation="3" style="border-radius: 30px"> subscribe </v-btn>
          </v-col>
          <v-col cols="4" style="align-items: center"
            ><h3 style="font-size: medium">payment methods</h3>

            <v-row style="position: relative; left: 10%; gap: 20px; top: 20px">
              <img src="/public/img/footer-card-1.png" />
              <img src="/public/img/footer-card-2.png" />
              <img src="/public/img/footer-card-3.png" />
              <img src="/public/img/footer-card-4.png" />
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col style="margin-left: auto; position: relative" cols="12" lg="12"
        ><h3 style="font-size: medium">All righets reseved by Eihap karam</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
