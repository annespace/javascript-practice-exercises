var car = ["Tesla", 80000, "white"];
var car2 = { name: "Tesla", price: [70000, 80000, 120000] }; // key : value

document.querySelector(".name").innerHTML = car2.name;
document.querySelector(".price").innerHTML = car2.price[1];
