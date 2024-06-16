// document.addEventListener('DOMContentLoaded', function() {

// const wrap = document.getElementsByClassName('section_wrap')[0];
// const container = document.getElementsByClassName('section');
// let page = 0;
// const lastPage = container.length - 1;

// window.addEventListener('wheel', (event) => {
//   event.preventDefault(); // 새로고침 막기
//   // deltaY -> 상하 스크롤량 반환 (읽기 전용 속성, 최신브라우저 지원 사파리X)
//   if(event.deltaY > 0){
//     console.log('올라간다');
//     page++;
//   }
//   if(event.deltaY < 0){
//     page--;
//   }
//   if(page < 0){
//     page = 0;
//   }
//   if(page > lastPage){
//     page = lastPage;
//   }
//   console.log(event.deltaY);
//   wrap.style.top = page * -100 + 'vh';
//   // wrap 클래스에 있는 css top 속성값을 변경시키는 코드
//   // 현재 보여지는 페이지에 따라서 +- 100vh 를 이동시킨다.
// }, {passive: false}); // passive 디폴트 기능 제거 - 스크롤
// });


// document.addEventListener('DOMContentLoaded', function() {

//   const nav = document.querySelector('.headerSection');
//   const heigth_line = 700;
//   window.addEventListener('wheel',(e)=>{
//     if(e.scrollY>=window.innerHeight){
//       nav.style.visibility ='';
//       console.log('생겨나요');
//     }
//     if(e.screenY <heigth_line){
//       nav.style.visibility ='hidden';
//       console.log('사라져요');
//       console.log(e.deltaY);
//       console.log(window.innerHeight);
//       console.log(window.scrollY);
//     }
//   })
// });

document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.headerSection');
  const height_line = innerHeight - 1; // 특정 높이값

  window.addEventListener('scroll', () => {
    if (window.scrollY >= height_line) {
      nav.style.visibility = 'visible';
      nav.style.opacity = '1';
      nav.style.transform = 'translateY(0)';
      // opacity: 1;
      // transform: translateY(0);
      console.log('생겨나요');
    } else {
      nav.style.visibility = 'hidden';
      nav.style.opacity = '0';
      nav.style.transform = 'translateY(-100%)';
    }
  });
});