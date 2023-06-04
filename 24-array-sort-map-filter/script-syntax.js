// .sort()는 문자 순 정렬이라 [2, 3, 40, 5, 7]
// 숫자 정렬을 위해 sort 안에 CallBack function, 아래 문법은 1,2,3 순 정렬임.
/*
1. a, b는 array 안의 자료임
2. return 값이 양수면 a를 오른쪽으로
3. return 값이 음수면 b를 오른쪽으로
오 나 이거 이해했당*/
var anne = [7, 3, 5, 2, 40];
var anne2 = ["a", "c", "b"];
anne.sort(function (a, b) {
  return a - b;
});
console.log(anne);

// array 자료 원하는 것만 필터, .filter() ex) 가격대 설정
var anne3 = [7, 3, 5, 2, 40];
// 신문법이기 때문에 .filter() 결과는 변수에 저장해서 써야함
var anne3final = anne3.filter(function (a) {
  //a: parameter, array 안에 있던 하나하나의 자료들
  return a < 4; //어떤 자료를 남길건지
});
console.log(anne3final);

/* .sort()는 원본 변형 O
.filter()는 원본 변형 X --> 그래서 변수에 담아서 써야함
 */

// array 자료 전부 변형하려면, .map() ex) WON - > CAD/USD 변경
var anne4 = [7, 3, 5, 2, 40];
var anne4final = anne4.map(function (a) {
  return a * 4;
});
console.log(anne4final);
