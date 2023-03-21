$(function(){
	$(".content-before").click(function(e){
		e.preventDefault();
		$(".content-before").toggleClass("open");
		$(".content-after").toggleClass("open");
	});
});


$(function(){
	$(".content-after").click(function(e){
		e.preventDefault();
		$(".content-before").toggleClass("open");
		$(".content-after").toggleClass("open");
	});
});


$(function(){
	$(".content-before-1").click(function(e){
		e.preventDefault();
		$(".content-before-1").toggleClass("open");
		$(".content-after-1").toggleClass("open");
	});
});


$(function(){
	$(".content-after-1").click(function(e){
		e.preventDefault();
		$(".content-before-1").toggleClass("open");
		$(".content-after-1").toggleClass("open");
	});
});


function botonCopiar(){
	var copiar = document.getElementById('copy-text').textContent;
	navigator.clipboard.writeText(copiar).catch(() =>{
	});
}

function botonCopiar2(){
	var copiar2 = document.getElementById('copy-text-2').textContent;
	navigator.clipboard.writeText(copiar2).catch(() =>{
	});
}