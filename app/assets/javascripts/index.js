

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

function walkMotion(i, n) {
	if(i == 1) {
	    setTimeout(function(){
			$(".walk .one").css("display", "none");
			$(".walk .two").css("display", "block");
			$(".walk .three").css("display", "none");
			$(".walk .four").css("display", "none");
	    }, n);
	}
	else {
	    setTimeout(function(){
			$(".walk .one").css("display", "block");
			$(".walk .two").css("display", "none");
			$(".walk .three").css("display", "none");
			$(".walk .four").css("display", "none");
	    }, n);
	}
}

// 陳劭恩廢物
var script_name= document.location.pathname.match(/[^\/]*$/)[0];
if (script_name == "") {

	$(document).ready(function(){
		var adjust = ($(window).width() / 1280);
		var height = 9226 * adjust; // total height (px)
		var scroll_ms = 3000; // 3000 scroll pass (ms)
		var stop_ms = 2400; // 2400
		var after = false;
		var goldCount = 0;


		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	    $body.animate({
	        scrollTop: 0
	    }, 1);

	    $(".bar .proposal .pulse").css("display", "block");
	    $(".bar .proposal .pulse").addClass("animated");

		// auto scroll in scroll_ms (var)
		setTimeout(function(){
		    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		    $body.animate({
		        scrollTop: height - $(window).height()
		    }, scroll_ms, 'easeInOutQuad');
		}, stop_ms);

		$(".brickOne").click(function(){
			$(".walk").css("top", 510 * adjust + "px");
			$(".walk").css("left", 545 * adjust + "px");
			$(".walk").animate({top: 415 * adjust + "px"}, 150);
			$(".sentence").fadeOut();
			$(".LandingPage .indexProposal").fadeOut();
			setTimeout(function(){
				$(".walk").animate({top: 515 * adjust + "px"}, 150);
			}, 200);
			setTimeout(function(){
				$(".brickOne").animate({top: 28 + "vw"}, 100);
				$(".gold").animate({top: 24 + "vw"}, 90);
				goldCount++;
				$(".goldArea .number").text(goldCount);
			}, 150);
			setTimeout(function(){
				$(".brickOne").animate({top: 29 + "vw"}, 100);
				$(".gold").animate({top: 29.5 + "vw"}, 100);
			}, 300);

			$(".goldArea").css("display", "block");
		})
		$(".brickTwo").click(function(){
			$(".walk").css("top", 510 * adjust + "px");
			$(".walk").css("left", 620 * adjust + "px");
			$(".walk").animate({top: 415 * adjust + "px"}, 150);
			$(".sentence").css("display", "none");
			$(".LandingPage .indexProposal").fadeOut();
			setTimeout(function(){
				$(".sentence").css("display", "block");
			}, 100);
			setTimeout(function(){
				$(".walk").animate({top: 515 * adjust + "px"}, 150);
			}, 200);
			setTimeout(function(){
				$(".brickTwo").animate({top: 28 + "vw"}, 100);
			}, 150);
			setTimeout(function(){
				$(".brickTwo").animate({top: 29 + "vw"}, 100);
			}, 300);
		})
		$(".brickThree").click(function(){
			$(".walk").css("top", 510 * adjust + "px");
			$(".walk").css("left", 695 * adjust + "px");
			$(".walk").animate({top: 415 * adjust + "px"}, 150);
			// $(".LandingPage .indexProposal").css("display", "none");
			$(".sentence").fadeOut();
			setTimeout(function(){
				$(".LandingPage .indexProposal").css("display", "block");
			}, 100);
			setTimeout(function(){
				$(".walk").animate({top: 515 * adjust + "px"}, 150);
			}, 200);
			setTimeout(function(){
				$(".brickThree").animate({top: 28 + "vw"}, 100);
			}, 150);
			setTimeout(function(){
				$(".brickThree").animate({top: 29 + "vw"}, 100);
			}, 300);
		})


	    // people come in animation
	    setTimeout(function(){
	    	$(".walk").css("display", "block");
	    	$(".walk").css("top", 8920 * adjust +"px");
	    	$(".walk").css("left", 250 * adjust +"px");
	    	$(".walk").addClass("walkAnimation");
			walkMotion(2, 50);
			walkMotion(2, 300);
			walkMotion(1, 600);
			walkMotion(2, 800);
			after = true;
			// $(".bar .proposal .pulse").fadeOut();
			$(".bar .proposal .pulse").removeClass("animated");

			$(".black").fadeOut();
			// $(".bgsound").css("display", "block");

			var talkTime = 1300;

			setTimeout(function(){
				$(".talk").css("display", "block");
			}, talkTime)

			// $(".obj14").fadeIn();
			setTimeout(function(){
				$(".obj14").css("display", "block");
			}, talkTime + 1500)


			// small man talk
			setTimeout(function(){
				$(".talk").css("display", "none");
				var say = "登登登等～Yo！<br>歡迎來到行動者大道";
				var count = 0;

				function fir(){
				    if(count <= say.length){
				        $(".saying").html(say.substring(0, count));
				        count++;
				    } else{
				        window.clearInterval(say);
				    }
				}

				var typewriter = window.setInterval(fir, 50);
			}, talkTime + 2000);

			setTimeout(function(){
				say = "就~順著感覺往上探索啦，<br>旅程的開始不能太平凡呀。";
				count = 0;

				function sec(){
				    if(count <= say.length){
				        $(".saying").html(say.substring(0, count));
				        count++;
				    } else{
				        window.clearInterval(say);
				    }
				}

				var typewriter = window.setInterval(sec, 50);
			}, talkTime + 4200);

			setTimeout(function(){
				say = "手癢滑鼠點一下，<br>迴響ㄟ麻吉隆底家！";
				count = 0;

				function thi(){
				    if(count <= say.length){
				        $(".saying").html(say.substring(0, count));
				        count++;
				    } else{
				        window.clearInterval(say);
				    }
				}

				var typewriter = window.setInterval(thi, 150);
			}, talkTime + 6400);

			setTimeout(function(){
				say = "怎麼樣？你也有Freestyle麼！？";
				count = 0;

				function fou(){
				    if(count <= say.length){
				        $(".saying").html(say.substring(0, count));
				        count++;
				    } else{
				        window.clearInterval(say);
				    }
				}

				var typewriter = window.setInterval(fou, 50);
			}, talkTime + 8600);


			// 上面是在滑完之後執行的動畫，諸如小人走出來，小丑對話
	    }, scroll_ms + stop_ms);


		$(window).scroll(function () {

			// walk path animation
			var scrollBtm = $(document).height() - $(window).height() - $(window).scrollTop() - 140 * adjust;
			// 140 = footer hieght
			// num == scroll interval static
			// num_top, num_left == start position
			var add = 650; // adjust
			var one = 1360;
			var one_top = 8270 + add;
			var one_left = 250;
			var two = 475;
			var two_top = 6750 + add;
			var two_left = 960;
			var three = 1200;
			var three_top = 6520 + add;
			var three_left = 320;
			var four = 400;
			var four_top = 5130 + add;
			var four_left = 910;
			var five = 1200;
			var five_top = 4980 + add;
			var five_left = 280;
			var six = 390;
			var six_top = 3470 + add;
			var six_left = 980;
			var seven = 1100;
			var seven_top = 3470 + add;
			var seven_left = 320;
			var eight = 350;
			var eight_top = 2050 + add;
			var eight_left = 970;
			var nine = 400;
			var nine_top = 1900 + add;
			var nine_left = 330;
			var ten = 105;
			var ten_top = 1100 + add;
			var ten_left = 632;
			var end_top = 1026 + add;
			var end_left = ten_left;

			if (after) {

				if (scrollBtm > 500) {
					// alert("fuck");
					$(".UI_link2018").css("animation-name", "UI_slide_out")
				}




				if (scrollBtm > ( one + two + three + four + five + six + seven + eight + nine ) * adjust) {
					// $(".walk").css("top", ten_top * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven + eight + nine ) * adjust ) * ( (ten_top - end_top) / ten ) + "px");
					// $(".walk").css("left", ten_left * adjust - ( scrollBtm - ( one + two + three + four + five + six + seven + eight + nine ) * adjust ) * ( (ten_left - end_left) / ten ) + "px");
					// rightWalk();
					$(".walk").css("left", 630 * adjust + "px");
					$(".walk").animate({top: 510 * adjust +"px"}, 3000, "linear");
					for (var i = 1; i <= 20; i++) {
						walkMotion(i % 2, i * 150);
					};
					after = false;
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
			};
		});

		$(".background").click(function(){
			// alert($(".bar").css("top"));
			// alert($(document).height() - $(window).height() - $(window).scrollTop());
			// alert((( 7802 - $(window).scrollTop() ) / 23 ) + 23 + "vw");
			// alert($(window).width());
		});
	});

};
