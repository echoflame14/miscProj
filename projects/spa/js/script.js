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
	$("#menuClose").animate({'margin-right':'69vw'},450);
	$("#hamburger").addClass("hidden");
});
$("#menuClose").click(function(){
	console.log("working");
	$("#menuClose").animate({'margin-right':'-68vw'},1);
	$("#menu").animate({'margin-right':'-62vw'},400);
	$("#hamburger").removeClass("hidden");
});
