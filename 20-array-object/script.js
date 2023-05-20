var car = ["Tesla", 80000, "white"];
var car2 = { name: "Tesla", price: [70000, 80000, 120000] }; // key : value
console.log(car.sort()); //array 순서대로 자료 저장; 정렬 가능 number-uppercase-lowercase
console.log(car2["name"]);
console.log(car2.price); //object 이름 붙여서 자료 저장 - 순서 개념 x
console.log(car2.price[0]);
document.querySelector(".name").innerHTML = car2.name;
