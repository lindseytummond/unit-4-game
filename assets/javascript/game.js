$(document).ready(function(){

    //randomNumber array

    var rand = [];

	for (var r = 19; r < 121; r++) {
        rand.push(r);
        //console.log(randomNumber);
	}

    //crystalNumber array

    var crystals = [];

    for (var c= 1; c < 12; c++){
        crystals.push (c);
        //console.log(crystalNumber);
    }

    //variables
    var randNumber;
    var crystalNumbers = [];

    var crystalNumber1;
    var crystalNumber2;
    var crystalNumber3;
    var crystalNumber4;

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    var userGuessLog = [];

    //functions
    function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
        randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);
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

		pickRandomNumber(rand);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
        $("#totalNumber").html(totalScore);

        userGuessLog = 0;
        //$("#guessLog").html(userGuessLog);
        $("#guessLog").empty();

		alert(x);
	}

    //Start of Game Settings
    pickRandomNumber(rand);
	pickRandomCrystals(crystals); 
    crystalValues(crystalNumbers);
    
    $("#button-1").on("click", function() {

        totalScore += crystalNumber1;
        $("#totalNumber").html(totalScore);

        userGuessLog += crystalNumber1;
        
        
        var imageTag = document.createElement ("img");
        imageTag.setAttribute("src","assets/images/red-crystal.jpg");
        imageTag.setAttribute("class","smallImages");
        $("#guessLog").append(imageTag);
    })

    $("#button-2").on("click", function() {

        totalScore += crystalNumber2;
        $("#totalNumber").html(totalScore);

        userGuessLog += crystalNumber2;
        var imageTag = document.createElement ("img");
        imageTag.setAttribute("src","assets/images/blue-crystal.jpg");
        imageTag.setAttribute("class","smallImages");
        $("#guessLog").append(imageTag);
    })

    $("#button-3").on("click", function() {

        totalScore += crystalNumber3;
        $("#totalNumber").html(totalScore);

        userGuessLog += crystalNumber3;
        var imageTag = document.createElement ("img");
        imageTag.setAttribute("src","assets/images/yellow-crystal.png");
        imageTag.setAttribute("class","smallImages");
        $("#guessLog").append(imageTag);
    });

    $("#button-4").on("click", function() {

        totalScore += crystalNumber4;
        $("#totalNumber").html(totalScore);

        userGuessLog += crystalNumber4;
        var imageTag = document.createElement ("img");
        imageTag.setAttribute("src","assets/images/green-crystal.jpg");
        imageTag.setAttribute("class","smallImages");
        $("#guessLog").append(imageTag);
    });

    $("button").on("click", function() {
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}

		else if (totalScore > randNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU LOSE!")}, 200);
		}
	});









})

