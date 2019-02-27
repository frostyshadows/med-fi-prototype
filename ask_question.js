// Add new question when user clicks submit
document.getElementById("submit-button").addEventListener("click", function() {
  let questionText = $("#question-form-input").val();
  var table = document.getElementById("questions");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(0);

  // Insert new cell (<td> element) at the 1st of the "new" <tr> element:
  var cell1 = row.insertCell(0);

  // Add  HTML to the new cell:
  cell1.innerHTML = 
    "<div> \
        <p>" + questionText + "</p> \
        <p>" + "Asked Feb 24" + "</p> \
        <p>" + "No answers yet" + "</p> \
    </div>";
}, false);