 
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
