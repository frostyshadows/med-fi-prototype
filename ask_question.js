// Add new question when user clicks submit
document.getElementById("submit-button").addEventListener("click", function() {
  let questionText = $("#question-form-input").val();
  var table = document.getElementById("questions");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(table.rows.length);

  // Insert new cell (<td> element) at the 1st of the "new" <tr> element:
  var cell1 = row.insertCell(0);

  // Add  HTML to the new cell:
  cell1.innerHTML = 
  '<div class="card"> \
  <div class="card-body"> \
    <h6 class="card-title d-flex justify-content-around">' + questionText + '</h6> \
    <div class="d-flex justify-content-between"> \
      <p class="text-muted">Asked Feb 24</p> \
      <p class="text-muted">No answers yet</p> \
    </div> \
  </div> \
</div>';

// Clear modal text
$("#question-form-input").val("");
}, false);