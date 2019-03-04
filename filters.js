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

var profiles2 = [
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
      "ID": "2",
      "Name": "Victoria",
      "Field": "Computer Engineer",
      "Year": "4",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "Online",
      "Time": "Weekly"
  },
  {
      "ID": "3",
      "Name": "Victoria",
      "Field": "Computer Engineer",
      "Year": "4",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "Online",
      "Time": "Weekly"
  }
];

function createProfileTable(profiles) {
  // profile table creation
  //var table = document.createElement("table");
  var table = document.createElement('div');
  table.setAttribute('class', 'table');
  var col = [];
  for (var i = 0; i < profiles.length; i++) {
    for (var key in profiles[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
  }
  for (var i = 0; i < profiles.length; i++) {
    //var tr = table.insertRow(-1);
    var tr = document.createElement('div');
    tr.setAttribute('class', 'row');
    for (var j = 0; j < col.length; j++) {
        var tabCell = document.createElement('div');
        tabCell.setAttribute('class', 'col');
        //var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = profiles[i][col[j]];
        tr.appendChild(tabCell);
    }
    table.appendChild(tr);
  }
  
  return table;
}

var divContainer = document.getElementById("profiles");
divContainer.innerHTML = "";
var table = createProfileTable(profiles);
divContainer.appendChild(table);

// Button functions
$(".btn").click(function(){
  if($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
});

// Update profile list with next static profile2 on clicking submit
document.getElementById("submit-button").addEventListener("click", function() {
  var divContainer = document.getElementById("profiles");
  divContainer.innerHTML = "";
  var table = createProfileTable(profiles2);
  divContainer.appendChild(table);
}, false);
