// $(document).ready(function() {
//global variables
//=================I used different images of crystals, but still called them the colors of the crystals you used in the assignment example=========================//
var numberList = []; //list of numbers to get numberToReach from
var numberToReach = "";
// crystalList = [];
var redCrystal = "";
var blueCrystal = "";
var greenCrystal = "";
var yellowCrystal = "";
var redCrystalValue = "";
var blueCrystalValue = "";
var greenCrystalValue = "";
var yellowCrystalValue = "";
// this creates the list of numbers from 19 through 120 
var crystalList = [];
	for(var i=1; i<=12; i++){
		crystalList.push(i);
	};

// This is where the game counters are
var counter=0;
var winCounter = 0;
var lossCounter = 0;


//this creates the objects of the crystals
// **personal note: ".attr" = I am setting the attribute value
// **personal note: ".addClass" = adds a class name to a class attribute
// **personal note: ".append" = the content added at the end
function createCrystals(){

	var redCrystal = $('<img>');
		redCrystal.attr('data-num', crystalList[i]);
		redCrystal.attr('src', 'assets/images/download.jpg');
		redCrystal.attr('alt', 'red crystal');
		redCrystal.addClass('center-block');
		redCrystal.addClass('crystalImage');
		$('#redCrystal').append(redCrystal);

	var blueCrystal = $('<img>');
		blueCrystal.attr('data-num', crystalList[i]);
		blueCrystal.attr('src', 'assets/images/images-1.jpg');
		blueCrystal.attr('alt', 'blue crystal');
		blueCrystal.addClass('center-block');
		blueCrystal.addClass('crystalImage');
		$('#blueCrystal').append(blueCrystal);


	var yellowCrystal = $('<img>');
		yellowCrystal.attr('data-num', crystalList[i]);
		yellowCrystal.attr('src', 'assets/images/images.jpg');
		yellowCrystal.attr('alt', 'yellow crystal');
		yellowCrystal.addClass('center-block');
		yellowCrystal.addClass('crystalImage');
		$('#yellowCrystal').append(yellowCrystal);

	var greenCrystal = $('<img>');
		greenCrystal.attr('data-num', crystalList[i]);
		greenCrystal.attr('src', 'assets/images/images-2.jpg');
		greenCrystal.attr('alt', 'green crystal');
		greenCrystal.addClass('center-block');
		greenCrystal.addClass('crystalImage');
		$('#greenCrystal').append(greenCrystal);

}

function newCrystals(){
	counter = 0;
	//this creates the array of numbers to be used to pick the numberToReach
	numberList = [];
		for(var i=19; i<=120; i++){
			numberList.push(i);
		}
	//selected number to reach
	// **personal note for myself to understand better: Math.floor, means that it will round the integar downwards

	numberToReach = numberList[Math.floor(Math.random() * numberList.length)];
	console.log(numberToReach); 

	//this places the numberToReach on the html page
	$('#randomNumber').text(numberToReach);
    // assigns random number to crystal values
	redCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];
	$('#redCrystalValue').text(redCrystalValue);

		console.log(redCrystalValue);
    // assigns random number to crystal values
	blueCrystalValue = crystalList[Math.floor(Math.random() * 
		crystalList.length)];
	$('#blueCrystalValue').text(blueCrystalValue);
		console.log(blueCrystalValue);
// assigns random number to crystal values
	greenCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];
	$('#greenCrystalValue').text(greenCrystalValue);
		console.log(greenCrystalValue);
// assigns random number to crystal values
	yellowCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];
	$('#yellowCrystalValue').text(yellowCrystalValue);
		console.log(yellowCrystalValue);
}
//this sets the counter to 0;
// counter = 0;
function startGame(){
	counter = 0;
   //this places the numberToReach on the html page
	$('#randomNumber').text(numberToReach);
	

	//this assigns the counter to the userTotalScore on the html page
	$('#userTotalScore').text(0);


	//this puts the winCounter, lossCounter & counter values in their correct locations on the page
	$('#wins').text(winCounter);
	$('#losses').text(lossCounter);
	$('#userTotalScore').text(counter);
}
	//This is where the click events for each crystal are, as well as the messages for my alerts

	$('#redCrystal').on('click', function () {
      counter = counter + redCrystalValue;
	 	$('#userTotalScore').text(counter);
		if(counter === numberToReach){
		 	winCounter++;
			alert('Great Work! You are a winner!');
			$('#wins').html(winCounter);
			$('#randomNumber').text(numberToReach);
			counter = 0;
			$('#userTotalScore').text(counter);
			newCrystals();
		}else if(counter > numberToReach){
			lossCounter++;
			alert('Aw man! Better luck next time!');
			$('#losses').html(lossCounter);
			$('#randomNumber').text(numberToReach);
			counter = 0;
			$('#userTotalScore').text(counter);
			newCrystals();
		}
	})

	$('#blueCrystal').on('click', function () {
      counter = counter + blueCrystalValue;
	 	$('#userTotalScore').text(counter);
		if(counter === numberToReach){
		 	winCounter++;
			alert('Great Work! You are a winner!');
			$('#wins').html(winCounter);
			$('#randomNumber').text(numberToReach);
			counter = 0;
			$('#userTotalScore').text(counter);
			newCrystals();
		}else if(counter > numberToReach){
			lossCounter++;
			alert('Aw man! Better luck next time!');
			$('#losses').html(lossCounter);
			$('#randomNumber').text(numberToReach);
			counter = 0;
			$('#userTotalScore').text(counter);
			newCrystals();
		}
	})
	$('#yellowCrystal').on('click', function () {
      counter = counter + yellowCrystalValue;
	 	$('#userTotalScore').text(counter);
		if(counter === numberToReach){
		 	winCounter++;
			alert('Great Work! You are a winner!');
			$('#wins').html(winCounter);
			$('#randomNumber').text(numberToReach);
			counter = 0;
			$('#userTotalScore').text(counter);
			newCrystals();
		}else if(counter > numberToReach){
			lossCounter++;
			alert('Aw man! Better luck next time!');
			$('#losses').html(lossCounter);
			$('#randomNumber').text(numberToReach);
			counter = 0;
			$('#userTotalScore').text(counter);
			newCrystals();
		}
	})
	$('#greenCrystal').on('click', function () {
      counter = counter + greenCrystalValue;

	 	$('#userTotalScore').text(counter);
	 	if(counter === numberToReach){
		 	winCounter++;
			alert('Great Work! You are a winner!');
			$('#wins').html(winCounter);
			$('#randomNumber').text(numberToReach);
			counter = 0;
			$('#userTotalScore').text(counter);
			newCrystals();
		}else if(counter > numberToReach){
			lossCounter++;
			alert('Aw man! Better luck next time!');
			$('#losses').html(lossCounter);
			$('#randomNumber').text(numberToReach);
			counter = 0;
			$('#userTotalScore').text(counter);
			newCrystals();
		}
	})

 



createCrystals();
newCrystals();
startGame();








	



