$(document).ready(function(){

    //randomNumber array
    var randomNumber = [];

    for (var r= 19; r < 121; r++){
        randomNumber.push (r);
        //console.log(randomNumber);
    }

    //crystalNumber array

    var crystalNumber = [];

    for (var c= 1; c < 12; c++){
        crystalNumber.push (c);
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
		$("#computerNumber").html(computerNumber);

		console.log("random number: " + computerNumber);
    }
    
    function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}

		console.log("crystal numbers: " + crystalNumbers);

	} 









})

