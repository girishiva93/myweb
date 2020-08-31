function validation() {
  var fullName = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const number = document.getElementById("number").value;
  const message = document.getElementById("message").value;
  const error = document.getElementsByClassName("error");
  // while (fullName.length != 1) {
  //   error[0].style.display = "none";
  // }
  if (fullName == "" || fullName.length <= 4) {
    error[0].style.display = "block";
  } else {
    error[0].style.display = "none";
  }
  if (email == "" || email.length <= 9) {
    error[1].style.display = "block";
  } else {
    error[1].style.display = "none";
  }
  if (subject == "") {
    error[2].style.display = "block";
  } else {
    error[2].style.display = "none";
  }
  if (number == "" || number.length < 10) {
    error[3].style.display = "block";
  } else {
    error[3].style.display = "none";
  }
  if (message == "" || message.length <= 50) {
    error[4].style.display = "block";
  } else {
    error[4].style.display = "none";
  }
}

validation();
