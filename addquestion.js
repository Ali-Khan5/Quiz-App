// var quizes = [
//     {
//         quizName: 'html5',
//         quizTime: 'abc',
//         marks: 'abc',
//         instructions: 'abc',

//         questions: [
//             {
//                 question: 'abc',
//                 options: [
//                     {
//                         option1: 'xyz',
//                         correct: true
//                     },
//                     {
//                         option1: 'abc',
//                         correct: false
//                     }
//                 ],
//                 marks: 5

//             },
//             {

//             },
//             {

//             },
//             {

//             }

//         ]

//     },

// ]

var questionInput = document.getElementById("questions");
var option1Input = document.getElementById("option1");
var option1CorectInput = document.getElementById("option1Corect");
var option2Input = document.getElementById("option2");
var option2CorectInput = document.getElementById("option2Corect");
var marksInput = document.getElementById("marks");

function addQuestion(param) {
  var question = {
    question: questionInput.value,
    options: [
      {
        option1: option1Input.value,
        correct: option1CorectInput.value
      },
      {
        option2: option2Input.value,
        correct: option2CorectInput.value
      }
    ],
    marks: marksInput.value
  };
  var quizdata = localStorage.getItem("tempData");
  if (quizdata == null) {
    location = "index.html";
  } else {
    quizdata = JSON.parse(quizdata);
  }

  if (!quizdata.questions) {
    quizdata.questions = [];
  }
  quizdata.questions.push(question);
  console.log(quizdata);
  localStorage.setItem("tempData", JSON.stringify(quizdata));

  questionInput.value = "";
  option1Input.value = "";
  option1CorectInput.value = "";
  option2Input.value = "";
  option2CorectInput.value = "";
  marksInput.value = "";

  if (param == "save") {
    var quizes = localStorage.getItem("quizesReal");
    if (quizes == null) {
      quizes = [];
    } else {
      quizes = JSON.parse(quizes);
    }
    quizes.push(quizdata);
    localStorage.setItem("quizesReal", JSON.stringify(quizes));
    localStorage.removeItem("tempData");
    location = "quizlist.html";
    console.log(quizes);
  }
}
