$(document).ready(function(){

    //randomNumber array
    var randomNumber = [];

    for (var r= 19; r < 121; r++){
        randomNumber.push (r);
        //console.log(randomNumber);
    }

    //crystalNumber array

    var crystals = [];

    for (var c= 1; c < 12; c++){
        crystals.push (c);
        //console.log(crystalNumber);
    }

    //variables
    var computerNumber;
    var crystalNumbers = [];

    var crystalNumber1;
    var crystalNumber2;
    var crystalNumber3;
    var crystalNumber4;

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //functions
    function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		computerNumber = x;
		$("#randomrNumber").html(computerNumber);

		console.log("random number: " + computerNumber);
    }
    
    function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}

		console.log("crystal numbers: " + crystalNumbers);
    } 
    
    function crystalValues(arr) {

		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		crystalNumber1 = arr[0];
		crystalNumber2 = arr[1];
		crystalNumber3 = arr[2];
		crystalNumber4 = arr[3];
    }
    
    function gameReset(x) {

		crystalNumbers = []; 

		pickRandomNumber(randomNumber);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
        $("#totalNumber").html(totalScore);
        
        randomNumber = 0;
		$("#randomNumber").html(computerNumber);

		alert(x);
	}

    pickRandomNumber(randomNumber);
	pickRandomCrystals(crystals); 
    crystalValues(crystalNumbers);
    
    $("#button-1").on("click", function() {

        totalScore += crystalNumber1;
        $("#totalNumber").html(totalScore);
    });

    $("#button-2").on("click", function() {

        totalScore += crystalNumber2;
        $("#totalNumber").html(totalScore);
    });

    $("#button-3").on("click", function() {

        totalScore += crystalNumber3;
        $("#totalNumber").html(totalScore);
    });

    $("#button-4").on("click", function() {

        totalScore += crystalNumber4;
        $("#totalNumber").html(totalScore);
    });



    $("button").on("click", function() {
		if (totalScore == computerNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}

		else if (totalScore > computerNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU LOSE!")}, 200);
		}
	});









})

