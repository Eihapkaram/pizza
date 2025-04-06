import { defineStore } from "pinia";
export const mystore1 = defineStore("store1", {
  state: () => ({
    anime: "",
  }),
  getters: {},
  actions: {
    async getanimeall() {
      await fetch(`https://api.jikan.moe/v4/anime`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          this.anime = res.data;
        });
    },
  },
});
