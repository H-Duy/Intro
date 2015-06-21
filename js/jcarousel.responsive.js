(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 1441) {
                    width = width / 4;
                }
                else if(width >=1024 && width <=1440){
                    width = width / 3;
                }
                else if(width >= 768 && width <=1023){
                    width = width / 2;
                } else if (width >= 320 && width <= 767) {
                    width = width / 1;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
                var _height = new Array();
                var _outH = jQuery('.main-content').height() - 180;
                jQuery('.main-content .box-content').each(function(){
                    _height.push(jQuery(this).height());
                });
                var max = Math.max.apply(null, _height);
                if(max > _outH){
                    jQuery('.main-content .box-content').height(max);
                }
                else{
                    jQuery('.main-content .box-content').height(_outH);
                }
                // $('.jcarousel-wrapper').on("swiperight",function(){
                //     alert("You swiped right!");
                // });
                // $('.jcarousel-wrapper').on("swipeleft",function(){
                //     alert("You swiped left!");
                // });
            })
            .jcarousel({
                wrap: 'both'
            });
            jQuery('.jcarousel-wrapper').swipe( {
                swipeLeft: function(){
                    $('.jcarousel-control-next').click();
                },
                swipeRight: function(){
                    $('.jcarousel-control-prev').click();
                },
                threshold:0,
                fingers:'all'
              });
        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });

    });
})(jQuery);
