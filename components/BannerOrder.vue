<template>
  <v-banner
  id="order"
    style="background-color: #f9fbe7; position: relative; margin-top: 10px"
  >
    <v-row>
      <img
        data-aos="fade-left"
        data-aos-duration="1000"
        width="300px"
        style="margin-inline: auto; left: 50%"
        src="/public/img/contact-img.png"
      />

      <v-col cols="6" lg="6" id="context">
        <div>
          <p
            data-aos="fade-left"
            data-aos-duration="1100"
            style="display: flex; flex-flow: wrap; width: 400px"
            class="text-h3"
            id="pragraf"
          >
            Contact Now
          </p>
          <br />
          <br />
          <v-row>
            <v-col data-aos="fade-left" data-aos-duration="1200">
              <h4 style="font-size: medium">Write Us</h4>
              <img
                style="cursor: pointer; margin-right: 10px"
                width="30px"
                src="/public/img/telegram-svgrepo-com.svg"
              />
              <img
                style="cursor: pointer;margin-right: 10px"
                width="30px"
                src="/public/img/whatsapp-svgrepo-com.svg"
              />
              <svg width="30px" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"
                />
              </svg>
            </v-col>
            <v-col data-aos="fade-left" data-aos-duration="1200"
              ><h4 style="font-size: medium">Delivary</h4>
              <h4>+022-333-455-666</h4>
              <h4>+022-333-455-666</h4>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-banner>
</template>

<script>
export default {};
</script>

<style scoped>
#context {
  top: 100px;
  position: relative;
}
/*/tablet/*/
@media (max-width: 991px) {
  #context {
    top: 100px;
    position: relative;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
}
</style>
