<template>
  <div class="swiper">
    <el-row>
      <el-col :span="12">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="true">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <div class="swiper-pagination" slot="pagination" v-if="true"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar" slot="scrollbar" v-if="true"></div>
        </swiper>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import Swiper2, { Navigation, Pagination, Autoplay } from "swiper";
Swiper2.use([Navigation, Pagination, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        // autoplay: true, ///////////////////////////////////////   把这里的3000改为true就可以了、
        // grabCursor: true,
        // setWrapperSize: true,
        // autoHeight: true,
        // pagination: ".swiper-pagination",
        // paginationClickable: true,
        // mousewheelControl: true,
        // autoplayDisableOnInteraction: false,
        // observeParents: true,
        // loop: true,
        // observer: true,

        slidesPerView: 1, // wrapper中显示的图片数量
        // speed: 1000, // 图片切换速度
        loop: true, // 循环轮播
        // notNextTick: true,
        preloadImages: false,
        autoplay: {
          // 自动轮播
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false, //用户操作swiper之后自动切换不会停止
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        //滚动条配置
        scrollbar: {
          el: ".swiper-scrollbar",
          // hide: true,
          draggable: true,
          // dragSize: 130,
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
    // this.swiperOption.autoplay =
    //   this.homeSwiper.length != 1
    //     ? {
    //         delay: 4000,
    //         stopOnLastSlide: false,
    //         disableOnInteraction: false,
    //       }
    //     : false;
  },
};
</script>

<style scoped>
.swiper .swiper-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: pink;
}
.swiper .swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>