/* 
서버가 없기 때문에 데이터를 저장할 다른 공간을 알아보자.
데이터를 저장하기 위한 가장 쉬운 공간 - 변수
var a = 0;
변수의 단점? 페이지를 새로고침 할 때마다 0 리셋됨
데이터를 영구적으로 저장하기 위해서 변수는 적합하지 않고,
데이터를 반영구적으로 저장 -> browser 내 저장 공간 이용

localStorage, sessionStorage - > key : value 형태로 저장. 5mb 문자 데이터만 저장 가능, object or array ㄴㄴ
localStorage 는 사이트 재접속해도 영구적으로 유지, 유저가 브라우저를 청소하지 않는 이상 
sessionStorage는 사이트(브라우저) 나가면 자동 삭제
IndexedDB -> 구조화된 대용량데이타 저장 
Cookies -> 보통 로그인정보 저장
Cache Storage -> 웹사이트 접속 시, html css js 새로 다운받는게 아니라 하드에 저장 

*/

//localStorage에 데이타 저장하는 법
localStorage.setItem("Name", "Anne");
//localStorage에 저장해 놨던 데이타를 뽑고 싶다
localStorage.getItem("Name");
//localStorage.removeItem("Name");

//localStorage에 array를 저장하는 편법 -> array/object를 JSON으로 바꾸면 저장가능
var arr = [1, 2, 3];
var newArr = JSON.stringify(arr); //JSON화, 문자화를 하고 싶은 자료를 괄호 안에 집어넣는다.
localStorage.setItem("Num", newArr);
var newArrResult = localStorage.getItem("Num");
console.log(newArrResult); //array 아님! 문자임. console.log(newArrResult[0]) 해봐.
console.log(JSON.parse(newArrResult));

//sessionStorage 동일
