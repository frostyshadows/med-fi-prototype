var questions = [
   "Question 2?",
   "Question 3?",
   "Question 4?"
]

$(document).ready(function(){

   // add a card for each question
   questions.forEach(function(question) {
      $('#container').append(
         '<div class="card swipe-card" style="display: none;"> \
            <div class="avatar"> \
               <p>' + question + '</p> \
            </div> \
         </div>');
    });

   $("#like-button").on("click",function(){
      $(".swipe-card").each(function() {
         // only the card on the top of the stack will have display == block
         if (this.style.display === 'block') {
            swipeRight(this);
            return false;
         }
      })
    }); 
    
    $("#dislike-button").on("click",function(){
      $(".swipe-card").each(function() {
         // only the card on the top of the stack will have display == block
         if (this.style.display === 'block') {
            swipeLeft(this);
            return false;
         }
      })
    }); 

  $(".swipe-card").on("swiperight",function(){
    swipeRight(this);
  });  

 $(".swipe-card").on("swipeleft",function(){
  swipeLeft(this);
});

});

function swipeRight(card){
  $(card).addClass('rotate-left').delay(700).fadeOut(1);
  $('.swipe-card').find('.status').remove();

  $(card).append('<div class="status like">Like!</div>');      
  if ( $(card).is(':last-child') ) {
    $('.swipe-card:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
   } else {
      $(card).next().removeClass('rotate-left rotate-right').fadeIn(400);
   }
}

function swipeLeft(card){
   $(card).addClass('rotate-right').delay(700).fadeOut(1);
  $('.swipe-card').find('.status').remove();
  $(card).append('<div class="status dislike">Dislike!</div>');

  if ( $(card).is(':last-child') ) {
   $('.swipe-card:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
   } else {
      $(card).next().removeClass('rotate-left rotate-right').fadeIn(400);
  } 
 }