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
	var audio;
	var playBtn;
	var scrollBar;
	var volume;
	var playBtn = $('#playBtn');
	var pauseBtn = $('#pauseBtn');
	var volumeBtn = $('#volumeBtn');
	var sleep = $('#sleep');
	var relax = $('#relax');
	var focus = $('#focus')
