function onload() {
    var getData = JSON.parse(localStorage.getItem('quizesReal'));
    var getList=document.getElementById('list');
    var text=document.createElement('LI');
    //var value=
    console.log (getData);
    if (getData !=null) {
        for (var i = 0; i < getData.length; i++) {
            console.log(getData[i]['quizName']);
             var text=document.createElement('LI');
             var anchor=document.createElement('a');
    var value=document.createTextNode(getData[i]['quizName'].toUpperCase());
   
    anchor.appendChild(value);
    anchor.setAttribute("href","#quizdisplay");
   anchor.setAttribute("onClick","doQuiz(this)");
     text.appendChild(anchor);

    getList.appendChild(text);
        }

    }
    else if(getData ==null) {

    document.getElementById("details").innerHTML="NO Quizes avialable ,please create a new quiz";
    }

document.getElementById("takequiz").style.display="none";
document.getElementById("question").style.display="none";
 document.getElementById("quizdisplay").style.display="none";
  document.getElementById("result").style.display="none";
}
var quizSelector;

function doQuiz(param){
    console.log(param.innerHTML);
    
     var value=JSON.parse(localStorage.getItem("quizesReal"));
    console.log(value);
    console.log(value[0]["questions"]);
    console.log(value[0]["questions"][0]["question"]);
    console.log(value[0]["questions"][0]["options"][0]["option"]);
    console.log(value[0]["questions"][0]["options"][1]["option2"]);

 for(var i=0;i<value.length;i++){
     if(value[i].quizName.toLowerCase()==param.innerHTML.toLowerCase()){
quizSelector=i;
console.log(quizSelector);
break;
     }
 }
    DisplayQuizDetails();
    

}

function DisplayQuizDetails(){
    document.getElementById("quizdisplay").style.display="block";
  var value=JSON.parse(localStorage.getItem("quizesReal"));
  console.log("quiz details !!");
  console.log(value[quizSelector].quizName);
  console.log(value[quizSelector].syllabus);
   console.log(value[quizSelector].time);
    console.log(value[quizSelector].instructions);
//var name=document.createElement("H2");
//var text=document.createTextNode("Quiz Name : "+value[quizSelector].quizName);
//name.appendChild(text);
//document.getElementById("quizdisplay").appendChild(name);
document.getElementById("qname").innerHTML="Quiz Name : "+value[quizSelector].quizName.toUpperCase();
document.getElementById("syallbus").innerHTML="Syllabus : "+value[quizSelector].syllabus;
document.getElementById("time").innerHTML="Duration : "+value[quizSelector].time;
document.getElementById("instruct").innerHTML="Instructions : "+value[quizSelector].instructions;
document.getElementById("takequiz").style.display="block";

}

function questions(){
     var value=JSON.parse(localStorage.getItem("quizesReal"));
     
     document.getElementById("ques").innerHTML="Q: "+value[quizSelector]["questions"][0]["question"];
document.getElementById("list1").innerText=value[quizSelector]["questions"][0]["options"][0]["option1"];
document.getElementById("list2").innerText=value[quizSelector]["questions"][0]["options"][1]["option2"];
console.log(value[quizSelector]["questions"].length);
document.getElementById("question").style.display="block";
questionChanger=0;
marks=0;
document.getElementById("res").innerHTML="";
document.getElementById("result").style.display="none";
document.getElementById("quizdisplay").style.display="none";
     // console.log(value[0]["questions"][0]["question"]);
     // console.log(value[0]["questions"][0]["options"][0]["option"]);
    //console.log(value[0]["questions"][0]["options"][1]["option2"]);
// document.getElementById("red").checked;

}
var questionChanger=0;
function change(){
       var value=JSON.parse(localStorage.getItem("quizesReal"));
       var questionLimit=value[quizSelector]["questions"].length;
        marking();
       if(questionChanger < questionLimit-1){
           questionChanger++;
    document.getElementById("ques").innerHTML="Q: "+value[quizSelector]["questions"][questionChanger]["question"];
    document.getElementById("list1").innerText=value[quizSelector]["questions"][questionChanger]["options"][0]["option1"];
    document.getElementById("list2").innerText=value[quizSelector]["questions"][questionChanger]["options"][1]["option2"];
       }
        else{
            document.getElementById("question").style.display="none";
             document.getElementById("result").style.display="block";
            document.getElementById("res").innerHTML="You Have Correctly Answered "+marks +"\n Out of "+value[quizSelector]["marks"]+" Questions";
            document.getElementById("quizdisplay").style.display="none";
            window.location="#result";
        }
       
}
var marks=0;

function marking(){
    var value=JSON.parse(localStorage.getItem("quizesReal"));
 //   va
    var questionLimit=value[quizSelector]["questions"].length;
   //. alert(value[quizSelector]["questions"][questionChanger]["options"][0]["correct"]);
    //alert(document.getElementById("op1").checked );
    var option1=value[quizSelector]["questions"][questionChanger]["options"][0]["correct"];
    var option2=value[quizSelector]["questions"][questionChanger]["options"][1]["correct"] ;
//alert(option1);
//alert(option2);
if(questionChanger<questionLimit){

 if( option1.toLowerCase() == "true"  && document.getElementById("op1").checked == true ){

console.log("hello world")
marks++;
//alert(marks);
    }

else if(option2.toLowerCase() == "true" && document.getElementById("op2").checked == true)
{
    marks++;
//alert(marks);

}
}

}