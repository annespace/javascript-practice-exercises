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
       </div>`;
      $(".row").append(template);
    });
  });
});

// 여기부터!
/* review:
1. 정렬하고
2. html 지우고
3. html 다시 생성 */
$("#sort1").click(function () {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });

  $(".row").html("");

  products.forEach((a, i) => {
    var template = `
             <div class="col-sm-4">
               <img src="https://via.placeholder.com/600" class="w-100" />
               <h5>${a.title}</h5>
               <p>Price : ${products[i].price}</p>
             </div>`;
    $(".row").append(template);
  });
});

$("#filter").click(function () {
  var filteredProducts = products.filter(function (a) {
    return a.price < 120;
  });
  console.log(filteredProducts);

  $(".row").html("");

  filteredProducts.forEach((a, i) => {
    var template = `
             <div class="col-sm-4">
               <img src="https://via.placeholder.com/600" class="w-100" />
               <h5>${filteredProducts[i].title}</h5>
               <p>Price : ${filteredProducts[i].price}</p>
             </div>`;
    $(".row").append(template);
  });
});
