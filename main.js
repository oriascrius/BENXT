import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world!");

// 回到上方按鈕
let toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    toTopBtn.classList.add("show"); // 当页面滚动超过 100px 时显示按钮
  } else {
    toTopBtn.classList.remove("show"); // 滚动回顶部时隐藏按钮
  }
};
toTopBtn.onclick = function () {
  setTimeout(function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 1000); // 1000 毫秒 = 1 秒
};

// Aos 滾輪滑動到區塊出現文字
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    // easing: "ease",
    // duration: 700,
  });
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true, // 启用循环播放
  slidesPerView: 1, // 每次只显示一个幻灯片
  slidesPerGroup: 1, // 每次滑动一个幻灯片
  spaceBetween: 10, // 幻灯片之间的间距
  // autoplay: {
  //   delay: 3000, // 每隔3秒自动轮播一次
  //   disableOnInteraction: false, // 用户交互后不停止自动轮播
  // },
  breakpoints: {
    992: {
      enabled: false, // 在宽度小于等于 768px 时禁用 Swiper
    },
  },
});