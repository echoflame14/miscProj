angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	
});


angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }
console.log("im");

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }
console.log("im");

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }
console.log("im");

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }
console.log("im");

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }
console.log("im");

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }
console.log("im");

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code

		function start(){
			console.log("starting");
		}

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code

		function start(){
			console.log("starting");
		}

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code

		function start(){
			console.log("starting");
		}
		function stop(){
			console.log("stoping");
		}

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code

		function start(){
			console.log("starting");
		}
		function stop(){
			console.log("stoping");
		}

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code

		function start(){
			console.log("starting");
		}
		function stopIT(){
			console.log("stoping");
		}

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code

		function start(){
			console.log("starting");
		}
		function stopIT(){
			console.log("stoping");
		}

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code
	$("#play").click(
		function start(){
		console.log("starting");
	});

		function stopIT(){
			console.log("stoping");
		}

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code
	$("#play").click(
		function start(){
		console.log("starting");
	});

		function stopIT(){
			console.log("stoping");
		}

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code
	$("#play").click(
		function start(){
		console.log("starting");
	});

	$("#stop").click(
		function(){
			console.log("Stopping");
		});
		function stopIT(){
			console.log("stoping");
		}

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code
	$("#play").click(
		function start(){
		console.log("starting");
	});

	$("#stop").click(
		function(){
			console.log("Stopping");
		});
		function stopIT(){
			console.log("stoping");
		}

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code
	$("#play").click(
		function start(){
		console.log("starting");
	});

	$("#stop").click(
		function(){
			console.log("Stopping");
		});

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code
	$("#play").click(
		function start(){
		console.log("starting");
	});

	$("#stop").click(
		function(){
			console.log("Stopping");
		});

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code
	$("#play").click(
		start();
	);

	$("#stop").click(
		function(){
			console.log("Stopping");
		});

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code
	$("#play").click(
		start();
	);

	$("#stop").click(
		function(){
			console.log("Stopping");
		});

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code
	$("#play").click(
		start());

	$("#stop").click(
		function(){
			console.log("Stopping");
		});

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code
	$("#play").click(
		start());

	$("#stop").click(
		function(){
			console.log("Stopping");
		});

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.freq1 = 100;
	$scope.freq2 = 108;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }




// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("start").click(start());


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("start").click(start());


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
      //   oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("start").click(start());


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
      //   oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("start").click(start());


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("start").click(start());


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){

        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("start").click(start());


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("start").click(start());


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("start").click(start());


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	// $("start").click(start());


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	// $("start").click(start());


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("start").click(function(){
		start();
	});


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("start").click(function(){
		start();
	});


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){

});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = srvc.upFunc;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = srvc.upFunc;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = srvc.upFunc;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = srvc.upFunc;
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc function(x){
		x = x++;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc function(x){
		x = x++;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc function(x){
		x = x++;
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc function(x){
		x = x++;
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		x = x++;
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		x = x++;
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		x = x++;
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		x = x++;
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		x = x++;
		console.log(x);
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		x = x++;
		console.log(x);
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		x = x + 1;
		console.log(x);
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		x = x + 1;
		console.log(x);
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		x++;
		console.log(x);
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		x++;
		console.log(x);
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		$scope.f1 = x;
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		$scope.f1 = x;
		return x;
	};
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		$scope.f1 = x;
		return x;
	};
	$scope.downFunc = function(){
		console.log("running downFunc");
	}
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		$scope.f1 = x;
		return x;
	};
	$scope.downFunc = function(){
		console.log("running downFunc");
	}
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		$scope.f1 = x;
		return x;
	};
	$scope.downFunc = function(){
		console.log("running downFunc");
		--x;
		console.log(x);
		$scope.f1 = x;
		return x;
	}
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		$scope.f1 = x;
		return x;
	};
	$scope.downFunc = function(){
		console.log("running downFunc");
		--x;
		console.log(x);
		$scope.f1 = x;
		return x;
	}
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		$scope.f1 = x;
		return x;
	};
	$scope.downFunc = function(x){
		console.log("running downFunc");
		--x;
		console.log(x);
		$scope.f1 = x;
		return x;
	}
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});

angular.module("app", []);

angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		$scope.f1 = x;
		return x;
	};
	$scope.downFunc = function(x){
		console.log("running downFunc");
		--x;
		console.log(x);
		$scope.f1 = x;
		return x;
	}
});

var contextClass = (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext);

      if (contextClass) {
        // Web Audio API is available.
        var context = new contextClass();
      }

      var oscOn = function(freq1, freq2){
			console.log("oscOn is running");
        merger = context.createChannelMerger(2);

        oscillator1 = context.createOscillator();
        oscillator1.type = 0;
        oscillator1.frequency.value = freq1;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator1.connect(gainNode,0,0);
        // gainNode.connect(context.destination,0,0);
        gainNode.gain.value = .1;
        oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

        gainNode.connect(merger,0,1);

        oscillator2 = context.createOscillator();
        oscillator2.type = 0;
        oscillator2.frequency.value = freq2;
        gainNode = context.createGain ? context.createGain() : context.createGainNode();
        oscillator2.connect(gainNode);
        // gainNode.connect(context.destination,0,1);
        gainNode.connect(merger,0,0);


        gainNode.gain.value = .1;
        oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)

        merger.connect(context.destination);


      };

      function start() {
        if (typeof oscillator1 != 'undefined') oscillator1.disconnect();
        if (typeof oscillator2 != 'undefined') oscillator2.disconnect();
        oscOn(parseFloat(document.getElementById("freq1").value),parseFloat(document.getElementById("freq2").value));
      }


      function stop() {
        oscillator1.disconnect();
        oscillator2.disconnect();
      }

	$("#start").click(function(){
		start();
	});

	$("#stop").click(function(){
		stop();
	});


// my code

angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});
