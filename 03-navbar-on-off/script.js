document
  .getElementsByClassName("navbar-toggler")[0]
  .addEventListener("click", function () {
    //document.getElementsByClassName("list-group")[0].classList.add("show");
    document.getElementsByClassName("list-group")[0].classList.toggle("show");
    //change add to toggle: show 가 있으면 제거, 없으면 추가
  });
// how to add class name in javascript? google it and get the answer.

// 또 다른 selector, css 문법 그대로 쓸 수 있는 selector. 맨 위에 요소 하나만 찾아줌
document.querySelector(".list-group");

// 또 다른 selector2, css 문법 그대로 쓸 수 있는 selector. 해당하는 모든 요소 다 찾아줌
document.querySelectorAll(".list-group-item");
document.querySelectorAll(".list-group-item")[1];
