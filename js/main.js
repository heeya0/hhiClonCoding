$(function(){
  /*--------------------------------------------------
  # 변수 선언
  --------------------------------------------------*/
  let winWidth = $(window).width();

  /*--------------------------------------------------
  # 헤더 - 메뉴
  --------------------------------------------------*/
  $(window).on('resize', function(){
    winWidth = $(window).width();
    if(winWidth > 980){
      $('#header .menu-wrap').removeClass('off');
      $('#header .nav-bg').removeAttr('style');
      $('#header .item>a').removeClass('on');
      $('#header .sub-menu').removeAttr('style');
    } else if(winWidth <= 980){
      $('#header .menu-wrap').removeClass('on');
      $('#header .nav-bg').hide();
      $('#header .close').hide();
    }
  });

  $('#header .menu>li').on('mouseenter', function(){
    if(winWidth > 980){
      $('#header .bottom').addClass('on');
      $('#header .nav-bg').show();
      $('#header .sub-menu').show();
    } else if(winWidth <= 980){
      let i = $(this).index();
      $('#header .item>a').off('click')
      $('#header .item>a').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        $('#header .item>a').not($(this)).removeClass('on');
        $('#header .sub-menu').stop().slideUp();
        $(this).next('#header .sub-menu').stop().slideToggle();
      });
    }
  });

  $('#header .bottom').on('mouseleave', function(){
    if(winWidth > 980){
      $('#header .bottom').removeClass('on');
      $('#header .nav-bg').hide();
      $('#header .sub-menu').hide();
    }
  });

  $('#header .menu-btn>img').on('click', function(){
    $('#header .menu-wrap').toggleClass('on').removeClass('off');
    $('#header .nav-bg').show();
    $('#header .close').fadeIn(500).show();
  });

  $('#header .nav-bg, .close').on('click', function(){
    if(winWidth <= 980){
      $('#header .menu-wrap').toggleClass('on off');
    }
    $('#header .nav-bg').hide();
    $('#header .close').fadeOut(500).hide();
  });

  /*--------------------------------------------------
  # 헤더 - 그룹사 바로가기
  --------------------------------------------------*/
  $('#header .company-wrap>button').on('click', function(){
    $(this).next().toggle();
  });

  /*--------------------------------------------------
  # 메인 - 비주얼
  --------------------------------------------------*/
  let visual = new Swiper('#visual .slide-vi', {
    loop: true,
    speed : 500,
    pagination: {el: '.swiper-pagination', clickable: true},
    navigation: {nextEl: '#visual .next', prevEl: '#visual .prev'},
    autoplay: {disableOnInteraction: false, delay: 5000}
  });

  /*--------------------------------------------------
  # 메인 - 현대중공업 기업블로그
  --------------------------------------------------*/
  let blog = new Swiper('#blog .slide-con', {
    observer: true,
    observeParents: true,
    watchOverflow : false,
    speed : 500,
    parallax:true,
    spaceBetween: 10,
    slidesPerView: 4,
    slidesPerGroup: 1,
    breakpoints: {
      0: {slidesPerView: 2, slidesPerGroup: 2},
      768: {slidesPerView: 4, slidesPerGroup: 1}
    },
    navigation: {nextEl: '#blog .next', prevEl: '#blog .prev'}
  });

  /*--------------------------------------------------
  # 메인 - 현대중공업TV
  --------------------------------------------------*/
  let tv = new Swiper('#tv .slide-con', {
    observer: true,
    observeParents: true,
    watchOverflow : false,
    speed : 500,
    parallax:true,
    spaceBetween: 10,
    slidesPerView: 4,
    slidesPerGroup: 1,
    breakpoints: {
      0: {slidesPerView: 2, slidesPerGroup: 2},
      768: {slidesPerView: 4, slidesPerGroup: 1}
    },
    navigation: {nextEl: '#tv .next', prevEl: '#tv .prev'}
  });
});