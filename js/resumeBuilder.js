// For browser
// http://localhost/JavaScriptBasicsUdacity/index.html

// Works
var workExperience = {
    "student_security_analyst": {
        "employer": "Indiana University Purdue University Fort Wayne - Information Technology Services",
        "title": "Student Network Security Analyst",
        "location": "Fort Wayne, IN",
        "dates": "November 2014-Present",
        "description": "As a student network security analyst, I am in charge of detecting and liaising threats imposed by various Malware and Spyware intended for faculty, stuff and students." +
            "I research, investigate and respond to Spam emails, suspicious file attachments and harmful URLs that direct users to socially engineered websites. I am also in charge of" +
            "training new employees and interviewing new potential employees for the security office."
    },
    "web_developer": {
        "employer": "Indiana University Purdue University Fort Wayne - Lincoln Financial Group (Sponsor)",
        "title": "Senior Design Capstone Project (Team Leader)",
        "location": "Fort Wayne, IN",
        "dates": "August 2015-May 2016",
        "description": "As part of our senior design project, my team and I were in charge of building a fully functional web application that automated various tasks for our client Lincoln Financial Group." +
            "This web application uses PHP and MySQL as the back end and HTML, CSS, JavaScript, JQuery, AJAX and Bootstrap as the front end technology."

    },
    "java_developer": {
        "employer": "Agri Stats Inc.",
        "title": "Java Developer (Intern)",
        "location": "Fort Wayne, IN",
        "dates": "May 2015-August 2015",
        "description": "As an intern for Agri Stats Inc., I was responsible for converting clipper codes to Java using Agri Stat's Clipper-Java API. I also inserted Java functions to" +
            "a PostgreSQL database, tested the accuracy of converted functions by looking at generated logs and debugged the converted Java code whenever necessary."
    },
    "lab_response_team": {
        "employer": "Indiana University Purdue University Fort Wayne - Information Technology Services",
        "title": "Lab Response Team (L.R.T)",
        "location": "Fort Wayne",
        "dates": "July 2013-November 2014",
        "description": "As part of this team, I provided technical support to faculty and student with any issues on their laptops, phones and tables or school comouters with respect to" +
            "IPFW's applications and devices such as wifi connections, printer issues, IU ware software downloads, any help with Microsoft Word, Excel and Visio. I communicated any device" +
            "that needed replacement or repaired with IPFW Library technicians."
    },
    "math_tutor": {
        "employer": "Indiana University Purdue University Fort Wayne - Information Technology Services",
        "title": "Mathematics Tutor",
        "location": "Fort Wayne, IN",
        "dates": "February 2013-July 2013",
        "description": "As a mathematics tutor, I helped students with homework, quizzes and exams. I provided conceptual understanding of the following topics Calculus, Discrete math, Linear algebra and Statistics."
    },
    "teaching_assistant": {
        "employer": "Indiana University Purdue University Fort Wayne - Biology Department",
        "title": "Teaching Assistant",
        "location": "Fort Wayne, IN",
        "dates": "October 2012-July 2013",
        "description": "I helped my Biology professor with grading homeworks, quizzes and exams. I was also in charge of uploading grades to Blackboard."
    }
};

// Move all the above code into a function
function displayWork() {
    if (workExperience !== null) {
        // some local variable that will be used in the for in loop
        var employer, title, date, local, workDesc;
        var job;
        // A for-in loop that iterates over all the jobs in my work object
        for (var workExIndex in workExperience) {
            // Print to console
            //console.log(workExperience[workExIndex]);

            // append a HTMLworkEmployer for each job
            $("#workExperience").append(HTMLworkStart);
            employer = HTMLworkEmployer.replace("%data%", workExperience[workExIndex].employer);
            title = HTMLworkTitle.replace("%data%", workExperience[workExIndex].title);
            job = employer + title;
            date = HTMLworkDates.replace("%data%", workExperience[workExIndex].dates);
            local = HTMLworkLocation.replace("%data%", workExperience[workExIndex].location);
            workDesc = HTMLworkDescription.replace("%data%", workExperience[workExIndex].description);

            $(".work-entry:last").append(job);
            $(".work-entry:last").append(date);
            $(".work-entry:last").append(local);
            $(".work-entry:last").append(workDesc);
        }
    }
}
// Call displayWork
displayWork();

