//실제 서비스면 데이터를 서버로 보내고 -> 데이터베이스에 영구 저장
var products = [
  { id: 0, price: 79, title: "Mini Sundress" },
  { id: 1, price: 159, title: "Maxi Ruffle Sundress" },
  { id: 2, price: 119, title: "Maxi Sundress" },
];

products.forEach((a, i) => {
  var template = `
              <div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100" />
                <h5>${a.title}</h5>
                <p>Price : ${products[i].price}</p>
                <button class="add">Add</button>
                <p></p>
  
              </div>`;
  $(".row").append(template);
});

//JQuery는 모든 버튼에 이벤트리스너 한번에 부착 가능. 제한 없음. 지바스크립트는 한 버튼당 하나의 이벤트 리스너
$(".add").click(function (e) {
  var title = $(e.target).siblings("h5").text();
  if (localStorage.getItem("cart") != null) {
    var total = JSON.parse(localStorage.getItem("cart"));
    total.push(title);
    localStorage.setItem("cart", JSON.stringify(total));
  } else {
    localStorage.setItem("cart", JSON.stringify([title]));
  }
});

$("#more").click(function () {
  $.get("http://codingapple1.github.io/js/more1.json").done((data) => {
    console.log(data);
    data.forEach((a, i) => {
      var template = `
          <div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100" />
            <h5>${data[i].title}</h5>
            <p>Price : ${data[i].price}</p>
            <button class="add">Add</button> 
            <p></p>   
          </div>`;
      $(".row").append(template);
    });
  });
});
