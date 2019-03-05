var profiles = [{
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
		"Links": [{
				"Name": "GitHub",
				"Link": "http://www.github.com"
			},
			{
				"Name": "Medium",
				"Link": "http://www.medium.com"
			}
		],
		"Ask": "technical internships, job seeking, resumes, backend development, machine learning",
		"Affiliations": "Organizer at XDHacks \n VP Relations at ECESS",
		"Interests": "UX/UI, Python, Tensorflow, Javascript, Research, D3.js, skateboarding",
		"Availability": {
			"Time": "Weekly, Bi-weekly, Monthly",
			"Location": "In-person"
		}
	},
	{
		"ID": "2",
		"FirstName": "Jared",
		"LastName": "Liang",
		"Field": "Computer Science",
		"Year": "3",
		"Job": "CPSC 221 TA",
		"Location": "Vancouver",
		"Gender": "Male",
		"Meeting": "Online",
		"Time": "Monthly",
		"Mentor": true,
		"Bio": "I am a third year student pursuing computer science with a minor in statistics at UBC. I have completed an internship as a full-stack developer where I used React/Redux, Python, and Java. I also enjoy working on personal projects and attending tech meetups.",
		"Links": [{
				"Name": "GitHub",
				"Link": "http://www.github.com"
			},
			{
				"Name": "Linkedin",
				"Link": "http://www.linkedin.com"
			}
		],
		"Ask": "full-stack development, resumes",
		"Affiliations": "Student mentor in tri-mentoring",
		"Interests": "Python, Tensorflow, hackathons, skiing",
		"Availability": {
			"Time": "Monthly",
			"Location": "Online"
		}
	},
	{
		"ID": "3",
		"FirstName": "Erin",
		"LastName": "Powell",
		"Field": "Cognitive Systems",
		"Year": "4",
		"Job": "Work Learn at Emerging Media Labs, former iOS co-op at Two Tall Totems",
		"Location": "Vancouver",
		"Gender": "Female",
		"Meeting": "in-person",
		"Time": "Weekly",
		"Mentor": true,
		"Bio": "Hello! I’m an aspiring mobile developer who’s passionate about designing accessible apps. I’m pursuing COGS with a focus on Computer Science and Psychology. At my Two Tall Totems co-op placement, I learned iOS development and how to continuously improve apps based on user feedback and data. I love participating in hackathons and working in VR.",
		"Links": [{
				"Name": "GitHub",
				"Link": "http://www.github.com"
			},
			{
				"Name": "LinkedIn",
				"Link": "http://www.linkedin.com"
			},
			{
				"Name": "Medium",
				"Link": "http://www.medium.com"
			}
		],
		"Ask": "COGS, iOS development, UI/UX, technical interviews, EML, VR, hackathons",
		"Affiliations": "iOS developer in UBC Launch Pad \n VR project lead in Emerging Media Labs",
		"Interests": "Travelling, mobile development, VR, UI/UX, research, CS education",
		"Availability": {
			"Time": "Weekly, Bi-weekly",
			"Location": "In-person"
		}
	},
	{
		"ID": "4",
		"FirstName": "Jackson",
		"LastName": "Chung",
		"Field": "Computer Engineering",
		"Year": "4",
		"Job": "Software Engineering Intern at Microsoft",
		"Location": "Vancouver",
		"Gender": "Male",
		"Meeting": "in-person",
		"Time": "Weekly, bi-weekly, monthly",
		"Mentor": true,
		"Bio": "I am an incoming software developer at Shopify, and previously I was interning at Microsoft. My interests are in computer vision, machine learning, and data visualization.",
		"Links": [{
				"Name": "GitHub",
				"Link": "http://www.github.com",
			},
			{
				"Name": "LinkedIn",
				"Link": "http://www.linkedin.com"
			},
			{
				"Name": "Medium",
				"Link": "http://www.medium.com"
			}
		],
		"Ask": "Resumes, interviewing, technical interviews",
		"Affiliations": "Developer at UBC Thunderbots",
		"Interests": "Data viz, computer vision, machine learning, hockey, foosball",
		"Availability": {
			"Time": "Weekly, Bi-weekly",
			"Location": "In-person, online"
		}
	}
];

var currentProfileNumber = localStorage.getItem("proNum");

window.onload = function () {
	alert(currentProfileNumber);
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