$(document).ready(function() {
    $('.m-img-cont').each(function(){
        var goodsImg = $(this).find('img').attr('src');
        $(this).css('background-image','url('+goodsImg+')');
        $(this).find('img').css('display', 'none');
    });
});