var profiles = [
  {
      "ID": "1",
      "Name": "Jared Liang",
      "Occupation": "CPSC 221 TA",
      "Field": "Computer Science",
      "Year": "3",
      "Location": "Vancouver",
      "Gender": "Male",
      "Meeting": "Online",
      "Time": "Monthly"
  },
  {
      "ID": "2",
      "Name": "Erin Powell",
      "Occupation": "Work Learn Student at Emerging Media Labs",
      "Field": "COGS",
      "Year": "4",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "In-person",
      "Time": "Weekly"
  },
  {
      "ID": "3",
      "Name": "Jackson Chung",
      "Occupation": "Software Engineering Intern at Microsoft",
      "Field": "Computer Engineer",
      "Year": "4",
      "Location": "Vancouver",
      "Gender": "Male",
      "Meeting": "In-person",
      "Time": "Weekly, Bi-weekly, Monthly"
  },
  {
      "ID": "4",
      "Name": "Penelope Shwartz",
      "Occupation": "Research Assistant at Interdisciplinary Speech Research Laboratory (ISRL)",
      "Field": "Linguistics",
      "Year": "3",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "Online",
      "Time": "Bi-weekly"
  },
  {
      "ID": "5",
      "Name": "Peter Summers",
      "Occupation": "Career Counselor Intern at UBC Careers",
      "Field": "Psychology",
      "Year": "4",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "In-person",
      "Time": "Weekly"
  },
  {
      "ID": "6",
      "Name": "April Kim",
      "Occupation": "Back-end intern at Spotify",
      "Field": "Computer Science",
      "Year": "4",
      "Location": "New York",
      "Gender": "Female",
      "Meeting": "Online",
      "Time": "Weekly"
  },
  {
      "ID": "7",
      "Name": "Pari Tomar",
      "Occupation": "Research Assistant at the Natural Language Processing Lab",
      "Field": "Double major in Computer Science and Biology",
      "Year": "2",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "In-person",
      "Time": "Monthly"
  },
  {
      "ID": "8",
      "Name": "Colleen Summers",
      "Occupation": "Communications Assistant at EventBrite",
      "Field": "Fine Arts",
      "Year": "4",
      "Location": "Burnaby",
      "Gender": "Female",
      "Meeting": "In-person",
      "Time": "Weekly"
  },
  {
      "ID": "9",
      "Name": "Mike Jones",
      "Occupation": "Student",
      "Field": "Computer Science",
      "Year": "4",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "In-person",
      "Time": "Weekly"
  },
  {
      "ID": "10",
      "Name": "Kyle Chen",
      "Occupation": "iQmetrix",
      "Field": "Software Engineering",
      "Year": "5",
      "Location": "Vancouver",
      "Gender": "Male",
      "Meeting": "Online",
      "Time": "Bi-weekly"
  }
];

var profiles2 = [
  {
      "ID": "1",
      "Name": "Victoria",
      "Occupation": "Student",
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
      "Occupation": "Student",
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
      "Occupation": "Student",
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
  for (var key in profiles[0]) {
    if (col.indexOf(key) === -1) {
        col.push(key);
    }
  }
  for (var i = 0; i < profiles.length; i++) {
    //var tr = table.insertRow(-1);
    //var tr = document.createElement('div');
    //tr.setAttribute('class', 'row');
    var id = profiles[i][col[0]];
    var name = profiles[i][col[1]];
    var occupation = profiles[i][col[2]];
    var field = profiles[i][col[3]];
    var year = profiles[i][col[4]];
    table.innerHTML += 
      '<div class="clickable-row row border-bottom" id="'+ id +'"> \
        <div class="col-2"> \
          <img class="profile-image" src="assets/add_question.png" alt="Profile image"> \
         </div> \
         <div class="col-10"> \
          <div class="row">'+ name + '</div> \
          <div class="row">' + occupation + '</div> \
          <div class="row">' + field + ', Academic year: ' + year + '</div> \
        </div> \
      </div>';
    //table.appendChild(tr); 
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

//Clickable rows
$(".clickable-row").click(function() {
  var proNum = $(this).attr("id") - 1;
  localStorage.setItem("proNum", proNum);
  window.open("profile.html", target="_self");
});

// Update profile list with next static profile2 on clicking submit
document.getElementById("submit-button").addEventListener("click", function() {
  var divContainer = document.getElementById("profiles");
  divContainer.innerHTML = "";
  var table = createProfileTable(profiles2);
  divContainer.appendChild(table);
}, false);
