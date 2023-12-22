let current = 0;

let open = document.querySelector(".open");
let close = document.querySelector(".btn");
let modal = document.querySelector("#modalWrap");

let items = document.querySelectorAll(".tabMenu > li"); /* 선택지 가져오기 */

items.forEach((item)=>{ /* 배열로 저장되기 때문에 forEach로 각각 이벤트 등록 */
    item.addEventListener('click',()=>{
        items.forEach((e)=>{
            e.classList.remove('active');   /* 하나만 선택되도록 기존 효과 지우기 */
        });
        item.classList.add('active');   /* 선택한 개체만 효과 추가 */
    });
});



window.onload = function () {

    // 이미지 슬라이드 구현
    showSlides();
    init();

    // javascript 내용 작성
}

function showSlides() {

    // showSlides 함수 내용 작성
    let imgSlide = document.querySelectorAll("#imgSlide > a");

    for (let i = 0; i < imgSlide.length; i++) {
        imgSlide[i].style.opacity = "0";
    }
    current++;
    if (current > imgSlide.length) {
        current = 1;
    }
    imgSlide[current - 1].style.opacity = "1";

    setTimeout(showSlides, 2000);
}

function init(){
    open.addEventListener("click", function(){
        modal.classList.add("active");
    });
    close.addEventListener("click", function(){
        modal.classList.remove("active");
    });
}