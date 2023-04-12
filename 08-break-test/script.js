var click = 0;
document.querySelector("#send-answer").addEventListener("click", function () {
  click++;
  var a = document.querySelector("#answer").value;
  if (a == "1950") {
    alert("correct!");
  } else if (click >= 3 && a != "1950") {
    alert("ew");
  }
});
