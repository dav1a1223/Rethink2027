

$(document).ready(function(){

	// burger
	$(".burger, .walk").click(function(){
		$(".menu").fadeIn()
	});

	$(".final").click(function(){
		$(".menu").fadeOut();
	});

	// $(".bar .proposal").hover(function(){
	// 	$(".bar .proposal .pulse").css("display", "block");
	// }, function(){
	// 	$(".bar .proposal .pulse").fadeOut();
	// })

	// menu

	$("#btnNews").hover(function(){
		$("#picNews").css("display", "block");
	}, function(){
		$("#picNews").css("display", "none");
	})
	$("#btnAbout").hover(function(){
		$("#picAbout").css("display", "block");
	}, function(){
		$("#picAbout").css("display", "none");
	})
	$("#btnActivity").hover(function(){
		$("#picActivity").css("display", "block");
	}, function(){
		$("#picActivity").css("display", "none");
	})
	$("#btnWall").hover(function(){
		$("#picWall").css("display", "block");
	}, function(){
		$("#picWall").css("display", "none");
	})
	$("#btnPartner").hover(function(){
		$("#picPartner").css("display", "block");
	}, function(){
		$("#picPartner").css("display", "none");
	})
	$("#btnDaily").hover(function(){
		$("#picDaily").css("display", "block");
	}, function(){
		$("#picDaily").css("display", "none");
	})



	// activities

	$(window).scroll(function () {
		if ($(window).scrollTop() > 500) {
			$(".elevator").fadeIn();
		}
		else {
			$(".elevator").fadeOut();	
		}
	})

	$(".elevator").click(function(){
	    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	    $body.animate({
	        scrollTop: 0
	    }, 700, 'easeInOutQuad');
	})

	$(".activityBtnGrp #actBtn").click(function(){
		$(".activities").css("display", "block");
		$(".time").css("display", "none");
		$(".QandA").css("display", "none");
		$(".activityBtnGrp .btn").removeClass("active");
		$(this).addClass("active");
	})

	$(".activityBtnGrp #timeBtn").click(function(){
		$(".activities").css("display", "none");
		$(".time").css("display", "block");
		$(".QandA").css("display", "none");
		$(".activityBtnGrp .btn").removeClass("active");
		$(this).addClass("active");
	})

	$(".activityBtnGrp #QABtn").click(function(){
		$(".activities").css("display", "none");
		$(".time").css("display", "none");
		$(".QandA").css("display", "block");
		$(".activityBtnGrp .btn").removeClass("active");
		$(this).addClass("active");
	})

	// Q&A
	$(".Q").click(function(){
		$(".A").css("display", "none");
		$(this).children(".A").css("display", "block");
		$(".Q .topic").removeClass("yellowTopic");
		$(this).children(".topic").addClass("yellowTopic");
		// children for one layer; find for all child
	})

	$(".QAoneBtn").click(function(){
		$(".QAsec").css("display", "none");
		$(".QAone").css("display", "block");

		$(".QAgrp img").removeClass("active");
		$(this).addClass("active");
	})
	$(".QAtwoBtn").click(function(){
		$(".QAsec").css("display", "none");
		$(".QAtwo").css("display", "block");

		$(".QAgrp img").removeClass("active");
		$(this).addClass("active");
	})
	$(".QAthreeBtn").click(function(){
		$(".QAsec").css("display", "none");
		$(".QAthree").css("display", "block");

		$(".QAgrp img").removeClass("active");
		$(this).addClass("active");
	})
	$(".QAfourBtn").click(function(){
		$(".QAsec").css("display", "none");
		$(".QAfour").css("display", "block");

		$(".QAgrp img").removeClass("active");
		$(this).addClass("active");
	})
	$(".QAfiveBtn").click(function(){
		$(".QAsec").css("display", "none");
		$(".QAfive").css("display", "block");

		$(".QAgrp img").removeClass("active");
		$(this).addClass("active");
	})

	// partner

	$(".trackOneBtn").click(function(){
		$(".track").css("display", "none");
		$(".trackOne").css("display", "block");
		// $(".trackOne").fadeIn();
	})
	$(".trackTwoBtn").click(function(){
		$(".track").css("display", "none");
		$(".trackTwo").css("display", "block");
	})
	$(".trackThreeBtn").click(function(){
		$(".track").css("display", "none");
		$(".trackThree").css("display", "block");
	})
	$(".pointOneBtn").click(function(){
		$(".track").css("display", "none");
		$(".pointOne").css("display", "block");
	})
	$(".pointTwoBtn").click(function(){
		$(".track").css("display", "none");
		$(".pointTwo").css("display", "block");
	})
	$(".pointThreeBtn").click(function(){
		$(".track").css("display", "none");
		$(".pointThree").css("display", "block");
	})
	$(".pointFourBtn").click(function(){
		$(".track").css("display", "none");
		$(".pointFour").css("display", "block");
	})
	$(".pointFiveBtn").click(function(){
		$(".track").css("display", "none");
		$(".pointFive").css("display", "block");
	})
	$(".pointSixBtn").click(function(){
		$(".track").css("display", "none");
		$(".pointSix").css("display", "block");
	})

	$(".Xone").click(function(){
		$(".Xprofile").css("display", "none");
		$(".XPone").css("display", "block");

		$(".X").removeClass("active");
		$(this).addClass("active");
	})
	$(".Xtwo").click(function(){
		$(".Xprofile").css("display", "none");
		$(".XPtwo").css("display", "block");

		$(".X").removeClass("active");
		$(this).addClass("active");
	})
	$(".Xthree").click(function(){
		$(".Xprofile").css("display", "none");
		$(".XPthree").css("display", "block");

		$(".X").removeClass("active");
		$(this).addClass("active");
	})
	$(".Xfour").click(function(){
		$(".Xprofile").css("display", "none");
		$(".XPfour").css("display", "block");

		$(".X").removeClass("active");
		$(this).addClass("active");
	})
	$(".Xfive").click(function(){
		$(".Xprofile").css("display", "none");
		$(".XPfive").css("display", "block");

		$(".X").removeClass("active");
		$(this).addClass("active");
	})

	$(".objectOne").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansOne").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansOne").css("display", "none");
	})
	$(".objectTwo").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansTwo").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansTwo").css("display", "none");
	})
	$(".objectThree").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansThree").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansThree").css("display", "none");
	})
	$(".objectFour").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansFour").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansFour").css("display", "none");
	})
	$(".objectFive").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansFive").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansFive").css("display", "none");
	})
	$(".objectSix").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansSix").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansSix").css("display", "none");
	})
	$(".objectSeven").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansSeven").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansSeven").css("display", "none");
	})
	$(".objectEight").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansEight").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansEight").css("display", "none");
	})
	$(".objectNine").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansNine").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansNine").css("display", "none");
	})
	$(".objectTen").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansTen").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansTen").css("display", "none");
	})
	$(".objectEleven").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansEleven").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansEleven").css("display", "none");
	})
	$(".objectTwelve").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansTwelve").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansTwelve").css("display", "none");
	})

	$(".objectFive").click(function(){
		$(".bagWindow").css("display", "block")
	})

	$(".bagWindow").click(function(){
		$(this).css("display", "none");
	})

});





