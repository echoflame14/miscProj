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
	playBtn.click(function(){
		console.log("play");
		console.log(location.hash);
		findLoc();
		audio.play();
	});
	pauseBtn.click(function(){
		console.log("pause");
		audio.pause();
	});
	volumeBtn.click(function(){
		console.log("play");
	});

	const relaxTrack = "../96-103-7.mp3";
	const sleepTrack = "../97-100-3.mp3";
	const focusTrack = "../110-92-18.mp3";
	function findLoc(){
		if(location.hash === "#/relax"){
			audio.src = relaxTrack;
		}
		if(location.hash === "#/sleep"){
			audio.src = sleepTrack;
		}
		if(location.hash === "#/focus"){
			audio.src = focusTrack;
		}
	}
	// function audioSource(){
	// 	console.log("looking at the loc for the hash");
	// 	if(location.hash === "#/sleep"){
	// 		audio.pause();
	// 		return "../97-100-3.mp3";
	// 	}
	// 	if(location.hash === "#/relax"){
	// 		audio.pause();
	// 		return "../96-103-7.mp3";
	// 	}
	// }
$(document).ready(function(){
	function initAudioPlayer(){
		audio = new Audio();
		console.log("initAudioPlayer");
		audio.loop = "true";
	}
	initAudioPlayer();
});
