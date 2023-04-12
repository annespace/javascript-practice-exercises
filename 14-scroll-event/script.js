window.addEventListener("scroll", function () {
  console.log(window.scrollY); //유저가 얼마나 스크롤바 내렸나. px.
  //window.scrollTo(0, 100); //위에서부터 100px 위치로 강제이동.
  /*원래 순간이동 반짝 해야하는데.. bootstrap library 쓰고 있어서, 모든 scroll 관련 기능을 스무스하게 처리해줌
     css :root 로 원상복구 가능
     */
  // window.scrollBy(0, 100); //현재 위치로부터 100만큼 아래로 스크롤
  /* 버튼 누르면 100px 밑으로 내리는 기능 필요할 때 */
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector(".navbar-brand").style.fontSize = "20px";
  } else {
    document.querySelector(".navbar-brand").style.fontSize = "30px";
  }
});

/* 스크롤 다룰 때 주의점
   scroll event listener 안의 코드는 1초에 60번 이상 실행됨, 
   너무 많이 스면 컴퓨터에게 부담
   */
