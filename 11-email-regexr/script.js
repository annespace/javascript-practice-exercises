document
  .getElementsByClassName("navbar-toggler")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("list-group")[0].classList.toggle("show");
  });

document.getElementById("signin").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.add("show-modal");
});

document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.remove("show-modal");
});

function validateForm() {
  var a = document.getElementById("email").value;
  var b = document.forms["Form"]["answer_b"].value;
  if (a == null || a == "" || b == null || b == "") {
    alert("Please Fill In All Required Fields");
    return false;
  }
  if (/\S+@\S+\.\S+/.test(a) == false) {
    alert("invalid email address format");
    return false;
  }
  if (/[A-Z]/.test(b) == false) {
    alert("a minimum of 1 upper case letter");
    return false;
  }
}
