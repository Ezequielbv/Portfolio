$(document).ready(function(){ 

	$(".itDescription").hide();

	$(".itName").click(function(){
		if ($(this).next('.itDescription').is(':hidden')){
			$(this).next('.itDescription').slideDown();
		} else {
			$(this).next('.itDescription').slideUp();
		}
	})

})