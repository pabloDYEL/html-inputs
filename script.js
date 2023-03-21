$(function(){
	$(".burger-links").click(function(e){
		e.preventDefault();
		$(".burger-close").toggleClass("open");
		$(".burger-open").toggleClass("open");
		$(".burger-links").toggleClass("open");
		$(".burger-overlay").toggleClass("open");
		$("nav").toggleClass("open");
		$(".first-sec").toggleClass("open");
		$(".second-sec").toggleClass("open");
		$(".third-sec").toggleClass("open");
		$(".fourth-sec").toggleClass("open");
		$(".fifth-sec").toggleClass("open");
		$(".sixth-sec").toggleClass("open");
		$(".pene").toggleClass("open");
	});
});

$(function(){
	$(".button-10").click(function(e){
		e.preventDefault();
		$(".cart-after").toggleClass("open");
		$(".cart").toggleClass("open");
	});
});


$(function(){
	$(".button-11").click(function(e){
		e.preventDefault();
		$(".cart-after-2").toggleClass("open");
		$(".cart-2").toggleClass("open");
	});
});














