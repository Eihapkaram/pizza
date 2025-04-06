const swiper = {
  install(Vue, options) {
    Vue.prototype.$swiper = Swiper;
    Vue.prototype.$swiperModules = {
      Navigation,
      Pagination,
      Scrollbar,
      Autoplay,
    };
  },
};

Vue.use(swiper);
