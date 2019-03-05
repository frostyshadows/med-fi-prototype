var questions = [{
      "question": "Where do you find internships outside of the CS co-op job board?",
      "name": "Mark Ng",
      "program": "2nd year, Computer Science"
   },
   {
      "question": "Which city are you moving to after graduation, and why?",
      "name": "Aylen Moore",
      "program": "4th year, Computer Engineering"
   },
   {
      "question": "Do you think personal projects helped you land an internship? What made your personal project impressive?",
      "name": "Nadia Winters",
      "program": "2nd year, Computer Science and Physics combined major"
   },
   {
      "question": "Has anyone minored in Computer Science? How has your experience been, and do you think it's worth it?",
      "name": "Chris Ramsay",
      "program": "1st year, Undeclared"
   },
   {
      "question": "Which graduate school should I attend for Data Science?",
      "name": "Jia Lin Sung",
      "program": "4th year, Statistics"
   },
   {
      "question": "What did you wish you know when you wrote your first resume?",
      "name": "Tim Baker",
      "program": "1st year, Undeclared"
   },
   {
      "question": "Should I focus on back-end or front-end development?",
      "name": "Adam Lin",
      "program": "3rd year, Electrical Engineering"
   },
   {
      "question": "How do I get into User Experience Design with a development background?",
      "name": "Verona Chen",
      "program": "2nd year, Computer Science"
   }
]

$(document).ready(function () {

   // add a card for each question
   questions.forEach(function (question) {
      $('#container').append(
         '<div class="card swipe-card" style="display: none;"> \
        <div class="avatar"> \
          <h6>' + question.question + '</h6> \
        </div> \
        <footer class="page-footer"> \
          <div class="container text-center text-md-left"> \
            <div class="row d-flex align-items-center"> \
              <img class="swipe-profile" src="assets/placeholder-profile.png" /> \
              <div class="col d-flex flex-column align-items-start"> \
                <p>' + question.name + '</p> \
                <p class="text-muted">' + question.program + '</p> \
              </div> \
            </div> \
          </div> \
        </footer> \
      </div>');
   });

   $("#like-button").on("click", function () {
      $(".swipe-card").each(function () {
         // only the card on the top of the stack will have display == block
         if (this.style.display === 'block') {
            swipeRight(this);
            return false;
         }
      })
   });

   $("#dislike-button").on("click", function () {
      $(".swipe-card").each(function () {
         // only the card on the top of the stack will have display == block
         if (this.style.display === 'block') {
            swipeLeft(this);
            return false;
         }
      })
   });

   $(".swipe-card").on("swiperight", function () {
      swipeRight(this);
   });

   $(".swipe-card").on("swipeleft", function () {
      swipeLeft(this);
   });

});

function swipeRight(card) {
   $(card).addClass('rotate-left').delay(700).fadeOut(1);
   $('.swipe-card').find('.status').remove();

   $(card).append('<div class="status like">Like!</div>');
   if ($(card).is(':last-child')) {
      $('.swipe-card:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
   } else {
      $(card).next().removeClass('rotate-left rotate-right').fadeIn(400);
   }
}

function swipeLeft(card) {
   $(card).addClass('rotate-right').delay(700).fadeOut(1);
   $('.swipe-card').find('.status').remove();
   $(card).append('<div class="status dislike">Dislike!</div>');

   if ($(card).is(':last-child')) {
      $('.swipe-card:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
   } else {
      $(card).next().removeClass('rotate-left rotate-right').fadeIn(400);
   }
}