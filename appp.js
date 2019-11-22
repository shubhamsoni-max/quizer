const questionToShow = document.querySelector(".question");
const optionToShow = document.querySelector(".option");

const ques = [
  {
    questions: ["Who was the first prime minister in india?"],
    options: [
      " Pt. jawahar lal nehru",
      " Dr.Rajendra Prasad",
      " Narendra modi",
      " Dr. manmohan singh"
    ],
    answer: [" Pt. jawahar lal nehru"]
  },
  {
    questions: ["Who was the first president in india?"],
    options: [
      " Pt. jawahar lal nehru",
      " Dr.Rajendra Prasad",
      " Narendra modi",
      " Dr. manmohan singh"
    ],
    answer: [" Dr.Rajendra Prasad"]
  },
  {
    questions: ["Who was the first lok sabha speakar of india?"],
    options: [
      " Sachidanand sinha",
      " Dr.Rajendra Prasad",
      " P.V. mavlankar",
      " Sushma swaraj"
    ],
    answer: [" P.V. mavlankar"]
  },
  {
    questions: ["Who was the first king of mughal dynesty ?"],
    options: [
      " Babar",
      " Akbar",
      " Humayu",
      " shahjaha"
    ],
    answer: [" Babar"]
  },
  {
    questions: ["Who was the founder of Jainism ?"],
    options: [
      " Rishbhadev",
      " Neminath",
      " Parsavanatha",
      " Vardhaman Mahaviraya"
    ],
    answer: [" Rishbhadev"]
  },
  {
    questions: ["At which place Mohenjodaro is situated?"],
    options: [
      " Punjab",
      " Afghanistan",
      " Gujarat",
      " Sindh Province of Pakistan"
    ],
    answer: [" Sindh Province of Pakistan"]
  },
];
// rander question -
let currentQuestion = 0;
let correctAnswer;
let numberOfCorrectAnswer = 0;

function questionRander(currentq) {
  questionToShow.innerHTML = ques[currentq].questions;
  ques[currentq].options.forEach(opt => {
    optionToShow.insertAdjacentHTML("beforeend", `<li>${opt}</li>`);
  });
  correctAnswer = ques[currentq].answer;
}
questionRander(currentQuestion);

let userSelectedOption;

//chose any one option-
function clickedOptionWhite() {
  let everyli = document.querySelectorAll("li");
  everyli.forEach(li => {
    li.addEventListener("click", e => {
      everyli.forEach(innerLi => {
        innerLi.classList.remove("li-color");
      });
      e.target.classList.add("li-color");
      userSelectedOption = e.target.textContent;
    });
  });
}
clickedOptionWhite();

// Show next question

let button = document.querySelector(".btn");
button.addEventListener("click", () => {

  if(userSelectedOption != null){
    if(correctAnswer == userSelectedOption){
      numberOfCorrectAnswer++;
    }
    currentQuestion++;
    if (currentQuestion < ques.length) {
      optionToShow.innerHTML = "";
      questionRander(currentQuestion);
    } else {
      optionToShow.innerHTML = "";
      button.style.display = "none";
      questionToShow.innerHTML = `Your score is ${numberOfCorrectAnswer} / ${ques.length}`;
    }
    clickedOptionWhite();
    userSelectedOption = null;
  }else{
    alert('You need to select an option first ')
  }
  
});


