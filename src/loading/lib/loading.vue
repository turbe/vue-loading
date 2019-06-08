<template>
  <div class="loading-box" v-show="show">
    <div class="loading-mask"></div>
    <div class="loading-content">
      <div class="animate">
      </div>
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: '正在加载中...'
    },
  }
}
</script>

<style>
.loading-box {
  position: relative;
  text-align: center;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.loading-mask {
  position: fixed;
  background: #989AAC;
  opacity: .2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.loading-content {
  position: fixed;
  left: 50%;
  top: 100px;
  width: 200px;
  height: 100px;
  margin-left: -100px;
  text-align: center;
  color: #fff;
  z-index: 5001;
}
.loading-content .animate {
  width: 70px;
  height: 70px;
  vertical-align: baseline;
  display: inline-block;
  vertical-align: middle;
  animation: vueLoading 1s steps(12, end) infinite;
  background: transparent url("../../assets/loading200px.gif") no-repeat;
  background-size: 100%;
}
.loading-content .text {
  margin: 0 auto;
  font-size: 16px;
  color: #3d3d3d;
}
@-webkit-keyframes vueLoading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
@keyframes vueLoading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
</style>