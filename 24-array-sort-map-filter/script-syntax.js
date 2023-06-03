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
