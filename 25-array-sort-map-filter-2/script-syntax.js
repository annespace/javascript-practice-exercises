var anne = ["apple", "kiwi", "banana"];
anne.sort(function (a, b) {
  if (a < b) {
    return 1; // random 양의 숫자
  } else {
    return -1;
  }
});
console.log(anne); //[ 'kiwi', 'banana', 'apple' ]
