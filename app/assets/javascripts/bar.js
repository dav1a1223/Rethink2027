

$(document).ready(function(){

	// burger
	$(".burger, .walk").click(function(){
		$(".menu").fadeIn()
	});

	$(".final").click(function(){
		$(".menu").fadeOut();
	});

	$(".bar .proposal").hover(function(){
		$(".bar .proposal .pulse").css("display", "block");
	}, function(){
		$(".bar .proposal .pulse").fadeOut();
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



});