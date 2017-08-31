/*
This is empty on purpose! Your code to build the resume will go here.
 */

/**
*  This is the bio object for personal details such as name, mobile number etc...
*
*/

var bio = {
  "name": "Ozgun Balaban",
  "role": "Architect, Engineer",
  "contacts": {
    "mobile": "+65 84897189",
    "email": "ozgunbalaban@yahoo.com",
    "github": "AlpinistPanda",
    "twitter": "@ozgunbalaban",
    "location": "Singapore"
  },
  "welcomeMessage": "Hello",
  "skills": [
    "Java", "JavaScript", "PHP"
  ],
  "biopic" : "images/fry.jpg",
  // display function to show all the info
  display: function(){

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);


    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedPic, formattedWelcome, HTMLskillsStart);


    bio.skills.forEach(function(skill){
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    });
  }
};

bio.display();

/**
 *  This is the education object for education details schools, online courses
 *
 */

var education = {

  "schools": [
    {
       "name": "Bilkent University",
       "location": "Ankara, Turkey",
       "degree": "B.S.",
       "majors": ["EE"],
       "dates": "2000-2007",
       "url": "http://ee.bilkent.edu.tr/tr/"
   },
   {
     "name": "Bilkent University",
     "location": "Ankara, Turkey",
     "degree": "A.A.",
     "majors": ["IAED"],
     "dates": "2007-2009",
     "url": "http://iaed.bilkent.edu.tr/"
   },
   {
     "name": "Istanbul Technical University",
     "location": "Istanbul, Turkey",
     "degree": "M.S.",
     "majors": ["Architectural Design Computing"],
     "dates": "2009-2012",
     "url": "http://mimarliktabilisim.wixsite.com/adcomputing/"
   }
 ],
   "onlineCourses":[
     {
        "title": "Front End Web Development Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://www.udacity.com"
      }],
      display: function(){

        education.schools.forEach(function(school){
          $("#education").append(HTMLschoolStart);

          var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
          formattedSchoolName = formattedSchoolName.replace("#", school.url);
          var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
          var formattedSchoolNameAndDegree = formattedSchoolName + formattedSchoolDegree;
          var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
          var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);

          $(".education-entry:last").append(formattedSchoolNameAndDegree, formattedSchoolLocation, formattedSchoolDates);

          school.majors.forEach(function(major){
             var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
             $(".education-entry:last").append(formattedSchoolMajor);
          });
       });

       $("#education").append(HTMLonlineClasses);
       education.onlineCourses.forEach(function(course){
         $("#education").append(HTMLschoolStart);
         var formattedCourseName = HTMLonlineTitle.replace("%data%", course.title);
         formattedCourseName = formattedCourseName.replace("#", course.url);
         var formattedCourseSchool = HTMLonlineSchool.replace("%data%", course.school);
         var formattedCourseNameAndSchool = formattedCourseName + formattedCourseSchool;
         var formattedCourseDates = HTMLonlineDates.replace("%data%", course.dates);

         $(".education-entry:last").append(formattedCourseNameAndSchool, formattedCourseDates);
       });
      }
 };

education.display();


var work = {
  "jobs": [
    {
      "employer": "Future Cities Laboratory",
      "title": "PhD Researcher",
      "location": "Singapore",
      "dates": "2016-current",
      "description": "Big-data Informed Urban Design Group",
    },
    {
      "employer": "Sobek Travel",
      "title": "Mountain Guide",
      "location": "Nigde, Turkey",
      "dates": "2004-2009",
      "description": "Guided several mountain climbs to mountain ranges such as Taurus, Mt. Ararat etc...",
    }
  ],
    display: function(){
      work.jobs.forEach(function(job){

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerAndTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmployerAndTitle, formattedLocation, formattedDates, formattedDescription);
      });
    }
};

work.display();

var projects = {
  "projects":[
    {
      "title": "Smart Shopping Systems",
      "dates": "2007",
      "description": "This is a device to help shoppers with in grocery shops",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    }
  ],
  display: function(){
    projects.projects.forEach(function(project){

      $("#projects").append(HTMLprojectStart);
      //
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
      $(".project-entry:last").append(formattedProjectTitle, formattedProjectDate, formattedProjectDescription);

      // I dont have the image for the project so I put placeholder images
      project.images.forEach(function(image){
        var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedProjectImage);
      });
    });
  }

};

projects.display();

$("#mapDiv").append(googleMap);
