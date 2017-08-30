


function animation(a) {

	// alert(a.toString());
	$(".ani" + a.toString()).children("img").css("display", "none");
	$(".ani" + a.toString()).children(".sub1").css("display", "block");
	setTimeout(function(){
		$(".ani" + a.toString()).children("img").css("display", "none");
		$(".ani" + a.toString()).children(".sub2").css("display", "block");
	}, 200)
	setTimeout(function(){
		$(".ani" + a.toString()).children("img").css("display", "none");
		$(".ani" + a.toString()).children(".sub3").css("display", "block");
	}, 400)
	setTimeout(function(){
		$(".ani" + a.toString()).children("img").css("display", "none");
		$(".ani" + a.toString()).children(".sub4").css("display", "block");
	}, 600)
	setTimeout("animation(" + a + ")", 800);
}

function animationSlow(a) {

	// alert(a.toString());
	$(".ani" + a.toString()).children("img").css("display", "none");
	$(".ani" + a.toString()).children(".sub1").css("display", "block");
	setTimeout(function(){
		$(".ani" + a.toString()).children("img").css("display", "none");
		$(".ani" + a.toString()).children(".sub2").css("display", "block");
	}, 200)
	setTimeout(function(){
		$(".ani" + a.toString()).children("img").css("display", "none");
		$(".ani" + a.toString()).children(".sub3").css("display", "block");
	}, 400)
	setTimeout(function(){
		$(".ani" + a.toString()).children("img").css("display", "none");
		$(".ani" + a.toString()).children(".sub4").css("display", "block");
	}, 600)
	// $(".ani" + a.toString()).children("img").fadeOut();
	setTimeout(function(){
		$(".ani" + a.toString()).children("img").fadeOut();
	}, 800)
	setTimeout("animationSlow(" + a + ")", 2000);
}



// function say(b, i, j){
// 	$(".jokerSaying .saying").append(b[i]);
// 	// if (i < j) {
// 		i++;
// 		alert(i);
// 		setTimeout('say(' + b + ', ' + i + ', ' + j + ')', 300);
// 	// }
// 	// else {
// 		// alert("f");
// 	// }
// 	// alert(b);
// }


$(document).ready(function(){
	var open = false;

	animation(1);
	setTimeout("animation(2)", 300);
	setTimeout("animation(3)", 100); 
	animation(4);
	setTimeout("animation(5)", 300);
	animation(6);
	setTimeout("animation(7)", 100);
	animation(8);
	setTimeout("animation(9)", 500);
	setTimeout("animation(10)", 300);
	animation(11);
	setTimeout("animation(12)", 300);
	animation(13);
	animation(14);
	setTimeout("animation(15)", 500);
	setTimeout("animation(16)", 100);
	setTimeout("animation(17)", 300);
	animation(18);
	animation(19);
	animation(20);
	setTimeout("animation(21)", 200);
	setTimeout("animation(22)", 400);
	setTimeout("animation(23)", 600);
	animationSlow(24);
	animation(25);
	animation(101);
	setTimeout("animation(102)", 200);
	animation(103);
	animation(104);
	animation(105);
	animation(106);
	setTimeout("animation(107)", 200);
	animation(108);

	$(".hover").click(function(){
		if (!open) {
			$(this).find(".subHover").css("display", "block");
			$(this).find(".close").css("display", "block");
			// alert(open);
		};
		open = false;
	})
	$(".hover .close").click(function(){
		$(".hover .subHover").css("display", "none");
		$(".hover .close").css("display", "none");
		// alert(open);
		open = true;
	})

	$(".ani2").click(function(){
		$("#partnerWone").css("display", "block");
	})
	$(".partnerWindow .close").click(function(){
		$("#partnerWone").css("display", "none");
	})

	$(".ani5").click(function(){
		$("#partnerWtwo").css("display", "block");
	})
	$(".partnerWindow .close").click(function(){
		$("#partnerWtwo").css("display", "none");
	})

	$(".ani11").click(function(){
		$("#partnerWthree").css("display", "block");
	})
	$(".partnerWindow .close").click(function(){
		$("#partnerWthree").css("display", "none");
	})

	$(".ani14").click(function(){
		$("#partnerWfour").css("display", "block");
	})
	$(".partnerWindow .close").click(function(){
		$("#partnerWfour").css("display", "none");
	})

	$(".ani16").click(function(){
		$("#partnerWfive").css("display", "block");
	})
	$(".partnerWindow .close").click(function(){
		$("#partnerWfive").css("display", "none");
	})

	$(".ani102").click(function(){
		$("#partnerWsix").css("display", "block");
	})
	$(".partnerWindow .close").click(function(){
		$("#partnerWsix").css("display", "none");
	})

	$(".ani104").click(function(){
		$("#partnerWseven").css("display", "block");
	})
	$(".partnerWindow .close").click(function(){
		$("#partnerWseven").css("display", "none");
	})

	$(".ani106").click(function(){
		$("#partnerWeight").css("display", "block");
	})
	$(".partnerWindow .close").click(function(){
		$("#partnerWeight").css("display", "none");
	})

	$(".ani108").click(function(){
		$("#partnerWnine").css("display", "block");
	})
	$(".partnerWindow .close").click(function(){
		$("#partnerWnine").css("display", "none");
	})



});
