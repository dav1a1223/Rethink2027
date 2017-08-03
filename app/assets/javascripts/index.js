

function rightWalk() {
	// walk action
	$(".three").css("display", "none");
	$(".four").css("display", "none");
	if ($(window).scrollTop() % 120 > 60) {
		$(".one").css("display", "none");
		$(".two").css("display", "block");
	}
	else {
		$(".one").css("display", "block");
		$(".two").css("display", "none");
	}
}

function leftWalk() {
	// walk action
	$(".one").css("display", "none");
	$(".two").css("display", "none");
	if ($(window).scrollTop() % 120 > 60) {
		$(".three").css("display", "none");
		$(".four").css("display", "block");
	}
	else {
		$(".three").css("display", "block");
		$(".four").css("display", "none");
	}
}

$(document).ready(function(){

	var height = 8454; // total height (px)
	var scroll_ms = 3000; // scroll pass (ms)

	// auto scroll in scroll_ms (var)
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: height - $(window).height()
    }, scroll_ms, 'easeInOutQuad');

    setTimeout(function(){
    	$(".walk").fadeIn();
    	// change to walk in screen
    }, scroll_ms);


	$(window).scroll(function () {
		var adjust = ($(window).width() / 1280);
		var scrollBtm = $(document).height() - $(window).height() - $(window).scrollTop()

		// walk path
		// num == scroll interval static
		// num_top, num_left == start position
		var one = 1360;
		var one_top = 8200;
		var one_left = 230;
		var two = 475;
		var two_top = 6530;
		var two_left = 1040;
		var three = 1200;
		var three_top = 6450;
		var three_left = 320;
		var four = 400;
		var four_top = 5000;
		var four_left = 880;
		var five = 1200;
		var five_top = 4850;
		var five_left = 280;
		var six = 390;
		var six_top = 3400;
		var six_left = 980;
		var seven = 1100;
		var seven_top = 3150;
		var seven_left = 280;
		var eight = 350;
		var eight_top = 1900;
		var eight_left = 900;
		var nine = 400;
		var nine_top = 1750;
		var nine_left = 300;
		var ten = 105;
		var ten_top = 1080;
		var ten_left = 625;
		var end_top = 1000;
		var end_left = ten_left;
		// var ten_top = ;
		// var 
		if (scrollBtm > ( one + two + three + four + five + six + seven + eight + nine ) * adjust) {
			$(".walk").css("top", ten_top * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven + eight + nine ) * adjust ) * ( (ten_top - end_top) / ten ) + "px"); 
			$(".walk").css("left", ten_left * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven + eight + nine ) * adjust ) * ( (ten_left - end_left) / ten ) + "px");
			rightWalk();
		}	
		else if (scrollBtm > ( one + two + three + four + five + six + seven + eight ) * adjust) {
			$(".walk").css("top", nine_top * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven + eight ) * adjust ) * ( (nine_top - ten_top) / nine ) + "px"); 
			$(".walk").css("left", nine_left * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven + eight ) * adjust ) * ( (nine_left - ten_left) / nine ) + "px");
			rightWalk();
		}		
		else if (scrollBtm > ( one + two + three + four + five + six + seven ) * adjust) {
			$(".walk").css("top", eight_top * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven ) * adjust ) * ( (eight_top - nine_top) / eight ) + "px"); 
			$(".walk").css("left", eight_left * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven ) * adjust ) * ( (eight_left - nine_left) / eight ) + "px");
			leftWalk();
		}
		else if (scrollBtm > ( one + two + three + four + five + six ) * adjust) {
			$(".walk").css("top", seven_top * adjust - ( scrollBtm - ( one + two + three + four + five + six ) * adjust ) * ( (seven_top - eight_top) / seven ) + "px"); 
			$(".walk").css("left", seven_left * adjust - ( scrollBtm - ( one + two + three + four + five + six ) * adjust ) * ( (seven_left - eight_left) / seven ) + "px");
			rightWalk();
		}
		else if (scrollBtm > ( one + two + three + four + five ) * adjust) {
			$(".walk").css("top", six_top * adjust - ( scrollBtm - ( one + two + three + four + five ) * adjust ) * ( (six_top - seven_top) / six ) + "px"); 
			$(".walk").css("left", six_left * adjust - ( scrollBtm - ( one + two + three + four + five ) * adjust ) * ( (six_left - seven_left) / six ) + "px");
			leftWalk();
		}
		else if (scrollBtm > ( one + two + three + four ) * adjust) {
			$(".walk").css("top", five_top * adjust - ( scrollBtm - ( one + two + three + four ) * adjust ) * ( (five_top - six_top) / five ) + "px"); 
			$(".walk").css("left", five_left * adjust - ( scrollBtm - ( one + two + three + four ) * adjust ) * ( (five_left - six_left) / five ) + "px");
			rightWalk();
		}
		else if (scrollBtm > ( one + two + three ) * adjust) {
			$(".walk").css("top", four_top * adjust - ( scrollBtm - ( one + two + three ) * adjust ) * ( (four_top - five_top) / four ) + "px"); 
			$(".walk").css("left", four_left * adjust - ( scrollBtm - ( one + two + three ) * adjust ) * ( (four_left - five_left) / four ) + "px");
			leftWalk();
		}
		else if (scrollBtm > ( one + two ) * adjust) {
			$(".walk").css("top", three_top * adjust - ( scrollBtm - ( one + two ) * adjust ) * ( (three_top - four_top) / three ) + "px"); 
			$(".walk").css("left", three_left * adjust - ( scrollBtm - ( one + two ) * adjust ) * ( (three_left - four_left) / three ) + "px");
			rightWalk();
		}
		else if (scrollBtm > one * adjust) {
			$(".walk").css("top", two_top * adjust - ( scrollBtm - one * adjust ) * ( (two_top - three_top) / two ) + "px"); 
			$(".walk").css("left", two_left * adjust - ( scrollBtm - one * adjust ) * ( (two_left - three_left) / two ) + "px");
			leftWalk();
		}
		else {
			$(".walk").css("top", one_top * adjust - scrollBtm * ( (one_top - two_top) / one ) + "px");
			$(".walk").css("left", one_left * adjust - scrollBtm * ( (one_left - two_left) / one ) + "px");
			rightWalk();
		}
	});




	$(".background").click(function(){
		// alert($(document).height() - $(window).height() - $(window).scrollTop());
		// alert((( 7802 - $(window).scrollTop() ) / 23 ) + 23 + "vw");
		// alert($(window).width());
	});

});