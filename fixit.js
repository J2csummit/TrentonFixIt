jQuery(function(){

	//Navigation Animation
	var togglemenu = new Boolean(true);
	$('#menutoggle').click(function(){
		var nav = $('#nav')
		if (togglemenu == true) {
		nav.animate({left: '0px'}, 150);
		togglemenu = false;
		}else {
		nav.animate({left: '-85px'}, 150);
		togglemenu = true;
		}
	});
});// JavaScript Document