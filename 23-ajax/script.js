var products = [
  { id: 0, price: 79, title: "Mini Sundress" },
  { id: 1, price: 119, title: "Maxi Sundress" },
  { id: 2, price: 159, title: "Maxi Ruffle Sundress" },
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
