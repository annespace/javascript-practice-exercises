document.getElementById("nav1").addEventListener("click", function () {
  document.querySelectorAll(".expandable")[0].style.height = "30px";
  document.querySelectorAll(".expandable")[1].style.height = "0px";
});

document.getElementById("nav2").addEventListener("click", function () {
  document.querySelectorAll(".expandable")[0].style.height = "0px";
  document.querySelectorAll(".expandable")[1].style.height = "30px";
});

//분명 더 깔끔한 코드가 있을텐데.. DRY
