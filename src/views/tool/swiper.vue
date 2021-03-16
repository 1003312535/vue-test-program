<template>
  <div class="swiper1">
    <el-row>
      <el-col :span="14">
        <div class="swiper-container">
          <div style="background-image:url('https://profile.csdnimg.cn/C/8/F/2_weixin_46211267');height: 100%" data-swiper-parallax="-3%" data-swiper-parallax-duration="3000"></div>
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:2000,
    pagination: '.swiper-pagination', // 如果需要分页器
    autoplayDisableOnInteraction: false,
    nextButton: '.swiper-button-next',// 如果需要前进后退按钮
    prevButton: '.swiper-button-prev',
    parallax : true,
    scrollbar: '.swiper-scrollbar',// 如果需要滚动条
  })        
  }
};
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 200px;
} 
.swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>