// Projects
var projects = {
    _projects: [{
        "title": "Supplementary Web Application for DST Vision Requests",
        "dates": "August 2015-May 2016",
        "description": "As part of our Senior Design Capstone Project, we created a web site that automates" +
            " various repetitive tasks for a business analyst. These tasks included parsing an XML file according to Lincoln's business logic, sending emails periodically," +
            " keeping track of all the emails sent and received, keeping track of all the requesters who has made a request in a database and a list of all the requesters who were approved and denied." +
            " We integrated useful CRUD operations into this web application using Bootstrap, JQuery, AJAX, PHP and MySQL.",
        "images": []
    }, {
        "title": "Demonstrating SQL Injection in a Vulnerable Web Site",
        "dates": "April 2016-May 2016",
        "description": "As part of my Operating and Security course, I demonstrated in class how we can exploit a web site that is vulnerable to " +
            "SQL injection attack my building web site that does not follow safe PHP-MySQL coding standards. I used Bootstrap to give my web site a " +
            "aesthetically pleasing appearance. In addition to demonstrating my SQL injection attacks, I also demonstrated what steps we can take to prevent " +
            "SQL injection attacks.",
        "images": []
    }]
};

// Encapsulate display() within the projects object
projects.display = function() {

    var prjTitle;
    var prjDate;
    var prjDesc;
    var prjImage;
    var total_projects = projects._projects.length;

    for (var index = 0; index < total_projects; index++) {

        $("#projects").append(HTMLprojectStart);
        prjTitle = HTMLprojectTitle.replace("%data%", projects._projects[index].title);
        prjDate = HTMLprojectDates.replace("%data%", projects._projects[index].dates);
        prjDesc = HTMLprojectDescription.replace("%data%", projects._projects[index].description);
        $(".project-entry:last").append(prjTitle);
        $(".project-entry:last").append(prjDate);
        $(".project-entry:last").append(prjDesc);

        if (projects._projects[index].images !== null) {
            prjImage = HTMLprojectImage.replace("%data%", projects._projects[index].images);
            $(".project-entry:last").append(prjImage);
        }
    }



};

// Call the projects display method of testing
projects.display();

/*// Set and Display Project
if (projects !== null) {
    // Project 1 DST vision
    var dstTitle = HTMLprojectTitle.replace("%data%", projects.dst_vision.title);
    var dstDate = HTMLprojectDates.replace("%data%", projects.dst_vision.dates);
    var dstDesc = HTMLprojectDescription.replace("%data%", projects.dst_vision.description);
    $("#projects").append(HTMLprojectStart);
    $(".project-entry").append(dstTitle);
    $(".project-entry").append(dstDate);
    $(".project-entry").append(dstDesc);
    // Display project image if any
    if (projects.dst_vision.images !== "") {
        var dstProjPic = HTMLprojectImage.replace("%data%", projects.dst_vision.images);
        $(".project-entry").append(dstProjPic);
    }

    // Project 2 Vulnerable web application (vul_web_app)
    var vul_web_appTitle = HTMLprojectTitle.replace("%data%", projects.vulnerable_web_app.title);
    var vul_web_appDate = HTMLprojectDates.replace("%data%", projects.vulnerable_web_app.dates);
    var vul_web_appDesc = HTMLprojectDescription.replace("%data%", projects.vulnerable_web_app.description);
    $(".project-entry").append(vul_web_appTitle);
    $(".project-entry").append(vul_web_appDate);
    $(".project-entry").append(vul_web_appDesc);
    // Display project image if any
    if (projects.vulnerable_web_app.images !== "") {
        var vul_web_appProjPic = HTMLprojectImage.replace("%data%", projects.vulnerable_web_app.images);
        $(".project-entry").append(vul_web_appProjPic);
    }
}*/

// Education
var education = {
    "ipfw": {
        "name": "Indiana University Purdue University Fort Wayne",
        "location": "Fort Wayne, IN",
        "degree": "Bachelor of Science",
        "major": "Computer Science (Mathematics Minor)",
        "date": "January 2012 - June 2016",
        "url": "http://www.ipfw.edu/"
    }
};

