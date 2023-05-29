document
  .querySelectorAll(".form-select")[0]
  .addEventListener("input", function () {
    var value = document.querySelectorAll(".form-select")[0].value;
    //유저가 값을 변경할 때마다 이벤트가 실행되어야 함
    if (value == "Sundress") {
      document
        .querySelectorAll(".form-select")[1]
        .classList.remove("form-hide");
    } else {
      document.querySelectorAll(".form-select")[1].classList.add("form-hide");
    }
  });
