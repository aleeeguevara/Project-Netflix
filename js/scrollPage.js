$(function () {
    $(document).on("scroll", function(){
        var navbar= $(".container");
        var offset= navbar.offset();

        if(offset.top > 50){
            navbar.addClass('navbar-scroll');

        }else{
            navbar.removeClass('navbar-scroll');
        }
    });
  });


