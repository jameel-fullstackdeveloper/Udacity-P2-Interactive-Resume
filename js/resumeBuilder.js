/* Bio Details*/
var bio = {
	"name": "Jameel Ahmed",
	"role": "CEO | Lead Front End Developer",
	"contacts" : {
		"mobile" : "923453569417",
		"email" : "jameel@the-digital-marekting.com",
		"github" : "jameeldigital",
		"twitter" : "@jameeldigital",
		"location" : "Hyderabad, Pakistan",
	},
	"biopic" : "images/me.jpg",
	"welcomeMessage" : "I have over years experience in the web development.",
	"skills" :[".NET","PHP","Javascript/jQuery","Angualrjs","mySQL"]
	
};
/*Education Detail*/
var education = {
	"schools": [
		{ 
			"name": "University of Sindh",
			"location": "Jamshoro,Hyderabad,Pakistan",
			"degree": "Bechlor in Commerce",
			"majors": ["Accounts","Ecnomics"],
			"dates": "2001 - 2003",
			"url": "usindh.edu.pk"
		},
		{ 
			"name": "BSICE",
			"location": "Hyderabad,Pakistan",
			"degree": "FSc",
			"majors": ["Maths","English"],
			"dates": "1998 - 2000",
			"url": "#"
		},
		{ 
			"name": "BSICE",
			"location": "Hyderabad,Pakistan",
			"degree": "Matric",
			"majors": ["Maths","English"],
			"dates": "1996",
			"url": "#"
		}
	],
	"onlineCourses" : [
		{
			"title": "Front End Developer",
			"school": "Udacity",
			"date": "May 2016 to date",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Sr.Web Developer",
			"school": "Udacity",
			"date": "May 2016 to date",
			"url": "https://www.udacity.com/course/senior-web-developer-nanodegree--nd802"
		}
	]
};
/* Work Details*/
var work = {
	"jobs" : [
		{
		   "employer" : "The Internet Marketeer", 
           "title" : "Lead Developer | Associate Partner",
           "location" : "23 Noel Avenue,Oakham, Rutland LE15 6SQ",
           "dates" : "May 2013 ",
           "description" : "Our Digital Marketing Consultancy Company has broad experience in many aspects of website and software development. We have been an associate partner with The Internet Partner for over 3 years."
		},
		{
		   "employer" : "Syber Craft", 
           "title" : "Sr.Software Engineer",
           "location" : "Karachi",
           "dates" : "May 2011",
           "description" : "worked on opensource frameworks and cms like wordpress,joomla,opencart,magento and so on"
		},
		{
		   "employer" : "Alex Solutions(Formerly known as Money Ping)", 
           "title" : "Software Engineer",
           "location" : "Karachi",
           "dates" : "April 2010 - April 2011",
           "description" : "Developing web application using ASP.NET MVC , AJAX , jquery and SQL Server 2005"
		},
		{
		   "employer" : "Alex Solutions(Formerly known as Money Ping)", 
           "title" : "Software Developer",
           "location" : "Karachi",
           "dates" : "December 2008 - March 2010",
           "description" : "Worked on ASP.NET 2.0 / 3.5 , C# , SQL SERVER 2005 , Dotnetnuke"
		}
	]
};
/*Projects Detail*/
var projects = {
	"projects": [
		{
			"title": "Online Portfolio",
			"dates": "May 2016",
			"description": "Developed an online portflio, first project as part of udacity's front end develoepr course",
			"images": ["images/logo-new.png","images/tpms.png"],
			"url": "https://www.udacity.com"
		},
		{
			"title": "TPMS",
			"dates": "December 2015",
			"description": "Developed an ecommerce website using opencart",
			"images": ["images/tpms.png"],
			"url": "https://www.tpmswarehouse.co.uk/"
		}
	]
};
/* function to display the Bio Data from bio objects*/
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
	//showing the name role and etc.
	$("#headertitle").prepend(formattedName);
	$("#tagline").prepend(formattedRole);
	$("#pic").append(formattedBioPic);
	$("#skillsarea").append(formattedWelcomeMsg);
	$("#skillsarea").append(HTMLskillsStart);
	//showing the skills
	if(bio.skills.length > 0) {
		for(i in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
	//showing the contacts
	for(i in formattedContactInfo) {
		$("#topContacts").append(formattedContactInfo[i]);
		$("#footerContacts").append(formattedContactInfo[i]);
	}
};
bio.display();
/* function for dispaly work*/
work.display = function() {
	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
};
work.display();
/*function for display project*/
projects.display = function(){
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};
projects.display();
/* function display Education*/
education.display = function(){
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
};
education.display();
/*embed google map*/
$("#mapDiv").append(googleMap);
