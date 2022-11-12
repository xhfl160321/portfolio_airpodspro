(function(){
    // 메뉴 스크립트
    $(".menu > ul > li").hover(function(){
        $(this).find(".submenu").stop().slideDown();
    }, function(){
        $(this).find(".submenu").stop().slideUp();
    });
})(jQuery);