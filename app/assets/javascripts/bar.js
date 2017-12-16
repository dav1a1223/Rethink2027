

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
	$(".objectTwelve").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansTwelve").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansTwelve").css("display", "none");
	})
	$(".objectThirteen").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansThirteen").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansThirteen").css("display", "none");
	})
	$(".objectFourteen").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansFourteen").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansFourteen").css("display", "none");
	})
  $(".p6Thing1").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp6T1").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp6T1").css("display", "none");
	})
  $(".p6Thing2").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp6T2").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp6T2").css("display", "none");
	})
  $(".p6Thing3").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp6T3").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp6T3").css("display", "none");
	})
  $(".p6Thing4").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp6T4").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp6T4").css("display", "none");
	})
  $(".p6Thing5").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp6T5").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp6T5").css("display", "none");
	})
  $(".p7Thing1").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp7T1").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp7T1").css("display", "none");
	})
  $(".p7Thing2").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp7T2").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp7T2").css("display", "none");
	})
  $(".p7Thing3").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp7T3").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp7T3").css("display", "none");
	})
  $(".p7Thing4").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp7T4").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp7T4").css("display", "none");
	})
  $(".p7Thing5").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp7T5").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp7T5").css("display", "none");
	})
  $(".p8Thing1").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp8T1").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp8T1").css("display", "none");
	})
  $(".p8Thing2").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp8T2").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp8T2").css("display", "none");
	})
  $(".p8Thing3").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp8T3").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp8T3").css("display", "none");
	})
  $(".p8Thing4").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp8T4").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp8T4").css("display", "none");
	})
  $(".p8Thing5").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp8T5").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp8T5").css("display", "none");
	})
  $(".p9Thing1").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp9T1").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp9T1").css("display", "none");
	})
  $(".p9Thing2").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp9T2").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp9T2").css("display", "none");
	})
  $(".p9Thing3").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp9T3").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp9T3").css("display", "none");
	})
  $(".p9Thing4").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp9T4").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp9T4").css("display", "none");
	})
  $(".p9Thing5").hover(function(){
		$(".objDefault").css("display", "none");
		$(".ansp9T5").css("display", "block");
	}, function(){
		$(".objDefault").css("display", "block");
		$(".ansp9T5").css("display", "none");
	})



	$(".objectFive").click(function(){
		$(".bagWindow").css("display", "block")
	})

	$(".bagWindow").click(function(){
		$(this).css("display", "none");
	})

	// youth
	$(".HMWbtn").click(function(){
		$(".opening").fadeOut();
	})

	var youthAdjust = ($(window).width() / 1280);
	var youthScrollStart = 1200 * youthAdjust;
	var youthScrollInterval = 60 * youthAdjust;

	$(".youth").click(function(){
		// alert($(".bar").css("top"));
		// alert($(document).height() - $(window).height() - $(window).scrollTop());
		// alert($(window).scrollTop());
		// alert((( 7802 - $(window).scrollTop() ) / 23 ) + 23 + "vw");
		// alert($(window).width());
	});

	// footprint
	$(window).scroll(function () {
		if ($(window).scrollTop() >= youthScrollStart - youthScrollInterval && $(window).scrollTop() < youthScrollStart + youthScrollInterval) {
			$(".windmill .windmillText").css("display", "none");
			$("#windmillOne .windmillText").css("display", "block");
		}
		else if ($(window).scrollTop() >= youthScrollStart + youthScrollInterval && $(window).scrollTop() < youthScrollStart + youthScrollInterval * 2) {
			$(".windmill .windmillText").css("display", "none");
			$("#windmillTwo .windmillText").css("display", "block");
		}
		else if ($(window).scrollTop() >= youthScrollStart + youthScrollInterval * 2 && $(window).scrollTop() < youthScrollStart + youthScrollInterval * 3) {
			$(".windmill .windmillText").css("display", "none");
			$("#windmillThree .windmillText").css("display", "block");
		}
		else if ($(window).scrollTop() >= youthScrollStart + youthScrollInterval * 3 && $(window).scrollTop() < youthScrollStart + youthScrollInterval * 4) {
			$(".windmill .windmillText").css("display", "none");
			$("#windmillFour .windmillText").css("display", "block");
		}
		else if ($(window).scrollTop() >= youthScrollStart + youthScrollInterval * 4 && $(window).scrollTop() < youthScrollStart + youthScrollInterval * 5) {
			$(".windmill .windmillText").css("display", "none");
			$("#windmillFive .windmillText").css("display", "block");
		}
		else if ($(window).scrollTop() >= youthScrollStart + youthScrollInterval * 5 && $(window).scrollTop() < youthScrollStart + youthScrollInterval * 6) {
			$(".windmill .windmillText").css("display", "none");
			$("#windmillSix .windmillText").css("display", "block");
		}
	})

	// moment
	$("#riverrockOne").hover(function(){
		$(".riverrock").removeClass("default");
		$(this).addClass("default");
		$(".momentText").removeClass("default");
		$("#momentTextOne").addClass("default");
	})
	$("#riverrockTwo").hover(function(){
		$(".riverrock").removeClass("default");
		$(this).addClass("default");
		$(".momentText").removeClass("default");
		$("#momentTextTwo").addClass("default");
	})
	$("#riverrockThree").hover(function(){
		$(".riverrock").removeClass("default");
		$(this).addClass("default");
		$(".momentText").removeClass("default");
		$("#momentTextThree").addClass("default");
	})
	$("#riverrockFour").hover(function(){
		$(".riverrock").removeClass("default");
		$(this).addClass("default");
		$(".momentText").removeClass("default");
		$("#momentTextFour").addClass("default");
	})
	$("#riverrockFive").hover(function(){
		$(".riverrock").removeClass("default");
		$(this).addClass("default");
		$(".momentText").removeClass("default");
		$("#momentTextFive").addClass("default");
	})

	$("#boatOne").hover(function(){
		$(".boat").removeClass("default");
		$(this).addClass("default");
		$(".storyText").removeClass("default");
		$("#storyTextOne").addClass("default");
	})
	$("#boatTwo").hover(function(){
		$(".boat").removeClass("default");
		$(this).addClass("default");
		$(".storyText").removeClass("default");
		$("#storyTextTwo").addClass("default");
	})
	$("#boatThree").hover(function(){
		$(".boat").removeClass("default");
		$(this).addClass("default");
		$(".storyText").removeClass("default");
		$("#storyTextThree").addClass("default");
	})
	$("#boatFour").hover(function(){
		$(".boat").removeClass("default");
		$(this).addClass("default");
		$(".storyText").removeClass("default");
		$("#storyTextFour").addClass("default");
	})
	$("#boatFive").hover(function(){
		$(".boat").removeClass("default");
		$(this).addClass("default");
		$(".storyText").removeClass("default");
		$("#storyTextFive").addClass("default");
	})

	$("#memberPhotoOne, #memberPersonOne").hover(function(){
		$(".memberPhoto").removeClass("default");
		$("#memberPhotoOne").addClass("default");
		$(".memberText").removeClass("default");
		$("#memberTextOne").addClass("default");
		$(".memberPerson").removeClass("default");
		$("#memberPersonOne").addClass("default");
	}, function() {
		// $(".memberPhoto").removeClass("default");
		// $(".memberText").removeClass("default");
		// $(".memberPerson").removeClass("default");
	})

	$("#memberPhotoTwo, #memberPersonTwo").hover(function(){
		$(".memberPhoto").removeClass("default");
		$("#memberPhotoTwo").addClass("default");
		$(".memberText").removeClass("default");
		$("#memberTextTwo").addClass("default");
		$(".memberPerson").removeClass("default");
		$("#memberPersonTwo").addClass("default");
	}, function() {
		// $(".memberPhoto").removeClass("default");
		// $(".memberText").removeClass("default");
		// $(".memberPerson").removeClass("default");
	})

	$("#memberPhotoThree, #memberPersonThree").hover(function(){
		$(".memberPhoto").removeClass("default");
		$("#memberPhotoThree").addClass("default");
		$(".memberText").removeClass("default");
		$("#memberTextThree").addClass("default");
		$(".memberPerson").removeClass("default");
		$("#memberPersonThree").addClass("default");
	}, function() {
		// $(".memberPhoto").removeClass("default");
		// $(".memberText").removeClass("default");
		// $(".memberPerson").removeClass("default");
	})

	$("#memberPhotoFour, #memberPersonFour").hover(function(){
		$(".memberPhoto").removeClass("default");
		$("#memberPhotoFour").addClass("default");
		$(".memberText").removeClass("default");
		$("#memberTextFour").addClass("default");
		$(".memberPerson").removeClass("default");
		$("#memberPersonFour").addClass("default");
	}, function() {
		// $(".memberPhoto").removeClass("default");
		// $(".memberText").removeClass("default");
		// $(".memberPerson").removeClass("default");
	})

	$("#memberPhotoFive, #memberPersonFive").hover(function(){
		$(".memberPhoto").removeClass("default");
		$("#memberPhotoFive").addClass("default");
		$(".memberText").removeClass("default");
		$("#memberTextFive").addClass("default");
		$(".memberPerson").removeClass("default");
		$("#memberPersonFive").addClass("default");
	}, function() {
		// $(".memberPhoto").removeClass("default");
		// $(".memberText").removeClass("default");
		// $(".memberPerson").removeClass("default");
	})

	$("#memberPhotoSix, #memberPersonSix").hover(function(){
		$(".memberPhoto").removeClass("default");
		$("#memberPhotoSix").addClass("default");
		$(".memberText").removeClass("default");
		$("#memberTextSix").addClass("default");
		$(".memberPerson").removeClass("default");
		$("#memberPersonSix").addClass("default");
	}, function() {
		// $(".memberPhoto").removeClass("default");
		// $(".memberText").removeClass("default");
		// $(".memberPerson").removeClass("default");
	})

	$(".topicTree").hover(function(){
		$(".treeWhite").css("display", "block");
	}, function() {
		$(".treeWhite").css("display", "none");
	})

	$(".case").hover(function(){
		$(".secretWhite").css("display", "block");
	}, function() {
		$(".secretWhite").css("display", "none");
	})

});
