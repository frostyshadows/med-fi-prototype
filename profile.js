var profiles = [
  {
      "ID": "1",
      "FirstName": "Victoria",
	  "LastName": "Ronalds",
      "Field": "Computer Engineering",
      "Year": "5",
	  "Job": "SWE Intern",
      "Location": "Vancouver",
      "Gender": "Female",
      "Meeting": "Online",
      "Time": "Weekly",
	  "Mentor": true,
	  "Bio": "Research & development iPad freemium strategy.",
	  "Links": [{"Name": "GitHub", "Link": "http://www.github.com"},
		{"Name":"Medium", "Link": "http://www.medium.com"}],
	  "Ask": "technical internships, job seeking, resumes, backend development, machine learning",
	  "Affiliations": "Organizer at XDHacks \n VP Relations at ECESS",
	  "Interests": "UX/UI, Python, Tensorflow, Javascript, Research, D3.js, skateboarding",
	  "Availability": {
		  "Time": "Weekly, Bi-weekly, Monthly",
		  "Location": "In-person"
	  }
  }
];
var currentProfileNumber = 0;

window.onload = function() {
	var currentProfile = profiles[currentProfileNumber]
	
	$(".profile-full-name").text(currentProfile.FirstName + " " + currentProfile.LastName);
	$(".profile-job").text(currentProfile.Job);
	$(".profile-school").text(currentProfile.Field + ", Year " + currentProfile.Year); // didn't want to have to deal with figuring if -th or -st comes after year number lol
	if (!currentProfile.Mentor) {
		$(".profile-mentorship").hide();
	}
	
	$(".profile-location").text(currentProfile.Location);
	$(".profile-bio").text(currentProfile.Bio);
	$(".profile-ask").text(currentProfile.Ask);
	$(".profile-affiliations").text(currentProfile.Affiliations);
	$(".profile-interests").text(currentProfile.Interests);
	$(".profile-availability-location").text(currentProfile.Availability.Location);
	$(".profile-availability-time").text(currentProfile.Availability.Time);
	
	for (var i = 0; i < currentProfile.Links.length; i++) {
		$(".profile-links").append("<div><a class='text-dark' href='" + currentProfile.Links[i].Link + "'><u>" + currentProfile.Links[i].Name + "</u></a> </div>");
	}
};