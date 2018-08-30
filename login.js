var email, pas;
var user = localStorage.getItem("auth");

function getINFO() {
  email = document.getElementById("email").value;
  pas = document.getElementById("passs").value;
  console.log(email + " \n" + pas);
  if (email == "" && pas == "") {
    alert("please enter all the fields .. ");
  } else {
    localStorage.setItem("emaill", email);
    localStorage.setItem("pass", pas);
  }
}

function onload() {
  document.getElementById("signup").style.display = "none";
}
function show() {
  document.getElementById("signup").style.display = "block";
  window.location = "#signup";
}

function check() {
  var email2 = document.getElementById("email1").value;
  var pas2 = document.getElementById("passs1").value;
  var checkemail = localStorage.getItem("emaill");
  var checkpass = localStorage.getItem("pass");
  if (email2 == checkemail && pas2 == checkpass) {
    alert("congrats !!!!@!!!!!");
    //
    window.open("landing.html");
    //  document.getElementById("land").innerText="WELCOME + "+ email2 ;
  } else {
    alert("username or password is  not correct !!! ");
  }
}

function display() {
  //  alert("hello");
  document.getElementById("land1").innerText =
    "WELCOME  " + localStorage.getItem("emaill").toUpperCase();
}

function signup() {
  var checkUSER = false;
  var usersOBJ = {
    emailID: document.getElementById("email").value,
    passW: document.getElementById("passs").value
  };
  if (user === null) {
    user = [];
  } else {
    user = JSON.parse(user);
  }

  for (var i = 0; i < user.length; i++) {
    if (user[i].emailID === document.getElementById("email").value) {
      checkUSER = true;
    }
  }
  if (checkUSER === true) {
    alert("user already exist !");
  } else {
    user.push(usersOBJ);
    user = JSON.stringify(user);
    localStorage.setItem("auth", user);

    document.getElementById("email").value = "";
    document.getElementById("passs").value = "";

    alert(" registerd user !!");
    window.location = "index.html";
  }
}

function check2() {
  if (user === null) {
    alert("please register yourself first");
  } else {
    user = JSON.parse(user);
  }
  for (var i = 0; i < user.length; i++) {
    if (
      user[i].emailID === document.getElementById("email1").value &&
      user[i].passW == document.getElementById("passs1").value
    ) {
      alert("congrats !!!!@!!!!!");
      //
      window.location = "homepage.html";
    }
  }
}
