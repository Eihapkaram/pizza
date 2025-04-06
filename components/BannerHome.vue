<template>
  <v-row style="height: 600px;" id="homeBaaner">
    <v-col id="textcol" cols="6" style="display: flex; justify-content: center;top: 100px;position: relative;" data-aos="fade-left"
    data-aos-duration="1100">
      <div>
        <p class="text-h2" id="pragraf">
          Lorem ipsum dolor sit
          <img width="80px" src="/public/img/sticker-cheese.svg" /> amet
          consectetur adipisicing elit. Deleniti
        </p>
        <br />

        <h4 style="opacity: 0.6" id="header">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          illum fugit laboriosam esse id atque ipsa excepturi, tempora
          accusantium hic sunt, consectetur sint praesentium perferendis in
          voluptate facilis quas quaerat.
        </h4>

        <v-btn id="btn" variant elevation="5" style="border-radius: 50px"
          >shop Now</v-btn
        >
        <img id="btnflor" width="60px" src="/public/img/sticker-leaf.svg" />
      </div>
    </v-col>
    <v-col id="imgcol" cols="6" style="display: flex; justify-content: center;position: relative;" data-aos="fade-left"
    data-aos-duration="1000">
      <img id="board" width="300px" src="/public/img/home-board.png" />
      <img
        id="pizza"
        width="280px"
        height="300px"
        src="/public/img/home-pizza.png"
      />
      <div
        id="conf"
        style="
          position: absolute;
          border-radius: 200px;
          width: 280px;
          height: 300px;
        "
      >
        <img
          id="pizzaf1"
          style="position: relative; top: 180px; left: -50px"
          width="50px"
          height="50px"
          src="/public/img/home-leaf-1.png"
        />
        <img
          id="pizzaf2"
          style="position: relative; top: 180px; left: 230px"
          width="50px"
          height="50px"
          src="/public/img/home-leaf-2.png"
        />
        <img
          id="pizzao"
          style="position: relative; top: 30px; left: 170px"
          width="50px"
          height="50px"
          src="/public/img/home-olive.png"
        />
        <img
          id="pizzap"
          style="position: relative; top: 30px; left: -190px"
          width="50px"
          height="50px"
          src="/public/img/home-pepperoni.png"
        />
        <img
          id="pizzat"
          style="position: relative; top: 300px; left: -80px"
          width="50px"
          height="50px"
          src="/public/img/home-tomato.png"
        />
        <img
          id="pizzam"
          style="position: relative; top: -110px; left: 100px"
          width="50px"
          height="50px"
          src="/public/img/home-mushroom.png"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mystore1 } from "~/stores/count";
import { mapActions, mapState } from "pinia";
import VanillaTilt from "vanilla-tilt";

export default {
  data() {
    return {
      src1: "",
    };
  },
  methods: {
    ...mapActions(mystore1, ["getanimeall"]),
  },
  computed: {
    ...mapState(mystore1, ["anime"]),
  },
  async mounted() {
    const element = "null";
    VanillaTilt.init(element.value, { max: 20, speed: 400 });
    await this.getanimeall();
    this.anime = this.src1;
    setTimeout(function () {
      $("#conf").children().css({ Transition: "all,1s", opacity: "0" });
      $("#pizza").fadeIn(300);
      $("#pizza").css({ transform: "rotate(360deg)" });
      $("#conf").fadeIn(400);
      $("#board").fadeIn(100);
      $("#conf").children().css({ Transition: "all,1s", opacity: "1" });
      $("#header").css({ left: "100px" });
      $("#pragraf").css({ left: "100px" });
      $("#btn").css({ left: "100px" });
      $("#btnflor").css({ left: "100px" });
    }, 1000);
  },
};
</script>

<style scoped>
#imgcol {
    top: 100px;
  }
#homeBaaner {
    margin-top: 100px;
  }

