import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";
import three from "../assets/svg/projects/three.svg";
import four from "../assets/svg/projects/four.svg";
import five from "../assets/svg/projects/five.svg";
import six from "../assets/svg/projects/six.svg";
import seven from "../assets/svg/projects/seven.svg";
import eight from "../assets/svg/projects/eight.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Concert and Ticket Management System",
    projectDesc:
      "We can perform CRUD operations with the concert data. We can book tickets for the concerts available in the database. It includes login and registration for normal users and admin privileges. It is connected to a MySQL database.",
    tags: ["React", "NodeJS", "Express", "MySQL", "HTML", "JavaScript"],
    code: "https://github.com/om-javheri/Concert-and-ticket-management-system",
    demo: "https://github.com/om-javheri/Concert-and-ticket-management-system",
    image: one,
  },
  {
    id: 2,
    projectName: "G3: Guessing the Guess Game",
    projectDesc:
      "A game where players guess a number from 1 to 100 within 7 chances. Any number of players can play, and everyone’s score card is displayed at the end.",
    tags: ["C"],
    image: two,
  },
  {
    id: 3,
    projectName: "TextUtilities Web Application",
    projectDesc:
      "A web application for various text utilities like removing unwanted spaces, creating capitalized text, converting text to upper or lower case, and vice versa.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    code: "https://om-javheri.github.io/TextUtils-react/#",
    demo: "https://om-javheri.github.io/TextUtils-react/#",
    image: three,
  },
  {
    id: 4,
    projectName: "Student Management System",
    projectDesc:
      "We can perform CRUD operations with the student data. There are separate authorizations for admin and students with different dashboards for both. It includes login and registration for student users and admin (teachers) privileges. It is connected to a MySQL database.",
    tags: [
      "React",
      "NodeJS",
      "Express",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],
    image: four,
    code:"https://github.com/om-javheri/Student-Management-Deploy-Final"
    ,demo:"https://github.com/om-javheri/Student-Management-Deploy-Final"
  },
];
