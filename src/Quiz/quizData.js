import mercury from "../assets/planets/mercury.png";
import venus from "../assets/planets/venus.png";
import earth from "../assets/planets/earth.png";
import mars from "../assets/planets/mars.png";
import jupiter from "../assets/planets/jupiter.png";
import saturn from "../assets/planets/saturn.png";
import uranus from "../assets/planets/uranus.png";
import neptune from "../assets/planets/neptune.png";

const quizData = [
  {
    planet: "Mercury",
    img: mercury,
    question: "Which is the closest planet to the Sun?",
    options: ["Mercury", "Venus", "Earth"],
    answer: "Mercury",
  },
  {
    planet: "Venus",
    img: venus,
    question: "Which planet is the hottest?",
    options: ["Mercury", "Venus", "Mars"],
    answer: "Venus",
  },
  {
    planet: "Earth",
    img: earth,
    question: "Which planet supports life?",
    options: ["Mars", "Earth", "Venus"],
    answer: "Earth",
  },
  {
    planet: "Mars",
    img: mars,
    question: "Which planet is called the Red Planet?",
    options: ["Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    planet: "Jupiter",
    img: jupiter,
    question: "Largest planet in the solar system?",
    options: ["Earth", "Saturn", "Jupiter"],
    answer: "Jupiter",
  },
  {
    planet: "Saturn",
    img: saturn,
    question: "Which planet has rings?",
    options: ["Jupiter", "Saturn", "Uranus"],
    answer: "Saturn",
  },
  {
    planet: "Uranus",
    img: uranus,
    question: "Which planet rotates sideways?",
    options: ["Uranus", "Neptune", "Saturn"],
    answer: "Uranus",
  },
  {
    planet: "Neptune",
    img: neptune,
    question: "Farthest planet from the Sun?",
    options: ["Neptune", "Uranus", "Saturn"],
    answer: "Neptune",
  },
];

export default quizData;