#pizza {
  position: absolute;
  transition: all, 3s;
  
  left: auto;
  display: none;
}
#conf {
  
  transform: rotate(360deg);
  display: none;
  transition: all, 1s;
}
#board {
  position: relative;
  top: -70px;
  height: 350px;
  left: auto;
  transition: all, 1s;
  display: none;
}
#header {
  position: relative;
  left: -750px;
  margin-bottom: 30px;
  transition: all, 1s;
  font-family: "Patua One", serif;
}
#pragraf {
  font-family: "Kenia", sans-serif;
  position: relative;
  left: -750px;
  transition: all, 1s;
}
#btn {
  position: relative;
  left: -660px;
  transition: all, 1s;
}
#btnflor {
  position: relative;
  left: -660px;
  transition: all, 1s;
}
.box {
  width: 200px;
  height: 100px;
  background: blue;
  border-radius: 5px;
  perspective: 1000px;
}

@keyframes animate1 {
  from {
    left: 400px;
  }
  to {
    left: 0px;
  }
}
@keyframes animate3 {
  from {
    left: 400px;
    transform: rotate(80deg);
  }
  to {
    left: 0px;
    transform: rotate(-0deg);
  }
}
@keyframes animate2 {
  from {
    right: -300px;
  }
  to {
    position: absolute;
    top: 230px;
    right: 190px;
    transform: rotate(360deg);
  }
}

.contianer-fliud {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
}
#head {
  align-self: end;
  margin-right: 20px;
  margin-block: 30px;
  color: black;
}
.progress {
  position: relative;
  height: 50px;
  border-radius: none;
  width: 100px;
  cursor: pointer;
  background-color: transparent;
  left: 20px;
}
.progress:hover .progress-bar {
  width: 100%;
}
.progress-bar {
  width: 50%;
  background-color: brown;
  border-radius: 2px;
  padding: 5px;
}
#textbtn {
  z-index: 5;
  position: fixed;
}
.checked {
  color: orange;
}
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
  top: 20px;
  z-index: 2;
}
.condis {
  position: absolute;
  left: 40%;
  width: 400px;
}
.content {
  position: relative;
  overflow: hidden;
  display: none;
  flex-flow: column;
  justify-content: center;
  font-weight: 900;
  align-content: center;
}
.swiper-slide-active {
  color: aliceblue;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  filter: drop-shadow();

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide #item {
  display: block;
  width: 100%;
  height: 660px;
  object-fit: cover;
  gap: 100rem;
  border-radius: 5px;
}
.swiper-slide #item:hover {
  transform: scale(1.1);
  transition: all, 1s;
}
.btn1 {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: 2px solid orange;
  border-radius: 50%;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 180px;
  align-self: center;
  right: auto;
  background-color: orange;
}
.btn1 {
  animation: btnani 1s infinite linear;
}
@keyframes btnani {
  0% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 1;
  }
  40% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
  80% {
    box-shadow: 0 0 0 50px rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
  100% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
}
#movename {
  position: absolute;
  z-index: 3;
  color: whitesmoke;
  top: 320px;
  font-size: large;
  align-self: center;
}
#moveitem {
  position: absolute;
  z-index: 3;
  color: whitesmoke;
  top: 350px;
  font-size: small;
  align-self: center;
}
.coninform {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  top: 0px;
  right: 0px;
  row-gap: 3px;
  height: 100%;
  width: 290px;
}
.btn5 {
  width: 50px;
  height: 50px;
  align-self: center;
  cursor: pointer;
  border: 2px solid orange;
  border-radius: 50%;
  justify-content: center;
  align-content: center;
  position: relative;
  align-self: center;
  right: auto;
  background-color: orange;
}
.btn5:hover {
  animation: btnani 1s infinite linear;
}
/*/labtop/*/
@media (max-width: 1366px) {
  
}
/*/tablet/*/
@media (max-width: 991px) {
  #homeBaaner {
    margin-bottom: 400px;
  }
  #textcol {
    left: -60px;
  }
  #imgcol {
    top: 150px;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #homeBaaner {
    margin-bottom: 600px;
  }
  #textcol {
    left: -60px;
  }
}
</style>
