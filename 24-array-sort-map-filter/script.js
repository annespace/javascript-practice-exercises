//products array를 정렬한다. -> products에 있던걸로 html을 다시 생성한다.
var products = [
  { id: 0, price: 79, title: "Mini Sundress" },
  { id: 1, price: 159, title: "Maxi Ruffle Sundress" },
  { id: 2, price: 119, title: "Maxi Sundress" },
];

products.forEach((a, i) => {
  //a = products 안에 있는 하나 하나의 데이티
  var template = `
        <div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${a.title}</h5>
          <p>Price : ${products[i].price}</p>
        </div>`;
  $(".row").append(template);
});

$("#more").click(function () {
  $.get("http://codingapple1.github.io/js/more1.json").done((data) => {
    console.log(data); //console 출력해서 확인
    // 카드 layout 생성: 받아온 data수에 맞게 잘 생성됨!
    data.forEach((a, i) => {
      var template = `
    <div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100" />
      <h5>${data[i].title}</h5>
      <p>Price : ${data[i].price}</p>
    </div>`;
      $(".row").append(template);
    });
  });
});

// 여기부터!
$("#price").click(function () {
  products.sort(function (a, b) {
    // a = {}, b = {}
    // return a - b; // = {} - {}, object 두개 빼봤자 아무것도 안 나옴
    return a.price - b.price;
  });
  console.log(products); // 항상 확인 - 정렬이 됐는지 확인해보자
  //console 내 가격 순 정렬은 잘 됐지만, html은 그대로임
});
