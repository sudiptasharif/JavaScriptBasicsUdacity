/*
// [string].replace([old],[new])
var email = "sudipta.sharif@outlook.com";
var newEmail = email.replace("outlook","gmail");
console.log(email);
console.log(newEmail);

var awesomeThoughts = "My Name is Sudipta Sharif. I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");


//$("#main").append(funThoughts);
var name = "Sudipta Sharif";



var audacity = "audacity";
var udacity = audacity.slice(1);

console.log(udacity);

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    
    var separator = ' ';
    var nameArray = finalName.split(separator);
    
	var firstName = nameArray[0];
	var lastName = nameArray[1];
		
	firstName = firstName.toLowerCase();
	lastName = lastName.toUpperCase();

	firstName = firstName[0].toUpperCase()+firstName.slice(1);
	
	finalName = firstName+" "+lastName;
	console.log(finalName);
	
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));


var skills = ["Awesomeness", "HTML", "CSS", "JavaScript", "JQuery", "PHP", "MySQL"];
var contactInfo = {
	"contactGeneric": "Address",
	"mobile": "(260)739-8352",
	"email":"sudipta.sharif@outlook.com",
	"twitter":"awesomeSudipta",
	"gitHub": "sudiptasharif",
	"blog":"sudiptaBlog",
	"location":"Fort Wayne"
};
var bio = {
	"name": "Sudipta Sharif",
	"role": "Sofware, Web and Mobile Application Developer",
	"contact": contactInfo,
	"pictureURL": "images/fry.jpg",
	"welcome": "Hello! Welcome to my Resume.",
	"skills":skills	
};
// Replace the necessary variables from  the helper.js
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%",bio.contact.contactGeneric);
console.log(formattedContactGeneric);
formattedContactGeneric = formattedContactGeneric.replace("%data%","4318 Roseview Road, Fort Wayne, IN 46815, USA");
console.log(formattedContactGeneric);
var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedtwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
var formattedgithub = HTMLgithub.replace("%data%",bio.contact.gitHub);
var formattedblog = HTMLblog.replace("%data%",bio.contact.blog);
var formattedlocation = HTMLlocation.replace("%data%",bio.contact.location);
var formattedbioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcome);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedContactGeneric);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedblog);
$("#topContacts").append(formattedlocation);
//$("#topContacts").append(formattedbioPic);
//$("#topContacts").append(formattedwelcomeMsg);

var work = {
	"position": "Student Security Analyst",
	"employer": "Indiana University Purdue University Fort Wayne",
	"yearsWorked":3,
	"city": "Fort Wayne"
};

var education = {
	"name": "Purdue University, Fort Wayne, IN, USA",
	"years":4.5,
	"city": "Fort Wayne"
};

$("#main").append(work["position"]);
$("#main").append(education.name);

var sudipta = {
	"name":"Sudipta",
	"hometown":"Mymensingh",
	"age":24
};

document.write("My name is "+sudipta.name+"<br/>");
document.write("My home town is "+sudipta.hometown+"<br/>");
document.write("My age is "+sudipta.age+"<br/>");

var family = [{
	"name": "Sudipta Sharif",
	"age" : 24
},
{
	"name" : "Ridwan Sharif",
	"age" : 14,
}];

document.write(family[1].name);
document.write(family[0].age);

var education = {
	"ipfw":{
		"name":"Purdue University, Fort Wayne",
		"city": "Fort Wayne",
		"major":"Computer Science",
		"graduationYear": 2016
	},
	"gdBirla":{
		"name": "G.D.Birla High School",
		"city": "Kolkata",
		"graduationYear":2011
		
	},
	"anthony": {
		"name":"St. Anthony's Boys School",
		"city":"Kurseong",
		"graduationYear":2009
	}
};
*/

// Works
var workExperience = {
	"student_security_analyst":{
		"employer":"Indiana University Purdue University Fort Wayne - Information Technology Services",
		"title": "Student Security Analyst",
		"location":"Fort Wayne, IN",
		"dates":"November 2014-Present",
		"description":"As a student network security analyst, I am in charge of detecting and liaising threats imposed by various Malware and Spyware intended for faculty, stuff and students."+
		"I research, investigate and respond to Spam emails, suspicious file attachments and harmful URLs that direct users to socially engineered websites. I am also in charge of"+
		"training new employees and interviewing new potential employees for the security office."
	},
	"web_developer":{
		"employer":"Indiana University Purdue University Fort Wayne - Lincoln Financial Group (Partner)",
		"title": "Team Leader - Senior Design Capstone Project",
		"location": "Fort Wayne, IN",
		"dates": "August 2015-May 2016",
		"description": "As part of our senior design project, my team and I were in charge of building a fully functional web application that automated various tasks for our client Lincoln Financial Group."+
		"This web application uses PHP and MySQL as the back end and HTML, CSS, JavaScript, JQuery, AJAX and Bootstrap as the front end technology."

	},
	"java_developer":{
		"employer": "Agri Stats Inc.",
		"title":"Intern - Java Developer",
		"location": "Fort Wayne, IN",
		"dates": "May 2015-August 2015",
		"description":"As an intern for Agri Stats Inc., I was responsible for converting clipper codes to Java using Agri Stat's Clipper-Java API. I also inserted Java functions to"+
		"a PostgreSQL database, tested the accuracy of converted functions by looking at generated logs and debugged the converted Java code whenever necessary."
	},
	"lab_response_team":{
		"employer":"Indiana University Purdue University Fort Wayne - Information Technology Services",
		"title": "Lab Consultant - Part of the Lab Response Team (LRT)",
		"location": "Fort Wayne",
		"dates": "July 2013-November 2014",
		"description": "As part of this team, I provided technical support to faculty and student with any issues on their laptops, phones and tables or school comouters with respect to"+
		"IPFW's applications and devices such as wifi connections, printer issues, IU ware software downloads, any help with Microsoft Word, Excel and Visio. I communicated any device"+
		"that needed replacement or repaired with IPFW Library technicians."
	},
	"math_tutor":{
		"employer":"Indiana University Purdue University Fort Wayne - Information Technology Services",
		"title": "Mathematics Tutor",
		"location": "Fort Wayne, IN",
		"dates": "February 2013-July 2013",
		"description":"As a mathematics tutor, I helped students with homework, quizzes and exams. I provided conceptual understanding of the following topics Calculus, Discrete math, Linear algebra and Statistics."
	},
	"teaching_assistant":{
		"employer":"Indiana University Purdue University Fort Wayne - Biology Department",
		"title": "Teaching Assistant",
		"location": "Fort Wayne, IN",
		"dates": "October 2012-July 2013",
		"description": "I helped my Biology professor with grading homeworks, quizzes and exams. I was also in charge of uploading grades to Blackboard."
	}
};

// Projects
var projects = {
	"dst_vision":{
		
	},
	"vulnerable_web_app":{
		
	}
};



// Bio
var bio = {
	
};

// Education
var educations = {
	"ipfw":{
		
	},
	"gdBirla":{
		
	},
	"stAnthony":{
		
	}
};



