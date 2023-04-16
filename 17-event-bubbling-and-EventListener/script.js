const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

// for (let i = 0; i < 3; i++) {
//   buttons[i].addEventListener("click", function () {
//     openTap(i);
//   });
// }

// 탭 기능 다르게 만들기 -> one EventListener
// Memory: More event listeners means more memory consumption as the browser has to listen to more events.
// event bubbling 을 알고있으면 EventListener 많이 필요 없음 - ram 절약
document.querySelector(".list").addEventListener("click", function (e) {
  if (e.target == buttons[0]) {
    openTap(0);
  } else if (e.target == buttons[1]) {
    openTap(1);
  } else if (e.target == buttons[2]) {
    openTap(2);
  }
});

function openTap(number) {
  buttons.forEach((element) => {
    element.classList.remove("orange");
  });
  buttons[number].classList.add("orange");
  contents.forEach((element) => {
    element.classList.remove("show");
  });
  contents[number].classList.add("show");
}
