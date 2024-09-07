$(function(){
 
    $('.banner-section__slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '<button class= "banner-section__btn banner-section__btnprev slick-btn-left"><img src="img/arr-left.svg" alt=""></button>',
      nextArrow: '<button class= "banner-section__btn banner-section__btnnext slick-btn-right"><img src="img/arr-right.svg" alt=""></button>',
      
    });

    $('.tab').on('click', function(e){
      e.preventDefault();
      $($(this).siblings()).removeClass('tab--active');
      $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
      $($(this).parent().parent().siblings().find('div')).removeClass('tabs-content--active');                
      $(this).addClass('tab--active');
      $($(this).attr('href')).addClass('tabs-content--active');
      
      
      
  });

  $('.catalog_filter-btn-grid').on('click', function(e){
    $(this).addClass('catalog_filter-btn--active');
    $(this).siblings().removeClass('catalog_filter-btn--active');
    $('.catalog_inner-list').removeClass('catalog_inner-list--line');
});
$('.catalog_filter-btn-line').on('click', function(e){
    $(this).addClass('catalog_filter-btn--active');
    $(this).siblings().removeClass('catalog_filter-btn--active');
    $('.catalog_inner-list').addClass('catalog_inner-list--line');
}); 


  $('.product_item_favorite').on('click', function(e){
      e.preventDefault();
     $(this).toggleClass('product_item_favorite--active')
  });
  $('.menu_btn').on('click', function(e){
    $('.menu_mobile_list').toggleClass('menu_mobile_list--active');
});

$('.filter-style').styler();
    $('.filter_item-drop, .filter-btn_param').on('click', function(){
        $(this).toggleClass('filter_item-drop--active');
        $(this).next().slideToggle(200);
    });
    $(".js-range-slider").ionRangeSlider(
    );
    $('.btn-checked .aside-filter_content-label').on('click', function(e){
      $(this).parent().toggleClass('content-box-active');  

    });
    $(".rate-yo").rateYo({
       
      });
    
      
})

