angular.module("app").controller("ctrl",function($scope,srvc){
	$scope.test = "test"
	$scope.rightHz = 110;
	$scope.leftHz = 92;

	$scope.repArr = srvc.repArr;
	$scope.jive = srvc.jive;


	$scope.currentHz = $scope.rightHz - $scope.leftHz;

	var currHzClass = document.getElementsByClassName('freq');

	$scope.calcDiff = function(){
		console.log("hey calcDiff just ran");
		if($scope.rightHz > $scope.leftHz){
			$scope.currentHz = $scope.rightHz - $scope.leftHz;
		}
		else{
			$scope.currentHz = $scope.leftHz - $scope.rightHz;
		}
		if($scope.currentHz <= 5){
			$('.freq').toggleClass("blue");
			$('.freq').removeClass("orange");
			$('.freq').removeClass("green");
		}
		else if($scope.currentHz <= 9){
			$('.freq').addClass("orange");
			$('.freq').removeClass("blue");
			$('.freq').removeClass("green");
		}
		else if($scope.currentHz > 9){
			$('.freq').addClass("green");
			$('.freq').removeClass("orange");
			$('.freq').removeClass("blue");

		}
	};
	$scope.rightUp = function(){
		$scope.rightHz++;
		if(on === true){
			start();
		}
		$scope.calcDiff();
	};
	$scope.rightDown = function(){
		$scope.rightHz--;
		if(on === true){
			start();
		}
		$scope.calcDiff();
	};
	$scope.leftUp = function(){
		$scope.leftHz++;
		if(on === true){
			start();
		}
		$scope.calcDiff();
	};
	$scope.leftDown = function(){
		$scope.leftHz--;
		if(on === true){
			start();
		}
		$scope.calcDiff();
	};
	$scope.sleepMode = function(){
		$scope.rightHz = 100;
		$scope.leftHz = 97;
		$scope.calcDiff();
		if(on === true){
			start();
		}
	};
	$scope.relaxMode = function(){
		$scope.rightHz = 150;
		$scope.leftHz = 143;
		$scope.calcDiff();
		if(on === true){
			start();
		}
	};
	$scope.focusMode = function(){
		$scope.rightHz = 250;
		$scope.leftHz = 200;
		$scope.calcDiff();
		if(on === true){
			start();
		}
	};


	// web audio api
	var on = false;// to be referencted later, to check wether the tone is playing
	var contextClass = (window.AudioContext ||
	        window.webkitAudioContext ||
	        window.mozAudioContext ||
	        window.oAudioContext ||
	        window.msAudioContext);

	if (contextClass) {//if the web audio api is true
		var context = new contextClass();
	}

	var turnOn = function(fre1,fre2){
		console.log("tone is running");
		merger = context.createChannelMerger(2);// joining the audio channels
		console.log(context);

		leftEar = context.createOscillator();
		leftEar.type = 0;
		leftEar.frequency.value = fre1;

		gainNode = context.createGain ? context.createGain() : context.createGainNode(); //not sure what this does yet
		leftEar.connect(gainNode,0,0); //not sure what this does yet
		// gainNode.connect(context.destination,0,0);  //not sure what this does yet
		gainNode.gain.value = .1;  //not sure what this does yet
		leftEar.start ? leftEar.start(0) : leftEar.noteOn(0)  //not sure what this does yet

		gainNode.connect(merger,0,1);  //assigning the channel to the left ear


		rightEar = context.createOscillator(); // making the second channel
		rightEar.type = 0;
		rightEar.frequency.value = fre2;
		gainNode = context.createGain ? context.createGain() : context.createGainNode();
		rightEar.connect(gainNode);
		// gainNode.connect(context.destination,0,1);
		gainNode.connect(merger,0,0);


		gainNode.gain.value = .1;
		rightEar.start ? rightEar.start(0) : rightEar.noteOn(0)

		merger.connect(context.destination);
		on = true;
		console.log(on);
	}

	// start stop ctrls

	      function start() {
	        if (typeof leftEar != 'undefined') leftEar.disconnect();
	        if (typeof rightEar != 'undefined') rightEar.disconnect();
	        turnOn($scope.rightHz,$scope.leftHz);
	      }


	      function stop() {
	        leftEar.disconnect();
	        rightEar.disconnect();
			  on = false;
			  console.log(on);
	      }

		$("#playBtn").click(function(){
			// start();
			if(on === false){
				console.log("on is false");
				start();
				// animate();
			}
			if(on === true){
				console.log("on is true");

			}
		});

		$("#pauseBtn").click(function(){
			stop();
			if(on === true){
				console.log("on is true already");
			}
		});

		$('#freq1').blur(function(){
			$scope.calcDiff();
			// start();
			if(on === true){
				start();
			}
		});
		$('#freq2').blur(function(){
			$scope.calcDiff();
			if(on === true){
				start();

			}
		});

		// animation controller
		// function animate(){
		// 	console.log("removing class");
		// 	document.getElementsByClassName('box').style.display = "inline";
		// }
		// function stopAnimate(){
		// 	$(".box").addClass('hidden');
		// }
		$scope.optHide = true;
		$scope.contHide = true;
		$scope.infoHide = true;
		$scope.rainHide = true;

});
