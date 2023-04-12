console.log(vat(55555));
function vat(a) {
  //소수점 있는 숫자연산..컴퓨터는 수를 binary로 바꿔서 계산하기 때문에 소수점 연산 시 아주 작은 오차가 남.
  var num = (a * 1.1).toFixed(1); // 고쳐주자. 소수점 반올림(몇자리). 대신 문자로 변환됨;
  /* 출력 시, black - char | color - num */
  return parseFloat(num); //고쳐주자
}
