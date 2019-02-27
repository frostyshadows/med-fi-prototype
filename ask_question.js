var questions = [{
  "Text": "How was your Sauder co-op intake interview?",
  "Timestamp": "Asked Feb 24, 2019",
  "Answers": "No answers yet"
}];

function addQuestion(question) {
  questions.concat(question);
}

function addDataToTbody(data) {
  var table = document.getElementById("questions");
  data.forEach((question) => {
  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(0);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);

  // Add some HTML to the new cells:
  cell1.innerHTML = 
    "<div> \
        <p>" + question.Text + "</p> \
        <p>" + question.Timestamp + "</p> \
        <p>" + question.Answers + "</p> \
    </div>";
  })
}

addDataToTbody(questions);

// Add new question when user clicks submit
document.getElementById("submit-button").addEventListener("click", function() {
  let questionText = $("#question-form-input").val();
  var table = document.getElementById("questions");
  let newQuestion = {
    "Text": questionText,
    "Timestamp": "Asked Feb 24, 2019",
    "Answers": "No answers yet"
  }
  questions.push(newQuestion);

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(0);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);

  // Add some HTML to the new cells:
  cell1.innerHTML = 
    "<div> \
        <p>" + questionText + "</p> \
        <p>" + "Asked Feb 24" + "</p> \
        <p>" + "No answers yet" + "</p> \
    </div>";
}, false);