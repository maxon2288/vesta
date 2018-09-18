$(document).ready(function() {
    $('.m-img-cont').each(function(){
        var goodsImg = $(this).find('img').attr('src');
        $(this).css('background-image','url('+goodsImg+')');
        $(this).find('img').css('display', 'none');
    });
});

$(document).ready(function() {
    $('.new-board-select').niceSelect();
});

$(".newPopup").click(function () {
    $(".new-ad-popup, .new-overlay").addClass('visible')
});

$(".new-ad-popup-close").click(function () {
    $(".new-ad-popup, .new-overlay").removeClass('visible')
});

$(function(){  
    $('.__lk-fileInput input').change(function(){
      var label = $(this).parent().find('.__lk-fileInput span'); 
      if(typeof(this.files) !='undefined'){ // fucking IE      
        if(this.files.length == 0){
          label.removeClass('withFile').text(label.data('default'));
        }
        else{
          var file = this.files[0]; 
          var name = file.name;
          var size = (file.size / 1048576).toFixed(3); //size in mb 
          label.addClass('.__lk-fileInput span').text(name + ' (' + size + 'mb)');
        }
      }
      else{
        var name = this.value.split("\\");
            label.addClass('withFile').text(name[name.length-1]);
      }
      return false;
    });  
  });