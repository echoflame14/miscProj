angular.module("app").controller("ctrl",function($scope,srvc){
	$scope.test = "working";
	$scope.leftHz = 100;
	$scope.rightHz = 105;
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
		start();
		$scope.calcDiff();
	};
	$scope.rightDown = function(){
		$scope.rightHz--;
		start();
		$scope.calcDiff();
	};
	$scope.leftUp = function(){
		$scope.leftHz++;
		start();
		$scope.calcDiff();
	};
	$scope.leftDown = function(){
		$scope.leftHz--;
		start();
		$scope.calcDiff();
	};
	$scope.sleepMode = function(){
		$scope.rightHz = 100;
		$scope.leftHz = 97;
		$scope.calcDiff();
	};
	$scope.relaxMode = function(){
		$scope.rightHz = 103;
		$scope.leftHz = 96;
		$scope.calcDiff();
	};
	$scope.focusMode = function(){
		$scope.rightHz = 110;
		$scope.leftHz = 92;
		$scope.calcDiff();
	};


	// web audio api
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
	      }

		$("#playBtn").click(function(){
			start();
		});

		$("#pauseBtn").click(function(){
			stop();
		});



});
