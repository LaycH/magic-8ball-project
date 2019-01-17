$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["Most Likley", "Signs point to no", "Yes!", "Not at all", "Check again next Tuesday",
"Signs point to yes", "There is a good chance", "Most likley", "No","The outcome is hazy","Good possibility"];
	$("#answer").hide();

magic8Ball.askQuestion = function(question)
{
	var randomNumber =  Math.random();
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor (randomNumberForListOfAnswers);
	var answer = this.listOfAnswers[randomIndex];
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	$("#answer").text(answer);
	console.log (question);
	console.log (answer);
};
	var onClick = function() {
		var question = prompt("Ask A Yes/No Question!");
		$("#8ball").effect( "shake" );  
		$("#answer").fadeIn(4000);
		magic8Ball.askQuestion(question);
		setTimeout(
       function() {
         $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");    
        }, 1000);   
       };
    $("#questionButton").click( onClick );
  	$("#answer").hide(); 
});
