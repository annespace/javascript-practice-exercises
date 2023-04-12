document.getElementById("close").addEventListener("click", function () {
  document.getElementById("alert").style.display = "none";
});

function openAlert1(value) {
  document.getElementById("alert").innerHTML = value;
  document.getElementById("alert").style.display = "block";
}
