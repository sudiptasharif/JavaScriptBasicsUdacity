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
var works = {
	"student_security_analyst":{
		
	},
	"web_developer":{
		
	},
	"java_developer":{
		
	},
	"lab_response_team":{
		
	},
	"math_tutor":{
		
	},
	"teaching_assistant":{
		
	}
};

// Projects
var projects = {
	"dst_vision":{
		
	},
	"vulnerable_web_app":{
		
	},
	"job_application_logger":{
		
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