// Set up and display the educations
if (education !== null) {
    // IPFW - Undergrad
    var ipfw_name = HTMLschoolName.replace("%data%", education.ipfw.name);
    var ipfw_degree = HTMLschoolDegree.replace("%data%", education.ipfw.degree);
    var ipfw_date = HTMLschoolDates.replace("%data%", education.ipfw.date);
    var ipfw_location = HTMLschoolLocation.replace("%data%", education.ipfw.location);
    var ipfw_major = HTMLschoolMajor.replace("%data%", education.ipfw.major);
    $("#education").append(HTMLschoolStart);
    $(".education-entry").append(ipfw_name);
    $(".education-entry").append(ipfw_degree);
    $(".education-entry").append(ipfw_date);
    $(".education-entry").append(ipfw_location);
    $(".education-entry").append(ipfw_major);
}

// Contacts
var contacts = {
    "mobile": "(260) 739-8352",
    "email": "sudipta.sharif@outlook.com",
    "github": "sudiptasharif",
    "location": "Fort Wayne, IN"
};

// Bio
var bio = {
    "name": "Sudipta Sharif",
    "role": "Software, Web and Android Mobile Application Developer",
    "welcomeMessage": "Hello All, welcome to my online Resume.",
    "contacts": contacts,
    "skills": ["Awesomeness", "Java", "C", "C++", "PHP", "SQL", "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Git", "MySQL", "phpMyAdmin"],
    "biopic": "images/park.jpg"
};

// Set up your name and role on the resume
if (bio.name !== "" && bio.role !== "") {
    HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
    HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(HTMLheaderRole);
    $("#header").prepend(HTMLheaderName);

}

// Set up your contacts
if (bio.contacts !== null) {
    HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(HTMLmobile);
    $("#topContacts").append(HTMLemail);
    $("#topContacts").append(HTMLgithub);
    $("#topContacts").append(HTMLlocation);
}

// Set up your biopic and welcome message and display them on web site
if (bio.biopic !== "") {
    HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(HTMLbioPic);
}
if (bio.welcomeMessage !== "") {
    HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(HTMLwelcomeMsg);
}


// 1) Write an if statement to check whether there
// are any skills in the bio object
// 2) If the if statement evaluated to true, .append()
// HTMLskillsStart to the div with id=header
// 3) Then .append() the skills to the element with id=skills
// using HTMLskills to format each skill.
if (bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);

    // Appending the skills
    var awesomeness = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(awesomeness);

    var java = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(java);

    var c = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(c);

    var cpp = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(cpp);

    var php = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(php);

    var sql = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(sql);

    var html, css, js, jq, bootstrap, git, mysql, phpMyAdmin;

    html = HTMLskills.replace("%data%", bio.skills[6]);
    css = HTMLskills.replace("%data%", bio.skills[7]);
    js = HTMLskills.replace("%data%", bio.skills[8]);
    jq = HTMLskills.replace("%data%", bio.skills[9]);
    bootstrap = HTMLskills.replace("%data%", bio.skills[10]);
    git = HTMLskills.replace("%data%", bio.skills[11]);
    mysql = HTMLskills.replace("%data%", bio.skills[12]);
    phpMyAdmin = HTMLskills.replace("%data%", bio.skills[13]);

    $("#skills").append(html);
    $("#skills").append(css);
    $("#skills").append(js);
    $("#skills").append(jq);
    $("#skills").append(bootstrap);
    $("#skills").append(git);
    $("#skills").append(mysql);
    $("#skills").append(phpMyAdmin);
}

// append internationalizeButton to the main div
$("#main").append(internationalizeButton);

// Create a function called inName() that takes in a string of two names and returns an internationalized
// version that looks so: Cameron PITTMAN
function inName(name) {

    var nameArr = name.trim().split(" ");
    var lastName = nameArr[1];
    var firstName = nameArr[0];

    lastName = lastName.toUpperCase();
    firstName = firstName.toLowerCase();

    var firstLetter = firstName.charAt(0).toUpperCase();
    firstName = firstName.replace(firstName.charAt(0), firstLetter);

    var fullName = firstName + " " + lastName;

    return fullName;
}
