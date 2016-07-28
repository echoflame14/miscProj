angular.module("app").directive("menu", function(){
	function linkFunc(scope, elem, attrs){
		var bees = new Audio();
		bees.src = '../notTheBees.mp3';
		bees.controls = true;
		bees.loop = true;
		var whiteNoise = new Audio();
		whiteNoise.src = "../white.mp3";
		whiteNoise.controls = true;
		whiteNoise.loop = true;
		var pinkNoise = new Audio();
		pinkNoise.src = "../pink.mp3";
		pinkNoise.loop = true;
		pinkNoise.controls = true;
		var rainAudio = new Audio();
		rainAudio.src = "rain-03.mp3";
		rainAudio.loop = true;
		rainAudio.controls = true;
		$("#options").click(function(){
			$(".optionDisp").slideDown(200);
			$("#contactCont").slideUp(20);
			$("#infoCont").slideUp(20);
		});
		$("#contact").click(function(){
			$("#contactCont").slideDown(200);
			$(".optionDisp").slideUp(20);
			$("#infoCont").slideUp(20);
		});
		$("#info").click(function(){
			$("#infoCont").slideDown(200);
			$(".optionDisp").slideUp(20);
			$("#contactCont").slideUp(20);
		});
		$("#mainNav").mouseleave(function(){
			$(".optionDisp").slideUp('fast');
			$("#contactCont").slideUp('fast');
			$("#infoCont").slideUp('fast');
		});
		$("#rainBtn").click(function(){
			$(this).addClass('active');
			$("#whiteBtn").removeClass('active');
			$("#pinkBtn").removeClass('active');
			$("#white").slideUp(10);
			$("#pink").slideUp(10);
			$("#rain").slideDown(200);
		});
		$("#whiteBtn").click(function(){
			$(this).addClass('active');
			$("#rainBtn").removeClass('active');
			$("#pinkBtn").removeClass('active');
			$("#rain").slideUp(10);
			$("#pink").slideUp(10);
			$("#white").slideDown(300);
		});
		$("#pinkBtn").click(function(){
			$(this).addClass('active');
			$("#rainBtn").removeClass('active');
			$("#whiteBtn").removeClass('active');
			$("#rain").slideUp(10);
			$("#white").slideUp(10);
			$("#pink").slideDown(300);
		});
		$("#nCage").click(function(){
			$('body').toggleClass('cageify');
			if(bees.paused){
				bees.play();
				rainAudio.play();
				whiteNoise.play();
				pinkNoise.play();
			}
			else{
				bees.pause();
				rainAudio.pause();
				whiteNoise.pause();
				pinkNoise.pause();
			}
		});

	}
	return{
		templateUrl: "../views/menu.html",
		link: linkFunc
	};
});
