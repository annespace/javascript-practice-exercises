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

/** https://stackoverflow.com/questions/3937513/javascript-validation-for-empty-input-field
 */
function validateForm() {
  var a = document.getElementById("email").value; // .value < 사용자가 input에 입력한 값을 출력해줌
  var b = document.forms["Form"]["answer_b"].value; // googled it
  if (a == null || a == "" || b == null || b == "") {
    alert("Please Fill In All Required Fields");
    return false;
  }
}

/** input 에서만 발생하는 input events: input, change */
document.getElementById("email").addEventListener("input", function () {
  console.log("test input"); //input에 입력한 값이 바뀔 때마다 발생 (= 뭐 하나 입력할때마다)
});

document.getElementById("email").addEventListener("change", function () {
  console.log("test change"); //입력한 값이 바뀌고 나서(!) 포커스를 잃을 때 발생 (= 커서를 다른 데 찍을 때)
});
