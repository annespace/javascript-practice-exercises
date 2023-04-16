const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

document.querySelector(".list").addEventListener("click", function (e) {
  openTap(e.target.dataset.id);
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
