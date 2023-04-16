/*
What is Event Bubbling? 
Event Bubbling is a concept in the DOM (Document Object Model). 
It happens when an element receives an event, 
and that event bubbles up (or you can say is transmitted or propagated) 
to its parent and ancestor elements in the DOM tree 
until it gets to the root element.
https://www.freecodecamp.org/news/event-bubbling-in-javascript/
*/

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

// /* Event Bubbling */
// document.querySelector(".black-bg").addEventListener("click", function () {
//   document.querySelector(".black-bg").classList.remove("show-modal");
// });

document.querySelector(".black-bg").addEventListener("click", function (e) {
  /* 유용한 이벤트 관련 함수들  */
  // e.target; //유저가 실제로 누른 것
  // e.currentTarget; //EventListener 달린 곳
  // this; //상동
  // e.preventDefault(); //이벤트 기본동작 막아줌
  // e.stopPropagation(); //내 상위요소로 이벤트 버블링 막아줌
  if (e.target == document.querySelector(".black-bg")) {
    document.querySelector(".black-bg").classList.remove("show-modal");
  }
});

function validateForm() {
  var a = document.getElementById("email").value;
  var b = document.forms["Form"]["answer_b"].value;
  if (a == null || a == "" || b == null || b == "") {
    alert("Please Fill In All Required Fields");
    return false;
  }
}
