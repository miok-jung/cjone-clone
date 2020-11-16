/* main.js */

var $devWidth;
var $limitsize=768;



$(document).ready(function(){

	$(window).resize(function(){
		$devWidth=$("body").width();
		console.log($devWidth);
	});
	
	// header
	/* 탑메뉴appear_img */
	var top_appear="";
	
	for(var i=0; i<=56; i++) {
		if(i<=9) {i="0"+i;}
		top_appear += "<img src='images/appear/appear_000"+ i +".png' alt='"+ i +"' />"
	}
	$("div.appear_first > a").html(top_appear);
	
	/* 탑메뉴loop_img */
	var top_loop="";

	for(var i=0; i<=81; i++) {
		if(i<=9) {i="0" + i;}
		top_loop += "<img src='images/loop/loop_000"+ i +".png' alt='"+ i +"'>"
	}
	$("div.loop > a").html(top_loop);

	//탑메뉴_고객센터
	$(".topMenu > dd:nth-of-type(5) > a").click(function(){
		$(this).next().toggle();
		
		var c_name = $(this).attr("class");
		
		if( c_name == "t_active" ){
			$(this).css({"border":"0px"});
			$(this).removeClass("t_active");
		}else{
			$(this).css({"border":"1px solid #999", "border-bottom":"none","border-radius":"5px 5px 0 0"});
			$(this).addClass("t_active");
		}
		
		
	});

	//퀵메뉴img_html단축
	var quick1="";
	
	for(var i=0; i<20; i++) {
		if(i<10) {i="0" + i;}
		quick1 +="<img src='images/service/quick01_000"+ i +".png' alt='1' />"	
	}
	$(".content1_quick > section:first-child > a").html(quick1);
	
	var quick2="";
	
	for	(var i=0; i<20; i++) {
		if(i<10) {i="0" + i;}
		quick2 += "<img src='images/service/quick02_000"+ i +".png' alt='1' />"
	}
	$(".content1_quick > section:nth-child(2) > a").html(quick2);
	
	
	var quick3="";
	
	for(var i=0; i<=13; i++) {
		if(i<10) {i="0" + i;}
		quick3 += "<img src='images/service/quick03_000"+ i +".png' alt='1' />"
	}
	$(".content1_quick > section:nth-child(3) > a").html(quick3);

	var quick4="";
	
	for(var i=0; i<20; i++) {
		if(i<10) {i="0" + i;}
		quick4 += "<img src='images/service/quick04_000"+ i +".png' alt='0' />"
	}
	$(".content1_quick > section:last-child > a").html(quick4);
	
	//주메뉴
	//content1
	$("nav > ul > li a").bind("mouseover focus", function(){

		$("nav > ul > li > ul").show();
		$(".header_wrap").css({"height":"550px"});
	});

	$("nav > ul").bind("mouseleave blur", function(){

		$("nav > ul > li > ul").hide();
		$(".header_wrap").css({"height":"120px"});
	});


	//주메뉴_검색하기

	$("div.srch_img > a.searchBtn").click(function(e){
		e.preventDefault();
		
		var sC_name = $(this).attr("class");
				
		if( sC_name == "searchBtn on"){
			$(this).removeClass("on");
			$(".header_wrap > form").slideUp("fast");
            $(this).attr("title", "검색입력서식 열기");
            $(this).children().css({"display":"none"});
		}else{
			$(this).addClass("on");
			$(".header_wrap > form").slideDown("fast");
            $(this).attr("title","검색입력서식 닫기");
            $(this).children().css({"display":"block"});
		}
		
	});


	//section-배너
  var $bnnNum=0;
  /*  $(".next").click(function(){
        
        if($bnnNum >= 9)  return false;
        
        $bnnNum++;
        $bnn_w=$("body > section ").width();
        $("div.event_frame").animate({"left":-$bnn_w*$bnnNum}, 300, function(){
            
            $("ul.control > li").removeClass("black");
            $("ul.control > li").eq($bnnNum).addClass("black");
        });
    });

    $(".prev").click(function(){

        if($bnnNum <= 0) return false;

        $bnnNum--;
        $bnn_w=$("body > section ").width();
        $("div.event_frame").animate({"left":-$bnn_w*$bnnNum}, 300, function(){
            
            $("ul.control > li").removeClass("black");
            $("ul.control > li").eq($bnnNum).addClass("black");
        });
    });
*/
    //자동배너
   autoBan = null;
    
    function autoB(){
        autoBan = setInterval(function(){
            if($bnnNum >= 9) $bnnNum = -1;
        
            $bnnNum++;
            $bnn_w=$("body > section ").width();
            $("div.event_frame").animate({"left":-$bnn_w*$bnnNum}, 300, function(){

                $("ul.control > li").removeClass("black");
                $("ul.control > li").eq($bnnNum).addClass("black");
            });

        }, 3000);//3초가 지나면 다음자동배너 실행
    }
    autoB();
    
    var playing =1;
    $(".play").click(function(){
        
        if(playing){
            clearInterval(autoBan);
            playing =0;
            $(this).removeClass("play");
            $(this).addClass("stop");
        }else{
            autoB();
            playing =1;
            $(this).removeClass("stop");
            $(this).addClass("play");
        }
    });
	
	
	// content2
	// content3
    $(".content3 > section > h3").click(function(e){
        e.preventDefault();
		
		
		
		$(".content3 > section > h3 > a").removeClass("on");
        $(this).children("a").addClass("on");
		
        $(".content3 > section > div").css({"display":"none"});
        $(this).next().css({"display":"block"});        
    });
	   
	// footer
	$(".foot_inner > ul:last-of-type > li:last-child > a").click(function(){
		$(this).next().toggle();
	});
	
	//모바일
		//열기
	$(".m_menu").click(function(){
		$(".Mobile_wrap").css({"display":"block"});
	});
		//닫기
	$(".menu_close").click(function(){
		$(".Mobile_wrap").css({"display":"none"});
	});

		//하위메뉴열기-고객센터
	$("div.Mobile_wrap > div > ul > li:nth-child(5) > a").click(function(){
		$("div.Mobile_wrap > div > ul > li:nth-child(5) > ul").toggleClass("on_M");

	});
	
		//하위메뉴열기-포인트카드
	$("div.Mobile_wrap > div > ul > li:nth-child(8) > a").click(function(){
		$("div.Mobile_wrap > div > ul > li:nth-child(8) > ul").toggleClass("on_M");

	});
		//하위메뉴열기-이벤트/쿠폰
	$("div.Mobile_wrap > div > ul > li:nth-child(9) > a").click(function(){
		$("div.Mobile_wrap > div > ul > li:nth-child(9) > ul").toggleClass("on_M");

	});
		//하위메뉴열기-기프트카드
	$("div.Mobile_wrap > div > ul > li:nth-child(11) > a").click(function(){
		$("div.Mobile_wrap > div > ul > li:nth-child(11) > ul").toggleClass("on_M");

	});
		//하위메뉴열기-나의 ONE
	$("div.Mobile_wrap > div > ul > li:nth-child(12) > a").click(function(){
		$("div.Mobile_wrap > div > ul > li:nth-child(12) > ul").toggleClass("on_M");

	});

});