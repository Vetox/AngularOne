import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularOne';

  name = 'Karthikeyan M';

  profileImg = "assets/profileIcon.png";
  faceIcon = "assets/faceIcon.png";
  skillsIcon = "assets/skillsIcon.png";

  description = "My name is Karthikeyan. Inonvative optimized solution seeker. Excited to be at the development phase of my new career. I am ambitious, adventurous and other nice adjectives.";

  Profile = {
    name: 'Karthikeyan M',
    skillOne: {
      name: 'Java',
      score: 90
    },
    skillTwo: {
      name: 'Javascript',
      score: 75
    },
    skillThree: {
      name: 'CSS',
      score: 50
    },
    skillFour: {
      name: 'Angular',
      score: 40
    }
  };

  addSkills = {
    one: {
      name: "Project Management",
      score: 25
    },
    two: {
      name: "Recruitment",
      score: 30
    },
    three: {
      name: "editing",
      score: 75
    },
    four: {
      name: "Fundraising",
      score: 70
    }
  };

  experience = [
    { company: "Company 1", description: "Description of work at company 1" },
    { company: "Company 2", description: "Description of work at company 2" },
    { company: "Company 3", description: "Description of work at company 3" },
    { company: "Company 4", description: "Description of work at company 4" }
  ];

  education = [
    { cert: "BTech Information Technology", description: "Description of College" },
    { cert: "Higher Secondary School", description: "Description of 12th School" },
    { cert: "SSLC", description: "Description of 10th School" }
  ];

  projects = [
    {where:"BTech Major Project", description:"Description of College Major Project"},
    {where:"School Project", description:"Description of Science Fair Project"}
  ];

}
