

function secMinus(a) {
	var standard = ["2016", "1", "1", "0", "0"];
	var month = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];


	var temp = (a[0] - standard[0]) * 365 * 24 * 60 * 60;	// year
	for (var i = 0; i < a[1] - standard[1] ; i++) {
		temp += month[i] * 24 * 60 * 60;	// month
	};
    if (a[0] == "2017" && a[1] >= "3") {
        temp += 24 * 60 * 60; // 2/29
    };
	temp += (a[2] - standard[2]) * 24 * 60 * 60;	// day
	temp += (a[3] - standard[3]) * 60 * 60;	// hour
	temp += (a[4] - standard[4]) * 60;	// minute
	//alert(temp);

	var dd = new Date();
	var temp2 = (dd.getFullYear() - standard[0]) * 365 * 24 * 60 * 60;
	for (var i = 0; i < (dd.getMonth()+1) - standard[1] ; i++) {
		temp2 += month[i] * 24 * 60 * 60;	// month
	};
    if (dd[0] == "2017" && dd[1] >= "3") {
        temp += 24 * 60 * 60; // 2/29
    };
	temp2 += (dd.getDate() - standard[2]) * 24 * 60 * 60;	// day
	temp2 += (dd.getHours() - standard[3]) * 60 * 60;	// hour
	temp2 += (dd.getMinutes() - standard[4]) * 60;	// minute
	temp2 += dd.getSeconds();
	//alert(temp2);

	//alert(temp-temp2);
	return temp - temp2;

}

function showtime(ts) {
    var timerun = false;
    var Temp; // 字串
    var tempts = ts - 1;
    var startTime = (new Date()).getTime(); // 目前時間
    var yearLeft = 0; // year
    var dateLeft = 0; // 剩餘天數
    var hourLeft = 0; // 剩餘小時
    var minuteLeft = 0; // 剩餘分鐘
    var secondLeft = 0; // 剩餘秒鐘

    var dateLeftStr = '';// 天數字串
    var hourLeftStr = '';// 小時字串
    var minuteLeftStr = '';// 分鐘字串
    var secondLeftStr = '';// 秒鐘字串
    if (ts < 0)// 剩餘秒數為負，全部設為零顯示
    {
        ts = 0;
        dateLeft = 0;
        hourLeft = 0;
        minuteLeft = 0;
        secondLeft = 0;
    }
    else {
        yearLeft = parseInt(ts / (86400 * 365));
        ts = ts - yearLeft * 86400 * 365;
        dateLeft = parseInt(ts / 86400); // 折合天數
        ts = ts - dateLeft * 86400; // 剩餘秒數
        hourLeft = parseInt(ts / 3600); // 折合小時
        ts = ts - hourLeft * 3600; // 剩餘秒數
        minuteLeft = parseInt(ts / 60); // 折合分鐘
        secondLeft = ts - minuteLeft * 60; // 剩餘秒數

        dateLeftStr = dateLeft;
        hourLeftStr = hourLeft;
        minuteLeftStr = minuteLeft;
        secondLeftStr = secondLeft;

        timerun = true;
    }

    // alert(yearLeft + "+" + dateLeft);
    $(".countDown #year").text(yearLeft);
    $(".countDown #day").text(dateLeft);
    $(".countDown #hour").text(hourLeft);
    $(".countDown #min").text(minuteLeft);
    $(".countDown #sec").text(secondLeft + ".");
     // + "." + dd.getMilliseconds());

    if (timerun) {	// 繼續倒數
        setTimeout('showtime( ' + tempts + ') ', 1000);
    }
}

window.onload = function(){
	var end = ["2027", "8", "17", "17", "0"];
	//alert(secMinus(activityOne));
	//alert(activityOne[1]);

    showtime(secMinus(end));
}


$(document).on('turbolinks:load', function(){

	$(window).scroll(function () {
		var adjust = ($(window).width() / 1280);
		if ($(window).scrollTop() > 3500 * adjust) {
			$(".navZero, .navOne, .navTwo, .navThree").css("color", "#e0e0e0");
			$(".navThree").css("color", "#6cffbd");
		}
		else if ($(window).scrollTop() > 2800 * adjust) {
			$(".navZero, .navOne, .navTwo, .navThree").css("color", "#e0e0e0");
			$(".navTwo").css("color", "#6cffbd");
		}
		else if ($(window).scrollTop() > 2200 * adjust) {
			$(".navZero, .navOne, .navTwo, .navThree").css("color", "#e0e0e0");
			$(".navOne").css("color", "#6cffbd");
		}
		else if ($(window).scrollTop() > 1100 * adjust) {
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


	// msec
	setInterval(function(){
		var dd = new Date();
		var ms = 999 - dd.getMilliseconds();
		$(".countDown #msec").text(Math.ceil((ms / 10)));
		// alert("f");
	} ,20);


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
