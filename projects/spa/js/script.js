$("#freqBtn").click(function(){
	$("#up-down-container").slideDown(" ",function(){
	});
	$("#presets").slideUp("fast");
});
$(".presets").click(function(){
	$("#up-down-container").slideUp("fast",function(){
	});
	$("#presets").slideDown("fast");
});
//audio
$("#playBtn").click(function(){
	$('.box').removeClass("hidden");
	console.log("removing Class");
});


//animation of menu
$("#hamburger").click(function(){
	$("#menu").animate({'margin-right':'62vw'},200);
	$("#menuClose").animate({'margin-right':'68vw'},600);
	$("#hamburger").addClass("hidden");
});
$("#menuClose").click(function(){
	console.log("working");
	$("#menu").animate({'margin-right':'-62vw'},350);
	$("#menuClose").animate({'margin-right':'-68vw'},350);
	$("#hamburger").removeClass("hidden");
});
