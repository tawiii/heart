 
$(document).ready(function(){
	$(".header").on("click",".ss", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		 top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(".about").click(function(e){
		e.preventDefault();
		$(".cont").slideUp("100");
        $(".abt").slideToggle("slow");
        $(this).show();
    });

    $(".contact").click(function(e){
		e.preventDefault();
		$(".abt").slideUp("100");
        $(".cont").slideToggle("slow");
        $(this).show();
    });
	
});



 $(document).mousemove(function(event) {


        cx = Math.ceil($(window).width() / 1.8);
        cy = Math.ceil($(window).height() / 1.8);
        dx = event.pageX - cx;
        dy = event.pageY - cy;

        tiltx = (dy / cy);
        tilty = - (dx / cx);
        radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
        degree = (radius * 20);


        $('#head').css('-webkit-transform','rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');
        $('#head').css('transform','rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');

    });
    function changeAnimState() {
           
            $(".eye-left").clone(true).insertBefore(".eye-left");
            $(".eye-left").last().remove();
            $(".eye-right").clone(true).insertBefore(".eye-right");
            $(".eye-right").last().remove();

        }

        setInterval(changeAnimState, 3000);


   
jQuery(function(f){
    var element = f('.spot, .say');
    f(window).scroll(function(){
    	$('.abt, .cont').hide("slow");
        element['fade'+ (f(this).scrollTop() > 600 ? 'In': 'Out')](100);           
    });

    $('.spot_link').on('click', function(event) {
    	event.preventDefault();
    	$('.work').show();
    	$('.spot_link, .say').remove();
    });
});
