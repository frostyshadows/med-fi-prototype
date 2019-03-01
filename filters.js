var profiles = [
  {
      "ID": "1",
      "Name": "Victoria",
      "Field": "Computer Engineer",
      "Year": "4",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "Online",
      "Time": "Weekly"
  },
  {
      "ID": "1",
      "Name": "Victoria",
      "Field": "Computer Engineer",
      "Year": "4",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "Online",
      "Time": "Weekly"
  },
  {
      "ID": "1",
      "Name": "Victoria",
      "Field": "Computer Engineer",
      "Year": "4",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "Online",
      "Time": "Weekly"
  }
];

// profile table creation
var table = document.createElement("table");
var col = [];
for (var i = 0; i < profiles.length; i++) {
    for (var key in profiles[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}
for (var i = 0; i < profiles.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = profiles[i][col[j]];
    }
}

var divContainer = document.getElementById("profiles");
divContainer.innerHTML = "";
divContainer.appendChild(table);

// Button functions
$(".btn").click(function(){
  if($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
});

