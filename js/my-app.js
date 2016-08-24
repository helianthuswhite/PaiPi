// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// 轮播图设置
var mySwiper = myApp.swiper('.swiper-container', {
  pagination:'.swiper-container .swiper-pagination',
  spaceBetween: 50,
  speed:400
});

$$('.camerist .card').on('click', function (e) {
    location.href = 'more.html'
});

$$('.back-button').on('click', function (e) {
	location.href = window.history.go(-1);
});

//图片浏览器
var myPhotoBrowserStandalone = myApp.photoBrowser({
    photos : [
        'img/test1.jpg',
        'img/test2.jpg',
        'img/test3.jpg',
    ]
});
//Open photo browser on click
$$('.card-content .feeds-bottom .more').on('click', function () {
    myPhotoBrowserStandalone.open();
});
 