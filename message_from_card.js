$(document).ready(function () {
	console.log("thing2");
	var questionText = localStorage.getItem("cardQuestion");
	var answerText = localStorage.getItem("cardAnswer");
	var cardAsker = localStorage.getItem("cardAsker");
	
	$("#asker-first-message").text(questionText);
	$("#answerer-first-message").text(answerText);
	$(".profile-full-name").text(cardAsker);
});

$(".back-to-swipe-page").click(function() {
  window.open("answer_questions_swipe.html", target="_self");
});