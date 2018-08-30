var quizNameInput = document.getElementById("quizname");
var marksInput = document.getElementById("marks");
var timeInput = document.getElementById("time");
var syllabusInput = document.getElementById("syllabus");
var instructionsInput = document.getElementById("instructions");

function getQuizIntroduction() {
  var quiz = {
    quizName: quizNameInput.value,
    marks: marksInput.value,
    time: timeInput.value,
    syllabus: syllabusInput.value,
    instructions: instructionsInput.value
  };

  localStorage.setItem("tempData", JSON.stringify(quiz));

  location = "addquestions.html";
}
