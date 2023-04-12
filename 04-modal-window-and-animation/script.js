/* 3. js code */
document.getElementById("signin").addEventListener("click", function () {
  // document.getElementsByClassName("black-bg")[0].classList.add("show-modal");
  document.querySelector(".black-bg").classList.add("show-modal");
});

document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.remove("show-modal");
});
