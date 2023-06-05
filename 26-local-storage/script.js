//실제 서비스면 데이터를 서버로 보내고 -> 데이터베이스에 영구 저장
var products = [
  { id: 0, price: 79, title: "Mini Sundress" },
  { id: 1, price: 159, title: "Maxi Ruffle Sundress" },
  { id: 2, price: 119, title: "Maxi Sundress" },
];

/* 데이터를 저장하기 위한 가장 쉬운 공간 - 변수
변수의 단점? 페이지를 새로고침 할 때마다 리셋됨
데이터를 영구적으로 저장하기 위해서 변수는 적합하지 않고,
데이터를 반영구적으로 저장 -> browser 내 저장 공간 이용
localStorage, sessionStorage - > key : value 형태로 저장 
IndexedDB -> 구조화된 대용량데이타 저장 
Cookies -> 보통 로그인정보 저장
Cache Storage -> 웹사이트 접속 시, html css js 새로 다운받는게 아니라 하드에 저장

*/
var a = 0;

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
