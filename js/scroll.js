jQuery(function(f){
    var element = f('.spot, .say');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 600 ? 'In': 'Out')](100);           
    });

    $('.spot_link').on('click', function(event) {
    	event.preventDefault();
    	$('.work').show();
    	$('.spot_link, .say_img').hide();
    });
});
