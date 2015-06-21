//loadding dashboard...
$(window).on("load",function(){

	// naviagtion
	$("#top-navigation .navigation li ").on("mouseenter");

	// ==============>>>>
	
	// $("#wrapper-main-content").hide();
	setTimeout(function(){
		// $("#wrapper-main-intro").fadeOut(2000);
		// $(".wrapper-main-content").show();
		$("#wrapper-main-intro").fadeOut(1000);
	},3000);
});
$(document).ready(function(){
	// dropdown profile
	$(".arrow-profile,.avatar,.name").on("click",function(){
		
		if($(".profile-dropdown").is(":visible")){
			$(".profile-dropdown").stop().slideUp();
			$(".profile .arrow-bottom ").css({
				"background":"url('images/arrow-bottom.png')  no-repeat scroll center center transparent"
			});
		}
		else{
			$(".profile-dropdown").slideDown();
			$(".profile .arrow-bottom ").css({
				"background":"url('images/arrow-top.png')  no-repeat scroll center center transparent"
			});
		}

	});


	// message
	$(".form-chat textarea").css({
		"padding": "10px 62px 0px 10px"
	});

	// $(".form-chat textarea").on("blur",function(){
	// 	$(".form-chat textarea").css({
	// 	"padding":"10px 62px 0px 10px"
	// 	});
	// });

	$(".name-message, #footer .message > img.hasmessenger").on("click",function(){
		$(this).siblings(".box-message").slideToggle(200);
		jQuery(this).parent('.hasmess.message').removeClass('hasmess');
	});
	$(".notification-message").on("click",function(){
		$(this).siblings(".box-message").slideToggle(200);
		jQuery(this).parent('.hasmess.message').removeClass('hasmess');
	});
	$(".close").on("click",function(){
		$(this).parent().hide();
	});

	//sidebar
	 var sidebar_width = $(".sidebar").width();
	 // alert(sidebar_width);
	 var _window = jQuery(window).width();
	if(_window >1440){
		$(".main-content").css({
	 		left:sidebar_width+"px"
		});
		$(".icon-toggle-show").hide();
	}
	$(".icon-toggle").on("click",function(){
		
		$(".sidebar").animate({
			margin:"0 0 0 -"+sidebar_width+"px"
		},{
			duration:400,
			complete:function(){
				$(".icon-toggle-show").show();
			}
		});
		 $(".main-content").animate({
	 		left:"0px"
		 });
		// $("#footer").animate({
		// 	left:"0px"
		// });
	});
	$(".icon-toggle-show").on("click",function(){
		$(".main-content").animate({
			left:sidebar_width+"px"
		});
		$(".sidebar").animate({
			margin:"0"
		});
		// $("#footer").animate({
		// 	left:sidebar_width+"px"
		// });
		$(this).hide();
	});


	// jQuery('html').click(function(even){
	// 	if(jQuery(even.target).closest('.sidebar').length  == 0 && jQuery(even.target).closest('.icon-toggle-show').length  == 0 && jQuery(even.target).closest('.ui-datepicker-next').length == 0 && jQuery(even.target).closest('.ui-datepicker-prev').length == 0){
	// 		$(".sidebar").animate({
	// 			margin:"0 0 0 -"+sidebar_width+"px"
	// 		},{
	// 			duration:400,
	// 			complete:function(){
	// 				$(".icon-toggle-show").show();
	// 			}
	// 		});
	// 		 $(".main-content").animate({
	// 	 		left:"0px"
	// 		 });
	// 		 // $("#footer").animate({
	// 	 	// 	left:"0px"
	// 		 // });
	// 	}
	// 	if(jQuery(even.target).closest('.wrap-message').length  == 0){
	// 		$(".box-message").slideUp();
	// 	}
	// });


	jQuery('#toggle-navigation').click(function(){
		jQuery('#top-navigation .navigation').slideToggle();
	});
	jQuery('#footer .message.hasmess').each(function(){
		jQuery(this).addClass('warning');
	});
	check()
});

jQuery(window).resize(function(){
	check();
});


function check(){
	if(jQuery(window).height() <= jQuery('#wrapper').height() ){
		jQuery('#wrapper').removeClass('uper').addClass('lower');
	}
	else{
		jQuery('#wrapper').removeClass('lower').addClass('uper');
	}
}
