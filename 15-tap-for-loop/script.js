/*
      1. first button 누르면
      2. 모든 버튼에 붙은 orange class 제거
      3. first button에 orange class 추가
      4. 모든 div에 붙은 show class 제거
      5. first div 에 show class 추가
      */

// 자주 쓰는 셀렉터 변수에 넣어두기
const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

//  var & let 은 범위의 차이가 있음
for (let i = 0; i < 3; i++) {
  buttons[i].addEventListener("click", function () {
    buttons.forEach((element) => {
      element.classList.remove("orange");
    });
    buttons[i].classList.add("orange");
    contents.forEach((element) => {
      element.classList.remove("show");
    });
    contents[i].classList.add("show");
  });
}

// buttons[0].addEventListener("click", function () {
//   buttons.forEach((element) => {
//     element.classList.remove("orange");
//   });
//   buttons[0].classList.add("orange");
//   contents.forEach((element) => {
//     element.classList.remove("show");
//   });
//   contents[0].classList.add("show");
// });

// buttons[1].addEventListener("click", function () {
//   buttons.forEach((element) => {
//     element.classList.remove("orange");
//   });
//   buttons[1].classList.add("orange");
//   contents.forEach((element) => {
//     element.classList.remove("show");
//   });
//   contents[1].classList.add("show");
// });

// buttons[2].addEventListener("click", function () {
//   buttons.forEach((element) => {
//     element.classList.remove("orange");
//   });
//   buttons[2].classList.add("orange");
//   contents.forEach((element) => {
//     element.classList.remove("show");
//   });
//   contents[2].classList.add("show");
// });

// https://codingbeautydev.com/blog/javascript-remove-class-from-multiple-elements/
