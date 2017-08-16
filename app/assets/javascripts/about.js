

$(document).ready(function(){

	$(window).scroll(function () {
		var adjust = ($(window).width() / 1280);
		if ($(window).scrollTop() > 3300 * adjust) {
			$(".navZero, .navOne, .navTwo, .navThree").css("color", "#e0e0e0");
			$(".navThree").css("color", "#6cffbd");
		}
		else if ($(window).scrollTop() > 2600 * adjust) {
			$(".navZero, .navOne, .navTwo, .navThree").css("color", "#e0e0e0");
			$(".navTwo").css("color", "#6cffbd");
		}
		else if ($(window).scrollTop() > 1980 * adjust) {
			$(".navZero, .navOne, .navTwo, .navThree").css("color", "#e0e0e0");
			$(".navOne").css("color", "#6cffbd");
		}
		else if ($(window).scrollTop() > 870 * adjust) {
			$(".navZero, .navOne, .navTwo, .navThree").css("color", "#e0e0e0");
			$(".navZero").css("color", "#6cffbd");
		}
		else if ($(window).scrollTop() > 0) {
			$(".navZero, .navOne, .navTwo, .navThree").css("color", "#e0e0e0");
		}

	});

	// $(".about").click(function(){
	// 	alert($(window).scrollTop());
	// })


	$(".spirit .one").hover(function(){
		$(".spiritPic .blueOne").css("opacity", "1");
		$(".spirit .content").css("display", "none");
		$(".spirit .blue").css("display", "inline-block");
		$(".spirit .arrow").css("display", "none");
	}, function(){
		$(".spiritPic .blueOne").css("opacity", "0");
		$(".spirit .blue").css("display", "none");
		$(".spirit .default").css("display", "inline-block");
		$(".spirit .arrow").css("display", "block");
	})
	$(".spirit .two").hover(function(){
		$(".spiritPic .yellowTwo").css("opacity", "1");
		$(".spirit .content").css("display", "none");
		$(".spirit .yellow").css("display", "inline-block");
		$(".spirit .arrow").css("display", "none");
	}, function(){
		$(".spiritPic .yellowTwo").css("opacity", "0");
		$(".spirit .yellow").css("display", "none");
		$(".spirit .default").css("display", "inline-block");
		$(".spirit .arrow").css("display", "block");
	})
	$(".spirit .three").hover(function(){
		$(".spiritPic .redThree").css("opacity", "1");
		$(".spirit .content").css("display", "none");
		$(".spirit .red").css("display", "inline-block");
		$(".spirit .arrow").css("display", "none");
	}, function(){
		$(".spiritPic .redThree").css("opacity", "0");
		$(".spirit .red").css("display", "none");
		$(".spirit .default").css("display", "inline-block");
		$(".spirit .arrow").css("display", "block");
	})

	$(".step .one").hover(function(){
		$(".stepPic .whiteOne").css("opacity", "1");
		$(".step .content, .step .timeImg").css("display", "none");
		$(".step .white").css("display", "inline-block");
		$(".step .arrow").css("display", "none");
	}, function(){
		$(".stepPic .whiteOne").css("opacity", "0");
		$(".step .white").css("display", "none");
		$(".step .default").css("display", "inline-block");
		$(".step .arrow").css("display", "block");
	})
	$(".step .two").hover(function(){
		$(".stepPic .blueTwo").css("opacity", "1");
		$(".step .content, .step .timeImg").css("display", "none");
		$(".step .blue").css("display", "inline-block");
		$(".step .arrow").css("display", "none");
	}, function(){
		$(".stepPic .blueTwo").css("opacity", "0");
		$(".step .blue").css("display", "none");
		$(".step .default").css("display", "inline-block");
		$(".step .arrow").css("display", "block");
	})
	$(".step .three").hover(function(){
		$(".stepPic .yellowThree").css("opacity", "1");
		$(".step .content, .step .timeImg").css("display", "none");
		$(".step .yellow").css("display", "inline-block");
		$(".step .arrow").css("display", "none");
	}, function(){
		$(".stepPic .yellowThree").css("opacity", "0");
		$(".step .yellow").css("display", "none");
		$(".step .default").css("display", "inline-block");
		$(".step .arrow").css("display", "block");
	})
	$(".step .four").hover(function(){
		$(".stepPic .redFour").css("opacity", "1");
		$(".step .content, .step .timeImg").css("display", "none");
		$(".step .red").css("display", "inline-block");
		$(".step .arrow").css("display", "none");
	}, function(){
		$(".stepPic .redFour").css("opacity", "0");
		$(".step .red").css("display", "none");
		$(".step .default").css("display", "inline-block");
		$(".step .arrow").css("display", "block");
	})

	$(".loop .blueOne").hover(function(){
		$(this).css("opacity", "1");
		$(".loop .word").css("display", "none");
		$(".loop .blue").css("display", "inline-block");
		$(".loop .arrow").css("display", "none");
	}, function(){
		$(this).css("opacity", "0");
		$(".loop .blue").css("display", "none");
		$(".loop .default").css("display", "inline-block");
		$(".loop .arrow").css("display", "block");
	})
	$(".loop .yellowTwo").hover(function(){
		$(this).css("opacity", "1");
		$(".loop .word").css("display", "none");
		$(".loop .yellow").css("display", "inline-block");
		$(".loop .arrow").css("display", "none");
	}, function(){
		$(this).css("opacity", "0");
		$(".loop .yellow").css("display", "none");
		$(".loop .default").css("display", "inline-block");
		$(".loop .arrow").css("display", "block");
	})
	$(".loop .redThree").hover(function(){
		$(this).css("opacity", "1");
		$(".loop .word").css("display", "none");
		$(".loop .red").css("display", "inline-block");
		$(".loop .arrow").css("display", "none");
	}, function(){
		$(this).css("opacity", "0");
		$(".loop .red").css("display", "none");
		$(".loop .default").css("display", "inline-block");
		$(".loop .arrow").css("display", "block");
	})
	$(".loop .greenFour").hover(function(){
		$(this).css("opacity", "1");
		$(".loop .word").css("display", "none");
		$(".loop .green").css("display", "inline-block");
		$(".loop .arrow").css("display", "none");
	}, function(){
		$(this).css("opacity", "0");
		$(".loop .green").css("display", "none");
		$(".loop .default").css("display", "inline-block");
		$(".loop .arrow").css("display", "block");
	})

	$(".triangle .one").hover(function(){
		$(this).css("opacity", "1");
		$(".triangle .big, .triangle .word").css("display", "none");
		$(".triangle .blue").css("display", "block");
		$(".triangle .arrow").css("display", "none");
	}, function(){
		$(this).css("opacity", "0");
		$(".triangle .blue").css("display", "none");
		$(".triangle .default").css("display", "block");
		$(".triangle .arrow").css("display", "block");
	})
	$(".triangle .two").hover(function(){
		$(this).css("opacity", "1");
		$(".triangle .big, .triangle .word").css("display", "none");
		$(".triangle .yellow").css("display", "block");
		$(".triangle .arrow").css("display", "none");
	}, function(){
		$(this).css("opacity", "0");
		$(".triangle .yellow").css("display", "none");
		$(".triangle .default").css("display", "block");
		$(".triangle .arrow").css("display", "block");
	})
	$(".triangle .three").hover(function(){
		$(this).css("opacity", "1");
		$(".triangle .big, .triangle .word").css("display", "none");
		$(".triangle .red").css("display", "block");
		$(".triangle .arrow").css("display", "none");
	}, function(){
		$(this).css("opacity", "0");
		$(".triangle .red").css("display", "none");
		$(".triangle .default").css("display", "block");
		$(".triangle .arrow").css("display", "block");
	})

});
