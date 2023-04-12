/** 자료 잠깐 저장하는 var
     var var_name = 넣을 자료; -> badge 클릭 횟수를 기록해보자 */
var count = 0;
document.querySelector(".badge").addEventListener("click", function () {
  count++;
  if (count % 2 == 1) {
    document.querySelector(".badge").innerHTML = "Light 🔄";
  } else if (count % 2 == 0) {
    document.querySelector(".badge").innerHTML = "Dark 🔄";
  }
});

/* let can not be redeclared
     코드 백줄 천줄 짜다보면 .. 같은 변수 이름을 또 사용할 수 있음 -> let 써서 방지 
     const can not be redeclared, + can not be reassigned
     */
